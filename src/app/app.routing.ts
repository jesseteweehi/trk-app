import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
 {path: '', component: AppComponent},
 {path: 'user', component: UserComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
