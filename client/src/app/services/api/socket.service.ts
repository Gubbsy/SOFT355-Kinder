import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ICatResponse } from 'src/app/models/response/cat-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  catVoted() {
    this.socket.emit('catVoted');
  }

  onNewMessage() {
    return Observable.create(observer => {
      this.socket.on('topCats', topCats => {
        observer.next(topCats);
      });
    });
  }
}
