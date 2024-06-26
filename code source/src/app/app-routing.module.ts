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
import { ContactusComponent } from './contactus/contactus.component';
import { Contactus2Component } from './contactus2/contactus2.component';
import { PrivacyComponent } from './privacy/privacy.component';
import{Aboutus2Component} from './aboutus2/aboutus2.component';
import { ConsultreportedprofiilComponent } from './consultreportedprofiil/consultreportedprofiil.component';
import { UpdatepostComponent } from './updatepost/updatepost.component';
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
  {path:'about-us2',component:Aboutus2Component},
  {path:'adminfirstpannel',component:AdminfirstpannelComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'updatepost',component:UpdatePostintComponent},
  {path:'contact-us',component:ContactusComponent},
  {path:'contactus2',component:Contactus2Component},
  {path:'footer',component:FooterComponent},
  {path:'privacy',component:PrivacyComponent},
  {path:'aboutus2',component:Aboutus2Component},
  {path:'consultpost/:id',component:ConsultpostComponent},
  {path:'updatepost/:id',component:UpdatepostComponent},
  {path:'consultreportedprofiil',component:ConsultreportedprofiilComponent},
  {path:'aboutus',redirectTo:'aboutus2',pathMatch:'full'},
  {path:'',redirectTo: 'landingpage', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
