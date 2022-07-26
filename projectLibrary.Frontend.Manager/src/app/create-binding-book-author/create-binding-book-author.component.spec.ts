import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBindingBookAuthorComponent } from './create-binding-book-author.component';

describe('CreateBindingBookAuthorComponent', () => {
  let component: CreateBindingBookAuthorComponent;
  let fixture: ComponentFixture<CreateBindingBookAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBindingBookAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBindingBookAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
