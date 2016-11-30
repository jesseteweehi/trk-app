import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AssetsComponent, DialogContent } from './assets/assets.component';
import { UserItemComponent } from './users/user-item.component';
import { UserListComponent } from './users/user-list.component';
import { HeaderComponent } from './header.component';
import { SideNavComponent } from './side-nav.component';
import { FormsComponent } from './forms/forms.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBLF6Pyh4BJPYhQlhO6ZiqBIdQYROec0AI",
    authDomain: "tracking-app-77db8.firebaseapp.com",
    databaseURL: "https://tracking-app-77db8.firebaseio.com",
    storageBucket: "tracking-app-77db8.appspot.com",
    messagingSenderId: "285724076007"
};

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    DialogContent,
    UserItemComponent,
    UserListComponent,
    HeaderComponent,
    SideNavComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig) 
  ],
  providers: [],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
