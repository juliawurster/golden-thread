import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LearnPage } from '../learn/learn';
import { ProfilePage } from '../profile/profile';
import { PaymentPage } from '../payment/payment';
import { CharityPublicProfilePage } from '../charity-public/charity-public';
import { Charity } from '../../models/charity'

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  public charities: Array<Charity> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    var charity1 = new Charity();
    charity1.id = 1;
    charity1.name = "Apple";
    charity1.bio = "theyre red";

    var charity2 = new Charity();
    charity2.id = 2;
    charity2.name = "Lime";
    charity2.bio = "theyre green";

    var charity3 = new Charity();
    charity3.id = 3;
    charity3.name = "Orange";
    charity3.bio = "u already no";

    var charity4 = new Charity();
    charity4.id = 4;
    charity4.name = "Blueberry";
    charity4 .bio = "theyre blue";

    this.charities.push(charity1);
    this.charities.push(charity2);
    this.charities.push(charity3);
    this.charities.push(charity4);
  }
  ionViewDidLoad() 
  {
    console.log("ionViewDidLoad ExplorePage");
  }

    charitypage(charity: Charity)
    {
      this.navCtrl.push(CharityPublicProfilePage, 
        {
          charity: charity
        });
    }
}
