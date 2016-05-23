import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SystemService } from './system.service';

describe('System Service', () => {
  beforeEachProviders(() => [SystemService]);

  it('should ...',
      inject([SystemService], (service: SystemService) => {
    expect(service).toBeTruthy();
  }));
});
