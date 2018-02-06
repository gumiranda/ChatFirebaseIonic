import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';
/**
 * Generated class for the AdicionarSalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adicionar-sala',
  templateUrl: 'adicionar-sala.html',
})
export class AdicionarSalaPage {
  data = { nome:'' };
  ref = firebase.database().ref('salas/');
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  adicionarSala() {
    let newData = this.ref.push();
    newData.set({
      nome:this.data.nome
    });
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AdicionarSalaPage');
  }

}
