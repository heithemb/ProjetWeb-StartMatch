import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReportedComponent } from './post-reported.component';

describe('PostReportedComponent', () => {
  let component: PostReportedComponent;
  let fixture: ComponentFixture<PostReportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostReportedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
