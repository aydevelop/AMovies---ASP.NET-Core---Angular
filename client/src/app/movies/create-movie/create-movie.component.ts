import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { multipleSelectorModel } from 'src/app/utils/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  model: any = {
    title: 'string',
    summary: 'string',
    poster: null,
    inTheaters: true,
    releaseDate: new Date(),
    trailer: 'string',
  };

  constructor(private moviesService: MoviesService, private router: Router) {}

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
    this.moviesService.create(movieCreationDTO).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
