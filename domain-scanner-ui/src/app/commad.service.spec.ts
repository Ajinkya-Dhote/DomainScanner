import { TestBed } from '@angular/core/testing';

import { CommadService } from './commad.service';

describe('CommadService', () => {
  let service: CommadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
