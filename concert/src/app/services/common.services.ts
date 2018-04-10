import { Injectable } from '@angular/core';
import { RestClientService } from './rest-client.service';

@Injectable()
export class CommonService {

  constructor(private restClient: RestClientService) { }

  getStationNameList(){
    return this.restClient.get('stationName');
  }
}
