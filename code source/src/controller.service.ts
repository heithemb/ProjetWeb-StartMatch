import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SharedService } from './app/shared.service';
import { Injectable } from '@angular/core';
import { Post } from './app/models/post';
import { catchError, tap, throwError } from 'rxjs';
import { AnyCnameRecord } from 'dns';
@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  
  
  private url = 'http://localhost:86/Start-matchapi/api';
  user:any;
  constructor(private http: HttpClient ,private shared :SharedService) { 
    
  }

  signupS(email: string,
    password: string,
    phone: any,
    name: string,
    date: Date,
    address: string,
    field: string,
    bio: string,){
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      isperson:0,
      email: email,
      password: password,
      bio:bio,
      phone_num:phone,
      field:field,
      ppic:"",
      cpic:"",
      address:address,
      sname:name,
      sdateofcreation:date,
    };
    return this.http.post(`${this.url}/User/createUser.php`, data, { headers });
  }
  login(email: string, password: string,uri:string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      login: email,
      password: password
    };
    return this.http.post(`${this.url}/${uri}`, data, { headers });
  }
  
  signup(email: string,
    password: string,
    phone: any,
    firstName: string,
    lastName: string,
    yearOfExperience: any,
    dateOfBirth: Date,
    address: string,
    field: string,
    skills: string,
    bio: string,
    gender: string,
    jobPosition: string){
      const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      isperson:1,
      email: email,
      password: password,
      bio:bio,
      phone_num:phone,
      field:field,
      ppic:"",
      cpic:"",
      address:address,
      pfirst_name:firstName,
      plast_name:lastName,
      pdateofbirth:dateOfBirth,
      pjobposition:jobPosition,
      pexpertise:yearOfExperience,
      pgender:gender,
    };
    return this.http.post(`${this.url}/User/createUser.php`, data, { headers });
  }
  getreportedaccounts(){
    return this.http.get(`${this.url}/Account/selectAccountByReportsNb.php?reportsnb=1`);
  }
  getuserbyidaccount(id:any){
    return this.http.get(`${this.url}/User/selectUserByIdAccount.php?idaccount=${id}`);
  
  }
  getPostsByIdUserInProfil(id:any){
    return this.http.get(`${this.url}/Post/selectPostByUserIdUser.php?user_iduser=${id}`);
  }
  createPost(postData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    console.log(JSON.stringify(postData));
    return this.http.post('http://localhost:86/Start-matchapi/api/Post/createPost.php', postData, { headers })
    .pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  deleteUser(id:any){
    return this.http.get(`${this.url}/User/deleteUser.php?iduser=${id}`);
  }
  getusers() {
    return this.http.get(`${this.url}/User/selectAllUser.php`);
  }
  getPosts(){
    return this.http.get(`${this.url}/Post/selectAllPosts.php`);
  }
  get(uri: string){
    return this.http.get(`${this.url}/${uri}`);
  }
  post(uri: string,payload : Object){
    return this.http.post(`${this.url}/${uri}`,payload);
  }
  patch(uri: string,payload : Object){
    return this.http.patch(`${this.url}/${uri}`,payload);
  }
  delete(uri: string){
    return this.http.delete(`${this.url}/${uri}`,);
  }
}
