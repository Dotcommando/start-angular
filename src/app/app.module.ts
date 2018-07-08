import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FriendDetailComponent } from './friend-detail/friend-detail.component';
import { FriendsListComponent } from './friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendDetailComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
