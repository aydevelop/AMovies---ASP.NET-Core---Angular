import { actorsMovieDTO } from '../actors/actors.model';
import { genreDTO } from '../genres/genres.model';
import { movieTheatersDTO } from '../movie-theaters/movie-theaters.model';

export interface movieCreationDTO {
  title: string;
  summary: string;
  poster: File;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  genresIds: number[];
  movieTheatersIds: number[];
}

export interface movieDTO {
  title: string;
  summary: string;
  poster: string | null;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  averageVote: number;
  userVote: number;
}

export interface MoviePostGetDTO {
  genres: genreDTO[];
  movieTheaters: movieTheatersDTO[];
}

export interface movieDTO {
  id: number;
  title: string;
  summary: string;
  poster: string | null;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
}

export interface homeDTO {
  inTheaters: movieDTO[];
  upcomingReleases: movieDTO[];
}

export interface MoviePutGetDTO {
  movie: movieDTO;
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
  selectedMovieTheaters: movieTheatersDTO[];
  nonSelectedMovieTheaters: movieTheatersDTO[];
  actors: actorsMovieDTO[];
}
