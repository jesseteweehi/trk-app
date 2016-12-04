import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'trk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authob : any;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => this.authob = auth);
  }

  login() {
    this.af.auth.login();
  }

  logout() {
     this.af.auth.logout();
  }

  ngOnInit() {
  }
}
