import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsultaPage } from '../pages/consulta/consulta';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaserestProvider } from '../providers/firebaserest/firebaserest';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5jG7DHUJOt3kqzuP64IajDio2RS67WiE",
    authDomain: "dam20182-u2.firebaseapp.com",
    databaseURL: "https://dam20182-u2.firebaseio.com",
    projectId: "dam20182-u2",
    storageBucket: "dam20182-u2.appspot.com",
    messagingSenderId: "693927428303"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ConsultaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFirestore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaserestProvider
  ]
})
export class AppModule {}
