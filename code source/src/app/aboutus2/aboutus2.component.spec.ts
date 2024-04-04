import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutus2Component } from './aboutus2.component';

describe('Aboutus2Component', () => {
  let component: Aboutus2Component;
  let fixture: ComponentFixture<Aboutus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Aboutus2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Aboutus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
