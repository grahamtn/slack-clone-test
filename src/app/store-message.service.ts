import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable()
export class StoreMessageService {

  newMessage: Message;

  constructor() {
  }

  createMessage(input:String){
      let time = new Date().toLocaleTimeString();
      this.newMessage = new Message(input, time);
      this.storeMessage(this.newMessage);
  }

  storeMessage(newMessage: Message){
      console.log(newMessage.timeStamp);
      MESSAGES.push(newMessage);
  }
}
