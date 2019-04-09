import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,/*MenuController, */ModalController} from 'ionic-angular';

/**
 * Generated class for the RiderOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-order',
  templateUrl: 'rider-order.html',
})
export class RiderOrderPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderOrderPage');
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
