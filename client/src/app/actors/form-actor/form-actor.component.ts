import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.bio = this.model.bio!;
    }
  }

  bio: string = '';
  @Output()
  onSaveChanges = new EventEmitter<ActorCreationDTO>();

  @Input()
  model!: ActorCreationDTO;

  form: FormGroup = this.fb.group({
    name: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    dateOfBirth: '',
    picture: '',
    bio: '',
  });

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(image: any) {
    this.form.get('picture')?.setValue(image);
  }

  changeMarkdown(content: any): void {
    this.form.get('bio')?.setValue(content);
    this.model.bio = content;
  }
}
