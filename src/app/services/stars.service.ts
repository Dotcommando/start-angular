import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { FriendsService } from './friends.service';
import { FriendsStars } from '../friends-stars';
import { Friend } from '../friend';

@Injectable({
  providedIn: 'root'
})
export class StarsService {

  private friends: Friend[];

  private stars: Array<FriendsStars> = [];

  constructor(
    private friendsService: FriendsService,
    private localStorageService: LocalStorageService
  ) {
    this.friendsService.getFriends().subscribe(result => {
      this.friends = result;
      this.friends.forEach((item) => {
        this.stars.push({
          id: item._id,
          stars: this.checkStarsInStorage(item._id)
        });
      });
    });
  }

  checkStarsInStorage(id: string): number {

    let stars = 0;
    const obj = this.localStorageService.getValue(id);
    if (obj === undefined) { return 0; }

    stars = (obj.stars !== undefined) ? parseInt(obj.stars, 10) : 0;

    return ((stars < 6) && (stars >= 0)) ? stars : 0;

  }

  getStars(id: string): number {

    let friendStars = this.stars.find(friend => friend.id === id).stars;
    friendStars = this.checkStarsInStorage(id);
    return friendStars;

  }

}
