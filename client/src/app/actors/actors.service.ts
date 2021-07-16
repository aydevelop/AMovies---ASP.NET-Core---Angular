import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utils/utils';
import { ActorCreationDTO, ActorDTO } from './actors.model';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/actors';

  get(page: number, recToPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recToPage.toString());
    return this.http.get<any>(this.apiURL, { observe: 'response', params });
  }

  getById(id: number): Observable<ActorDTO> {
    return this.http.get<ActorDTO>(`${this.apiURL}/${id}`);
  }

  create(actor: ActorCreationDTO): any {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  private buildFormData(actor: ActorCreationDTO): any {
    const formData = new FormData();
    formData.append('name', actor.name);

    if (actor.bio) {
      formData.append('biography', actor.bio!);
    }

    if (actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if (actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
