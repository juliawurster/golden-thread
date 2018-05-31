import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public username: string;
  public password: string;
  public firstname: string;
  public lastname: string;
  public interests: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() 
  {
    console.log("ionViewDidLoad RegistrationPage");
  }

  register() 
  {
    this.navCtrl.push(ProfilePage, 
      {
        username: this.username,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
        interests: this.interests
      });
  }

}
