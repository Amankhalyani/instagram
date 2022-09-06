import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ViewSearchModalComponent } from '../tab2/view-search-modal/view-search-modal.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { MenuModalComponent } from './menu-modal/menu-modal.component';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  profileInfo = [
    {infoName: 'Posts', number: '15'},
    {infoName: 'Followers', number: '420M'},
    {infoName: 'Following', number: '143'},
  ];
  discoverPeople = [
    {idImg: 'https://source.unsplash.com/random?sig=31', peopleName: '_maluma_bae'},
    {idImg: 'https://source.unsplash.com/random?sig=32', peopleName: 'Rahil'},
    {idImg: 'https://source.unsplash.com/random?sig=33', peopleName: 'Vahid_#'},
    {idImg: 'https://source.unsplash.com/random?sig=34', peopleName: 'Ammar'},
    {idImg: 'https://source.unsplash.com/random?sig=35', peopleName: 'Sahil_313'},
    {idImg: 'https://source.unsplash.com/random?sig=36', peopleName: 'cruella_Avil_'},
    {idImg: 'https://source.unsplash.com/random?sig=37', peopleName: 'Somil'},
    {idImg: 'https://source.unsplash.com/random?sig=38', peopleName: 'rasmika_/\_'},
    {idImg: 'https://source.unsplash.com/random?sig=39', peopleName: 'Sahid'},
    {idImg: 'https://source.unsplash.com/random?sig=40', peopleName: '_@_aftab_@_'},
  ];
  postList = [
    {postImg: 'https://source.unsplash.com/random?sig=1'},
    {postImg: 'https://source.unsplash.com/random?sig=2'},
    {postImg: 'https://source.unsplash.com/random?sig=3'},
    {postImg: 'https://source.unsplash.com/random?sig=4'},
    {postImg: 'https://source.unsplash.com/random?sig=5'},
    {postImg: 'https://source.unsplash.com/random?sig=6'},
    {postImg: 'https://source.unsplash.com/random?sig=7'},
    {postImg: 'https://source.unsplash.com/random?sig=8'},
    {postImg: 'https://source.unsplash.com/random?sig=9'},
    {postImg: 'https://source.unsplash.com/random?sig=10'},
    {postImg: 'https://source.unsplash.com/random?sig=11'},
    {postImg: 'https://source.unsplash.com/random?sig=12'},
    {postImg: 'https://source.unsplash.com/random?sig=13'},
    {postImg: 'https://source.unsplash.com/random?sig=14'},
    {postImg: 'https://source.unsplash.com/random?sig=15'},
  ];
  peoplePostList = [
    {postImg: 'https://source.unsplash.com/random?sig=16'},
    {postImg: 'https://source.unsplash.com/random?sig=17'},
    {postImg: 'https://source.unsplash.com/random?sig=18'},
    {postImg: 'https://source.unsplash.com/random?sig=19'},
    {postImg: 'https://source.unsplash.com/random?sig=20'},
    {postImg: 'https://source.unsplash.com/random?sig=21'},
    {postImg: 'https://source.unsplash.com/random?sig=22'},
    {postImg: 'https://source.unsplash.com/random?sig=23'},
    {postImg: 'https://source.unsplash.com/random?sig=24'},
    {postImg: 'https://source.unsplash.com/random?sig=25'},
    {postImg: 'https://source.unsplash.com/random?sig=26'},
    {postImg: 'https://source.unsplash.com/random?sig=27'},
    {postImg: 'https://source.unsplash.com/random?sig=28'},
    {postImg: 'https://source.unsplash.com/random?sig=29'},
    {postImg: 'https://source.unsplash.com/random?sig=30'},
    
  ];
  segmentValue: string = "post";
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  onClickDiscover(){
    if (document.getElementById('discover')){
      document.getElementById('discoverPeople')?.classList.toggle('discoverActive');
    }
  }

  onClickstory(){
    if (document.getElementById('story')){
      document.getElementById('storyHighlight')?.classList.toggle('active');
    }
  }
  

  tabChanged(event) {
    this.segmentValue = event.detail.value;
  }

  async addUserModal() {
    const modal = await this.modalController.create({
      component: AddUserModalComponent,
      backdropDismiss: true,
      cssClass: 'AddUser-modal'
    });
    await modal.present();
    await modal.onDidDismiss().then(res => {
    });
  }

  async goToMenu(type) {
    const modal = await this.modalController.create({
      component: MenuModalComponent,
      backdropDismiss: true,
      cssClass: 'openMenu-modal',
      componentProps: {
        type: type,
      },
    });
    await modal.present();
  }

  gotoDiscoverPeople() {
    this.router.navigate(['discoverPeople'])
  }

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

  removeCard(index: number){
    this.discoverPeople.splice(index, 1);
  }
}
