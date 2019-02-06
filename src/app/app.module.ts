import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { RouterModule, Routes } from '@angular/router';

import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { RepositoriesComponent } from './repositories/repositories.component';
import { DateCountPipe } from './datecount.pipe';



const routes:Routes=[
  {path: 'profile', component: ProfileComponent},
  {path: 'repositories', component: RepositoriesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileFormComponent,
    StrikethroughDirective,
    RepositoriesComponent,
    DateCountPipe
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
