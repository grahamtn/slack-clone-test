import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { StoreMessageService } from './store-message.service';
import { RetrieveMessageService } from './retrieve-message.service';

@NgModule({
  declarations: [
    AppComponent,
    MessageDisplayComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StoreMessageService, RetrieveMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
