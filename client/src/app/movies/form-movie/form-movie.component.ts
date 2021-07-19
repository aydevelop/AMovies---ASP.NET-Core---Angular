import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utils/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
})
export class FormMovieComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  @Input()
  model!: movieDTO;
  form!: FormGroup;

  selectedGenres: multipleSelectorModel[] = [];
  @Input()
  nonSelectedGenres!: multipleSelectorModel[];

  selectedMovieTheaters: multipleSelectorModel[] = [];
  @Input()
  nonSelectedMovieTheaters!: multipleSelectorModel[];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [
        '',
        {
          validators: [Validators.required],
        },
      ],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    const ids = this.selectedGenres.map((value) => value.key);
    this.form.get('genresIds')?.setValue(ids);

    const ids2 = this.selectedMovieTheaters.map((value) => value.key);
    this.form.get('movieTheatersIds')?.setValue(ids2);

    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File) {
    this.form.get('poster')?.setValue(null);
  }

  changeMarkdown(content: string) {
    this.form.get('summary')?.setValue(content);
  }
}
