import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAffComponent } from './post-aff.component';

describe('PostAffComponent', () => {
  let component: PostAffComponent;
  let fixture: ComponentFixture<PostAffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostAffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostAffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
