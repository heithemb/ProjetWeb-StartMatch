import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfilComponent } from './profil/profil.component';
<<<<<<< HEAD
import { ConsultpostComponent } from './consultpost/consultpost.component';
=======
import {FormPersonComponent } from './form-person/form-person.component';
import {FormStartupComponent } from './form-startup/form-startup.component';
import {SigninComponent } from './signin/signin.component';
import{LandingpageComponent} from'./landingpage/landingpage.component';
import { LoginFormComponent } from './login-form/login-form.component';
>>>>>>> 1a5f978f2b878c9419e172b102ff4313dda99b20
const routes: Routes = [
  {path:'',redirectTo:'newsfeed', pathMatch: 'full'},
  {path:'newsfeed',component:NewsfeedComponent},
<<<<<<< HEAD
  {path:'consultpost',component:ConsultpostComponent},
=======
  {path:'signin',component:SigninComponent},
>>>>>>> 1a5f978f2b878c9419e172b102ff4313dda99b20
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
