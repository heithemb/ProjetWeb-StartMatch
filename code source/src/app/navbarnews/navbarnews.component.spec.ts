import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarnewsComponent } from './navbarnews.component';

describe('NavbarnewsComponent', () => {
  let component: NavbarnewsComponent;
  let fixture: ComponentFixture<NavbarnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarnewsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
