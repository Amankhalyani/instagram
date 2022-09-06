import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FriendsChatsComponent } from './tab1/friends-chats/friends-chats.component';
import { DiscoverPeopleComponent } from './tab5/discover-people/discover-people.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'discoverPeople',
    component: DiscoverPeopleComponent
  },
  {
    path: 'friendsChat',
    component: FriendsChatsComponent
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
