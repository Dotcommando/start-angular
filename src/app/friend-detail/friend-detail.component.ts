import { Component, Input } from '@angular/core';
import { Friend } from '../friend';

@Component({
  selector: 'app-friend-detail',
  templateUrl: './friend-detail.component.html',
  styleUrls: ['./friend-detail.component.css']
})
export class FriendDetailComponent {

  @Input() friend: Friend;

  constructor() { }

}
