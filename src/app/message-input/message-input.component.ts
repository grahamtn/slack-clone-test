import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
<<<<<<< HEAD
import { MESSAGES } from '../mock-messages';
=======
import { StoreMessageService } from '../store-message.service';
>>>>>>> e65c889e3293ef9c431785ae3c269f6342c8f5bf

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css']
})
<<<<<<< HEAD
export class MessageInputComponent {
=======
export class MessageInputComponent implements OnInit {

  @Input() message: Message;

  constructor(private storeMessageService: StoreMessageService) {

  }

  ngOnInit() {
  }
>>>>>>> e65c889e3293ef9c431785ae3c269f6342c8f5bf

    textValue = 'initial value';
    log = '';

    logText(value: string): void {
        this.createMessage(this.textValue);

        //this.log += `Text changed to '${value}'\n`;
    }
    createMessage(input:String){
        let message: Message = new Message(input);
        MESSAGES.push(message);
        console.log(message.messageBody);
    }
}
