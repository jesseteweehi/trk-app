import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'trk-header',
  templateUrl: './header.component.html',
  styles: [`
  md-toolbar-row {
    justify-content: space-between;
  }
  `]

})
export class HeaderComponent implements OnInit {
  authenticated: any;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => this.authenticated = auth);
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
