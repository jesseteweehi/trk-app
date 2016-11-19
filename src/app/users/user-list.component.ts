import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

import { UserItemComponent } from './user-item.component';

@Component({
  selector: 'trk-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
  	md-grid-list {
  		margin-top: 10px;
  	}
  `]
})
export class UserListComponent implements OnInit {
  userlist: FirebaseListObservable<any[]>;	

  constructor(af: AngularFire) {
  	this.userlist = af.database.list('users')
  }

  ngOnInit() {
  }

}
