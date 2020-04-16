import { CommonSubjectsService } from './common-subjects.service';
import { Injectable } from '@angular/core';

import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { delay, filter, map, take } from 'rxjs/operators';


import { items } from '../../dynamic-image-list/interfaces/data';
const LISTS = items;


@Injectable({ providedIn: 'root'})

export class ApiService {
  private pageNr = 1;

  constructor(private subject: CommonSubjectsService) {

  }


  fetchItems(): Observable<any> {
    return of(this.listfilter()).pipe(take(1), delay(10000));
  }

  updateList(): Observable<any> {
    return of(this.listfilter()).pipe(
      delay(10000),
      take(1),
      map(res => {
        if (res) {
          this.subject.broadcast('list-updated', res);
        }
        return res;
      }
    ));
  }

  listfilter() {
    const page = Number(this.pageNr) - 1;
    const pageAmount = 8;

    return LISTS.slice(page * pageAmount, (page + 1) * pageAmount);
  }
  // if required to update on throwout
  paginatePage(): void {
    this.pageNr ++;
  }
}
