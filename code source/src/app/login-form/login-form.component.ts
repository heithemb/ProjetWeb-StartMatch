import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(public shared:SharedService ) {}
}
