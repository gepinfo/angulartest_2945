import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetwoComponent } from './createtwo.component';

describe('CreatetwoComponent', () => {
  let component: CreatetwoComponent;
  let fixture: ComponentFixture<CreatetwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});