import { Component, OnInit } from '@angular/core';

// app services
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messagesService needed in template => NOT private
  constructor(
    public messagesService: MessagesService
  ) {};

  ngOnInit(): void {};

};
