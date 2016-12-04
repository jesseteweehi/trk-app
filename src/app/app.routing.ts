import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
 {path: '', component: HomeComponent},
 {path: 'user', component: UserComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);

