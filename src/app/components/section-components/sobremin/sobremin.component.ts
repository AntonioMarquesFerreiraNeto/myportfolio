import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-sobremin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobremin.component.html',
  styleUrl: './sobremin.component.css',
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class SobreminComponent {

  larguraMinima = false;
  trueAboutImagem = false;
  constructor() {
    this.validaResolucaoBolean();
  }

  @HostListener('window:resize', ['$event'])
  validaResolucaoBolean() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 952) {
      this.larguraMinima = true
    } else {
      this.larguraMinima = false;
    }
    if (screenWidth <= 700) {
      this.trueAboutImagem = true;
    } else {
      this.trueAboutImagem = false;
    }
  }
}
