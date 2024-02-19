import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../Post';
import { PostService } from '../../../services/post.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css',
})
export class EditPostComponent {
  post!: Post;
  btnText: string = 'Editar';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private messagesService: MessagesService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe((item) => (this.post = item.data));
  }

  async editHandler(post: Post) {
    const id = this.post.id;
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('description', post.description);
    formData.append('image', post.image);

    await this.postService.editPost(id!, formData).subscribe();
    this.messagesService.add('Sucesso', 'Post editado com sucesso!');
    this.router.navigate(['/']);
  }
}
