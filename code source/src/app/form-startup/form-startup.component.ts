import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-startup',
  templateUrl: './form-startup.component.html',
  styleUrls: ['./form-startup.component.css'] 
})
export class FormStartupComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }
  gotonewsfeed(){
    this.router.navigate(["/newsfeed"])
  }
}


