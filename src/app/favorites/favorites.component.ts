import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService,
  LocalStorageService
} from 'services';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0}),
        animate('.2s ease-in')
      ]),
      transition('* => void', [
        animate('.2s ease-in', style({ opacity: 0}))
      ])
    ])
  ]
})
export class FavoritesComponent implements OnInit, OnDestroy {

  title = 'Избранные';
  friends: Friend[] = [];
  favoriteFriends: Friend[] = [];
  friendsWithDelay: Friend[] = [];
  subscription: Subscription;
  next = 0;

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
        this.transferVarsService.setFriends(this.favoriteFriends);
        this.doNext();
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

  doNext(): void {
    if (this.next < this.favoriteFriends.length) {
      this.friendsWithDelay.push(this.favoriteFriends[this.next++]);
    }
  }

  ngOnInit() {
    this.getFriends();
    this.transferVarsService.setTitle(this.title);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
