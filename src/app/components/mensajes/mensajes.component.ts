import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { MessageIService } from '../../services/message-i.service';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrl: './mensajes.component.scss'
})
export class MensajesComponent implements OnInit {
  messages: Message[] = [];
  messages2: Message[] = [];

  constructor(private messageIService: MessageIService, private messageService: MessageService) { }
  ngOnInit() {
    this.messages = [
      { severity: 'info', detail: 'Info Message' },
      { severity: 'success', detail: 'Success Message' },
      { severity: 'warn', detail: 'Warning Message' },
      { severity: 'error', detail: 'Error Message' },
    ];
  }
    // Dynamic messages
    addMessages() {
      this.messages2 = this.messageIService.addMessagesService();
    }
    clearMessages() {
      this.messages2 = this.messageIService.clearMessagesService();
  }
  // Messages Service
  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
}

addMultiple() {
    this.messageService.addAll([
        { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
        { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }
    ]);
}

clear() {
    this.messageService.clear();
}
  }

