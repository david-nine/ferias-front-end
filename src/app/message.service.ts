import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  /* 
    add() uma mensagem para o cache.
  */
  add(message: string) {
    this.messages.push(message);
  }

  /* 
    clear() o cache.
  */
  clear() {
    this.messages = [];
  }

  constructor() { }
}