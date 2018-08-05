import {RouterModule, Routes} from '@angular/router';

import { SitepagesComponent } from './sitepages.component';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';

const sitePagesRoutes: Routes = [
  {
    path: '',
    component: SitepagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'faq', component: FaqComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];

export const SITE_PAGES_ROUTES = RouterModule.forChild(sitePagesRoutes);
