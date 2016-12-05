import { Routes } from '@angular/router'; 
import { OverviewComponent } from './overview.component';
import { LearningExperiencesComponent } from'./learning-experiences.component';

export const USER_ROUTES: Routes = [
	{path: 'overview', component: OverviewComponent},
	{path: 'learningexperiences', component: LearningExperiencesComponent }
];