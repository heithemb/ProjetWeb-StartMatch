import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-searchfilter',
  templateUrl: './searchfilter.component.html',
  styleUrl: './searchfilter.component.css'
})
export class SearchfilterComponent {
  field:any[]=['computer science','agriculture','energy','teaching','sport','food']
  selectedFilters = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
  selectedFiltersA :any[]=[]
  constructor(public shared: SharedService) {}
  affich(){
    this.selectedFilters = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
    this.selectedFiltersA = Array.from(this.selectedFilters);
    this.shared.checkedtype.length=0;
    this.shared.checkedex.length=0;
    this.shared.checkedfield.length=0;
    this.shared.checkedsta.length=0;
    for(let item of this.selectedFiltersA){
      if ((item.value=='post') || (item.value=='profile')){
        if(!(this.shared.checkedtype.includes(item.value))){
          this.shared.checkedtype.push(item.value);
        }
        
      }
      else if ((item.value=='founder') || (item.value=='investor')||((item.value=='co-founder'))){
        if(!(this.shared.checkedsta.includes(item.value))){
          this.shared.checkedsta.push(item.value);
        }
      }
      else if ((item.value=='less than 5') || (item.value=='between 5 and 20')||(item.value=='more than 20')){
        if(!(this.shared.checkedex.includes(item.value))){
          this.shared.checkedex.push(item.value);
        }
      }
      else{
        if(!(this.shared.checkedfield.includes(item.value))){
        this.shared.checkedfield.push(item.value);
      }
    }
    }
  }
  reset(){
    this.selectedFilters = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:checked');
    this.selectedFiltersA = Array.from(this.selectedFilters);
    this.shared.checkedtype.length=0;
    this.shared.checkedex.length=0;
    this.shared.checkedfield.length=0;
    this.shared.checkedsta.length=0;
  }

}
