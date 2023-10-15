import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable()
export class PostService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}
  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http
      .post(
        'https://ng-complete-guid-864c3-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
            observe:'response'
        }
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }
  fetchPosts() {
    
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guid-864c3-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello',
          }),
          params: new HttpParams()
            .append('print', 'pretty')
            .append('custom', 'key'),
        }
      )
      .pipe(
        map((response) => {
          const postArray: Post[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key))
              postArray.push({ ...response[key], id: key });
          }
          return postArray;
        }),
        catchError((errorRes) => {
          return throwError(() => errorRes);
        })
      );
  }
  deletePost() {
    return this.http.delete(
      'https://ng-complete-guid-864c3-default-rtdb.firebaseio.com/posts.json',
      {
        observe:'events'
      }
    ).pipe(tap(event=>{
        console.log(event);
        if(event.type==HttpEventType.Sent){
            `//console.log(event.body);`
        }
        if(event.type==HttpEventType.Response){
            console.log(event.body);
        }
    }));
  }
}
