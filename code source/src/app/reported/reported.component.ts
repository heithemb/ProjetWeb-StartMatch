import { Component } from '@angular/core';
import { ControllerService } from '../../controller.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-reported',
  templateUrl: './reported.component.html',
  styleUrl: './reported.component.css'
})
export class ReportedComponent {

  reported:any[]=[];
  user: any;
  accounts:any;

  constructor(private controller: ControllerService,private router:Router,private sharedservice:SharedService) {}
  ngOnInit(): void {
    this.controller.getreportedaccounts().subscribe(response => {
      this.accounts = response;
      if(!this.accounts.message){
      for (let account of this.accounts.data) {
        this.controller.getuserbyidaccount(account.accountid).subscribe(response => {
          this.user=response;
        if (this.user.pfirst_name){
        this.reported.push({
          name: this.user.pfirst_name + " " + this.user.plast_name,
          image: "data:image/jpeg;base64," + this.user.ppic,
          id:this.user.idUser
        });
      }else{
        this.reported.push({
          name: this.user.sname,
          image: "data:image/jpeg;base64," + this.user.ppic,
          id:this.user.idUser
        });
      }
      })
      console.log(this.reported);
      }
    }
  
  }
    )
  }
  consult(id: any) {
    this.controller.get('User/selectUserByIdUser.php?iduser='+id).subscribe((response: any) => {
        // Login successful, share the response with the shared service
        this.sharedservice.setUserv(response);
        this.router.navigate(['/consultreportedprofiil']);
      
    }, (error: any) => {
      console.error(error);
      
    })}
  
  
  
  deleteprofile(id:any){
    this.controller.delete("User/deleteUser.php?iduser="+id).subscribe(response => {
      console.log(response);
      this.router.navigate(['/adminfirstpannel']);
    },(error: any) => {
      // If the response generates an error, the user is not found
      console.log('User delete failed:', error);
    })
    
  }
}






