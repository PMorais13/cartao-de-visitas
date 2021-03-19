import { Component, OnInit } from '@angular/core';
import { CardInterface } from 'src/app/features/components/projects/model/card-projetos.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cardProjetosArray: Array<CardInterface> = [
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/pianinho-img.png',
      alt: 'Projeto do Pianinho',
      title: 'Pianinho',
      description: `Um piano feito com HTML, CSS e JavaScript Vanila`,
      link: 'https://github.com/PMorais13/pianinho/tree/master'
    },
    {
      src: './../../../../assets/img/dino-gamer-img.png',
      alt: 'Projeto clone do jogo do Dinossauro do Google',
      title: 'Dino Gamer Clone',
      description: `Um clone do jogo do dinossauro do Google`,
      link: 'https://github.com/PMorais13/DinoGame/tree/master'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
