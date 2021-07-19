import { Component, OnInit } from '@angular/core';
import { multipleSelectorModel } from 'src/app/utils/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  model: movieDTO = {
    title: 'string',
    summary: 'string',
    poster: null,
    inTheaters: true,
    releaseDate: new Date(),
    trailer: 'string',
  };

  constructor(private moviesService: MoviesService) {}

  nonSelectedGenres!: multipleSelectorModel[];
  nonSelectedMovieTheaters!: multipleSelectorModel[];

  ngOnInit(): void {
    this.moviesService.postGet().subscribe((response) => {
      this.nonSelectedGenres = response.genres.map((genre) => {
        return <multipleSelectorModel>{ key: genre.id, value: genre.name };
      });

      this.nonSelectedMovieTheaters = response.movieTheaters.map(
        (movieTheater) => {
          return <multipleSelectorModel>{
            key: movieTheater.id,
            value: movieTheater.name,
          };
        }
      );
    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO): void {
    console.log('console log ', movieCreationDTO);
  }
}
