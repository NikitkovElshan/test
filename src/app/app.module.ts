import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './auth/login/login.component';
import {NewsComponent} from './site/news/news.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SiteLayoutComponent} from './site/site-layout/site-layout.component';
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {NewsIdComponent} from './site/news-id/news-id.component';
import {AreYouSureDialogComponent} from './site/are-you-sure-dialog/are-you-sure-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MainPageComponent } from './site/main-page-component/main-page.component';
import {HttpClientModule} from "@angular/common/http";
import { SaveComponent } from './site/save/save.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsComponent,
    SiteLayoutComponent,
    NewsIdComponent,
    AreYouSureDialogComponent,
    MainPageComponent,
    SaveComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
