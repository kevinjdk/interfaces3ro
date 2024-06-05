import { TestBed } from '@angular/core/testing';

import { MessageIService } from './message-i.service';

describe('MessageIService', () => {
  let service: MessageIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
