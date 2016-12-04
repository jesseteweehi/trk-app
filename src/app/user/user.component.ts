import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseAuth } from 'angularfire2';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'trk-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  public authenticated: any;

  public form : FormGroup;

  constructor(public af: AngularFire, public fb: FormBuilder) {
  	this.af.auth.subscribe(auth => this.authenticated = auth);

  	this.form = this.fb.group({
  		yearLevel: '',
  		learningIntention: '',
  		description: '',
  		learningStatus: '',
  	});

  }

  ngOnInit() {
  }

}

