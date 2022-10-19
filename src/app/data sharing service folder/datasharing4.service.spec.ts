import { TestBed } from '@angular/core/testing';

import { Datasharing4Service } from './datasharing4.service';

describe('Datasharing4Service', () => {
  let service: Datasharing4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datasharing4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
