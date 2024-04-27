import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SharedService } from './app/shared.service';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  
  private url = 'http://localhost:86/Start-matchapi/api';
  user:any;
  constructor(private http: HttpClient ,private shared :SharedService) { 
    
  }

  login(email: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const data = {
      login: email,
      password: password
    };
    return this.http.post(`${this.url}/User/selectUserByLoginPwd.php`, data, { headers });
  }
  getPostsByIdUserInProfil(){
    this.user = this.shared.getUser();
    return this.http.get(`${this.url}/Post/selectPostByUserIdUser.php?user_iduser=${this.user.idUser}`);
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
    return this.http.delete(`${this.url}/${uri}`);
  }
}
