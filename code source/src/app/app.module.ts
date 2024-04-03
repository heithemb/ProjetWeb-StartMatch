import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsfilterComponent } from './newsfilter/newsfilter.component';
import { FormsModule } from '@angular/forms';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SuggestedComponent } from './suggested/suggested.component';
import { HeadernewsComponent } from './headernews/headernews.component';
import { NavbarnewsComponent } from './navbarnews/navbarnews.component';
import { ProfilComponent } from './profil/profil.component';
import { SearchfilterComponent } from './searchfilter/searchfilter.component';
import { SearchComponent } from './search/search.component';
import { PostAffComponent } from './post-aff/post-aff.component';
import { FiltrageComponent } from './filtrage/filtrage.component';
import { BetaComponent } from './beta/beta.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormPersonComponent } from './form-person/form-person.component';
import { FormStartupComponent } from './form-startup/form-startup.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileSearchComponent } from './profile-search/profile-search.component';
import { ButtonManageComponent } from './button-manage/button-manage.component';
import { OtherPorfileComponent } from './other-porfile/other-porfile.component';
import { AdminfirstpannelComponent } from './adminfirstpannel/adminfirstpannel.component';
import { ReportedComponent } from './reported/reported.component';
import { PostReportedComponent } from './post-reported/post-reported.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ConsultpostComponent } from './consultpost/consultpost.component';
import { SigninComponent } from './signin/signin.component';
import { HeaderlandingComponent } from './headerlanding/headerlanding.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NewsfilterComponent,
    NewsfeedComponent,
    SuggestedComponent,
    HeadernewsComponent,
    NavbarnewsComponent,
    ProfilComponent,
    SearchfilterComponent,
    SearchComponent,
    PostAffComponent,
    FiltrageComponent,
    BetaComponent,
    LandingpageComponent,
    CreatePostComponent,
    FormPersonComponent,
    FormStartupComponent,
    LoginFormComponent,
    ProfileSearchComponent,
    ButtonManageComponent,
    OtherPorfileComponent,
    AdminfirstpannelComponent,
    ReportedComponent,
    PostReportedComponent,
    UpdateProfileComponent,
    ConsultpostComponent,
    SigninComponent,
    HeaderlandingComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
