import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input('type') type!: 'noLabel' | 'plusLabel';
  @Input('label') label!: string;
  @Input('placeholder') placeholder!: string;
  @Input('disabled') disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.inizializeProps();
  }

  inizializeProps() {
    if (this.type === 'noLabel') {
      this.placeholder = this.placeholder || 'Placeholder here';
      this.label = '';
    }
    if (this.type === 'plusLabel') {
      this.label = this.label || 'Label here';
      this.placeholder = '';
    }
  }
}
