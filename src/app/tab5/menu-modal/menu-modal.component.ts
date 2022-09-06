import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-menu-modal',
  templateUrl: './menu-modal.component.html',
  styleUrls: ['./menu-modal.component.scss'],
})
export class MenuModalComponent implements OnInit {
  @Input() type: string;
  menulist = [
    {list: 'Setting',icon:'apps-sharp'},
    {list: 'Archive',icon:'logo-instagram'},
    {list: 'Your Activity',icon:'nuclear-outline'},
    {list: 'QR Code',icon:'heart-circle-outline'},
    {list: 'Saved',icon:'scan-circle-outline'},
    {list: 'Close Friends',icon:'newspaper-outline'},
    {list: 'COVID-19 Information Center',icon:'bookmark-outline'},
  ];
  creatNew = [
    {list: 'Post',icon:'apps-sharp'},
    {list: 'Reel',icon:'logo-instagram'},
    {list: 'Story',icon:'nuclear-outline'},
    {list: 'Story Highlight',icon:'heart-circle-outline'},
    {list: 'IGTV Video',icon:'scan-circle-outline'},
    {list: 'Guide',icon:'newspaper-outline'},
  ];
  postAbout = [
    {list: 'Report...'},
    {list: 'Hide'},
    {list: 'Copy Link'},
    {list: 'Share to...'},
    {list: 'Unfollow'},
  ];

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {}

  close(list) {
    this.modalController.dismiss(list);
  }
}
