import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input('src') src = '';
  @Input('type') type = 'large';
  // icon = require('../../../../assets/icons');

  constructor() {}

  ngOnInit(): void {
    // if (this.src === '') {
    //   console.log('estoy vacio', this.src);
    // }
  }
}
