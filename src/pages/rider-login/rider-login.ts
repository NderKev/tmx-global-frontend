import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RiderLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-login',
  templateUrl: 'rider-login.html',
})
export class RiderLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderLoginPage');
  }

    login(){
      this.navCtrl.push('RiderProfilePage');
    }

    signup(){
      this.navCtrl.push('RiderSignupPage');
    }
}
