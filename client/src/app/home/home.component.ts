import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies1: any[] = [];
  movies2: any[] = [];

  ngOnInit(): void {
    this.movies1 = [
      {
        title: 'Spider-Man!!!###',
        releaseDate: new Date(),
        price: 1400,
        poster:
          'https://www.alberta.ca/assets/publications/covid19-poster-abtracetogether-app.jpg',
      },
      {
        title: 'Spider-Man 2',
        releaseDate: new Date(),
        price: 2400,
        poster:
          'https://www.adobe.com/express/create/media_165ae588f96df19f40254ec4232264777a1f227a0.png?width=2000&format=webply&optimize=medium',
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
