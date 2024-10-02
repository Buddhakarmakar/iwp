import { Component } from '@angular/core';
import { CandidateFilterComponent } from "./candidate-filter/candidate-filter.component";
import { CandidateTableComponent } from "./candidate-table/candidate-table.component";
import { PaginatorComponent } from "../paginator/paginator.component";

@Component({
  selector: 'app-candidates',
  standalone: true,
  imports: [CandidateFilterComponent, CandidateTableComponent, PaginatorComponent],
  templateUrl: './candidates.component.html',
  styleUrl: './candidates.component.css'
})
export class CandidatesComponent {

}
