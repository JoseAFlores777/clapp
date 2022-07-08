import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-sidebar-context',
  templateUrl: './sidebar-context.component.html',
  styleUrls: ['./sidebar-context.component.scss']
})
export class SidebarContextComponent implements OnInit {

  isCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleSideBar() {
    this.isCollapsed = !this.isCollapsed;
    console.log('Is Collapsed',this.isCollapsed);
  }

}
