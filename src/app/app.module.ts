import { AdicionarSalaPage } from './../pages/adicionar-sala/adicionar-sala';
import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { MyApp } from './app.component';
import { SalaPage } from '../pages/sala/sala';
@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
     SalaPage,HomePage,AdicionarSalaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,SalaPage,HomePage,AdicionarSalaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
