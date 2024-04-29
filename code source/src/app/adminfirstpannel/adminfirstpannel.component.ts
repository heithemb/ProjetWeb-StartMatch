import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { Post } from '../models/post';
import { ControllerService } from '../../controller.service';
@Component({
  selector: 'app-adminfirstpannel',
  templateUrl: './adminfirstpannel.component.html',
  styleUrl: './adminfirstpannel.component.css'
})
export class AdminfirstpannelComponent {
  @Input() tab: Post[]=[

  ];
  posts:any;
  users:any;
  constructor(private controller:ControllerService) {}
  async ngOnInit() {
    this.posts = await this.controller.get('Post/selectPostByNbreports.php').toPromise();
    this.users = await this.controller.getusers().toPromise();
    for (let post of this.posts.data){
      if (post.mediacontent){
        if(this.users.data[post.user_iduser-1].pfirst_name){
      this.tab.push(
      new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].pfirst_name+" "+this.users.data[post.user_iduser-1].plast_name,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.user_iduser,"data:image/jpeg;base64,"+post.mediacontent),
      )}else{this.tab.push(
        new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].sname,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.user_iduser,"data:image/jpeg;base64,"+post.mediacontent),
      )
      }
    }else{
      if(this.users.data[post.user_iduser-1].pfirst_name){
        this.tab.push(
        new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].pfirst_name+" "+this.users.data[post.user_iduser-1].plast_name,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.user_iduser),
        )}else{this.tab.push(
          new Post("data:image/jpeg;base64,"+this.users.data[post.user_iduser-1].ppic,this.users.data[post.user_iduser-1].sname,this.users.data[post.user_iduser-1].field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.user_iduser),
        )
        }
    }console.log(post.user_iduser)
    }
    console.log(this.tab);
  }
}
