import { Injectable } from '@angular/core';
import { Friend } from '../friend';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  public apiHost = './assets/generated.json';

  // private friends: Observable<Friend[]>;
  private friends: Friend[];

  private observableFriends: Observable<Friend[]>;

  constructor(private http: HttpClient) {
    this.observableFriends = this.http.get(this.apiHost)
      .pipe(map((friends: Friend[]) => this.friends = friends));
  }

  getFriends(): Observable<Friend[]> {
    if (this.friends) {
      console.log('Из кеша.');
      return of(this.friends);
    } else {
      console.log('Из подписки.');
      return this.observableFriends;
    }
  }

  // constructor(private http: HttpClient) {
  //   this.friends = this.http.get(this.apiHost)
  //     .pipe(map((friends: Friend[]) => friends));
  // }
  //
  // getFriends(): Observable<Friend[]> {
  //   return this.friends;
  // }

}
