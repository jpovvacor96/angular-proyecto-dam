import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio004Component } from './ejercicio004.component';

describe('Ejercicio004Component', () => {
  let component: Ejercicio004Component;
  let fixture: ComponentFixture<Ejercicio004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio004Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
