import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  ReactiveFormsModule  } from '@angular/forms';
import { ControllerService } from '../../controller.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { LocalStorage } from 'ngx-webstorage';
@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginForm: FormGroup;
  invalidLogin: boolean = false;

  constructor(private formBuilder: FormBuilder, private apiService: ControllerService, private router: Router, private sharedService: SharedService) { 

  
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  

  onSubmit() {
    const emailControl = this.loginForm.get('email');
    const passwordcontrol=this.loginForm.get('password');
    if (emailControl && emailControl.value !== null) {
      const email = emailControl.value;
      if (passwordcontrol &&passwordcontrol.value !==null){
      const password = passwordcontrol.value;
      this.apiService.login(email, password,"User/selectUserByLoginPwd.php").subscribe((response: any) => {
        if (response.message) {
          this.apiService.login(email, password,"Admin/selectAdminByLoginPwd.php").subscribe((response: any) => {
            if (response.message) {
              alert("error in login password combination")
            } else {
              // Login successful, share the response with the shared service
              this.sharedService.setUser(response);
              this.router.navigate(['/adminfirstpannel']);
            }
          }, (error: any) => {
            console.error(error);
          });
        } else {
          // Login successful, share the response with the shared service
          this.sharedService.setUser(response);
          this.router.navigate(['/newsfeed']);
        }
      }, (error: any) => {
        console.error(error);
        
      });
    }
    }
  }
  

}