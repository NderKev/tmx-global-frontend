import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  filter_type: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.filter_type = 1;

  }

  ionViewDidLoad() {

  }

  filter_tab(filter_type) {
    this.filter_type = filter_type;
   }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
