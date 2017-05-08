import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post } from '../models/post';
@Injectable()
export class PostsService {

  constructor(private _jsonp: Jsonp) { }

  getPosts(): Observable<Post[]> {
    return this._jsonp.get(`https://jsonplaceholder.typicode.com/posts?callback=JSONP_CALLBACK`)
                      .map(res => res.json());
  }
}
