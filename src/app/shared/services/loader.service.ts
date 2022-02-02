import { ISummary } from './../interfaces/calculator.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor() { }

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }

  loaderDelay(value: ISummary) {
    return value ? of(value).pipe(delay(500)) : of({});
  }
}
