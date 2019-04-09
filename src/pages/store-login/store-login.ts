import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoreLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-login',
  templateUrl: 'store-login.html',
})
export class StoreLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreLoginPage');
  }
  login(){
    this.navCtrl.push('StoreProfilePage');
  }

  signup(){
    this.navCtrl.push('StoreSignupPage');
  }

}
