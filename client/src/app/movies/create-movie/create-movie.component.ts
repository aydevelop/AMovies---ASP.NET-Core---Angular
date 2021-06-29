import { Component, OnInit } from '@angular/core';
import { movieDTO } from '../movies.model';

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
}
