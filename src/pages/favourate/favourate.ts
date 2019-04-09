import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-favourate',
  templateUrl: 'favourate.html',
})
export class FavouratePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouratePage');
  }

  item(){
    let modal = this.modalCtrl.create('ItemDetailPage');
    modal.present();
  }

}
