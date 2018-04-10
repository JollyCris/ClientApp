import { Component, OnInit } from '@angular/core';
import { JourneyPlannerService } from '../../services/journeyplanner.service';
import { TrainDetail } from '../../DTOs/TrainDetailDTO';

@Component({
  selector: 'app-jp',
  templateUrl: './jp.component.html',
  styleUrls: ['./jp.component.scss']
})
export class JpComponent implements OnInit {

  trainList: Array<TrainDetail>= [];
  showTrainList: boolean = false;

  constructor(private jpService: JourneyPlannerService) { }

  ngOnInit() {
  }

  findTrains() {
    this.showTrainList = false;
    this.jpService.getTrainList()
    .subscribe((resp: Array<TrainDetail>) => {
      this.trainList = Array.isArray(resp)? resp: Array.of(resp);
      this.trainList.forEach(train => {
        console.log('train: ' + JSON.stringify(train));
      });
      this.showTrainList = true;
    });
  }

}
