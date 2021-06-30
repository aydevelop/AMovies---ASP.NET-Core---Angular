import { Component, OnInit } from '@angular/core';
import { movieCreationDTO, movieDTO } from '../movies.model';

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

  constructor() {}

  ngOnInit(): void {}

  saveChanges(movieCreationDTO: movieCreationDTO): void {
    console.log('console log ', movieCreationDTO);
  }
}
