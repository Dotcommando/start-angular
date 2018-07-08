import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Friend } from './friend';
import { FriendsService } from './friends.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  friends: Friend[];
  selectedFriend: Friend;
  subscription: Subscription;

  constructor (private friendsService: FriendsService) {}

  getFriends(): void {
    this.subscription = this.friendsService.getFriends()
      .subscribe(result => {
        this.friends = result;
      });
  }

  selectFriend(friend: Friend): void {
    this.selectedFriend = friend;
  }

  ngOnInit() {
    this.getFriends();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
