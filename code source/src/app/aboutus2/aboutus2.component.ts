import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-aboutus2',
  templateUrl: './aboutus2.component.html',
  styleUrl: './aboutus2.component.css'
})
export class Aboutus2Component {
  constructor(public shared:SharedService ) {}
}
