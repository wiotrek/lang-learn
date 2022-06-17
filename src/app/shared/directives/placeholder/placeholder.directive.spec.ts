import { PlaceholderDirective } from 'src/app/shared/directives/placeholder/placeholder.directive';
import { TestBed } from '@angular/core/testing';
import { ViewContainerRef } from '@angular/core';

describe('PlaceholderDirective', () => {

  let viewContainerRef: ViewContainerRef;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: ViewContainerRef, useValue: viewContainerRef }
      ]
    })
      .compileComponents();
  });

  it('should create an instance', () => {
    const directive = new PlaceholderDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
