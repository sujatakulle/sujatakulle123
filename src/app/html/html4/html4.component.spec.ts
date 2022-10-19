import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html4Component } from './html4.component';

describe('Html4Component', () => {
  let component: Html4Component;
  let fixture: ComponentFixture<Html4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Html4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
