import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  user: any;

  constructor(private sharedService: SharedService) {}
  ngOnInit() {
    this.user = this.sharedService.getUser();}
}
