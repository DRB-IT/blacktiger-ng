import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { RoomService } from './room.service';

describe('Room Service', () => {
  beforeEachProviders(() => [RoomService]);

  it('should ...',
      inject([RoomService], (service: RoomService) => {
    expect(service).toBeTruthy();
  }));
});
