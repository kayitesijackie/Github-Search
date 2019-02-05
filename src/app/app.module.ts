import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { StrikethroughDirective } from './strikethrough.directive';


const routes:Routes=[]
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,
    StrikethroughDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
