import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';

@Injectable()
export class StoreMessageService {

  userInputEle:any;
  newMessage: String;
  messages: String[] = [];


  constructor() {
  this.userInputEle = document.getElementById("user_input");
  }
  // createMessage(input: String){
  //     this.newMessage = new Message(input);
  //     this.storeMessage(this.newMessage);
  // }

  takeInput(){
      this.newMessage = this.userInputEle;
      this.storeMessage(this.newMessage);
  }
  storeMessage(newMessage: String){
      this.messages.push(newMessage);
  }

  getMessages(){
      return this.messages;
  }


}
