import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoreVerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-verify',
  templateUrl: 'store-verify.html',
})
export class StoreVerifyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreVerifyPage');
  }
  back()
  {
    this.navCtrl.pop();
  }
  login()
  {
    this.navCtrl.push('StorePage');
  }

}
