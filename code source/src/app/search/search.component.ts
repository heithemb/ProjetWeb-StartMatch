import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(public shared:SharedService ) {}
  /* d=document.getElementById('d1');
  ngOnInit(): void {
    this.d.innerText="";
  } */
  sta:any[]=this.shared.checkedsta;
  type:any[]=this.shared.checkedtype;
  ex:any[]=this.shared.checkedex;
  field:any[]=this.shared.checkedfield;
}
