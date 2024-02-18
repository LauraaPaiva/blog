import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

import { PostService } from '../../../services/post.service';

import { Post } from '../../../Post';
import { Response } from '../../../Response';
import { environment } from '../../../../environmets/environmets';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allPosts: Post[] = [];
  posts: Post[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response: Response<Post[]>) => {
      this.allPosts = response.data;
      this.posts = response.data;
    });
  }
}
