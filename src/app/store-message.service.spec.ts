import { TestBed, inject } from '@angular/core/testing';
import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { StoreMessageService } from './store-message.service';

describe('StoreMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreMessageService]
    });
    let expectedMessage: Message;
  });

  it('should be created', inject([StoreMessageService], (service: StoreMessageService) => {
    expect(service).toBeTruthy();
  }));

});
