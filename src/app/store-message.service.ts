import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable()
export class StoreMessageService {

  newMessage: Message;

  constructor() { }

  createMessage(input: String){
      this.newMessage = new Message(input);
      this.storeMessage(this.newMessage);
  }
  storeMessage(newMessage: Message){
      MESSAGES.push(newMessage);
  }
}
