import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observer, Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.firstObsSubscription= interval(1000).subscribe(count=>{
    //   console.log(count);
    // })
    const customIntervalObservable: Observable<number> = Observable.create(
      (observer: Observer<any>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          if (count == 5) {
            observer.complete();
          }
          if (count > 3) {
            observer.error(new Error('Error: Count is greather than 3'));
          }
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter(data=>{
          return data>0;
        }),map((data: number) => {
          return 'Round: ' + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed!');
        }
      );
  }
}
