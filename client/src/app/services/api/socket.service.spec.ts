import { SocketService } from "./socket.service";
import { Socket, SocketIoConfig } from 'ngx-socket-io';
import { Observable } from 'rxjs';

const config: SocketIoConfig = { url: 'http://localhost:9000', options: {transports: ['websocket']} };

describe('Service: Socket', () => {

  let service: SocketService;
  let socket: Socket;
  let spy: any;

  beforeEach(() => {
    socket = new Socket(config);
    service = new SocketService(socket);
  });

  afterEach(() => { 
    service = null;
    socket = null;
  });


  it('calls socket.emit when cat vote called', () => {
    spy = spyOn(socket, 'emit');
    service.catVoted();
    expect(socket.emit).toHaveBeenCalled();
  });

  it('Creates an observable socket when a new message is received', () => {
    spy = spyOn(Observable, 'create');
    service.onNewMessage();
    expect(Observable.create).toHaveBeenCalled();
  });

});
