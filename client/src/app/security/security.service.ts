import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor() {}

  isAuthenticated(): boolean {
    return false;
  }

  getRole(): string {
    return 'admin';
  }
}
