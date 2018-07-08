import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService,
  LocalStorageService
} from 'services';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit, OnDestroy {

  title = 'Избранные';
  friends: Friend[] = [];
  favoriteFriends: Friend[] = [];
  subscription: Subscription;

  constructor(
    private friendsService: FriendsService,
    private transferVarsService: TransferVarsService,
    private localStorageService: LocalStorageService
  ) { }

  getFriends(): void {
    this.subscription = this.friendsService.getFriends()
      .subscribe(result => {
        this.friends = result;
        this.fillFavoriteFriends();
      });
  }

  fillFavoriteFriends(): void {

    if (this.friends.length <= 0) { return; }

    this.friends.forEach((item, i, arr) => {

      if (this.localStorageService.getValue(item._id) === undefined) { return; }
      if (this.localStorageService.getValue(item._id).favorite) {
        this.favoriteFriends.push(item);
      }

    });

  }

  ngOnInit() {
    this.getFriends();
    this.transferVarsService.setTitle(this.title);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
