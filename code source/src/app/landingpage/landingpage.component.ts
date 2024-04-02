import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  constructor(public shared:SharedService ) {}
}
