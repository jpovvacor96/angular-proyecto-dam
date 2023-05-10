import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio002Component } from './ejercicio002.component';

describe('Ejercicio002Component', () => {
  let component: Ejercicio002Component;
  let fixture: ComponentFixture<Ejercicio002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio002Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
