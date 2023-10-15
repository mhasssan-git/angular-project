import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit ,OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  constructor(private http: HttpClient, private postsservice: PostService) {}
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
  }
subscription:Subscription;
  ngOnInit() {
    this.fetchData();
   this.subscription=this.postsservice.error.subscribe(errorMessage=>{
      this.error=errorMessage;
    })
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsservice.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.fetchData();
  }

  onClearPosts() {
    this.postsservice.deletePost().subscribe(() => {
      this.loadedPosts = [];
    });
  }
  onHandleError(){
    this.error=null;
    this.isFetching=false;
  }
  private fetchData() {
    this.isFetching = true;
    this.postsservice.fetchPosts().subscribe(
      (posts) => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.error=error.message;
        this.isFetching=false;
      }
    );
  }
}
