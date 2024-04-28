import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Post } from '../models/post';
import { ControllerService } from '../../controller.service';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrl: './newsfeed.component.css'
})
export class NewsfeedComponent {
  @Input() tab: Post[]=[

  ];
  posts:any;
  users:any;
  constructor(public shared:SharedService,private controller:ControllerService ) {}
  async ngOnInit() {
    this.posts = await this.controller.getPosts().toPromise();
    this.users = await this.controller.getusers().toPromise();
    for (let post of this.posts.data){
      if (post.mediacontent){
        if(this.users.data[post.user_iduser-1].pfirst_name){
      this.tab.push(
      new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].pfirst_name+" "+this.users.data[post.user_iduser-1].plast_name,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent,"data:image/jpeg;base64,"+post.mediacontent),
      )}else{this.tab.push(
        new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].sname,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent,"data:image/jpeg;base64,"+post.mediacontent),
      )
      }
    }else{
      if(this.users.data[post.user_iduser-1].pfirst_name){
        this.tab.push(
        new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].pfirst_name+" "+this.users.data[post.user_iduser-1].plast_name,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent),
        )}else{this.tab.push(
          new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].sname,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent),
        )
        }
    }console.log(post.user_iduser-1)
    }
    console.log(this.tab);
  }
}
