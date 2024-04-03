import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  constructor(public shared:SharedService ) {}
}
