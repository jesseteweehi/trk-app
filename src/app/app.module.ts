import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AssetsComponent, DialogContent } from './assets/assets.component';
import { UserItemComponent } from './users/user-item.component';
import { UserListComponent } from './users/user-list.component';
import { SideNavComponent } from './side-nav.component';
import { FormsComponent } from './forms/forms.component';
import { routing } from './app.routing';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { OverviewComponent } from './userinfo/overview.component';
import { LearningExperiencesComponent } from './userinfo/learning-experiences.component';
import { LearningExperienceItemComponent } from './userinfo/learning-experience-item.component';
import { LearningExperienceService } from './userinfo/learning-experience.service';
import { LearningExperienceFormComponent } from './userinfo/learning-experience-form/learning-experience-form.component';

// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBLF6Pyh4BJPYhQlhO6ZiqBIdQYROec0AI",
    authDomain: "tracking-app-77db8.firebaseapp.com",
    databaseURL: "https://tracking-app-77db8.firebaseio.com",
    storageBucket: "tracking-app-77db8.appspot.com",
    messagingSenderId: "285724076007"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent,
    AssetsComponent,
    DialogContent,
    UserItemComponent,
    UserListComponent,
    SideNavComponent,
    FormsComponent,
    UserComponent,
    HomeComponent,
    UserinfoComponent,
    OverviewComponent,
    LearningExperiencesComponent,
    LearningExperienceItemComponent,
    LearningExperienceFormComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig) 
  ],
  providers: [LearningExperienceService],
  entryComponents: [DialogContent],
  bootstrap: [AppComponent]
})
export class AppModule { }
