import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css'],
})
export class EditMovieComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  model: any = {
    title: 'Spider-Man',
    inTheaters: true,
    summary: 'whatever',
    releaseDate: new Date(),
    trailer: 'ABCDE',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
  };

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {});
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {}
}
