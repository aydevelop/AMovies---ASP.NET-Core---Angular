
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : Controller
    {
        private readonly ILogger<GenresController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public GenresController(ILogger<GenresController> logger, ApplicationDbContext context, IMapper mapper)
        {
            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async System.Threading.Tasks.Task<ActionResult<List<GenreDTO>>> GetAsync()
        {
            var genres = await context.Genres.ToListAsync();
            var genresDTOs = mapper.Map<List<GenreDTO>>(genres);
            return genresDTOs;
        }

        [HttpGet("{id:int}")]
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genre)
        {
            var res = mapper.Map<Genre>(genre);
            context.Add(res);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }
    }
}



