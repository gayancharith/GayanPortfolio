import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'site-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() id: string;
  @Input() text: string;
  @Input() showIcon: boolean;

  @Output() clickEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  emitClickEvent(event){
    event.stopPropagation();
    this.clickEvent.emit();
  }
}
