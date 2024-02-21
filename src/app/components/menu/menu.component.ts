import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { ContatemeComponent } from '../section-components/contateme/contateme.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  larguraMinima = false;
  constructor(private dialog: MatDialog) {
    this.validaResolucaoBolean();
  }

  ngOnInit(): void {

  }

  displayFormContate() {
    this.dialog.open(ContatemeComponent, {
      width: '700px',
      minWidth: '270px',
      height: '80%',
      maxHeight: '100%',
      panelClass: 'fade-in-out',
    });
  }

  @HostListener('window:resize', ['$event'])
  validaResolucaoBolean() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 792) {
      this.larguraMinima = true
    } else {
      this.larguraMinima = false;
    }
  }
}
