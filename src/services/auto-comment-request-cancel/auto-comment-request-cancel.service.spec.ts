import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AutoCommentRequestCancelService } from './auto-comment-request-cancel.service';

describe('AutoCommentRequestCancel Service', () => {
  beforeEachProviders(() => [AutoCommentRequestCancelService]);

  it('should ...',
      inject([AutoCommentRequestCancelService], (service: AutoCommentRequestCancelService) => {
    expect(service).toBeTruthy();
  }));
});
