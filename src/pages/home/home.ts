import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TouchID } from '@ionic-native/touch-id';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private iab: InAppBrowser, private touchId: TouchID) {
    
    this.touchId.isAvailable()
    .then(
      res => console.log('TouchID is available!'),
      err => console.error('TouchID is not available', err)
    );
  
    this.touchId.verifyFingerprint('Scan your fingerprint please')
    .then(
      res => console.log('Ok', res),
      err => console.error('Error', err)
    );
  }

  ngOnInit() {

    const browser = this.iab.create('https://www.hippodromeonline.com/', '_self', { location: 'no' });

    console.log(browser);
    console.log('Test');
  }
} 
