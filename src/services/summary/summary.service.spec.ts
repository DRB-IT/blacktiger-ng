import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SummaryService } from './summary.service';

describe('Summary Service', () => {
  beforeEachProviders(() => [SummaryService]);

  it('should ...',
      inject([SummaryService], (service: SummaryService) => {
    expect(service).toBeTruthy();
  }));
});
