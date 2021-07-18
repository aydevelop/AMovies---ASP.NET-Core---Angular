import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from './movie-theaters.model';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  private apiURL = environment.apiURL + '/movieTheaters';

  constructor(private http: HttpClient) {}

  public create(movieTheatersCreationDTO: any) {
    return this.http.post(this.apiURL, movieTheatersCreationDTO);
  }

  public get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersDTO[]>(this.apiURL);
  }
}
