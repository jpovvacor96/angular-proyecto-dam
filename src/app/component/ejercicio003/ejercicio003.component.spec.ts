import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio003Component } from './ejercicio003.component';

describe('Ejercicio003Component', () => {
  let component: Ejercicio003Component;
  let fixture: ComponentFixture<Ejercicio003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio003Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
