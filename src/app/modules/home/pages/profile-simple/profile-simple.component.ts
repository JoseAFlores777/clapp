import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-simple',
  templateUrl: './profile-simple.component.html',
  styleUrls: ['./profile-simple.component.scss']
})
export class ProfileSimpleComponent implements OnInit {

  isCollapsedSidebar = false;

  constructor() { }

  ngOnInit(): void {
  }

}
