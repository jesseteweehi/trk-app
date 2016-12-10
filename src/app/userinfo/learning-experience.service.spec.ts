/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LearningExperienceService } from './learning-experience.service';

describe('Service: LearningExperience', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningExperienceService]
    });
  });

  it('should ...', inject([LearningExperienceService], (service: LearningExperienceService) => {
    expect(service).toBeTruthy();
  }));
});
