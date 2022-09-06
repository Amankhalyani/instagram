import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-discover-people',
  templateUrl: './discover-people.component.html',
  styleUrls: ['./discover-people.component.scss'],
})
export class DiscoverPeopleComponent implements OnInit {
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
    {idImg: 'https://source.unsplash.com/random?sig=41', peopleName: '_maluma_bae_01'},
    {idImg: 'https://source.unsplash.com/random?sig=42', peopleName: 'Rahil_02'},
    {idImg: 'https://source.unsplash.com/random?sig=43', peopleName: 'Vahid_O3'},
    {idImg: 'https://source.unsplash.com/random?sig=44', peopleName: 'Ammar_Gajju'},
    {idImg: 'https://source.unsplash.com/random?sig=45', peopleName: 'Sahil_OT'},
    {idImg: 'https://source.unsplash.com/random?sig=46', peopleName: 'cruella_Avil_@'},
    {idImg: 'https://source.unsplash.com/random?sig=47', peopleName: 'Somil_Khal'},
    {idImg: 'https://source.unsplash.com/random?sig=48', peopleName: 'rasmika_/\_#'},
    {idImg: 'https://source.unsplash.com/random?sig=49', peopleName: 'Sahid_Janta'},
    {idImg: 'https://source.unsplash.com/random?sig=50', peopleName: 'Aman_khal_07'},
  ];
  constructor(
    public navCtrl: NavController,
  ) { }

  ngOnInit() {}

  goBack() {
    this.navCtrl.back();
  }

  removeCard(index: number){
    this.discoverPeople.splice(index, 1);
  }
}
