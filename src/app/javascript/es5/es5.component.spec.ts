import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Es5Component } from './es5.component';

describe('Es5Component', () => {
  let component: Es5Component;
  let fixture: ComponentFixture<Es5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Es5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Es5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
