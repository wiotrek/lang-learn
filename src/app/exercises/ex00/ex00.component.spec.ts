import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex00Component } from './ex00.component';

describe('Ex00Component', () => {
  let component: Ex00Component;
  let fixture: ComponentFixture<Ex00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex00Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
