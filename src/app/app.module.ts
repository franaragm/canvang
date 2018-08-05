import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Routes
import { APP_ROUTES } from './app.routes';

import { SitePagesModule } from './sitepages/sitepages.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,
    SitePagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
