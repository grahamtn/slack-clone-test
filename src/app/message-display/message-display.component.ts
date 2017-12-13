import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';
import { FormsModule } from '@angular/forms';
import { MessageInputComponent } from '../message-input/message-input.component';

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
