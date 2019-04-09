import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-detail-one',
  templateUrl: 'item-detail-one.html',
})
export class ItemDetailOnePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailOnePage');
  }

  back()
  {
    this.navCtrl.pop();
  }

  cart()
  {
    this.navCtrl.push('YourcartPage')
  }

}
