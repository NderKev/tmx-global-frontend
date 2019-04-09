import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settingsedit',
  templateUrl: 'settingsedit.html',
})
export class SettingseditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingseditPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
