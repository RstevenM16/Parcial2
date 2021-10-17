import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugadores2Component } from './jugadores2.component';

describe('Jugadores2Component', () => {
  let component: Jugadores2Component;
  let fixture: ComponentFixture<Jugadores2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jugadores2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugadores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
