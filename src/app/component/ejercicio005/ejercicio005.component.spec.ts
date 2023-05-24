import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio005Component } from './ejercicio005.component';

describe('Ejercicio005Component', () => {
  let component: Ejercicio005Component;
  let fixture: ComponentFixture<Ejercicio005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio005Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
