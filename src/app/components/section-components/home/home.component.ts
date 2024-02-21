import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatProgressSpinner} from '@angular/material/progress-spinner'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MatProgressSpinner, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


