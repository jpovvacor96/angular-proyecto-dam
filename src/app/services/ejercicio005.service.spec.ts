import { TestBed } from '@angular/core/testing';

import { Ejercicio005Service } from './ejercicio005.service';

describe('Ejercicio005Service', () => {
  let service: Ejercicio005Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio005Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
