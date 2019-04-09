import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RattingPage } from './ratting';
import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
  declarations: [
    RattingPage,
  ],
  imports: [
    IonicPageModule.forChild(RattingPage),
    Ionic2RatingModule
  ],
})
export class RattingPageModule {}
