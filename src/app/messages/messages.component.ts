import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * O Angular injetará o singleton MessageService 
   * nessa propriedade ao criar o MessagesComponent.
   * 
   * A messageService propriedade deve ser pública 
   * porque você vai vinculá-la ao modelo.
   * 
   * Angular se vincula apenas a propriedades de 
   * componentes públicos .
   * @param messageService 
   */
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
