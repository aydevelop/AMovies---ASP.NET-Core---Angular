import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(
    private movieTheatersService: MovieTheatersService,
    private router: Router
  ) {}

  movieTheaters!: movieTheatersDTO[];
  displayColumns = ['name', 'actions'];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.movieTheatersService.get().subscribe((movie) => {
      this.movieTheaters = movie;
      console.log(this.movieTheaters);
    });
  }

  delete(id: number) {
    this.movieTheatersService.delete(id).subscribe(() => {
      this.load();
    });
  }
}
