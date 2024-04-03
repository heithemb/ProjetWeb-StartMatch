import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-adminfirstpannel',
  templateUrl: './adminfirstpannel.component.html',
  styleUrl: './adminfirstpannel.component.css'
})
export class AdminfirstpannelComponent {
  constructor(public shared:SharedService ) {}
}
