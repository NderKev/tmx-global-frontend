import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourcartPage } from './yourcart';

@NgModule({
  declarations: [
    YourcartPage,
  ],
  imports: [
    IonicPageModule.forChild(YourcartPage),
  ],
})
export class YourcartPageModule {}
