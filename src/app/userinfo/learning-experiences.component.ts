import { Component, OnInit } from '@angular/core';
import { LearningExperience } from './learning-experience';

@Component({
  selector: 'trk-learning-experiences',
  templateUrl: './learning-experiences.component.html',
  styleUrls: ['./learning-experiences.component.css']
})
export class LearningExperiencesComponent implements OnInit {
  learningExperiences : LearningExperience[] = [];

  constructor() { }

  ngOnInit() {
  }

}
