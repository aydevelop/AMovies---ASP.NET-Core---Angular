using AutoMapper;
using Domain.Inerfaces;
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [ApiController]
    [Route("api/movies")]
    public class MoviesController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IPhotoAccessor photoAccessor;
        private readonly IFileStorageService storageService;
        private string container = "movies";

        public MoviesController(ApplicationDbContext context, IMapper mapper, IPhotoAccessor photoAccessor, IFileStorageService storageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.photoAccessor = photoAccessor;
            this.storageService = storageService;
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] MovieCreationDTO movieCreationDTO)
        {
            var movie = mapper.Map<Movie>(movieCreationDTO);
            if (movie.Poster != null)
            {
                movie.Poster = await storageService.SaveFile(container, movieCreationDTO.Poster);
            }

            AnnotateActorsOrder(movie);
            context.Add(movie);

            await context.SaveChangesAsync();
            return NoContent();
        }

        private void AnnotateActorsOrder(Movie movie)
        {
            if (movie.MoviesActors != null)
            {
                for (int i = 0; i < movie.MoviesActors.Count; i++)
                {
                    movie.MoviesActors[i].Order = i;
                }
            }
        }
    }
}
