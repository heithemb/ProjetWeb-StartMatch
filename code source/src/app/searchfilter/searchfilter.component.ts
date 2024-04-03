import { Component,ElementRef, QueryList, ViewChildren} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-searchfilter',
  templateUrl: './searchfilter.component.html',
  styleUrl: './searchfilter.component.css'
})
export class SearchfilterComponent {
  @ViewChildren('checkboxes') checkboxes!: QueryList<ElementRef>;

  /*selectedFilters: ElementRef[]=[];
   getSelectedFilters() {
    const selectedFilters: ElementRef[] = this.checkboxes.filter(checkbox => checkbox.nativeElement.checked);
  } */
  /* field:any[]=['computer science','agriculture','energy','teaching','sport','food']
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
  } */
  constructor(public shared: SharedService) {}
  getSelectedFilters() {
    if (this.checkboxes) {
      const selectedFilters: ElementRef[] = this.checkboxes.filter(checkbox => checkbox.nativeElement.checked);
      // Faites quelque chose avec les filtres sélectionnés si nécessaire
    }
  }

  field: string[] = ['computer science', 'agriculture', 'energy', 'teaching', 'sport', 'food'];
  selectedFilters: ElementRef[] = [];
  selectedFiltersA: any[] = [];

  affich() {
    if (this.checkboxes) {
      this.selectedFilters = this.checkboxes.filter(checkbox => checkbox.nativeElement.checked);
      this.selectedFiltersA = this.selectedFilters.map(checkbox => checkbox.nativeElement.value);

      this.shared.checkedtype = [];
      this.shared.checkedex = [];
      this.shared.checkedfield = [];
      this.shared.checkedsta = [];

      for (let item of this.selectedFiltersA) {
        if (item === 'post' || item === 'profile') {
          if (!this.shared.checkedtype.includes(item)) {
            this.shared.checkedtype.push(item);
          }
        } else if (item === 'founder' || item === 'investor' || item === 'co-founder') {
          if (!this.shared.checkedsta.includes(item)) {
            this.shared.checkedsta.push(item);
          }
        } else if (item === 'less than 5' || item === 'between 5 and 20' || item === 'more than 20') {
          if (!this.shared.checkedex.includes(item)) {
            this.shared.checkedex.push(item);
          }
        } else {
          if (!this.shared.checkedfield.includes(item)) {
            this.shared.checkedfield.push(item);
          }
        }
      }
    }
  }

  reset() {
    if (this.checkboxes) {
      this.selectedFilters = this.checkboxes.filter(checkbox => checkbox.nativeElement.checked);
      this.selectedFiltersA = this.selectedFilters.map(checkbox => checkbox.nativeElement.value);

      this.shared.checkedtype = [];
      this.shared.checkedex = [];
      this.shared.checkedfield = [];
      this.shared.checkedsta = [];
    }
  }
}

