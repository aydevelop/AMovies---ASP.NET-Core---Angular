import { Component, OnInit } from '@angular/core';
import { movieDTO } from '../movies/movies.model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  movies1: any[] = [];
  movies2: any[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.loadData();

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

    this.movies2 = [];
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

  moviesInTheaters!: movieDTO[];
  moviesFutureReleases!: movieDTO[];

  loadData() {
    this.moviesService.getHomePageMovies().subscribe((homeDTO) => {
      this.moviesFutureReleases = homeDTO.upcomingReleases;
      this.moviesInTheaters = homeDTO.inTheaters;
      this.movies1 = this.moviesInTheaters;
    });
  }
}
