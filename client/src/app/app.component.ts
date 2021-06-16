import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  movies1: any[] = [];
  movies2: any[] = [];

  ngOnInit(): void {
    this.movies1 = [
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
      },
    ];

    this.movies2 = [
      // {
      //   title: 'Spider-Man 222',
      //   releaseDate: new Date(),
      //   price: 1400,
      // },
      // {
      //   title: 'Spider-Man 222',
      //   releaseDate: new Date(),
      //   price: 2400,
      // },
    ];
  }

  title = 'angular-movies';
  movie = {
    title: 'Title123',
  };

  duplicateNumber(n: number) {
    return n * 2;
  }

  handleRating(rate: number) {
    alert(`The user selected  ${rate}`);
  }
}
