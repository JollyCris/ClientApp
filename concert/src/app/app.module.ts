import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { StoreModule, Store } from '@ngrx/store';
import { reducers, metaReducers } from './reducers/reducers';
import { AppState } from './reducers/app.states';
import * as themeReducer from './reducers/theme.reducer';
import { Theme } from './models/theme';

import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';

import { AppComponent, LoginDialogComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingModule } from './booking/booking.module';
import { EnquiriesModule } from './enquiries/enquiries.module';
import { ServicesModule } from './services/services.module';
import { MyMaterialComponentsModule } from './my-material-components/my-material-components.module';
import { CancellationModule } from './cancellation/cancellation.module';
import { ModificationModule } from './modification/modification.module';
import { MyAccountModule } from './my-account/my-account.module';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { SidebarMainComponent } from './sidebar-main/sidebar-main.component';

export class AppDateAdapter extends NativeDateAdapter {
  parse(value: any): Date | null {
    if ((typeof value === 'string') && (value.indexOf('/') > -1)) {
      const str = value.split('-');
      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);
      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return this._to2digit(day) + '-' + this._to2digit(month) + '-' + year;
    } else {
        return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}

export const APP_DATE_FORMATS = {
    parse: {
        dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
    display: {
        dateInput: 'input',
        monthYearLabel: { year: 'numeric', month: 'numeric' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginDialogComponent,
    AnalogClockComponent,
    SidebarMainComponent
  ],
  entryComponents: [LoginDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule, ReactiveFormsModule,
    MyMaterialComponentsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    BookingModule,
    EnquiriesModule,
    CancellationModule,
    ModificationModule,
    MyAccountModule
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: AppDateAdapter
    }, {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(overlayContainer: OverlayContainer, private store: Store<AppState>) {
    this.store.select(themeReducer.getTheme).subscribe((theme: Theme) => {
      overlayContainer.getContainerElement().classList.remove('theme-purple');
      overlayContainer.getContainerElement().classList.remove('theme-blue-grey');
      overlayContainer.getContainerElement().classList.remove('theme-teal');
      overlayContainer.getContainerElement().classList.add(theme.theme);
      console.log(`${overlayContainer.getContainerElement().classList}`);
    });
  }
}
