import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() type = 'normal';
  @Input('label') label = 'Tag';

  constructor() {}

  ngOnInit(): void {}
}
