import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'trk-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent {
	users: FirebaseListObservable<any[]>;
	constructor(af: AngularFire) { 
		this.users = af.database.list('users')
	}
}
