import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService
} from 'services';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit, OnDestroy {

  title = 'Список друзей';
  friends: Friend[];
  subscription: Subscription;

  constructor (
    private friendsService: FriendsService,
    private transferVarsService: TransferVarsService
  ) {}

  getFriends(): void {
    this.subscription = this.friendsService.getFriends()
      .subscribe(result => {
        this.friends = result;
        this.transferVarsService.setFriends(result);
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
