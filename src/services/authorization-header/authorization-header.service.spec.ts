import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AuthorizationHeaderService } from './authorization-header.service';

describe('AuthorizationHeader Service', () => {
  beforeEachProviders(() => [AuthorizationHeaderService]);

  it('should ...',
      inject([AuthorizationHeaderService], (service: AuthorizationHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
