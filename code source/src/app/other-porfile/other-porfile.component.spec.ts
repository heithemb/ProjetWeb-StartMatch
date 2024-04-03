import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPorfileComponent } from './other-porfile.component';

describe('OtherPorfileComponent', () => {
  let component: OtherPorfileComponent;
  let fixture: ComponentFixture<OtherPorfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtherPorfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherPorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
