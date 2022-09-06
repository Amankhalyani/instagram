import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { MenuModalComponent } from '../tab5/menu-modal/menu-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postlist = [
    {name: 'Somil', img: 'assets/image/somil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=50'},
    {name: 'Rahil', img: 'assets/image/rahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=51'},
    {name: 'Vahid', img: 'assets/image/vahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=52'},
    {name: 'Ammar', img: 'assets/image/ammar-img.jpg', postImg: 'https://source.unsplash.com/random?sig=53'},
    {name: 'Sahil', img: 'assets/image/sahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=54'},
    {name: 'Sahid', img: 'assets/image/sahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=55'},
    {name: 'Aman', img: 'assets/image/aman-img.jpg', postImg: 'https://source.unsplash.com/random?sig=56'},
    {name: 'cruella_Avil_', img: 'assets/image/cruella.jpg', postImg: 'https://source.unsplash.com/random?sig=57'},
    {name: 'rasmika-', img: 'assets/image/rasmika.jpg', postImg: 'https://source.unsplash.com/random?sig=58'},
    {name: '_maluma_bae', img: 'assets/image/maluma.jpg', postImg: 'https://source.unsplash.com/random?sig=59'},
    {name: 'aftab', img: 'assets/image/aftab.jpg', postImg: 'https://source.unsplash.com/random?sig=80'},
    {name: 'Somil_1', img: 'assets/image/somil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=60'},
    {name: 'Rahil_2', img: 'assets/image/rahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=6'},
    {name: 'Vahid_3', img: 'assets/image/vahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=62'},
    {name: 'Ammar_4', img: 'assets/image/ammar-img.jpg', postImg: 'https://source.unsplash.com/random?sig=63'},
    {name: 'Sahil_5', img: 'assets/image/sahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=64'},
    {name: 'Sahid_6', img: 'assets/image/sahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=65'},
    {name: 'Aman_07', img: 'assets/image/aman-img.jpg', postImg: 'https://source.unsplash.com/random?sig=66'},
    {name: 'cruella_Avil_8', img: 'assets/image/cruella.jpg', postImg: 'https://source.unsplash.com/random?sig=67'},
    {name: 'rasmika-9', img: 'assets/image/rasmika.jpg', postImg: 'https://source.unsplash.com/random?sig=68'},
    {name: '_maluma_bae_10', img: 'assets/image/maluma.jpg', postImg: 'https://source.unsplash.com/random?sig=69'},
    {name: 'aftab_11', img: 'assets/image/aftab.jpg', postImg: 'https://source.unsplash.com/random?sig=70'},
    {name: 'Somil', img: 'assets/image/somil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=71'},
    {name: 'Rahil', img: 'assets/image/rahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=72'},
    {name: 'Vahid', img: 'assets/image/vahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=73'},
    {name: 'Ammar', img: 'assets/image/ammar-img.jpg', postImg: 'https://source.unsplash.com/random?sig=74'},
    {name: 'Sahil', img: 'assets/image/sahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=75'},
    {name: 'Sahid', img: 'assets/image/sahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=76'},
    {name: 'Aman', img: 'assets/image/aman-img.jpg', postImg: 'https://source.unsplash.com/random?sig=77'},
    {name: 'cruella_Avil_', img: 'assets/image/cruella.jpg', postImg: 'https://source.unsplash.com/random?sig=78'},
    {name: 'rasmika-', img: 'assets/image/rasmika.jpg', postImg: 'https://source.unsplash.com/random?sig=79'},
    {name: '_maluma_bae', img: 'assets/image/maluma.jpg', postImg: 'https://source.unsplash.com/random?sig=80'},
    {name: 'aftab', img: 'assets/image/aftab.jpg', postImg: 'https://source.unsplash.com/random?sig=81'},
    {name: 'Somil_1', img: 'assets/image/somil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=82'},
    {name: 'Rahil_2', img: 'assets/image/rahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=83'},
    {name: 'Vahid_3', img: 'assets/image/vahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=84'},
    {name: 'Ammar_4', img: 'assets/image/ammar-img.jpg', postImg: 'https://source.unsplash.com/random?sig=85'},
    {name: 'Sahil_5', img: 'assets/image/sahil-img.jpg', postImg: 'https://source.unsplash.com/random?sig=86'},
    {name: 'Sahid_6', img: 'assets/image/sahid-img.jpg', postImg: 'https://source.unsplash.com/random?sig=87'},
    {name: 'Aman_07', img: 'assets/image/aman-img.jpg', postImg: 'https://source.unsplash.com/random?sig=88'},
    {name: 'cruella_Avil_8', img: 'assets/image/cruella.jpg', postImg: 'https://source.unsplash.com/random?sig=89'},
    {name: 'rasmika-9', img: 'assets/image/rasmika.jpg', postImg: 'https://source.unsplash.com/random?sig=90'},
    {name: '_maluma_bae_10', img: 'assets/image/maluma.jpg', postImg: 'https://source.unsplash.com/random?sig=91'},
    {name: 'aftab_11', img: 'assets/image/aftab.jpg', postImg: 'https://source.unsplash.com/random?sig=92'},
  ];
  addSave: boolean;

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController,
    private router: Router
  ) {
    this.addSave = true;
  }

  close() {
    this.navCtrl.back();
  }

  async goToMenu(type) {
    const modal = await this.modalController.create({
      component: MenuModalComponent,
      cssClass: 'aboutMenu',
      backdropDismiss: true,
      componentProps: {
        type: type,
      },
    });
    await modal.present();
  }

  async goToCreat(type) {
    const modal = await this.modalController.create({
      component: MenuModalComponent,
      cssClass: 'openMenu-modal',
      backdropDismiss: true,
      componentProps: {
        type: type,
      },
    });
    await modal.present();
  }

  addBookmark(index) {
    document.getElementById(`bookmark${index}`)?.classList.add('d-block');
    document.getElementById(`bookmark-outline${index}`)?.classList.add('d-none');
  }
  removeBookmark(index) {
    document.getElementById(`bookmark-outline${index}`)?.classList.remove('d-none');
    document.getElementById(`bookmark${index}`)?.classList.remove('d-block');
  }

  addLike(index) {
    document.getElementById(`heart${index}`)?.classList.add('d-block');
    document.getElementById(`heart-outline${index}`)?.classList.add('d-none');
  }
  removeLike(index) {
    document.getElementById(`heart-outline${index}`)?.classList.remove('d-none');
    document.getElementById(`heart${index}`)?.classList.remove('d-block');
  }

  doubleClick(index) {
    document.getElementById(`doubleClick${index}`)?.classList.add('d-flex');
  }

  ClickLike(index) { 
    document.getElementById(`ClickLike${index}`)?.classList.add('active');
    setTimeout(() => {
      document.getElementById(`ClickLike${index}`)?.classList.remove('active');
      document.getElementById(`doubleClick${index}`)?.classList.remove('d-flex');
    }, 750);
    this.addLike(index);
  }

  gotoFriendsChat() {
    this.router.navigate(['friendsChat'])
  }
  
}