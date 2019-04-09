import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreSignupPage } from './store-signup';

@NgModule({
  declarations: [
    StoreSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreSignupPage),
  ],
})
export class StoreSignupPageModule {}
