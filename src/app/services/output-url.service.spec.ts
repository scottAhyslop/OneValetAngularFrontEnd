import { TestBed } from '@angular/core/testing';

import { OutputUrlService } from './output-url.service';

describe('OutputUrlService', () => {
  let service: OutputUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
