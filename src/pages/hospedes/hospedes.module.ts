import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospedesPage } from './hospedes';

@NgModule({
  declarations: [
    HospedesPage,
  ],
  imports: [
    IonicPageModule.forChild(HospedesPage),
  ],
})
export class HospedesPageModule {}
