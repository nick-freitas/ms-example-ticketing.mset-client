import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderLayoutService {
  constructor(private httpClient: HttpClient) {}

  signOut(): Observable<any> {
    return this.httpClient.post('/api/user/signout', null);
  }
}
