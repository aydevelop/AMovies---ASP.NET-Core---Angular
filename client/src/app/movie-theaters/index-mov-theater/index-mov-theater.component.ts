import { Component, OnInit } from '@angular/core';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-index-mov-theater',
  templateUrl: './index-mov-theater.component.html',
  styleUrls: ['./index-mov-theater.component.css'],
})
export class IndexMovTheaterComponent implements OnInit {
  constructor(private movieTheatersService: MovieTheatersService) {}

  movieTheaters!: movieTheatersDTO[];

  ngOnInit(): void {
    this.movieTheatersService.get().subscribe((movie) => {
      console.log(movie);
      this.movieTheaters = movie;
    });
  }
}
