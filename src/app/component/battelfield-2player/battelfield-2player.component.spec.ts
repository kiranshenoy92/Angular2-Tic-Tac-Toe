/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Battelfield2playerComponent } from './battelfield-2player.component';

describe('Battelfield2playerComponent', () => {
  let component: Battelfield2playerComponent;
  let fixture: ComponentFixture<Battelfield2playerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Battelfield2playerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Battelfield2playerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
