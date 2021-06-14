import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css'],
})
export class GenericListComponent implements OnInit {
  @Input()
  list: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  remove(index: number) {
    this.list.splice(index, 1);
  }
}
