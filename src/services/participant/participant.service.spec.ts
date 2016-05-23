import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ParticipantService } from './participant.service';

describe('Participant Service', () => {
  beforeEachProviders(() => [ParticipantService]);

  it('should ...',
      inject([ParticipantService], (service: ParticipantService) => {
    expect(service).toBeTruthy();
  }));
});
