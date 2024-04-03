import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfilComponent } from './profil/profil.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
const routes: Routes = [
  {path:'newsfeed',component:NewsfeedComponent},
  {path:'',redirectTo: 'newsfeed', pathMatch: 'full'},
  {path:'search',component:SearchComponent},
  {path:'profile',component:ProfilComponent},
  {path:'landing',component:LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
