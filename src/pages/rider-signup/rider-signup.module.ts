import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderSignupPage } from './rider-signup';

@NgModule({
  declarations: [
    RiderSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderSignupPage),
  ],
})
export class RiderSignupPageModule {}
