import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  constructor(public shared:SharedService ) {}
}
