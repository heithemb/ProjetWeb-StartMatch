import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-headeradmin',
  templateUrl: './headeradmin.component.html',
  styleUrl: './headeradmin.component.css'
})
export class HeaderadminComponent {
  userj:any;

  constructor(private sharedService: SharedService) {}
  ngOnInit() {
  this.userj = this.sharedService.getUser();
  }
    
  
}
