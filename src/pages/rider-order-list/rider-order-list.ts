import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the RiderOrderListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-order-list',
  templateUrl: 'rider-order-list.html',
})
export class RiderOrderListPage {
  order_type: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.order_type = 1;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderOrderListPage');
  }
  order_tab(order_type) {
    this.order_type = order_type;
   }
   riderorder(){
    let modal = this.modalCtrl.create('RiderOrderPage');
    modal.present();
  }
}
