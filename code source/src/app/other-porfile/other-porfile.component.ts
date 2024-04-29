import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { ControllerService } from '../../controller.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-other-porfile',
  templateUrl: './other-porfile.component.html',
  styleUrl: './other-porfile.component.css'
})
export class OtherPorfileComponent {
  @Input() iduser:number=0;
  tab: Post[]=[];
  posts:any;
  userv:any;
  userj:any;
  constructor(private sharedService: SharedService,private controller : ControllerService) {
    
  }
  async ngOnInit() {
    this.userj = this.sharedService.getUser();
    this.userv = this.sharedService.getUserv();
    this.posts = await this.controller.getPostsByIdUserInProfil(this.userv.idUser).toPromise();
    console.log(this.posts);
    if(this.posts){
    if(this.userv.pfirst_name){
    for (let post of this.posts.data){
      
      if (post.mediacontent){
      this.tab.push(
      new Post("data:image/jpeg;base64,"+this.userv.ppic,this.userv.pfirst_name+" "+this.userv.plast_name,this.userv.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser,"data:image/jpeg;base64,"+post.mediacontent),
      )
    }else{
      this.tab.push(
        new Post("data:image/jpeg;base64,"+this.userv.ppic,this.userv.pfirst_name+" "+this.userv.plast_name,this.userv.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser),
        )
    }
    }
  }else{
    for (let post of this.posts.data){
      
      if (post.mediacontent){
        this.tab.push(
          new Post("data:image/jpeg;base64,"+this.userv.ppic,this.userv.sname,this.userv.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser,"data:image/jpeg;base64,"+post.mediacontent),
          )
        }else{
          this.tab.push(
            new Post("data:image/jpeg;base64,"+this.userv.ppic,this.userv.sname,this.userv.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser),
            )
        }
        }
      }
      
      }
      console.log(this.tab);
    }
    }
  



