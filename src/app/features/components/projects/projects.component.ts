import { Component, OnInit } from '@angular/core';
import { CardInterface } from './model/card-projetos.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  cardProjetosArray: Array<CardInterface> = [
    {
      src: './../../../../assets/img/food-card-img.png',
      alt: 'Imagem do projeto Food-Card',
      title: 'Food Card',
      description: 'Uma SPA de restaurante feita em Angular 8',
      link: 'https://github.com/PMorais13/food-card'
    },
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
    },
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
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
