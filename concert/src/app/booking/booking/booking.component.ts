import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  navLinks = [{
    label: 'Quick Book',
    path: './quick_book',
    index: 0
  }, {
    label: 'Current Booking',
    path: './current_booking',
    index: 1
  }, {
    label: 'Journey Planner',
    path: './journeyplanner',
    index: 2
  }, {
    label: 'Indirect Journey',
    path: './indirect_journey',
    index: 3
  }];

  constructor() { }

  ngOnInit() {
  }

}
