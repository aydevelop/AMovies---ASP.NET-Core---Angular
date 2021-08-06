import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { EditMovieTheatersComponent } from './movie-theaters/edit-movie-theaters/edit-movie-theaters.component';
import { CreateMovTheaterComponent } from './movie-theaters/create-mov-theater/create-mov-theater.component';
import { IndexMovTheaterComponent } from './movie-theaters/index-mov-theater/index-mov-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { IsAdminGuard } from './is-admin.guard';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './security/register/register.component';
import { UsersIndexComponent } from './security/users-index/users-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/filter', component: MovieFilterComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    canActivate: [IsAdminGuard],
    children: [
      { path: 'genres', component: IndexGenresComponent },
      { path: 'genres/create', component: CreateGenreComponent },
      { path: 'genres/edit/:id', component: EditGenreComponent },

      { path: 'actors', component: IndexActorsComponent },
      { path: 'actors/create', component: CreateActorsComponent },
      { path: 'actors/edit/:id', component: EditActorComponent },

      { path: 'movietheaters', component: IndexMovTheaterComponent },
      { path: 'movietheaters/create', component: CreateMovTheaterComponent },
      { path: 'movietheaters/edit/:id', component: EditMovieTheatersComponent },
      { path: 'movies/create', component: CreateMovieComponent },
      { path: 'movies/edit/:id', component: EditMovieComponent },

      { path: 'users', component: UsersIndexComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
