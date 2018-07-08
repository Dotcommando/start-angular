import { Pipe, PipeTransform } from '@angular/core';
import { Friend } from '../friend';

@Pipe({
  name: 'SearchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(friends: Friend[], term: string): Friend[] {
    if (!term || term === '') return [];
    return friends.filter(friend => {
      // if (friend.name.toLowerCase().startsWith(term.toLowerCase())) return friend;
      if (friend.name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
        return friend;
      }
    });
  }

}
