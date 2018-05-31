import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { ExplorePage } from '../explore/explore';
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-charity-profile',
  templateUrl: 'charity-profile.html'
})
export class CharityProfilePage {

  public charityname: string;
  public charitybio: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.charityname = this.navParams.get("charityname");
    this.charitybio = this.navParams.get("charitybio");
  }

  charityinfo() 
    {
      this.navCtrl.push(ExplorePage, 
        {
          charityname: this.charityname,
          charitybio: this.charitybio,
        });
    }
}
  