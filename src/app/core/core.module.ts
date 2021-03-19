import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeaturesRoutingModule } from '../features/features-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
      CommonModule,
      FeaturesRoutingModule
  ],
  exports: [
      NavbarComponent,
      FooterComponent
  ]

})
export class CoreModule { }
