import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css'
})
export class PrivacyComponent {
  constructor(public shared:SharedService ) {}
}