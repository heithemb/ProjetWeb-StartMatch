/*import { Component } from '@angular/core';  */
import { SharedService } from '../shared.service';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  divVisible: boolean = true; 
  divVisible2: boolean = false; 

  constructor(public shared:SharedService,private elementRef: ElementRef) { }

  handleClick(event: Event) {
    this.divVisible = false;
    this.divVisible2 = true;

    }

  ngAfterViewInit() {
    const div = this.elementRef.nativeElement.querySelector('#myButt');

    const buttonElement = this.elementRef.nativeElement.querySelector('#myButt');
    buttonElement.addEventListener('click', this.handleClick.bind(this));
  }

}