import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-movie-theaters',
  templateUrl: './edit-movie-theaters.component.html',
  styleUrls: ['./edit-movie-theaters.component.css'],
})
export class EditMovieTheatersComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieTheaterService: MovieTheatersService,
    private router: Router
  ) {}

  model!: movieTheatersCreationDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.movieTheaterService.getById(params.id).subscribe((movieTheater) => {
        this.model = movieTheater;
      });
    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    this.movieTheaterService
      .edit(this.model.id, movieTheater)
      .subscribe(() => this.router.navigate(['/movietheaters']));
  }
}
