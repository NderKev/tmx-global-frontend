import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RiderVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-verify',
  templateUrl: 'rider-verify.html',
})
export class RiderVerifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderVerifyPage');
  }
  back()
  {
    this.navCtrl.pop();
  }
  login()
  {
    this.navCtrl.push('RiderPage');
  }

}
