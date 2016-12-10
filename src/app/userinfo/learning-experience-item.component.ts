import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'trk-learning-experience-item',
  templateUrl: './learning-experience-item.component.html',
  styleUrls: ['./learning-experience-item.component.css']
})
export class LearningExperienceItemComponent implements OnInit {
  @Input() learningExperience: Object;

  constructor() { }

  ngOnInit() {
  }

}
