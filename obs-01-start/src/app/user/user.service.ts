import { EventEmitter, Injectable } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //activatedEmmitter = new EventEmitter<boolean>();
  activatedEmmitter = new Subject<boolean>();
  constructor() {}
}
