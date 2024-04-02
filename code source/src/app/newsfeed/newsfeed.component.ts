import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrl: './newsfeed.component.css'
})
export class NewsfeedComponent {
  constructor(public shared:SharedService ) {}
}
