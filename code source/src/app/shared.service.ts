import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private user: any;
  checkedsta:any[]=[];
  checkedtype:any[]=[];
  checkedex:any[]=[];
  checkedfield:any[]=[];

  constructor() {}
  setUser(user: any) {
    this.user = user;
  }

  getUser() {
    return this.user;
  }
  }

