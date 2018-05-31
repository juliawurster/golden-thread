import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { ProfilePage } from '../profile/profile';
import { PaymentPage } from '../payment/payment';


@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  public charityname: string;
  public charitybio: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
    
    ionViewDidLoad() {
    this.charityname = this.navParams.get("charityname");
    this.charitybio = this.navParams.get("charitybio");

  }

}