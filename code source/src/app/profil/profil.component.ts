import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { SharedService } from '../shared.service';
import { ControllerService } from '../../controller.service';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {
  @Input() tab: Post[]=[];
    user: any;
    posts:any;
    constructor(private sharedService: SharedService,private controller : ControllerService) {}
  
    async ngOnInit() {
      this.user = this.sharedService.getUser();
      console.log(this.user.plast_name)
      this.posts = await this.controller.getPostsByIdUserInProfil(this.user.idUser).toPromise();
      if(this.user.pfirst_name){
      for (let post of this.posts.data){
        
        if (post.mediacontent){
        this.tab.push(
        new Post("data:image/jpeg;base64,"+this.user.ppic,this.user.pfirst_name+" "+this.user.plast_name,this.user.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser,"data:image/jpeg;base64,"+post.mediacontent),
        )
      }else{
        this.tab.push(
          new Post("data:image/jpeg;base64,"+this.user.ppic,this.user.pfirst_name+" "+this.user.plast_name,this.user.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser),
          )
      }
      }
    }else{
      for (let post of this.posts.data){
        
        if (post.mediacontent){
        this.tab.push(
        new Post("data:image/jpeg;base64,"+this.user.ppic,this.user.sname,this.user.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser,"data:image/jpeg;base64,"+post.mediacontent),
        )
      }else{
        this.tab.push(
          new Post("data:image/jpeg;base64,"+this.user.ppic,this.user.sname,this.user.field,post.dateofcreation,post.tags,post.textcontent,post.idpost,post.User_idUser),
          )
      }
      }
    }
    }
    
 //tab:Post[];
/* post_object={
  picture:"src/assets/347245498_3570899629797993_7265237523852668848_n.jpg",
  person_name:"Heithem Benmoussa",
  person_status:"computer science engineer",
  post_date:"",
  text_content:"",
  media_content:""
 }*/
 
 

}