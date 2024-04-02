import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfilComponent } from './profil/profil.component';
import {FormPersonComponent } from './form-person/form-person.component';
import {FormStartupComponent } from './form-startup/form-startup.component';
import {SigninComponent } from './signin/signin.component';
import{LandingpageComponent} from'./landingpage/landingpage.component';
import { LoginFormComponent } from './login-form/login-form.component';
const routes: Routes = [
  {path:'newsfeed',component:NewsfeedComponent},
  {path:'signin',component:SigninComponent},
  {path:'search',component:SearchComponent},
  {path:'profile',component:ProfilComponent},
  {path:'form-person',component:FormPersonComponent},
  {path:'form-startup',component:FormStartupComponent},
  {path:'landingpage',component:LandingpageComponent},
  {path:'login',component:LoginFormComponent},
  {path:'',redirectTo: 'signin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
