import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.scss']
})
export class EnquiriesComponent implements OnInit {

  // @ViewChild('focusSetter') focusSetter: any;
  options: FormGroup;
  showSidebar: boolean = false;
  showSidebarPref: boolean = true;
  constructor(private router: Router, fb: FormBuilder) {
    this.options = fb.group({
      'fixed': true,
      'top': (document.getElementById('divHeader').offsetHeight),
      'bottom': (document.getElementById('divFooter').offsetHeight),
      // ((document.body.offsetHeight) < (screen.availHeight)) ? (document.getElementById('divFooter').offsetHeight) : 0
    });
   }

  ngOnInit() {
    this.router.events
    .subscribe((event: any) => {
      console.log(`event: ${(event)}`);
      if (event instanceof NavigationEnd) {
        // this.focusSetter.nativeElement.focus();
        this.showSidebar = (event.url !== '/enquiries');
        console.log(`event.url:${this.showSidebar}: ${event.url}`);
      }
    });
  }

}
