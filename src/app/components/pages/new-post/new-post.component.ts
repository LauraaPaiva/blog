import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../../Post';
import { PostService } from '../../../services/post.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  constructor(
    private postService: PostService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  btnText: string = 'Compartilhar';
  async createHandler(post: Post) {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('image', post.image);

    await this.postService.createPost(formData).subscribe();
    this.messagesService.add('Sucesso', 'Post criado com sucesso!');
    this.router.navigate(['/']);
  }
}
