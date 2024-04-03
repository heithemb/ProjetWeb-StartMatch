import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePostintComponent } from './update-postint.component';

describe('UpdatePostintComponent', () => {
  let component: UpdatePostintComponent;
  let fixture: ComponentFixture<UpdatePostintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePostintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePostintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
