import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form!: FormGroup;

  genres = [
    { id: 1, name: 'Comedy' },
    { id: 2, name: 'Action' },
    { id: 3, name: 'Western' },
  ];

  movies: any[] = [
    {
      title: 'Spider-Man!!!###',
      releaseDate: new Date(),
      price: 1400,
      poster:
        'https://www.alberta.ca/assets/publications/covid19-poster-abtracetogether-app.jpg',
    },
    {
      title: 'Spider-Man 2',
      releaseDate: new Date(),
      price: 2400,
      poster:
        'https://www.adobe.com/express/create/media_165ae588f96df19f40254ec4232264777a1f227a0.png?width=2000&format=webply&optimize=medium',
    },
  ];

  originlMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inThreads: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originlMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (m) => m.title.indexOf(values.title) !== -1
      );
    }
  }

  clearForm() {
    this.form.reset();
  }
}
