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

  login(email: string, password: string,uri:string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      login: email,
      password: password
    };
    return this.http.post(`${this.url}/${uri}`, data, { headers }).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
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
    return this.http.post(`${this.url}/User/createUser.php`, data, { headers }).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
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
    return this.http.post(`${this.url}/User/createUser.php`, data, { headers }).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  updatePost(idpost:any
    ,textcontent:string){
      const data_post={
      idpost:idpost,
      textcontent:textcontent
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      return this.http.put(`${this.url}/Post/updatePosttext.php`,data_post,{headers}).pipe(
        tap((response) => console.log(response)),
        catchError((error) => {
          console.error(error);
          return throwError(error);
        }));;
    }
  getreportedaccounts(){
    return this.http.get(`${this.url}/Account/selectAccountByReportsNb.php?reportsnb=1`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  getuserbyidaccount(id:any){
    return this.http.get(`${this.url}/User/selectUserByIdAccount.php?idaccount=${id}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  
  }
  getPostsByIdUserInProfil(id:any){
    return this.http.get(`${this.url}/Post/selectPostByUserIdUser.php?user_iduser=${id}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));
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
  getPostById(idPost:string){
    return this.http.get(`${this.url}/Post/selectPostByIdPost.php?idpost=${idPost}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }))
      ;
  }
  getusers() {
    return this.http.get(`${this.url}/User/selectAllUser.php`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  getPosts(){
    return this.http.get(`${this.url}/Post/selectAllPosts.php`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  get(uri: string){
    return this.http.get(`${this.url}/${uri}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  post(uri: string,payload : Object){
    return this.http.post(`${this.url}/${uri}`,payload).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  patch(uri: string,payload : Object){
    return this.http.patch(`${this.url}/${uri}`,payload).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
  delete(uri: string){
    return this.http.delete(`${this.url}/${uri}`).pipe(
      tap((response) => console.log(response)),
      catchError((error) => {
        console.error(error);
        return throwError(error);
      }));;
  }
}
