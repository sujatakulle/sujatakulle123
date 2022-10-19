import { TestBed } from '@angular/core/testing';

import { Datasharing3Service } from './datasharing3.service';

describe('Datasharing3Service', () => {
  let service: Datasharing3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Datasharing3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
