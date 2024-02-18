import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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

  faSearch = faSearch;
  searchTerm: string = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response: Response<Post[]>) => {
      this.allPosts = response.data;
      this.posts = response.data;
    });
  }

  search(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.posts = this.allPosts.filter((event) =>
      event.title.toLowerCase().includes(value)
    );
  }
}
