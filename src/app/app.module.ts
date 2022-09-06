import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsChatsComponent } from './tab1/friends-chats/friends-chats.component';
import { DiscoverPeopleComponent } from './tab5/discover-people/discover-people.component';

@NgModule({
  declarations: [
    AppComponent,
    DiscoverPeopleComponent,
    FriendsChatsComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
