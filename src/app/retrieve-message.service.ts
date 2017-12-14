import { Injectable } from '@angular/core';
import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class RetrieveMessageService {

  constructor() { }

  getMessages(): Observable<Message[]>{
      return of(MESSAGES);
     
  }

}
