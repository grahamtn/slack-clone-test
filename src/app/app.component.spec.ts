import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageDisplayComponent } from './message-display/message-display.component';
import { MessageInputComponent } from './message-input/message-input.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent,
          MessageDisplayComponent,
          MessageInputComponent
      ],
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
