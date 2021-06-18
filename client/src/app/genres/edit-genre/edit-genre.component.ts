import { Component, Input, OnInit } from '@angular/core';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css'],
})
export class EditGenreComponent implements OnInit {
  constructor() {}

  model: genreCreationDTO = { name: 'Dram123a' };

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    console.log(genreCreationDTO);
  }
}
