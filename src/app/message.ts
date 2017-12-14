export class Message {
  messageBody: String;
  timeStamp: String;

  constructor(body: String, time: String){
      this.messageBody = body;
      this.timeStamp = time;
  }
}
