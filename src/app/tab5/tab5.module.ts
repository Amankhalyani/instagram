import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab5Page } from './tab5.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab5PageRoutingModule } from './tab5-routing.module';
import { MenuModalComponent } from './menu-modal/menu-modal.component';
import { CreatNewModalComponent } from './creat-new-modal/creat-new-modal.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab5PageRoutingModule
  ],
  declarations: [
    Tab5Page,
    MenuModalComponent,
    CreatNewModalComponent,
    AddUserModalComponent,
  ]
})
export class Tab5PageModule {}
