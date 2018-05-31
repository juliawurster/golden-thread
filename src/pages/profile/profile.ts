import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { ExplorePage } from '../explore/explore';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public username: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public interests: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");
    this.firstname = this.navParams.get("firstname");
    this.lastname = this.navParams.get("lastname");
    this.interests = this.navParams.get("interests");
  }

}
