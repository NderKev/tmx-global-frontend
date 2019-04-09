import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,/* MenuController,*/ ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderdetailsPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }


  receipt(){
    let modal = this.modalCtrl.create('ReceiptPage');
    modal.present();
  }

  ratting(){
    let modal = this.modalCtrl.create('RattingPage');
    modal.present();
  }


}
