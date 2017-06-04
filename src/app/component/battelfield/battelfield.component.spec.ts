/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BattelfieldComponent } from './battelfield.component';

describe('BattelfieldComponent', () => {
  let component: BattelfieldComponent;
  let fixture: ComponentFixture<BattelfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattelfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattelfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
