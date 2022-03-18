import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SiteLayoutComponent} from "./site/site-layout/site-layout.component";
import {NewsIdComponent} from "./site/news-id/news-id.component";
import {MainPageComponent} from "./site/main-page-component/main-page.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},

  {
    path: '', component: SiteLayoutComponent, children: [
      {path: 'news', component: MainPageComponent},
      {path: 'news/:id', component: NewsIdComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
