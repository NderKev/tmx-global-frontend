import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  settings(){
    let modal = this.modalCtrl.create('SettingsPage');
    modal.present();
  }

  edit(){
    let modal = this.modalCtrl.create('SettingseditPage');
    modal.present();
  }

  wallet(){
    let modal = this.modalCtrl.create('WalletPage');
    modal.present();
  }

}
