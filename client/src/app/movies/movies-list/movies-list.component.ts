import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input()
  movies: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.movies = [
    //     {
    //       title: 'Spider-Man!!!',
    //       releaseDate: new Date(),
    //       price: 1400,
    //     },
    //     {
    //       title: 'Spider-Man 2',
    //       releaseDate: new Date(),
    //       price: 2400,
    //     },
    //   ];
    // }, 1500);
  }

  remove(index: number) {
    this.movies.splice(index, 1);
  }
}
