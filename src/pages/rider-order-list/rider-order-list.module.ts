import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderOrderListPage } from './rider-order-list';

@NgModule({
  declarations: [
    RiderOrderListPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderOrderListPage),
  ],
})
export class RiderOrderListPageModule {}
