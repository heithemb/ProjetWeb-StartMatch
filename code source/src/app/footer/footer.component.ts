import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(public shared:SharedService ) {}
}
