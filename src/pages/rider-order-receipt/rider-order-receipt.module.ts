import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderOrderReceiptPage } from './rider-order-receipt';

@NgModule({
  declarations: [
    RiderOrderReceiptPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderOrderReceiptPage),
  ],
})
export class RiderOrderReceiptPageModule {}
