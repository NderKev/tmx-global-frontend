import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreProfilePage } from './store-profile';

@NgModule({
  declarations: [
    StoreProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(StoreProfilePage),
  ],
})
export class StoreProfilePageModule {}
