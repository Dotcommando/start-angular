import { Component, Input, OnInit, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Friend } from '../friend';
import {
  FriendsService,
  TransferVarsService,
  LocalStorageService
} from 'services';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent implements OnInit, OnDestroy {

  id: string;
  _isFavorite = false;
  set isFavorite(val: boolean) {
    if (this.id !== undefined) {
      this.pushToStorage(this.id, {favorite: val});
    }
    this._isFavorite = val;
  }
  get isFavorite(): boolean {
    return this._isFavorite;
  }

  friends: Friend[];
  friend: Friend;
  title = 'Редактирование';
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private friendsService: FriendsService,
    private transferVarsService: TransferVarsService,
    private localStorageService: LocalStorageService
  ) { }

  getFriends(): void {
    this.subscriptions.push(
      this.friendsService.getFriends().subscribe(result => {
        this.friends = result;
        this.id = this.route.snapshot.paramMap.get('id');
        this.selectFriend(this.id);
        const friendData = this.readFromStorage(this.id);
        this.isFavorite = friendData.favorite !== undefined ? friendData.favorite : false;
      })
    );
  }

  selectFriend(id: string): void {
    this.friend = this.friends.find(friend => friend._id === id);
  }

  readFromStorage(id: string): any {
    const friend = this.localStorageService.getValue(id);
    if (friend === undefined) {
      return {};
    }
    if (friend.favorite === undefined) {
      return {};
    }
    return (friend);
  }

  pushToStorage(id: string, value: any): void {
    this.localStorageService.setValue(id, value);
  }

  ngOnInit() {
    this.getFriends();
    this.transferVarsService.setTitle(this.title);
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

}
