import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-mov-theater',
  templateUrl: './create-mov-theater.component.html',
  styleUrls: ['./create-mov-theater.component.css'],
})
export class CreateMovTheaterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log('movieTheater');
    console.log(movieTheater);
  }
}
