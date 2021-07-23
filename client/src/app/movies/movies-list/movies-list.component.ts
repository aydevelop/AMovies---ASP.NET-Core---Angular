import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input()
  movies: any[] = [];

  @Output()
  onDelete: EventEmitter<void> = new EventEmitter<void>();

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {}

  remove(id: number) {
    //this.movies.splice(index, 1);
    this.movieService.delete(id).subscribe(() => {
      this.onDelete.emit();
    });
  }
}
