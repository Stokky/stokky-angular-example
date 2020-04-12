import { Injectable } from '@angular/core';

// app types
import { MessageInterface } from './types';

@Injectable()
export class MessagesService {

  messages: MessageInterface[] = [];

  // mapping message-types to material-icons
  msgIconTexts: Object = {
    success: 'check_circle',
    warning: 'error',
    error: 'cancel'
  };

  constructor() {};

  showMessage(msgHtml: string, msgType: 'success' | 'warning' | 'error'): void {
    const msgTimestamp: number = Date.now();
    this.messages.push({
      msgTimestamp: msgTimestamp,
      msgHtml: msgHtml,
      msgType: msgType,
      msgIconText: this.msgIconTexts[msgType],
      msgActive: true
    });
    this.waitDeleteMessage(msgTimestamp);
  };

  waitDeleteMessage(msgTimestamp: number): void {
    // fade-out the message after a few seconds
    setTimeout( () => {
      this.messages.forEach(message => {
        if (message.msgTimestamp === msgTimestamp) {
          message.msgActive = false;
        }
      });
    }, 3000);
    // delete the message after a few more seconds
    setTimeout( () => {
      this.messages = this.messages.filter(message => message.msgTimestamp !== msgTimestamp);
    }, 4000);
  };

};
