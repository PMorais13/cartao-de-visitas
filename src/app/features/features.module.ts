import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';

import { FeaturesComponent } from './features.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';


@NgModule({
  declarations: [
    FeaturesComponent,
    CardProfileComponent
  ],
  imports: [
      CommonModule,
      FeaturesRoutingModule
  ],
  exports: [
      FeaturesComponent
  ]

})
export class FeaturesModule { }
