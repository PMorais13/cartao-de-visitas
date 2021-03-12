import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';

import { FeaturesComponent } from './features.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { IconsComponent } from './components/card-profile/components/icons/icons.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    CardProfileComponent,
    IconsComponent
  ],
  imports: [
      CommonModule,
      FeaturesRoutingModule,
  ],
  exports: [
      FeaturesComponent
  ]

})
export class FeaturesModule { }
