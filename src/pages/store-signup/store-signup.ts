import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoreSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-signup',
  templateUrl: 'store-signup.html',
})
export class StoreSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreSignupPage');
  }
  login(){
    this.navCtrl.push('StoreVerifyPage');
  }

  back()
  {
    this.navCtrl.pop();
  }
}
