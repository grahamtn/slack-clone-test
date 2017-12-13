import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
  }



}
