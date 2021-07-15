import { HttpResponse } from '@angular/common/http';
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
  totalAmountOfRecords = 0;
  currentPage = 1;
  pageSize = 5;

  ngOnInit(): void {
    this.actorsService.get().subscribe((response: any) => {
      this.actors = response.body!;
      this.totalAmountOfRecords = response.headers.get('totalAmountOfRecords');
      console.log(this.totalAmountOfRecords);
    });
  }

  delete(id: number) {}
}
