import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadernewsComponent } from './headernews.component';

describe('HeadernewsComponent', () => {
  let component: HeadernewsComponent;
  let fixture: ComponentFixture<HeadernewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadernewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
