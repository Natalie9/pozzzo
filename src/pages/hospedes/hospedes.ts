import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DeepLinkConfig, DeepLinkMetadata} from 'ionic-angular/navigation/nav-util';
import {List} from '…/pages/list/list';
import { ListPage } from '../list/list';

/**
 * Generated class for the HospedesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospedes',
  templateUrl: 'hospedes.html',
})
export class HospedesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospedesPage');
  }

  static get routes() : DeepLinkConfig {
    let aboutMeta = new DeepLinkMetadata();
    aboutMeta.component = ListPage;
    aboutMeta.name = 'list';
    aboutMeta.segment = 'list';
    
    let aboutMetaTest = new DeepLinkMetadata();
    aboutMetaTest.component = ListPage;
    aboutMetaTest.name = "listTest";
    aboutMetaTest.segment = "list/:test";
    return {
      links: [
        aboutMeta,
        aboutMetaTest
      ]
    }
    }
    }


