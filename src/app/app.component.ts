import { Component } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'trk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public authenticated: Object;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => this.authenticated = auth);
  }

  login() {
    this.af.auth.login();
  }


    // Need to reroute this page to ensure the menu is pickec up properly
  logout() {
     this.af.auth.logout();

  }

  ngOnInit() {
  }
}
