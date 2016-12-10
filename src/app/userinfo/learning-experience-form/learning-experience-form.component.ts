import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../customvalidators';

@Component({
  selector: 'trk-learning-experience-form',
  templateUrl: './learning-experience-form.component.html',
  styleUrls: ['./learning-experience-form.component.css']
})
export class LearningExperienceFormComponent implements OnInit {
  public learningExperienceForm : FormGroup;

  constructor(public fb: FormBuilder) { 
  	this.learningExperienceForm = this.fb.group({
  		title: ['', [Validators.required, CustomValidators.levelNumber]],
  		level: ['', Validators.required],
  		learningIntention: '',
  		description: '',
  		learningStatus: '',
  	});
  }
  ngOnInit() {
  }  
}




  		// title: ['Title goes Here', [Validators.required, Validators.minLength(2)]],
  		// level: ['Title goes Here', [Validators.required, CustomValidators.levelNumber]],