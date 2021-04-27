import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';

import { FeaturesComponent } from './features.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormationComponent } from './components/formation/formation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';



@NgModule({
  declarations: [
    FeaturesComponent,
    CardProfileComponent,
    ProjectsComponent,
    FormationComponent,
    ExperienceComponent,
    ContactComponent,
    ErrorComponent
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
