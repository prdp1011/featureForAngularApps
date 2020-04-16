import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { delay, filter, map, take } from 'rxjs/operators';


import { items } from '../../dynamic-image-list/interfaces/data';
import { BroadcastEvent } from '../models/api.interface';

@Injectable({
  providedIn: 'root'
})
export class CommonSubjectsService {
  private eventBus$: Subject<BroadcastEvent> = new Subject();
  private saveState$: BehaviorSubject<BroadcastEvent> = new BehaviorSubject({key: null});
  constructor() { }

  broadcast(key: string, data?: any) {
    this.eventBus$.next({ key, data });
  }

  on(key: string): Observable<BroadcastEvent> {
      return this.eventBus$.asObservable().pipe(
            filter(event => event.key === key),
            map(event => event.data));
  }

  broadcastBehaviorSubject(key: string, data: any) {
    this.saveState$.next({ key, data });
  }

  onChangeBehaviorSubject(key: string): Observable<BroadcastEvent> {
    return this.saveState$.asObservable().pipe(
          filter(event => event.key === key),
          map(event => event.data));
  }

}

