import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [MatExpansionModule, NgbCarouselModule, CommonModule, FormsModule],
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  panelOpenState = false;
  imagensBus = [
    'assets/listcardbus/img01-bus.png',
    'assets/listcardbus/img1-bus.png',
    'assets/listcardbus/img2-bus.png',
    'assets/listcardbus/img3-bus.png',
    'assets/listcardbus/img4-bus.png',
    'assets/listcardbus/img5-bus.png',
    'assets/listcardbus/img6-bus.png',
    'assets/listcardbus/img7-bus.png',
    'assets/listcardbus/img8-bus.png',
    'assets/listcardbus/img9-bus.png',
    'assets/listcardbus/img10-bus.png',
    'assets/listcardbus/img11-bus.png',
    'assets/listcardbus/img12-bus.png',
  ];

  imagensGambi = [
    'assets/listcardgamb/img00-gamb.png',
    'assets/listcardgamb/img01-gamb.png',
    'assets/listcardgamb/img02-gamb.png',
    'assets/listcardgamb/img03-gamb.png',
    'assets/listcardgamb/img04-gamb.png',
    'assets/listcardgamb/img05-gamb.png',
    'assets/listcardgamb/img06-gamb.png',
    'assets/listcardgamb/img07-gamb.png'
  ];
  imagensMedical = [
    'assets/listcardmedical/img02-medical.png',
    'assets/listcardmedical/img01-medical.png'
  ];
  imagensSugar = [
    'assets/listcardsugar/img01-sugar.png'
  ]
}
