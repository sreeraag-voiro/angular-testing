import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { User } from '../services/users/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user = {} as User;
  @Output() reverseName = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  handleReverseName() {
    this.reverseName.emit(true);
  }
}