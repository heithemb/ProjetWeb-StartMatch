import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedpostmanageComponent } from './reportedpostmanage.component';

describe('ReportedpostmanageComponent', () => {
  let component: ReportedpostmanageComponent;
  let fixture: ComponentFixture<ReportedpostmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportedpostmanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportedpostmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
