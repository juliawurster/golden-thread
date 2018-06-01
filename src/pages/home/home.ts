import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { CharityRegistrationPage } from '../charity-registration/charity-registration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage 
{
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {}

  // openMenu() 
  // {
  // this.menuCtrl.open();
  // console.log("menu was opened");
  // }
  
  navToLogin()
  {
    this.navCtrl.push(LoginPage);
  }
  navToRegistration()
  {
    this.navCtrl.push(RegistrationPage);
  }
  navToCharityRegistration()
  {
    this.navCtrl.push(CharityRegistrationPage);
  }
}
