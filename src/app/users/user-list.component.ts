import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

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

  @Input('sidenav') sidenav: MdSidenav;

  showUser(user) {
    this.sidenav.open();
  }

  ngOnInit() {
  }

}
