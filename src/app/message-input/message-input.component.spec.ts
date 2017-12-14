import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { StoreMessageService } from '../store-message.service';
import { MessageInputComponent } from './message-input.component';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputComponent ],
      imports: [FormsModule],
      providers: [StoreMessageService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a message', () => {
      component.createMessage("Hello");
      expect(MESSAGES[MESSAGES.length - 1].messageBody).toEqual('Hello');
  });

});
