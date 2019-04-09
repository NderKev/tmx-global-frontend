import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-ratting',
  templateUrl: 'ratting.html',
})
export class RattingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RattingPage');
  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }

}
