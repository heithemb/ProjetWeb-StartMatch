import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactus2Component } from './contactus2.component';

describe('Contactus2Component', () => {
  let component: Contactus2Component;
  let fixture: ComponentFixture<Contactus2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Contactus2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Contactus2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
