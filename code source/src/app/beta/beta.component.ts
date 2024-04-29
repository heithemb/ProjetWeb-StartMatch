import { Component, Input } from '@angular/core';
import { Post } from '../models/post';
import { Router } from '@angular/router';
import { ControllerService } from '../../controller.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrl: './beta.component.css'
})
export class BetaComponent {
  @Input() post:Post=
  {
    picture:"https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
    person_name:"Lina Belhadj",
    person_status:"Computer science student",
    post_date:" 25 Nov 2023 at 23:00",
    status:"founder",
    text_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    media_content:"https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=",
    idpost:-1,
    idUser:-1
  }
   constructor(private controller: ControllerService,private router:Router,private sharedservice:SharedService){

   }
   consult(id: any) {
    this.controller.get('User/selectUserByIdUser.php?iduser='+id).subscribe((response: any) => {
        // Login successful, share the response with the shared service
        this.sharedservice.setUserv(response);
        this.router.navigate(['/OtherPorfile']);
      
    }, (error: any) => {
      console.error(error);
      
    })}
}

 
/* 

import { Component, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrl: './beta.component.css'
})
export class BetaComponent {
  @Input() post:Post=
  {
    picture:"https://hackspirit.com/wp-content/uploads/2021/06/Copy-of-Rustic-Female-Teen-Magazine-Cover.jpg",
    person_name:"Lina Belhadj",
    person_status:"Computer science student",
    post_date:" 25 Nov 2023 at 23:00",
    status:"founder",
    text_content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    media_content:"https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE="
   }
   constructor(){

   }
} */