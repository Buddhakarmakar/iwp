import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
 const CandidatesData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    meetingTime: '10:00 AM',
    panelistName: 'Jane Smith',
    coPanelistName: 'Bob Johnson'
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '987-654-3210',
    meetingTime: '11:00 AM',
    panelistName: 'John Smith',
    coPanelistName: 'Alice Brown'
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '555-123-4567',
    meetingTime: '12:00 PM',
    panelistName: 'Jane Johnson',
    coPanelistName: 'Mike Davis'
  },
  {
    id: 4,
    name: 'Alice Brown',
    email: 'alice.brown@example.com',
    phone: '901-234-5678',
    meetingTime: '1:00 PM',
    panelistName: 'Bob Smith',
    coPanelistName: 'Emily Chen'
  },
  {
    id: 5,
    name: 'Mike Davis',
    email: 'mike.davis@example.com',
    phone: '111-222-3333',
    meetingTime: '2:00 PM',
    panelistName: 'Alice Brown',
    coPanelistName: 'David Lee'
  },
  {
    id: 6,
    name: 'Emily Chen',
    email: 'emily.chen@example.com',
    phone: '444-555-6666',
    meetingTime: '3:00 PM',
    panelistName: 'Mike Davis',
    coPanelistName: 'Sarah Taylor'
  },
  {
    id: 7,
    name: 'David Lee',
    email: 'david.lee@example.com',
    phone: '777-888-9999',
    meetingTime: '4:00 PM',
    panelistName: 'Emily Chen',
    coPanelistName: 'Kevin White'
  },
  {
    id: 8,
    name: 'Sarah Taylor',
    email: 'sarah.taylor@example.com',
    phone: '333-444-5555',
    meetingTime: '5:00 PM',
    panelistName: 'David Lee',
    coPanelistName: 'Olivia Martin'
  },
  {
    id: 9,
    name: 'Kevin White',
    email: 'kevin.white@example.com',
    phone: '666-777-8888',
    meetingTime: '6:00 PM',
    panelistName: 'Sarah Taylor',
    coPanelistName: 'Ava Harris'
  },
  {
    id: 10,
    name: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    phone: '999-000-1111',
    meetingTime: '7:00 PM',
    panelistName: 'Kevin White',
    coPanelistName: 'Isabella Garcia'
  }
];
@Component({
  selector: 'app-candidate-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './candidate-table.component.html',
  styleUrl: './candidate-table.component.css'
})
export class CandidateTableComponent {
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['id', 'name', 'email', 'phone','meetingTime','panelistName','coPanelistName'];

  // dataSource = ELEMENT_DATA;
  dataSource = CandidatesData;


}
