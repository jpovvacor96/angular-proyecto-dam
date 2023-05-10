import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio001Component } from './ejercicio001.component';

describe('Ejercicio001Component', () => {
  let component: Ejercicio001Component;
  let fixture: ComponentFixture<Ejercicio001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio001Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
