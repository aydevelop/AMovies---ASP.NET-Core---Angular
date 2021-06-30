import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-actors-authocomplete',
  templateUrl: './actors-authocomplete.component.html',
  styleUrls: ['./actors-authocomplete.component.css'],
})
export class ActorsAuthocompleteComponent implements OnInit {
  constructor() {}

  control: FormControl = new FormControl();

  actors = [
    {
      name: 'Tom Holland',
      picture:
        'https://m.media-amazon.com/images/M/MV5BNTAzMzA3NjQwOF5BMl5BanBnXkFtZTgwMDUzODQ5MTI@._V1_UY317_CR23,0,214,317_AL_.jpg',
    },
    {
      name: 'Tom Hanks',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_UY317_CR2,0,214,317_AL_.jpg',
    },
    {
      name: 'Samuel L. Jackson',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
  ];

  selectedActors: any[] = [];
  originalActors = this.actors;
  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter((a) => a.name.indexOf(value) !== -1);
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedActors.push(event.option.value);
  }

  remove(actor: any) {}
}
