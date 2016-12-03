import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { UserComponent } from './user/user.component';

const APP_ROUTES: Routes = [
 {path: 'user', component: UserComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
