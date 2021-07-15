import { Component, OnInit } from '@angular/core';
import { ActorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  constructor(private actorsService: ActorsService) {}

  actors!: ActorDTO[];
  columnsToDisplay = ['name', 'actions'];
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.actorsService.get().subscribe((actors: ActorDTO[]) => {
      this.actors = actors;
    });
  }

  delete(id: number) {}
}
