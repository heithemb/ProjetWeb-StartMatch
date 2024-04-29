
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { NgClass } from '@angular/common';
import { SharedService } from '../shared.service';
import { ControllerService } from '../../controller.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-updatepost',
  templateUrl: './updatepost.component.html',
  styleUrl: './updatepost.component.css'
})
export class UpdatepostComponent implements OnInit{
   updateForm:FormGroup;
   id:any;
   id_post:any;
   post1:any;
   hell:any;
   user: any;
   constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private sharedService: SharedService,private controller : ControllerService,private apiService: ControllerService, private router: Router){
    this.updateForm = this.formBuilder.group({
      text_value: ['']
    })
    this.hell={id_post:0,
      textcontent:"",
      dateofcreation:"",
      status:"",
      mediacontent:""
  
     }
   }

   
   async ngOnInit(){
    
    this.user = this.sharedService.getUser();
    //console.log(this.user);
    const id=this.route.snapshot.paramMap.get('id'); 
    if (id!=null){ 
     this.controller.getPostById(id).subscribe(
      data=>{
        this.post1=data;

        console.log(data);
        //console.log(this.post1.tags);
        this.hell={
          id_post:this.post1.idpost,
          textcontent:this.post1.textcontent,
          dateofcreation:this.post1.dateofcreation,
          status:this.post1.tags,
          mediacontent:"data:image/jpeg;base64,"+this.post1.mediacontent
         }
         console.log(this.post1.dateofcreation);
         this.id_post=this.hell.id_post;
      
      },
      err=>{
        console.log(err);
      }
     )
    
}

   }
   savepost(){
    const text_valuecontrol = this.updateForm.get('text_value');
    if (text_valuecontrol && text_valuecontrol.value !== null) {
      const text_val = text_valuecontrol.value;

   this.apiService.
   updatePost(this.id_post,text_val).subscribe((response: any) => {
      // update avec success
      console.log("success");
      this.sharedService.setUser(response);
      
    
  }, (error: any) => {
    console.log ("error")
    console.error(error);
  });


   }
  }
  }
  

