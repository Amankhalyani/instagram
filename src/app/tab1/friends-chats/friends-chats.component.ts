import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-friends-chats',
  templateUrl: './friends-chats.component.html',
  styleUrls: ['./friends-chats.component.scss'],
})
export class FriendsChatsComponent implements OnInit {
  chatData = [
    {
      idImg: 'https://source.unsplash.com/random?sig=31',
      peopleName: '_maluma_bae',
      text: 'Active now',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=34',
      peopleName: 'Ammar',
      text: 'Active 2h ago',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=32',
      peopleName: 'Rahil',
      text: 'Sent you a message',
      time: '2h'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=37', 
      peopleName: 'Somil',
      text: 'Reacted 😂 to your message',
      time: '2w'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=33', 
      peopleName: 'Vahid_#',
      text: 'By',
      time: '5d'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=35', 
      peopleName: 'Sahil_313',
      text: 'You sent a message',
      time: '10h'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=36', 
      peopleName: 'cruella_Avil_',
      text: 'Mentioned you in their story',
      time: '8w'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=37', 
      peopleName: 'Somil',
      text: 'Active 2h ago',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=38', 
      peopleName: 'rasmika_/\_',
      text: 'Sent you a message',
      time: '1h'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=39', 
      peopleName: 'Coder_x',
      text: 'Active now',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=40', 
      peopleName: '_@_aftab_@_',
      text: 'Active 1h ago',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=31',
      peopleName: '_maluma_bae',
      text: 'Active now',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=34',
      peopleName: 'Ammar',
      text: 'Active 2h ago',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=32',
      peopleName: 'Rahil',
      text: 'Sent you a message',
      time: '2h'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=37', 
      peopleName: 'Somil',
      text: 'Reacted 😂 to your message',
      time: '2w'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=33', 
      peopleName: 'Vahid_#',
      text: 'By',
      time: '5d'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=35', 
      peopleName: 'Sahil_313',
      text: 'You sent a message',
      time: '10h'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=36', 
      peopleName: 'cruella_Avil_',
      text: 'Mentioned you in their story',
      time: '8w'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=37', 
      peopleName: 'Somil',
      text: 'Active 2h ago',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=38', 
      peopleName: 'rasmika_/\_',
      text: 'Sent you a message',
      time: '1h'
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=39', 
      peopleName: 'Coder_x',
      text: 'Active now',
    },
    {
      idImg: 'https://source.unsplash.com/random?sig=40', 
      peopleName: '_@_aftab_@_',
      text: 'Active 1h ago',
    },
  ];


  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

}
