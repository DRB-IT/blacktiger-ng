import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SipUserService } from './sip-user.service';

describe('SipUser Service', () => {
  beforeEachProviders(() => [SipUserService]);

  it('should ...',
      inject([SipUserService], (service: SipUserService) => {
    expect(service).toBeTruthy();
  }));
});
