import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController  } from 'ionic-angular';

/**
 * Generated class for the StoreProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-profile',
  templateUrl: 'store-profile.html',
})
export class StoreProfilePage {
  tab1: string ='SearchPage';
  tab2: string = 'OrderPage';
  tab3: string = 'FavouratePage';
  tab4: string = 'ProfilePage';
  tab5: string = 'WalletPage';
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreProfilePage');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('UselocationPopoverPage');
    popover.present({
      ev: myEvent
    });

  }

}
