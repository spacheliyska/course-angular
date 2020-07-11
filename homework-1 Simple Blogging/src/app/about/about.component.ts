import { Component, OnInit } from '@angular/core';
import { Post } from '../core/Post';
import {PostStatus} from '../core/PostStatus';

@Component({
  selector: 'app-mock-posts',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
