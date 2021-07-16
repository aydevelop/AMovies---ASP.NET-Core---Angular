import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorCreationDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css'],
})
export class EditActorComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private actorsService: ActorsService,
    private router: Router
  ) {}

  model!: ActorCreationDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.actorsService
        .getById(params.id)
        .subscribe((actor) => (this.model = actor));
    });
  }

  saveChanges(actorCreationDTO: ActorCreationDTO) {
    this.actorsService.edit(this.model.id, actorCreationDTO).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }
}
