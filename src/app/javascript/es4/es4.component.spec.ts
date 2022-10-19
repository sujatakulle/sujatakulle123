import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es4Component } from './es4.component';

describe('Es4Component', () => {
  let component: Es4Component;
  let fixture: ComponentFixture<Es4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Es4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Es4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
