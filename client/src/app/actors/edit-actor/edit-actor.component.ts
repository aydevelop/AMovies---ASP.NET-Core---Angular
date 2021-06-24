import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: ActorCreationDTO = {
    name: 'Tom',
    dateOfBirth: new Date(),
    bio: 'bio######',
    picture:
      'https://polishposter.com/4239-large_default/5041-jazz-posters-exhibition-polish-poster.jpg',
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  saveChanges(actorCreationDTO: ActorCreationDTO) {
    console.log(actorCreationDTO);
    alert('test');
  }
}
