import { Component, OnInit, Input } from '@angular/core';
import { TrainDetail } from '../../DTOs/TrainDetailDTO';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.scss']
})
export class TrainListComponent implements OnInit {

  @Input() trainList: Array<TrainDetail>;
  selected: number = -1;

  quota: string = '';
  class: string = '';
  sortBy: string = '';
  options: FormGroup;

  constructor(private router: Router, fb: FormBuilder) {
    this.options = fb.group({
      'fixed': true,
      'top': (document.getElementById('divHeader').offsetHeight),
      'bottom': (document.getElementById('divFooter').offsetHeight),
    });
   }

  ngOnInit() {
    console.log('trainList:' + JSON.stringify(this.trainList));
  }

}
