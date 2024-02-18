import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';
  messageTitle: string = '';

  add(messageTitle: string, message: string) {
    this.message = message;
    this.messageTitle = messageTitle;

    setTimeout(() => {
      this.clear();
    }, 4000);
  }
  clear() {
    this.message = '';
    this.messageTitle = '';
  }
}
