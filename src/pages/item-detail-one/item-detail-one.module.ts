import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemDetailOnePage } from './item-detail-one';

@NgModule({
  declarations: [
    ItemDetailOnePage,
  ],
  imports: [
    IonicPageModule.forChild(ItemDetailOnePage),
  ],
})
export class ItemDetailOnePageModule {}
