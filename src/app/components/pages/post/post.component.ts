import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../Post';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  post!: Post;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
    private postService: PostService,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe((item) => (this.post = item.data));
  }

  async removeHandler(id: number) {
    if (id) {
      await this.postService.removeMoment(id).subscribe();
      this.messagesService.add('Sucesso', 'Registro excluído com sucesso!');
      this.router.navigate(['/']);
    }
  }
}
