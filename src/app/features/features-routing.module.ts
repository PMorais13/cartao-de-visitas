import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturesComponent } from './features.component';
import { CardProfileComponent } from './components/card-profile/card-profile.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
    {
        path:'',
        component: CardProfileComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
