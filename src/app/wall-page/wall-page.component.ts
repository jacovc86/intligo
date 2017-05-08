import { Component, Input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'wall-page',
  templateUrl: './wall-page.component.html',
  styleUrls: ['./wall-page.component.css']
})
export class WallPageComponent {

  @Input() wallData: Post[];
  chosenPost: Post = null;

  constructor() { }

  showPost(post: Post) {
    this.chosenPost = post;
  }
}
