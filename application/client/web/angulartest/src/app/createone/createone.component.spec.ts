import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoneComponent } from './createone.component';

describe('CreateoneComponent', () => {
  let component: CreateoneComponent;
  let fixture: ComponentFixture<CreateoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});