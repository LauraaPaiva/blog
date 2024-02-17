import { Component } from '@angular/core';
import { Post } from '../../../Post';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  constructor(private postService: PostService) {}

  btnText: string = 'Compartilhar';
  async createHandler(post: Post) {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('image', post.image);

    await this.postService.createPost(formData).subscribe();
  }
}
