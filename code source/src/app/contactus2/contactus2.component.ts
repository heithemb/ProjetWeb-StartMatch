import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-contactus2',
  templateUrl: './contactus2.component.html',
  styleUrl: './contactus2.component.css'
})
export class Contactus2Component {
  constructor(public shared:SharedService ) {}
}
