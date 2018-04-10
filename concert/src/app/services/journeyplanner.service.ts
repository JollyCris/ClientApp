import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';

@Injectable()
export class JourneyPlannerService {

  constructor(private restClient: RestClientService) { }

  getTrainList() {
    return this.restClient.get('trainList');
  }
}
