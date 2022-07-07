import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input('disabled') disabled = false;
  @Input('text') text = 'Call to Action';

  constructor() {}

  ngOnInit(): void {}
}
