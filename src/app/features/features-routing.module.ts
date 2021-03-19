import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormationComponent } from './components/formation/formation.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: CardProfileComponent
      },
      {
        path: 'home',
        component: CardProfileComponent
      },
      {
        path: 'prejects',
        component: ProjectsComponent
      },
      {
        path: 'formation',
        component: FormationComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
