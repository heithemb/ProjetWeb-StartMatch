import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headerlanding2Component } from './headerlanding2.component';

describe('Headerlanding2Component', () => {
  let component: Headerlanding2Component;
  let fixture: ComponentFixture<Headerlanding2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Headerlanding2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Headerlanding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
