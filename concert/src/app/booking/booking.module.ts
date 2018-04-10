import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialComponentsModule } from '../my-material-components/my-material-components.module';
import { AppRoutingModule } from '../app-routing.module';
import { JpInputComponent } from './jp-input/jp-input.component';
import { TrainListComponent } from './train-list/train-list.component';
import { FilterTrainListComponent } from './filter-train-list/filter-train-list.component';
import { TrainComponent, TimeTableDialogComponent, FareDetailsDialogComponent } from './train/train.component';
import { JpComponent } from './jp/jp.component';
import { QuickBookComponent } from './quick-book/quick-book.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerComponent } from './passenger/passenger.component';
import { EnquiriesModule } from '../enquiries/enquiries.module';
import { BookingComponent } from './booking/booking.component';
import { CurrentBookingComponent } from './current-booking/current-booking.component';
import { IndirectJourneyComponent } from './indirect-journey/indirect-journey.component';

@NgModule({
  imports: [
    CommonModule,
    MyMaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    EnquiriesModule
  ],
  entryComponents: [FareDetailsDialogComponent, TimeTableDialogComponent],
  declarations: [JpInputComponent, TrainListComponent, FilterTrainListComponent, TrainComponent, JpComponent, QuickBookComponent,
    PassengerListComponent, PassengerComponent, FareDetailsDialogComponent, TimeTableDialogComponent, BookingComponent,
    CurrentBookingComponent, IndirectJourneyComponent]
})
export class BookingModule { }
