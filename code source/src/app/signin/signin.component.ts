import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public shared:SharedService ) {}
}
