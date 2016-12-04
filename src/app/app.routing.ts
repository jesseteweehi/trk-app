import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserinfoComponent } from './userinfo/userinfo.component';

const APP_ROUTES: Routes = [
 {path: '', component: HomeComponent},
 {path: 'profile', component: UserComponent},
 {path: 'user', component: UserinfoComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);

