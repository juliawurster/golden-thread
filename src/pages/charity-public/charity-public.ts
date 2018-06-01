import { Component } from '@angular/core';
import { NavController, NavParams, } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { ExplorePage } from '../explore/explore';
import { Charity } from '../../models/charity'

@Component({
  selector: 'page-charity-public',
  templateUrl: 'charity-public.html'
})
export class CharityPublicProfilePage {

    public charity: Charity;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.charity = this.navParams.get("charity");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharityProfilePage');
  }

}