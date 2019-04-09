import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  order_type: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl:ModalController) {
    this.order_type = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  order_tab(order_type) {
    this.order_type = order_type;
   }

   orderdetail(){
    let modal = this.modalCtrl.create('OrderdetailsPage');
    modal.present();
  }

}
