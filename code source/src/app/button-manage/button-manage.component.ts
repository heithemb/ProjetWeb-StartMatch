import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ControllerService } from '../../controller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-button-manage',
  templateUrl: './button-manage.component.html',
  styleUrl: './button-manage.component.css'
})
export class ButtonManageComponent {
  user:any;
  constructor(private sharedService: SharedService, private router: Router, private controller: ControllerService){}
  ngOnInit(){
    this.user=this.sharedService.getUser();
  }

deleteprofile(){
  this.controller.delete("User/deleteUser.php?iduser="+this.user.idUser).subscribe(response => {
    console.log(response);
    this.router.navigate(['/landingpage']);
  },(error: any) => {
    this.router.navigate(['/landingpage']);
    console.log('User delete failed:', error);
  })
  
}
}