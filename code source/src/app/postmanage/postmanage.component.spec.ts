import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostmanageComponent } from './postmanage.component';

describe('PostmanageComponent', () => {
  let component: PostmanageComponent;
  let fixture: ComponentFixture<PostmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostmanageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
