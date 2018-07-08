import { Injectable } from '@angular/core';
import { Friend } from './friend';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  public apiHost = './assets/generated.json';

  private friends: Observable<Friend[]>;

  constructor(private http: HttpClient) {
    this.friends = this.http.get(this.apiHost)
      .pipe(map((friends: Friend[]) => friends));
  }

  getFriends(): Observable<Friend[]> {
    return this.friends;
  }

}
