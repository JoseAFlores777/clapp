import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('disabled') disabled = false;
  @Input('type') type = 'primary';
  @Input('label') label = '';

  constructor() {}

  ngOnInit(): void {}
}
