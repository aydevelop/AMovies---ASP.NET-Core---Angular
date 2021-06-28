import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-movie-theater-form',
  templateUrl: './movie-theater-form.component.html',
  styleUrls: ['./movie-theater-form.component.css'],
})
export class MovieTheaterFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model: movieTheatersCreationDTO | undefined;

  @Output()
  onSaveChanges = new EventEmitter<movieTheatersCreationDTO>();

  form: FormGroup = this.formBuilder.group({
    name: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }
}
