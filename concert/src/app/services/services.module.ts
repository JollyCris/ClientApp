import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RestClientService } from './rest-client.service';
import { CommonService } from './common.services';
import { JourneyPlannerService } from './journeyplanner.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    RestClientService,
    CommonService,
    JourneyPlannerService
  ]
})
export class ServicesModule { }
