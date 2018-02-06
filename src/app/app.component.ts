import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';

import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDBQl4HG_lqovYTg-ATndA3Co4JnUdoyiM",
  authDomain: "spottedagrvai.firebaseapp.com",
  databaseURL: "https://spottedagrvai.firebaseio.com",
  projectId: "spottedagrvai",
  storageBucket: "spottedagrvai.appspot.com",
  messagingSenderId: "832356265521"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CadastroPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }



}

