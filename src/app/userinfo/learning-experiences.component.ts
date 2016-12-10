import { Component, OnInit } from '@angular/core';
import { LearningExperience } from './learning-experience';
import { LearningExperienceService } from './learning-experience.service';


@Component({
  selector: 'trk-learning-experiences',
  templateUrl: './learning-experiences.component.html',
  styleUrls: ['./learning-experiences.component.css']
})
export class LearningExperiencesComponent implements OnInit {
  learningExperiences : LearningExperience[] = [];
  learningExperience = new LearningExperience('Learning Experience 1', 1, 'Maths', 'Dummy learning Intention', 'Dummy Learning description')

  constructor(private les: LearningExperienceService) { 
   this.learningExperiences = this.les.getLearningExperienceList();
  }

  ngOnInit() {
  }

}
