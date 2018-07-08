import { Component, OnInit, Input, HostListener, ElementRef, ViewChild } from '@angular/core';
import { Friend } from '../friend';
import { TransferVarsService } from 'services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() friends: Friend[] = [];

  @ViewChild('searchField') searchField: ElementRef;

  // @HostListener('click', ['$event.target']) onClick(target) {
  //   if (target.classList[0] === 'tip-link') {
  //     this.filteredFriends = [];
  //     this.searchField.nativeElement.value = '';
  //     this.searchField.nativeElement.keyup();
  //   }
  // }

  filteredFriends: Friend[] = this.friends;

  filterFriends = (friends) => {
    this.filteredFriends = friends;
  }

  constructor(
    public transferVarsService: TransferVarsService
  ) { }

  ngOnInit() { }

}
