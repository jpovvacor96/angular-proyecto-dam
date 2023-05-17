import { TestBed } from '@angular/core/testing';

import { Ejercicio003Service } from './ejercicio003.service';

describe('Ejercicio003Service', () => {
  let service: Ejercicio003Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio003Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
