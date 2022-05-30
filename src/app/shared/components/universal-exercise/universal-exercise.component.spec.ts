import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalExerciseComponent } from './universal-exercise.component';

describe('UniversalExerciseComponent', () => {
  let component: UniversalExerciseComponent;
  let fixture: ComponentFixture<UniversalExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversalExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
