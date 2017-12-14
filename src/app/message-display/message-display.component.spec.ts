import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';
import { MessageDisplayComponent } from './message-display.component';
import { MessageInputComponent } from '../message-input/message-input.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreMessageService } from '../store-message.service';

describe('MessageDisplayComponent', () => {
  let component: MessageDisplayComponent;
  let fixture: ComponentFixture<MessageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDisplayComponent, MessageInputComponent],
      imports: [FormsModule],
      providers: [StoreMessageService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
