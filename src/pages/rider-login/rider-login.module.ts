import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RiderLoginPage } from './rider-login';

@NgModule({
  declarations: [
    RiderLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(RiderLoginPage),
  ],
})
export class RiderLoginPageModule {}
