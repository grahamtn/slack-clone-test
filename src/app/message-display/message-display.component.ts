import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent implements OnInit {

  messages = MESSAGES;
  
  message: Message = {
      messageBody: 'YO DUDE!'
  };

  constructor() { }

  ngOnInit() {
  }

}
