import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {DeepLinkConfig, DeepLinkMetadata} from 'ionic-angular/navigation/nav-util';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QuartosComponent } from '../components/quartos/quartos';


export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: HomePage, name: 'Home Page', segment: 'home' },
    { component: ListPage, name: 'Second Page', segment: 'list'},
  ]
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    QuartosComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    QuartosComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
