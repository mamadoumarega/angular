import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monAgence';

  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB7-KOV-Vx1dMB8l1I55_0zctaw8dmOVz8',
      authDomain: 'monagence-4da5e.firebaseapp.com',
      databaseURL: 'https://monagence-4da5e.firebaseio.com',
      projectId: 'monagence-4da5e',
      storageBucket: 'monagence-4da5e.appspot.com',
      messagingSenderId: '423204872737',
      appId: '1:423204872737:web:020b67e8a4f540f0ddb960'
    };
    firebase.initializeApp(firebaseConfig);
  }


}
