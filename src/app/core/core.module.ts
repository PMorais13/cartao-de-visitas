import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardProjetosComponent } from './components/navbar/components/card-projetos/card-projetos.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardProjetosComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
      NavbarComponent
  ]

})
export class CoreModule { }
