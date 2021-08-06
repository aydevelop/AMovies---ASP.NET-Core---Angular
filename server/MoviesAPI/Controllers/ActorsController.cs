using AutoMapper;
using Domain.Inerfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Helpers;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/actors")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Policy = "IsAdmin")]
    [ApiController]
    public class ActorsController : Controller
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IPhotoAccessor photoAccessor;
        private readonly IFileStorageService storageService;
        private readonly string containerName = "actors";

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
            var actors = await queryable.OrderBy(x => x.Id).Paginate(paginationDTO).ToListAsync();
            return mapper.Map<List<ActorDTO>>(actors);
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

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromForm] ActorCreationDTO actorCreation)
        {
            var actor = await context.Actors.FirstOrDefaultAsync(x => x.Id == id);
            if (actor == null)
            {
                return NotFound();
            }

            actor = mapper.Map(actorCreation, actor);
            if (actorCreation.Picture != null)
            {
                var img = await storageService.SaveFile("actors", actorCreation.Picture);
                actor.Picture = img;
            }

            actor.Name = actorCreation.Name;
            //context.Entry(actor).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPost("searchByName")]
        public async Task<ActionResult<List<ActorsMovieDTO>>> SearchByName([FromBody] string name)
        {
            if (string.IsNullOrWhiteSpace(name)) { return new List<ActorsMovieDTO>(); }
            return await context.Actors
                .Where(x => x.Name.Contains(name))
                .OrderBy(x => x.Name)
                .Select(x => new ActorsMovieDTO { Id = x.Id, Name = x.Name, Picture = x.Picture })
                .Take(5)
                .ToListAsync();
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
            await storageService.DeleteFile(actor.Picture, containerName);
            return NoContent();
        }
    }
}
