import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreMessageService } from './store-message.service';
import { RetrieveMessageService } from './retrieve-message.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent,
          MessageDisplayComponent,
          MessageInputComponent
      ],
      imports: [FormsModule],
      providers: [StoreMessageService, RetrieveMessageService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Bears vs Heroes Slack Clone'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Bears vs Heroes Slack Clone');
  }));
});
