import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-form-startup',
  templateUrl: './form-startup.component.html',
  styleUrl: './form-startup.component.css'
})
export class FormStartupComponent {
  constructor(public shared:SharedService ) {}
}
