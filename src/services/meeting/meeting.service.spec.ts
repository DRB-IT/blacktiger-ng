import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MeetingService } from './meeting.service';

describe('Meeting Service', () => {
  beforeEachProviders(() => [MeetingService]);

  it('should ...',
      inject([MeetingService], (service: MeetingService) => {
    expect(service).toBeTruthy();
  }));
});
