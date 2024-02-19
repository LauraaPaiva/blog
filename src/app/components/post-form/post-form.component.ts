import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Post } from '../../Post';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  @Output() onSubmit = new EventEmitter<Post>();
  @Input() btnText!: string;
  @Input() postData!: Post;
  postForm!: FormGroup;

  ngOnInit(): void {
    this.postForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(this.postData ? this.postData.title : '', [
        Validators.required,
      ]),
      description: new FormControl(
        this.postData ? this.postData.description : '',
        [Validators.required]
      ),
      image: new FormControl(this.postData ? this.postData.image : '', [
        Validators.required,
      ]),
    });
  }

  get title() {
    return this.postForm.get('title')!;
  }

  get description() {
    return this.postForm.get('description')!;
  }

  get image() {
    return this.postForm.get('image')!;
  }

  submit() {
    if (this.postForm.invalid) return;
    console.log('Formulário enviado');

    this.onSubmit.emit(this.postForm.value);
  }
}
