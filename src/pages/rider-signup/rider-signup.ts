import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RiderSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-signup',
  templateUrl: 'rider-signup.html',
})
export class RiderSignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderSignupPage');
  }
  login(){
    this.navCtrl.push('RiderVerifyPage');
  }

  back()
  {
    this.navCtrl.pop();
  }

}
