import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FriendsListComponent } from './friends-list/friends-list.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: '/friends-list', pathMatch: 'full' },
  { path: 'friends-list', component: FriendsListComponent },
  { path: 'detail/:id', component: FriendDetailComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
