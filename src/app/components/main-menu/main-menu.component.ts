import { Component } from '@angular/core';
import { CandidatesComponent } from '../candidates/candidates.component';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [CandidatesComponent],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

}
