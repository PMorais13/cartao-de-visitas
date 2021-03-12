import { Component, OnInit } from '@angular/core';
import { CardInterface } from './model/card-projetos.interface';

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
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    {
      src: './../../../../assets/img/bootstrap-img.png',
      alt: 'Projeto do Bootstrap Clone',
      title: 'BootstrapClone',
      description: `Um clone da home do Bootstrap feito em Angular`,
      link: 'https://github.com/PMorais13/BootstrapPageClone'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
