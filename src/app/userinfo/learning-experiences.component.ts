import { Component, OnInit } from '@angular/core';

import { AngularFire, FirebaseAuth, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

import "rxjs/add/operator/map";


@Component({
  selector: 'trk-learning-experiences',
  templateUrl: './learning-experiences.component.html',
  styleUrls: ['./learning-experiences.component.css']
})
export class LearningExperiencesComponent{
  learningExperiences: FirebaseListObservable<any>;

  constructor(af: AngularFire) { 
    this.learningExperiences = af.database.list('/learningexperience', { 
      query: {
        limitTolast: 100
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
  }
}

// import "rxjs/add/operator/map";

// ...

// this.stories = af.database.list('/stories', {
//   query: {
//     limitToLast: 24
//   }
// }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;