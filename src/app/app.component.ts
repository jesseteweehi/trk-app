import { Component } from '@angular/core';
import { AssetsComponent, DialogContent } from './assets/assets.component';
import { UserslistComponent } from './users/userslist.component';

@Component({
  selector: 'trk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trk works!';
}
