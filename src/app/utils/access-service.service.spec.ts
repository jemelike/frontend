import { TestBed } from '@angular/core/testing';

import { AccessServiceService } from './access-service.service';

describe('AccessServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessServiceService = TestBed.get(AccessServiceService);
    expect(service).toBeTruthy();
  });
});
