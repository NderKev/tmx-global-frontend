import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';

/**
 * Generated class for the RiderProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rider-profile',
  templateUrl: 'rider-profile.html',
})
export class RiderProfilePage {
  tab1: string ='SearchPage';
  tab2: string = 'RiderOrderListPage';
  tab3: string = 'ReceiptPage';
	tab4: string = 'ProfilePage';
  tab5: string = 'WalletPage';

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiderProfilePage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('UselocationPopoverPage');
    popover.present({
      ev: myEvent
    });

  }
}
