import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-deliverydetail',
  templateUrl: 'deliverydetail.html',
})
export class DeliverydetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliverydetailPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  

}
