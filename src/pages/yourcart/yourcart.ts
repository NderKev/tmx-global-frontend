import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-yourcart',
  templateUrl: 'yourcart.html',
})
export class YourcartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YourcartPage');
  }

  back()
  {
    this.navCtrl.pop();
  }

  promo(){
    let modal = this.modalCtrl.create('PromoPage');
    modal.present();
  }

  checkout()
  {
    this.navCtrl.push('DeliveryPage');
  }

}
