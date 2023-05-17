import { TestBed } from '@angular/core/testing';

import { Ejercicio004Service } from './ejercicio004.service';

describe('Ejercicio004Service', () => {
  let service: Ejercicio004Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ejercicio004Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
