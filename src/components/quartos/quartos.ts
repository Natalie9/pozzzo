import { Component, AnimationKeyframe } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AcomodacaoPage } from '../../pages/acomodacao/acomodacao';
import { Acomodacao } from '../../modelos/acomodacao';

/**
 * Generated class for the QuartosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'quartos',
  templateUrl: 'quartos.html'
})
export class QuartosComponent {

  acomodacao: Acomodacao[];


  constructor(public navCtrl: NavController) {

    this.acomodacao=[
    {descricao: '01', hospede: 'Joao', status:true},
    {descricao: '02', hospede: 'Cristina', status:true},
    {descricao: '03', hospede: null, status:false},
    
    ];
   


  }
 

selecionaAcomo(acomodacao){
  console.log(acomodacao);
  this.navCtrl.push(AcomodacaoPage.name, {quartoSelecionado: acomodacao});
  }

 verificaStatus(acomodacao){
  acomodacao.status ? 
  acomodacao.hospede = 'Ocupado por: ' + acomodacao.hospede:
  acomodacao.hospede = 'Livre!';
 }  
}