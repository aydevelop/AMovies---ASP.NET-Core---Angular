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

  public getById(id: number): Observable<movieTheatersDTO> {
    return this.http.delete<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  public edit(id: number, movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
