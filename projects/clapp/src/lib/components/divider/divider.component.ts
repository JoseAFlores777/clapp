import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss'],
})
export class DividerComponent implements OnInit {
  @Input('type') type = 'horizontal';

  constructor() {}

  ngOnInit(): void {}
}
