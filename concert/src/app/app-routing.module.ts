import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JpComponent } from './booking/jp/jp.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { EnquiriesMenuComponent } from './enquiries/enquiries-menu/enquiries-menu.component';
import { AccomodationAvailabilityComponent } from './enquiries/accomodation-availability/accomodation-availability.component';
import { CurrentStatusComponent } from './enquiries/current-status/current-status.component';
import { TimeTableComponent } from './enquiries/time-table/time-table.component';
import { FareEnquiryComponent } from './enquiries/fare-enquiry/fare-enquiry.component';
import { SearchForPnrComponent } from './enquiries/search-for-pnr/search-for-pnr.component';
import { BookingDateTimeComponent } from './enquiries/booking-date-time/booking-date-time.component';
import { PnrSessionHistoryComponent } from './enquiries/pnr-session-history/pnr-session-history.component';
// tslint:disable-next-line:max-line-length
import { PassengersBookedInEachCoachComponent } from './enquiries/passengers-booked-in-each-coach/passengers-booked-in-each-coach.component';
import { PassengersBookedAfterChartingComponent } from './enquiries/passengers-booked-after-charting/passengers-booked-after-charting.component';
// tslint:disable-next-line:max-line-length
import { PassengersCancelledAfterChartingComponent } from './enquiries/passengers-cancelled-after-charting/passengers-cancelled-after-charting.component';
import { CoachPositionComponent } from './enquiries/coach-position/coach-position.component';
// tslint:disable-next-line:max-line-length
import { AccomodationAvailabilityForADestinationComponent } from './enquiries/accomodation-availability-for-a-destination/accomodation-availability-for-a-destination.component';
import { TrainsForADestinationComponent } from './enquiries/trains-for-a-destination/trains-for-a-destination.component';
import { NtesTrainStatusComponent } from './enquiries/ntes-train-status/ntes-train-status.component';
import { ChartingStatusComponent } from './enquiries/charting-status/charting-status.component';
import { BerthTypeAvailabilityComponent } from './enquiries/berth-type-availability/berth-type-availability.component';
import { CurrentBookingAvailabilityComponent } from './enquiries/current-booking-availability/current-booking-availability.component';
// tslint:disable-next-line:max-line-length
import { CurBkgAvailabilityRemoteWiseComponent } from './enquiries/cur-bkg-availability-remote-wise/cur-bkg-availability-remote-wise.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { ModificationComponent } from './modification/modification.component';
import { QuickBookComponent } from './booking/quick-book/quick-book.component';
import { DtcTxnComponent } from './my-account/dtc-txn/dtc-txn.component';
import { MyAccountComponent } from './my-account/my-account/my-account.component';
import { BookingComponent } from './booking/booking/booking.component';
import { CurrentBookingComponent } from './booking/current-booking/current-booking.component';
import { IndirectJourneyComponent } from './booking/indirect-journey/indirect-journey.component';

const routes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full'},
  { path: 'booking', component: BookingComponent,
    children: [
      { path: '', redirectTo: 'quick_book', pathMatch: 'full'},
      { path: 'quick_book', component: QuickBookComponent},
      { path: 'current_booking', component: CurrentBookingComponent},
      { path: 'journeyplanner', component: JpComponent},
      { path: 'indirect_journey', component: IndirectJourneyComponent},
    ]
  },
  { path: 'cancellation', component: CancellationComponent},
  { path: 'modification', component: ModificationComponent},
  { path: 'enquiries', component: EnquiriesComponent,
    children: [
      { path: '', component: EnquiriesMenuComponent },
      { path: 'accomodation_availability', component: AccomodationAvailabilityComponent },
      { path: 'current_status_of_passengers', component: CurrentStatusComponent },
      { path: 'time_table_enquiry', component: TimeTableComponent },
      { path: 'fare_enquiry', component: FareEnquiryComponent },
      { path: 'search_for_pnr', component: SearchForPnrComponent },
      { path: 'booking_date_time', component: BookingDateTimeComponent },
      { path: 'pnr_session_history', component: PnrSessionHistoryComponent },
      { path: 'passegners_booked_in_each_coach', component: PassengersBookedInEachCoachComponent },
      { path: 'passengers_booked_after_charting', component: PassengersBookedAfterChartingComponent },
      { path: 'passengers_cancelled_after_charting', component: PassengersCancelledAfterChartingComponent },
      { path: 'coach_position_enquiry', component: CoachPositionComponent },
      { path: 'accommodation_avlblty_for_a_dstn', component: AccomodationAvailabilityForADestinationComponent },
      { path: 'all_trains_for_a_destination', component: TrainsForADestinationComponent },
      { path: 'ntes_train_status', component: NtesTrainStatusComponent },
      { path: 'charting_status', component: ChartingStatusComponent },
      { path: 'berth_type_availability', component: BerthTypeAvailabilityComponent },
      { path: 'current_booking_availability', component: CurrentBookingAvailabilityComponent },
      { path: 'cur_bkg_availability_remote_wise', component: CurBkgAvailabilityRemoteWiseComponent },
    ]
  },
  { path: 'my', component: MyAccountComponent,
    children: [
      { path: '', component: DtcTxnComponent},
      { path: 'dtc_txn', component: DtcTxnComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
