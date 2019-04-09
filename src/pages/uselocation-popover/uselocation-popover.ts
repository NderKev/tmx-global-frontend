import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-uselocation-popover',
  templateUrl: 'uselocation-popover.html',
})
export class UselocationPopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UselocationPopoverPage');
  }




  location(){
    let modal = this.modalCtrl.create('LocationPage');
    modal.present();
    this.viewCtrl.dismiss();
  }


}
