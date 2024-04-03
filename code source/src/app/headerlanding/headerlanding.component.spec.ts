import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlandingComponent } from './headerlanding.component';

describe('HeaderlandingComponent', () => {
  let component: HeaderlandingComponent;
  let fixture: ComponentFixture<HeaderlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderlandingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
