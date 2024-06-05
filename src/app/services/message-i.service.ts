import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
//import { Messages } from 'primeng/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageIService {

  constructor() { }

  addMessagesService(): Message[] {
    return [
      { severity: 'info', summary: 'Dynamic Info Message', detail: 'Detail for info message' },
      { severity: 'success', summary: 'Dynamic Success Message', detail: 'Detail for success message' },
      { severity: 'warn', summary: 'Dynamic Warning Message', detail: 'Detail for warning message' }
    ];
  }
  clearMessagesService(): Message[] {
    return []
}
}
