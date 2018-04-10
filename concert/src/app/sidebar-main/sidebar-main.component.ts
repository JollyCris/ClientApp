import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-main',
  templateUrl: './sidebar-main.component.html',
  styleUrls: ['./sidebar-main.component.scss']
})
export class SidebarMainComponent implements OnInit {

  @Output() logOut = new EventEmitter();
  @Output() toggleSidenavMain = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
