import { Component, Input, OnInit } from '@angular/core';
import { CardInterface } from '../../model/card-projetos.interface';

@Component({
  selector: 'app-card-projetos',
  templateUrl: './card-projetos.component.html',
  styleUrls: ['./card-projetos.component.scss']
})
export class CardProjetosComponent implements OnInit {
  @Input()
  cardProjetosDiretiva!: CardInterface
  
  constructor() { }

  ngOnInit(): void {
  }

}
