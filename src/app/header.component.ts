import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'trk-header',
  templateUrl: './header.component.html',
  styles: [`
  `]

})
export class HeaderComponent implements OnInit {
  authenticated: any;

  constructor(public af: AngularFire) {
  	this.authenticated = this.af.auth.subscribe(auth => console.log(auth));
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
