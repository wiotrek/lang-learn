import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskHeadlineComponent } from './task-headline.component';

describe('TaskHeadlineComponent', () => {
  let component: TaskHeadlineComponent;
  let fixture: ComponentFixture<TaskHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
