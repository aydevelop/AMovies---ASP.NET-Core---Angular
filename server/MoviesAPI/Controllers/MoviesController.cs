using AutoMapper;
using Domain.Inerfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
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

        [HttpGet("PostGet")]
        public async Task<ActionResult<MoviePostGetDTO>> PostGet()
        {
            var movieTheaters = await context.MovieThreaters.OrderBy(x => x.Name).ToListAsync();
            var genres = await context.Genres.OrderBy(x => x.Name).ToListAsync();

            var movieTheatersDTO = mapper.Map<List<MovieTheaterDTO>>(movieTheaters);
            var genresDTO = mapper.Map<List<GenreDTO>>(genres);

            return new MoviePostGetDTO() { Genres = genresDTO, MovieTheaters = movieTheatersDTO };
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

        [HttpGet("{id:int}")]
        public async Task<ActionResult<MovieDTO>> Get(int id)
        {
            var movie = await context.Movies
               .Include(x => x.MoviesGenres).ThenInclude(x => x.Genre)
               .Include(x => x.MovieTheatersMovies).ThenInclude(x => x.MovieTheater)
               .Include(x => x.MoviesActors).ThenInclude(x => x.Actor)
               .FirstOrDefaultAsync(x => x.Id == id);

            if (movie == null)
            {
                return NotFound();
            }

            var dto = mapper.Map<MovieDTO>(movie);
            //dto.Actors = await context.Actors.ToListAsync();

            return dto;
        }

        [HttpGet]
        public async Task<ActionResult<HomeDTO>> Get()
        {
            var top = 5;
            var today = DateTime.Today;

            var upcomingReleases = await context.Movies
                .Where(x => x.ReleaseDate > today)
                .OrderBy(x => x.ReleaseDate)
                .Take(top)
                .ToListAsync();

            var inTheaters = await context.Movies
                .Where(x => x.InTheaters)
                .OrderBy(x => x.ReleaseDate)
                .Take(top)
                .ToListAsync();

            var homeDTO = new HomeDTO();
            homeDTO.UpcomingReleases = mapper.Map<List<MovieDTO>>(upcomingReleases);
            homeDTO.InTheaters = mapper.Map<List<MovieDTO>>(inTheaters);
            return homeDTO;
        }
    }
}
