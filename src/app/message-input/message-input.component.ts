import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';
import { StoreMessageService } from '../store-message.service';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css']
})

export class MessageInputComponent {

    constructor(private storeMessageService: StoreMessageService){}

    createMessage(input:String){
        //input = new Date().toLocaleTimeString();
        this.storeMessageService.createMessage(input);
    }

}
