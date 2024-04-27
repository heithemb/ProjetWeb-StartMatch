import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private url = 'http://localhost:86/Start-matchapi/api';

  constructor(private http: HttpClient) { }

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
