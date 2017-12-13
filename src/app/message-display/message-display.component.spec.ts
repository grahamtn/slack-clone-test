import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Message } from '../message';
import { MESSAGES } from '../mock-messages';
import { MessageDisplayComponent } from './message-display.component';
import { MessageInputComponent } from '../message-input/message-input.component';

describe('MessageDisplayComponent', () => {
  let component: MessageDisplayComponent;
  let fixture: ComponentFixture<MessageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageDisplayComponent ]
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
