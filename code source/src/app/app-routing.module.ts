import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { ProfilComponent } from './profil/profil.component';
import { ConsultpostComponent } from './consultpost/consultpost.component';
const routes: Routes = [
  {path:'',redirectTo:'newsfeed', pathMatch: 'full'},
  {path:'newsfeed',component:NewsfeedComponent},
  {path:'consultpost',component:ConsultpostComponent},
  {path:'search',component:SearchComponent},
  {path:'profile',component:ProfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
