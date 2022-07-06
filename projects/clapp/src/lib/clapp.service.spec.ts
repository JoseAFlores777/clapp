import { TestBed } from '@angular/core/testing';

import { ClappService } from './clapp.service';

describe('ClappService', () => {
  let service: ClappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
