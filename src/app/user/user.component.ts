import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'trk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public authenticated: Object;

  constructor(public af: AngularFire) {
  	this.af.auth.subscribe(auth => this.authenticated = auth);
  }

  ngOnInit() {
  }

}
