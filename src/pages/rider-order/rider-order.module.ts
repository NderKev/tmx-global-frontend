import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderOrderPage } from './rider-order';

@NgModule({
  declarations: [
    RiderOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderOrderPage),
  ],
})
export class RiderOrderPageModule {}
