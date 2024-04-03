import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultpostComponent } from './consultpost.component';

describe('ConsultpostComponent', () => {
  let component: ConsultpostComponent;
  let fixture: ComponentFixture<ConsultpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultpostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
