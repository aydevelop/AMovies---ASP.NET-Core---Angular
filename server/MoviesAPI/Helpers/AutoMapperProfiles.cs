using AutoMapper;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;

namespace MoviesAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<GenreDTO, Genre>().ReverseMap();
            CreateMap<GenreCreationDTO, Genre>();

            CreateMap<ActorDTO, Actor>().ReverseMap();
            CreateMap<ActorCreationDTO, Actor>().ForMember(q => q.Picture, options => options.Ignore());

            //CreateMap<MovieTheater, MovieTheaterDTO>()
            //    .ForMember(x => x.Latitude, dto => dto.MapFrom(prop => prop.Location.Y))
            //    .ForMember(x => x.Longitude, dto => dto.MapFrom(prop => prop.Location.X));

            //CreateMap<MovieTheaterCreationDTO, MovieTheater>()
            //    .ForMember(x => x.Location, x => x.MapFrom(dto =>
            //    geometryFactory.CreatePoint(new Coordinate(dto.Longitude, dto.Latitude))));
        }
    }
}
