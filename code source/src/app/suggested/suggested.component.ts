import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControllerService } from '../../controller.service';

@Component({
  selector: 'app-suggested',
  templateUrl: './suggested.component.html',
  styleUrls: ['./suggested.component.css'] // note the 's' in styleUrls
})
export class SuggestedComponent implements OnInit {
  users: any;
  suggested: any[] = []; // initialize the suggested array

  constructor(private controller: ControllerService) {}

  ngOnInit(): void {
    this.controller.getusers().subscribe(response => {
      this.users = response;
      for (let user of this.users.data) {
        if (user.pfirst_name){
        this.suggested.push({
          name: user.pfirst_name + " " + user.plast_name,
          image: "data:image/jpeg;base64," + user.ppic,
          id:user.idUser
        });
      }else{
        this.suggested.push({
          name: user.sname,
          image: "data:image/jpeg;base64," + user.ppic,
          id:user.idUser
        });
      }
      }
      console.log(this.suggested);
    });
  }
}
  


  







 


