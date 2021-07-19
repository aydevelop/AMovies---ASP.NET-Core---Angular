import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorsMovieDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-authocomplete',
  templateUrl: './actors-authocomplete.component.html',
  styleUrls: ['./actors-authocomplete.component.css'],
})
export class ActorsAuthocompleteComponent implements OnInit {
  constructor(private actorsService: ActorsService) {}

  control: FormControl = new FormControl();

  @ViewChild(MatTable)
  table?: MatTable<any>;

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
  columnsToDisplay = ['name', 'picture', 'actions', 'character'];

  actorsToDisplay: actorsMovieDTO[] = [];

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter((a) => a.name.indexOf(value) !== -1);
      // this.actorsService.searchByName(value).subscribe(resp => {

      // });
    });
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedActors.push(event.option.value);
    this.dataSource.push(event.option.value);

    if (this.table !== undefined) {
      this.table.renderRows();
    }

    this.control.patchValue('');
  }

  dropped(event: any) {
    const previousIndex = this.selectedActors.findIndex(
      (actor) => actor === event.item.data
    );

    console.log('previousIndex ' + previousIndex);
  }

  remove(actor: any) {
    const index = this.selectedActors.findIndex((a) => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table?.renderRows();
  }

  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
