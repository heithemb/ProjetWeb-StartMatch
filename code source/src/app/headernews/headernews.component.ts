import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-headernews',
  templateUrl: './headernews.component.html',
  styleUrl: './headernews.component.css'
})
export class HeadernewsComponent {
  user: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.user = this.sharedService.getUser();
    console.log(this.user.plast_name)
  }
}
