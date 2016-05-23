import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StompService } from './stomp.service';

describe('Stomp Service', () => {
  beforeEachProviders(() => [StompService]);

  it('should ...',
      inject([StompService], (service: StompService) => {
    expect(service).toBeTruthy();
  }));
});
