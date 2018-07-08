import { Injectable } from '@angular/core';
import { Friend } from '../friend';

@Injectable({
  providedIn: 'root'
})
export class TransferVarsService {

  private title = '';

  private friends: Friend[] = [];

  public setTitle(title: string): void {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }

  public setFriends(friends: Friend[]): void {
    this.friends = friends;
  }

  public getFriends(): Friend[] {
    return this.friends;
  }

}
