import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewSearchModalComponent } from './view-search-modal/view-search-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  postList = [
    {postImg: 'https://source.unsplash.com/random?sig=101'},
    {postImg: 'https://source.unsplash.com/random?sig=102'},
    {postImg: 'https://source.unsplash.com/random?sig=103'},
    {postImg: 'https://source.unsplash.com/random?sig=104'},
    {postImg: 'https://source.unsplash.com/random?sig=105'},
    {postImg: 'https://source.unsplash.com/random?sig=106'},
    {postImg: 'https://source.unsplash.com/random?sig=107'},
    {postImg: 'https://source.unsplash.com/random?sig=108'},
    {postImg: 'https://source.unsplash.com/random?sig=109'},
    {postImg: 'https://source.unsplash.com/random?sig=110'},
    {postImg: 'https://source.unsplash.com/random?sig=111'},
    {postImg: 'https://source.unsplash.com/random?sig=112'},
    {postImg: 'https://source.unsplash.com/random?sig=113'},
    {postImg: 'https://source.unsplash.com/random?sig=114'},
    {postImg: 'https://source.unsplash.com/random?sig=115'},
    {postImg: 'https://source.unsplash.com/random?sig=116'},
    {postImg: 'https://source.unsplash.com/random?sig=117'},
    {postImg: 'https://source.unsplash.com/random?sig=118'},
    {postImg: 'https://source.unsplash.com/random?sig=119'},
    {postImg: 'https://source.unsplash.com/random?sig=120'},
    {postImg: 'https://source.unsplash.com/random?sig=121'},
    {postImg: 'https://source.unsplash.com/random?sig=122'},
    {postImg: 'https://source.unsplash.com/random?sig=123'},
    {postImg: 'https://source.unsplash.com/random?sig=124'},
    {postImg: 'https://source.unsplash.com/random?sig=125'},
    {postImg: 'https://source.unsplash.com/random?sig=126'},
    {postImg: 'https://source.unsplash.com/random?sig=127'},
    {postImg: 'https://source.unsplash.com/random?sig=128'},
    {postImg: 'https://source.unsplash.com/random?sig=129'},
    {postImg: 'https://source.unsplash.com/random?sig=130'},
    {postImg: 'https://source.unsplash.com/random?sig=131'},
    {postImg: 'https://source.unsplash.com/random?sig=132'},
    {postImg: 'https://source.unsplash.com/random?sig=133'},
    {postImg: 'https://source.unsplash.com/random?sig=134'},
    {postImg: 'https://source.unsplash.com/random?sig=135'},
    {postImg: 'https://source.unsplash.com/random?sig=136'},
    {postImg: 'https://source.unsplash.com/random?sig=137'},
    {postImg: 'https://source.unsplash.com/random?sig=138'},
    {postImg: 'https://source.unsplash.com/random?sig=139'},
  ];

  constructor(
    private modalController: ModalController,
  ) {}

  async openSearchModal(postImg) {
    const modal = await this.modalController.create({
      component: ViewSearchModalComponent,
      cssClass: 'searchModal',
      backdropDismiss: true,
      componentProps: {
        img: postImg,
      },
    });
    await modal.present();
  }

}
