import { TestBed } from '@angular/core/testing';

import { Datasharing1Service } from './datasharing1.service';

describe('Datasharing1Service', () => {
  let service: Datasharing1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datasharing1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
