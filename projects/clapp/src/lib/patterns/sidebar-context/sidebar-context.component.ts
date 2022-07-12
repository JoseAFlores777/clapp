import { state, style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cl-sidebar-context',
  templateUrl: './sidebar-context.component.html',
  styleUrls: ['./sidebar-context.component.scss'],
  animations: [
    trigger('sidebarToogle', [
      state('open', style({
        width: '216px',
      })),
      state('close', style({
        width: '64px',
      })),
      transition('close <=> open', [
        animate('0.7s ease-in-out')
      ]),
    ])
  ]
})
export class SidebarContextComponent implements OnInit {
  @Output() isCollapsedSidebar : EventEmitter<boolean> = new EventEmitter<boolean>();

  isCollapsed:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleSideBar() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedSidebar.emit(this.isCollapsed);
  }

}
