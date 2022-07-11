import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'cl-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
})
export class AvatarComponent implements OnInit {
  @Input('src') src = '';

  constructor() {}

  ngOnInit(): void {}
}
