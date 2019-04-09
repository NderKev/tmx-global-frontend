import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreLoginPage } from './store-login';

@NgModule({
  declarations: [
    StoreLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreLoginPage),
  ],
})
export class StoreLoginPageModule {}
