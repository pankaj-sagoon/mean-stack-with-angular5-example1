import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import * as socketIo from 'socket.io-client';
import {Message} from '../model/message';
import {SocketEvent} from '../model/event';
import {Config} from '../config/config';

const SERVER_URL = Config.domain;


@Injectable()
export class SocketService {
    private socket;

    public initSocket(): void {
        this.socket = socketIo(SERVER_URL);
    }

    public send(message: Message): void {
        this.socket.emit('message', message);
    }

    public onMessage(): Observable<Message> {
        return new Observable<Message>(observer => {
            this.socket.on('message', (data: Message) => observer.next(data));
        });
    }

    public onEvent(event: SocketEvent): Observable<any> {
        return new Observable<SocketEvent>(observer => {
            this.socket.on(event, () => observer.next());
        });
    }
}
