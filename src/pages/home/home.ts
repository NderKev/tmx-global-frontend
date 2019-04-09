import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController,ModalController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  tab1: string = 'LandingPage';
  tab2: string ='SearchPage';
  tab3: string = 'OrderPage';
  tab4: string = 'FavouratePage';
	tab5: string = 'ProfilePage';
  tab8: string = 'WalletPage';

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('UselocationPopoverPage');
    popover.present({
      ev: myEvent
    });

  }
  filter(){
    let modal = this.modalCtrl.create('FilterPage');
    modal.present();
  }

}
