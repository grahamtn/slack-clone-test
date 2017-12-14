import { TestBed, inject, async } from '@angular/core/testing';
import { Message } from './message';
import { MESSAGES } from './mock-messages';
import { RetrieveMessageService } from './retrieve-message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('RetrieveMessageService', () => {

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveMessageService]
    });
    service = TestBed.get(RetrieveMessageService);

  });

  it('should be created',() => {
    expect(service).toBeTruthy();
  });

  it('return an observable message array', () => {
     service.getMessages().subscribe(result => expect(result.length).toBeGreaterThan(0));
    });

});
