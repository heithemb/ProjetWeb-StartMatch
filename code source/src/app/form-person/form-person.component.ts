import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-form-person',
  templateUrl: './form-person.component.html',
  styleUrl: './form-person.component.css'
})
export class FormPersonComponent {
constructor(public shared:SharedService ) {}
}
