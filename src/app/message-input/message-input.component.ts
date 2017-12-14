import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent {

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
