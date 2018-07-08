import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService
} from 'services';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit, OnDestroy {

  id: string;
  friends: Friend[];
  friend: Friend;
  title = 'Редактирование';
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private friendsService: FriendsService,
    private transferVarsService: TransferVarsService
  ) { }

  getFriends(): void {
    this.subscription = this.friendsService.getFriends().subscribe(result => {
      this.friends = result;
      this.id = this.route.snapshot.paramMap.get('id');
      this.selectFriend(this.id);
    });
  }

  selectFriend(id: string): void {
    this.friend = this.friends.find(friend => friend._id === id);
  }

  ngOnInit() {
    this.getFriends();
    this.transferVarsService.setTitle(this.title);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
