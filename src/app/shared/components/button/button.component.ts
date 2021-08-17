import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() url: string;
  @Input() text: string;
  @Input() size: string;
  @Input() type: string;
  @Input() color: string;
  @Input() disabled: boolean;
  constructor() {
    this.url = '';
    this.text = '';
    this.type = 'button';
    this.color = 'blue';
    this.disabled = false;
    this.size = 'phone';
  }
  ngOnInit(): void {}
}
