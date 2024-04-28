import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {
    private url='localhost:86/Start-matchapi/api'
    constructor(private http:HttpClient) { }
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
