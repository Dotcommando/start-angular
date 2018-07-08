import {
  Directive,
  Input,
  OnChanges,
  EventEmitter,
  Output,
  HostListener
} from '@angular/core';
import { SearchPipe } from 'pipes';
import { Friend } from '../friend';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnChanges {

  @Input() friends: Friend[];
  @Output() filterEvent: EventEmitter<any> = new EventEmitter();

  @Input() searchTerm: string;

  @HostListener('keyup', ['$event.target.value']) onKeyUp(value) {
    this.searchTerm = value;
    this.applyFilter();
  }

  ngOnChanges() {
    this.applyFilter();
  }

  constructor(private searchFriends: SearchPipe) { }

  applyFilter = () => {
    this.filterEvent.emit(new SearchPipe().transform(this.friends, this.searchTerm));
  }

}
