import { Component, OnInit } from '@angular/core';
import { ActorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css'],
})
export class CreateActorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(actorCreationDTO: any) {
    console.log(actorCreationDTO);
  }
}
