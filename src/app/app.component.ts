import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/section-components/home/home.component';
import { RouterModule } from '@angular/router';
import { fadeInOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class AppComponent {
  title = 'Meu portfólio - Antonio Marques';
}
