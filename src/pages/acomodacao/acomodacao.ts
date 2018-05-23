import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Acomodacao } from '../../modelos/acomodacao';



@IonicPage()
@Component({
  selector: 'page-acomodacao',
  templateUrl: 'acomodacao.html',
})
export class AcomodacaoPage {

  public acomodacao: Acomodacao;

  //public nomeHospede: string = '';
  //public disponivel: boolean;
  public status: string;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.acomodacao = this.navParams.get('quartoSelecionado');
    this.status= this.acomodacao.hospede;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcomodacaoPage');
  }
  atualizaStatus(disponivel:boolean, acomodacao){
    disponivel ? 
    this.acomodacao.status = true:
    this.acomodacao.status= false;

    


  }

}
