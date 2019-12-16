import { Observable, Subject } from "rxjs";

const mockData = {
  catd: 3,
  catScore: 2
};

export class SocketServiceMock {

  private messageSpy = new Subject<string>();
  private messageHandler = this.messageSpy.asObservable();

  catVote(message:any) {
    this.messageSpy.next();
  }

  onNewMessage() {
    return new Observable(observer => {
      this.messageHandler.subscribe(() => {
        observer.next(JSON.stringify(mockData));
      });
    });
  }
}
