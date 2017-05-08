import { PostsService } from './services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: Post[];

  constructor(private _postsService: PostsService) {}

  ngOnInit() {
    this._postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }


}
