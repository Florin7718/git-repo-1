import { Injectable } from '@angular/core';
import { Subscriber, Observable } from 'rxjs';
import { Alert } from '../components/app-message-panel/app-message-panel.component';

@Injectable()
export class AppMessageBusService {

  private subscriber: Subscriber<Alert>;

  constructor() { }

  public watchAlerts(): Observable<Alert> {
    let myObservable = Observable.create(observer => {
      this.subscriber = observer;
    });
    return myObservable;
  }

  public createAlerts(alert: Alert) {
    this.subscriber.next(alert);
  }

}