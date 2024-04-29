import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultreportedprofiilComponent } from './consultreportedprofiil.component';

describe('ConsultreportedprofiilComponent', () => {
  let component: ConsultreportedprofiilComponent;
  let fixture: ComponentFixture<ConsultreportedprofiilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultreportedprofiilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultreportedprofiilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
