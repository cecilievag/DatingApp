import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from 'src/app/services';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent {
  @ViewChild('messageForm') messageForm?: NgForm;

  @Input()
  username?: string;

  messageContent = '';

  constructor(public messageService: MessagesService) {}

  sendMessage() {
    if (!this.username) return;
    this.messageService.sendMessage(this.username, this.messageContent).then(() => {
      this.messageForm?.reset();
    })
  }
}
