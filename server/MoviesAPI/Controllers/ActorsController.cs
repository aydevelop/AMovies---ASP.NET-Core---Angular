using AutoMapper;
using Domain.Inerfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/actors")]
    [ApiController]
    public class ActorsController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IPhotoAccessor photoAccessor;
        private readonly IFileStorageService storageService;

        public ActorsController(ApplicationDbContext context, IMapper mapper, IPhotoAccessor photoAccessor, IFileStorageService storageService)
        {
            this.context = context;
            this.mapper = mapper;
            this.photoAccessor = photoAccessor;
            this.storageService = storageService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ActorDTO>>> Get([FromQuery] PaginationDTO paginationDTO)
        {
            var queryable = context.Actors.AsQueryable();
            await HttpContext.InsertParametersPaginationInHeader(queryable);

            //var actors = await queryable.OrderBy(x => x.Name).Paginate(paginationDTO).ToListAsync();
            //return mapper.Map<List<ActorDTO>>(actors);
            return null;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<ActorDTO>> Get(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(q => q.Id == id);
            if (actor == null)
            {
                return NotFound();
            }

            return mapper.Map<ActorDTO>(actor);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromForm] ActorCreationDTO actorCreation)
        {
            var actor = mapper.Map<Actor>(actorCreation);
            if (actorCreation.Picture != null)
            {
                //actor.Picture = photoAccessor.AddPhoto(actorCreation.Picture)?.Url;
                var img = await storageService.SaveFile("actors", actorCreation.Picture);
                actor.Picture = img;
            }

            context.Add(actor);
            await context.SaveChangesAsync();

            return NoContent();
        }


        [HttpPut]
        public async Task<ActionResult> Put([FromBody] ActorCreationDTO actorCreation)
        {
            return null;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(q => q.Id == id);
            if (actor == null)
            {
                return NotFound();
            }

            context.Remove(actor);
            await context.SaveChangesAsync();
            return NoContent();
        }
    }
}
