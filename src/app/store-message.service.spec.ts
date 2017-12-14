import { TestBed, inject } from '@angular/core/testing';
import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { StoreMessageService } from './store-message.service';

describe('StoreMessageService', () => {

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoreMessageService]
    });
    service = TestBed.get(StoreMessageService);
    let expectedMessage: Message;
  });

  it('should be created',() => {
    expect(service).toBeTruthy();
  });

  it('should create a message', () => {
      service.createMessage("Hello");
      expect(MESSAGES[MESSAGES.length - 1].messageBody).toEqual('Hello');
  });

  it('should return a message',() => {
    expect(service.getMessages()[0].messageBody).toEqual('Yo Dude!');
  });

});
