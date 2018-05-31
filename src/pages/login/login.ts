import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() 
  {
    console.log("ionViewDidLoad LoginPage");
  }

  login() 
  {
    this.navCtrl.push(ExplorePage, 
      {
        username: this.username,
        password: this.password
      });
  }
}
