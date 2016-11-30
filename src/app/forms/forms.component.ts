import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'trk-forms',
  templateUrl: './forms.component.html',
  styles: [`
 	p {
 		margin: 16px;
 	}
  `]
})
export class FormsComponent {
  form : FormGroup;

  constructor(public fb: FormBuilder) { 
  	this.form = this.fb.group({
  		title: '',
  		learningIntention: '',
  		description: '',
  		learningStatus: '',
  	});
  }
}
