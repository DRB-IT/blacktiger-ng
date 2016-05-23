import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PhoneBookService } from './phone-book.service';

describe('PhoneBook Service', () => {
  beforeEachProviders(() => [PhoneBookService]);

  it('should ...',
      inject([PhoneBookService], (service: PhoneBookService) => {
    expect(service).toBeTruthy();
  }));
});
