import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [2];

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.movies = [
        {
          title: 'Spider-Man',
          releaseDate: new Date(),
          price: 1400,
        },
        {
          title: 'Spider-Man 2',
          releaseDate: new Date(),
          price: 2400,
        },
      ];
    }, 1000);
  }
}
