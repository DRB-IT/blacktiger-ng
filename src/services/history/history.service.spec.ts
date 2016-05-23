import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HistoryService } from './history.service';

describe('History Service', () => {
  beforeEachProviders(() => [HistoryService]);

  it('should ...',
      inject([HistoryService], (service: HistoryService) => {
    expect(service).toBeTruthy();
  }));
});
