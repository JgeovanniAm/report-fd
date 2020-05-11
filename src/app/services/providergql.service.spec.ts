import { TestBed } from '@angular/core/testing';

import { ProvidergqlService } from './providergql.service';

describe('ProvidergqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProvidergqlService = TestBed.get(ProvidergqlService);
    expect(service).toBeTruthy();
  });
});
