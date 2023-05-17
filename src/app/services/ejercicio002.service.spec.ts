import { TestBed } from '@angular/core/testing';

import { Ejercicio002Service } from './ejercicio002.service';

describe('Ejercicio002Service', () => {
  let service: Ejercicio002Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio002Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
