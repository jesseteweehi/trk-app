import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AngularFire, FirebaseAuth, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

import { CustomValidators } from '../../customvalidators';



@Component({
  selector: 'trk-learning-experience-form',
  templateUrl: './learning-experience-form.component.html',
  styleUrls: ['./learning-experience-form.component.css']
})
export class LearningExperienceFormComponent {
  public learningExperienceForm : FormGroup;
  public learningExperience: FirebaseObjectObservable<any>;
  public learningExperienceItem: FirebaseListObservable<any>;

  public subjects : Array<string> = ['Music', 'Digital Technology']

  constructor(public fb: FormBuilder, public af: AngularFire) { 
  	this.learningExperienceForm = this.fb.group({
  		title: ['', Validators.required],
  		level: ['', [Validators.required, CustomValidators.levelNumber]],
      subject: '',
  		learningIntention: '',
  		description: '',
  		learningStatus: '',
  	});
    this.learningExperience = af.database.object('/learningexperience')
    this.learningExperienceItem = af.database.list('/learningexperience')
    
    }

  addLearningExperience(data: any) {
    this.learningExperienceItem.push(data).then(_ => console.log('Pushed'));
    }

  onSubmit(){
    this.addLearningExperience(this.learningExperienceForm.value);
    this.learningExperienceForm.reset();
    } 
  }


// class MyComp {
//   questions: FirebaseListObservable<any[]>;
//   value: FirebaseObjectObservable<any>;
//   constructor(af: AngularFire) {
//     this.questions = af.database.list('/questions');
//     this.value = af.database.object('/value');
//   } 
//   addToList(item: any) {
//     this.questions.push(item);
//   }
//   removeItemFromList(key: string) {
//     this.questions.remove(key).then(_ => console.log('item deleted!'));
//   }
//   deleteEntireList() {
//     this.questions.remove().then(_ => console.log('deleted!'));
//   }
//   setValue(data: any) {
//     this.value.set(data).then(_ => console.log('set!'));
//   }
//   updateValue(data: any) {
//     this.value.update(data).then(_ => console.log('update!'));
//   }
//   deleteValue() {
//     this.value.remove().then(_ => console.log('deleted!'));
//   }
// }