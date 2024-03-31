import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonManageComponent } from './button-manage.component';

describe('ButtonManageComponent', () => {
  let component: ButtonManageComponent;
  let fixture: ComponentFixture<ButtonManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
