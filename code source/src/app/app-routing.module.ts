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


const routes: Routes = [
  {path:'newsfeed',component:NewsfeedComponent},
  {path:'',redirectTo: 'newsfeed', pathMatch: 'full'},
  {path:'search',component:SearchComponent},
  {path:'profile',component:ProfilComponent},
  {path:'landing',component:LandingpageComponent},
  {path:'formstartup',component:FormStartupComponent},
  {path:'formperson',component:FormPersonComponent},
  {path:'OtherPorfile',component:OtherPorfileComponent},
  {path:'Reported',component:ReportedComponent},
  {path:'updateprofile',component:UpdateProfileComponent}



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
