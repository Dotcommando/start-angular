import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService
} from 'services';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css'],
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
export class FriendsListComponent implements OnInit, OnDestroy {

  title = 'Список друзей';
  friends: Friend[];
  friendsWithDelay: Friend[] = [];
  subscription: Subscription;
  next = 0;

  constructor (
    private friendsService: FriendsService,
    private transferVarsService: TransferVarsService
  ) {}

  getFriends(): void {
    this.subscription = this.friendsService.getFriends()
      .subscribe(result => {
        this.friends = result;
        this.transferVarsService.setFriends(result);
        this.doNext();
      });
  }

  doNext(): void {
    if (this.next < this.friends.length) {
      this.friendsWithDelay.push(this.friends[this.next++]);
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
