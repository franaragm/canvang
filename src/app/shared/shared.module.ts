import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    TopbarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopbarComponent
  ]
})
export class SharedModule {

}
