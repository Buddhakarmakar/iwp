import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-filter',
  standalone: true,
  imports: [],
  templateUrl: './candidate-filter.component.html',
  styleUrl: './candidate-filter.component.css'
})
export class CandidateFilterComponent {
options = [
    { id: 'option-1', name: 'Option 1' },
    { id: 'option-2', name: 'Option 2' },
    { id: 'option-3', name: 'Option 3' },
    { id: 'option-4', name: 'Option 4' },
    { id: 'option-5', name: 'Option 5' }
  ];
}
