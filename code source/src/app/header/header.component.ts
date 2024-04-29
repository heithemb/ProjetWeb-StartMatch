import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.user = this.sharedService.getUser();

  }
}
