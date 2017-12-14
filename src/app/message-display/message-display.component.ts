import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { FormsModule } from '@angular/forms';
import { MessageInputComponent } from '../message-input/message-input.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { RetrieveMessageService } from '../retrieve-message.service';
import { MessageDetailComponent } from '../message-detail/message-detail.component';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})

export class MessageDisplayComponent implements OnInit {

 messages: Message[];
 selectedMessage: Message;

  constructor(private retrieveMessageService: RetrieveMessageService) { }

  ngOnInit() {
      this.getMessages();
  }

  getMessages(): void{
        this.retrieveMessageService.getMessages()
            .subscribe(messages => this.messages = messages);
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }
}
