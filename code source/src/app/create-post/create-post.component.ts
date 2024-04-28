import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ControllerService } from '../../controller.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  user: any;
  postForm: FormGroup;
  tagsFormArray: any=[];
  fieldsFormArray: any=[];
  listtags=['founder','co-founder','investor'];
  listfield=['ai','energy','finance','cs','health','FinTech','education','web','agriTech','commerce'];
  constructor(private sharedService: SharedService, private fb: FormBuilder, private controller: ControllerService) {
    this.postForm = this.fb.group({
      textcontent: [''],
      mediacontent: [''],
      tags: this.fb.array([]),
      fields: this.fb.array([]),
      user_iduser: [''],
      ai:[''],
      energy:[''],
      finance:[''],
      cs:[''],
      health:[''],
      FinTech:[''],
      education:[''],
      web:[''],
      agriTech:[''],
      commerce:[''],
      founder:[''],
      'co-founder':[''],
      investor:['']
    });
  
    
    console.log(this.tagsFormArray);
  }

  ngOnInit() {
    this.user = this.sharedService.getUser();
  }
  getBase64(file: any): any {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function ()
       {
        resolve(reader.result as string);
      };
      reader.onerror = function (error) {
        reject(error);
      };
    });
  }
 
  async onSubmit() {
    if (this.postForm.valid) {
      for(let i of this.listtags){
        if (this.postForm.get(i)?.value){
        this.tagsFormArray.push( i) }
      }
      for(let i of this.listfield){
      if(this.postForm.get(i)?.value){
        this.fieldsFormArray.push(i) }
      }
    
      const inputElement = document.querySelector('input[type="file"]') as HTMLInputElement;
      const files = inputElement.files;
      var postData: any ={
        'textcontent': this.postForm.get('textcontent')!.value,
        'tags': this.tagsFormArray.join('--'),
        'field': this.fieldsFormArray.join('--'),
        'user_iduser': this.user.idUser,
        
      }
      if (files ) {
      const file = files[0];
      var blob = new Blob([file], { type: file.type });
      await this.getBase64(blob).then((base64String : any) => {
        postData.mediacontent=base64String
        
      }).catch((error:any) => {
        console.log('Error: ', error);
      });
    } else {
      console.log('No file selected');
    }
    console.log(postData);
    this.controller.createPost(postData).subscribe(response => {
    console.log(response);
     
   }, error => {
    console.error(error);
    if (error.error && error.error.error) {
        alert(error.error.error); // Display error message to user
    } else {
       alert('An unknown error occurred. Please try again later.');
    }
  });
}
}
  }

     

