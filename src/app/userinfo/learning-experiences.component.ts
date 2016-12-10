import { Component, OnInit } from '@angular/core';
import { LearningExperience } from './learning-experience';
import { LearningExperienceService } from './learning-experience.service';

import { AngularFire, FirebaseAuth, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'trk-learning-experiences',
  templateUrl: './learning-experiences.component.html',
  styleUrls: ['./learning-experiences.component.css']
})
export class LearningExperiencesComponent{
  learningExperiences: FirebaseListObservable<any>;

  constructor(af: AngularFire) { 
    this.learningExperiences = af.database.list('/learningexperience', { query: {
    orderByKey: true
    }
    });
  }
}


  