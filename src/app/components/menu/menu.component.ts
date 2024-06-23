import { Component, HostListener, LOCALE_ID, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ContatemeComponent } from '../section-components/contateme/contateme.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, registerLocaleData } from '@angular/common';
import { NotificationService } from '../../services/notification.service';
import { Notificacao } from '../../interfaces/Notificacao';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, MatMenuModule, MatButtonModule],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  larguraMinima = false;
  constructor(private dialog: MatDialog, private router: Router, private notificationService: NotificationService, private datePipe: DatePipe) {
    this.validaResolucaoBolean();
  }

  ngOnInit(): void {

  }

  displayFormContate() {
    this.dialog.open(ContatemeComponent, {
      width: '700px',
      minWidth: '300px',
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

  validaRota(nameComponent: string): boolean {
    const currentRole = this.router.routerState.snapshot.url;
    const firstSegment = currentRole.split('/')[1];
    return firstSegment == nameComponent;
  }

  SendNotification() {
    const dataAtual = Date();
    const notificacao: Notificacao = {
      mensagem: "Antonio, informamos que seu currículo foi baixado no seu portfolio recentemente.",
      dataPublication: this.datePipe.transform(dataAtual, 'dd \'de\' LLLL \'de\' YYYY \'às\' HH:mm\'.\'')!.toString()
    };
    this.notificationService.SendNotification(notificacao).subscribe();
  }
}
