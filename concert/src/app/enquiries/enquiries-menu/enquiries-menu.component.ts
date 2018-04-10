import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as appconfig from '../../../environments/appconfig';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-enquiries-menu',
  templateUrl: './enquiries-menu.component.html',
  styleUrls: ['./enquiries-menu.component.scss']
})
export class EnquiriesMenuComponent implements OnInit {

  @Input() sidebar? = false;
  @Output() hideSidebar? = new EventEmitter();
  enquiriesList = appconfig.enquiriesList;
  currPath: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
    .subscribe((event: any) => {
      console.log(`event: ${(event)}`);
      if (event instanceof NavigationEnd) {
        // this.focusSetter.nativeElement.focus();
        this.currPath = event.url;
        console.log(`event.url:${this.currPath}: ${event.url}`);
      }
    });
  }

  numToChar(i: number): string {
    return String.fromCharCode(i);
  }

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}
