import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfilComponent } from './profil/profil.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import {  FormStartupComponent} from './form-startup/form-startup.component';
import {  FormPersonComponent} from './form-person/form-person.component';
import {  OtherPorfileComponent} from './other-porfile/other-porfile.component';
import {  ReportedComponent} from './reported/reported.component';
import {  UpdateProfileComponent} from './update-profile/update-profile.component';
import{AboutUsComponent} from './about-us/about-us.component';
import { AdminfirstpannelComponent } from './adminfirstpannel/adminfirstpannel.component';
import { ConsultpostComponent } from './consultpost/consultpost.component';
import {SigninComponent } from './signin/signin.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UpdatePostintComponent } from './update-postint/update-postint.component';
const routes: Routes = [
  /*{path:'',redirectTo:'newsfeed', pathMatch: 'full'},*/
  {path:'newsfeed',component:NewsfeedComponent},
  {path:'consultpost',component:ConsultpostComponent},
  {path:'signin',component:SigninComponent},
  {path:'search',component:SearchComponent},
  {path:'profile',component:ProfilComponent},
  {path:'landing',component:LandingpageComponent},
  {path:'formstartup',component:FormStartupComponent},
  {path:'formperson',component:FormPersonComponent},
  {path:'OtherPorfile',component:OtherPorfileComponent},
  {path:'Reported',component:ReportedComponent},
  {path:'updateprofile',component:UpdateProfileComponent},
  {path:'form-person',component:FormPersonComponent},
  {path:'form-startup',component:FormStartupComponent},
  {path:'landingpage',component:LandingpageComponent},
  {path:'login',component:LoginFormComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'adminfirstpannel',component:AdminfirstpannelComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'updatepost',component:UpdatePostintComponent},
  {path:'',redirectTo: 'signin', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
