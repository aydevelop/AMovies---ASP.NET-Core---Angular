import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utils/utils';
import { ActorCreationDTO } from './actors.model';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/actors';

  create(actor: ActorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  private buildFormData(actor: ActorCreationDTO): any {
    const formData = new FormData();
    formData.append('name', actor.name);

    if (actor.bio) {
      formData.append('biography', actor.bio);
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
