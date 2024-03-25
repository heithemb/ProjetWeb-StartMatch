import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfilterComponent } from './newsfilter.component';

describe('NewsfilterComponent', () => {
  let component: NewsfilterComponent;
  let fixture: ComponentFixture<NewsfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
