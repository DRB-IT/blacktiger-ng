import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PushEventService } from './push-event.service';

describe('PushEventService Service', () => {
  beforeEachProviders(() => [PushEventService]);

  it('should ...',
      inject([PushEventService], (service: PushEventService) => {
    expect(service).toBeTruthy();
  }));
});
