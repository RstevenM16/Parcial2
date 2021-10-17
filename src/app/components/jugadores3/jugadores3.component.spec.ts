import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugadores3Component } from './jugadores3.component';

describe('Jugadores3Component', () => {
  let component: Jugadores3Component;
  let fixture: ComponentFixture<Jugadores3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jugadores3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugadores3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
