import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directive2Component } from './directive2.component';

describe('Directive2Component', () => {
  let component: Directive2Component;
  let fixture: ComponentFixture<Directive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directive2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
