import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinner} from '@angular/material/progress-spinner'
import { CommonModule } from '@angular/common';
import { fadeInOnEnterAnimation } from 'angular-animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatProgressSpinner, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    fadeInOnEnterAnimation()
  ]
})
export class HomeComponent {

}


