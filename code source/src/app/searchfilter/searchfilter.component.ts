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
  selectedFiltersA = Array.from(this.selectedFilters);
  constructor(public shared: SharedService) {}
  affich(){
    for(let item of this.selectedFiltersA){
      if (item.value in ['post','profile']){
        this.shared.checkedtype.push(item.value);
      }
      else if (item.value in ['founder','co-founder','investor']){
        this.shared.checkedsta.push(item.value);
      }
      else if (item.value in ['less than 5','between 5 and 20','more than 20']){
        this.shared.checkedex.push(item.value);
      }
      else{
        this.shared.checkedfield.push(item.value);
      }
    }
  }

}
