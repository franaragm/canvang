import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';

import {SITE_PAGES_ROUTES} from './sitepages.routes';

import {SitepagesComponent} from './sitepages.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';


@NgModule({
  declarations: [
    SitepagesComponent,
    HomeComponent,
    AboutComponent,
    FaqComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    FaqComponent

  ],
  imports: [
    SharedModule,
    SITE_PAGES_ROUTES,
    FormsModule
  ]
})
export class SitePagesModule {}
