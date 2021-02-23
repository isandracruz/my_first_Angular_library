import { TestBed } from '@angular/core/testing';

import { MyClockService } from './my-clock.service';

describe('MyClockService', () => {
  let service: MyClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
