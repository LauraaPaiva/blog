import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../Post';
import { Comment } from '../../../Comment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { environment } from '../../../../environmets/environmets';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  post?: Post;
  baseApiUrl = environment.baseApiUrl;

  faTimes = faTimes;
  faEdit = faEdit;
  commentForm!: FormGroup;

  constructor(
    private postService: PostService,
    private messagesService: MessagesService,
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe((item) => (this.post = item.data));

    this.commentForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      user: new FormControl('', [Validators.required]),
    });
  }

  get comment() {
    return this.commentForm.get('comment')!;
  }

  get user() {
    return this.commentForm.get('user')!;
  }

  async removeHandler(id: number) {
    if (id) {
      await this.postService.removePost(id).subscribe();
      this.messagesService.add('Sucesso', 'Registro excluído com sucesso!');
      this.router.navigate(['/']);
    }
  }

  async onSubmit(formDirective: FormGroupDirective) {
    if (this.commentForm.invalid) {
      return;
    }

    const data: Comment = this.commentForm.value;

    const id = Number(this.post!.id);

    await this.commentService
      .createComment(id, data)
      .subscribe((comment) => this.post!.comments!.push(comment.data));

    this.messagesService.add('Sucesso', 'Comentário adicionado!');

    this.commentForm.reset();

    formDirective.resetForm();
  }
}
