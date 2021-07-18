import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-create-mov-theater',
  templateUrl: './create-mov-theater.component.html',
  styleUrls: ['./create-mov-theater.component.css'],
})
export class CreateMovTheaterComponent implements OnInit {
  constructor(
    private router: Router,
    private movieTheaterService: MovieTheatersService
  ) {}

  ngOnInit(): void {}

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    this.movieTheaterService
      .create(movieTheater)
      .subscribe(() => this.router.navigate(['/movietheaters']));
  }
}
