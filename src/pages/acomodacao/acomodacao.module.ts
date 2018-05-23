import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { AcomodacaoPage } from './acomodacao';
@IonicPage()
@NgModule({
  declarations: [
    AcomodacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcomodacaoPage),
  ],
  exports:[
    AcomodacaoPage
  ]
})
export class AcomodacaoPageModule {}
