import { TestBed } from '@angular/core/testing';

import { Ex03Service } from './ex03.service';

describe('Ex03Service', () => {
  let service: Ex03Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex03Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
