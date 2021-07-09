import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  errors: string[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private genresService: GenresService
  ) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    this.genresService.create(genreCreationDTO).subscribe(
      () => {
        //this.router.navigate(['/genres']);
        console.error('NO Error !!!!');
      },
      (error) => console.error('Error')
    );

    //console.log(genreCreationDTO);
    //this.router.navigate(['/genres']);
  }
}
