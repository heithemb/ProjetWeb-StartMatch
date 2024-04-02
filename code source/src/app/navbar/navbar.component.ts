import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(public shared:SharedService ) {}
}