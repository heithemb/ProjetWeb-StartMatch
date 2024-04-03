import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfirstpannelComponent } from './adminfirstpannel.component';

describe('AdminfirstpannelComponent', () => {
  let component: AdminfirstpannelComponent;
  let fixture: ComponentFixture<AdminfirstpannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminfirstpannelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminfirstpannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
