import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jugadores1Component } from './jugadores1.component';

describe('Jugadores1Component', () => {
  let component: Jugadores1Component;
  let fixture: ComponentFixture<Jugadores1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jugadores1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jugadores1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
