import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExplorePage } from '../pages/explore/explore';
import { LoginPage } from '../pages/login/login';
import { LearnPage } from '../pages/learn/learn';
import { PaymentPage } from '../pages/payment/payment';
import { ProfilePage } from '../pages/profile/profile';
import { RegistrationPage } from '../pages/registration/registration';
import { CharityProfilePage } from '../pages/charity-profile/charity-profile'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExplorePage,
    LearnPage,
    PaymentPage,
    ProfilePage,
    RegistrationPage,
    LoginPage,
    CharityProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExplorePage,
    LearnPage,
    PaymentPage,
    ProfilePage,
    RegistrationPage,
    LoginPage,
    CharityProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
