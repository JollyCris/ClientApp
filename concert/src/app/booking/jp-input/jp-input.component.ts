import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { CommonService } from '../../services/common.services';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-jp-input',
  templateUrl: './jp-input.component.html',
  styleUrls: ['./jp-input.component.scss']
})
export class JpInputComponent implements OnInit {

  @Output() findTrains = new EventEmitter();

  stnList = [];
  origin: FormControl = new FormControl();
  destin: FormControl = new FormControl();

  journeyDate: Date = new Date();

  filteredOriginOptions: Observable<string[]> = null;
  filteredDestinOptions: Observable<string[]> = null;
  filteredOriginList: string[] = [];
  filteredDestinList: string[] = [];

  modify: boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getStationNameList()
    .subscribe((stnList: Array<string>) => {
      this.stnList = stnList;
      this.filteredOriginOptions = this.origin.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
      this.filteredDestinOptions = this.destin.valueChanges
      .pipe(
        startWith(''),
        map(val => this.filter(val))
      );
      this.filteredOriginOptions
      .subscribe((val: string[]) => {
        if (val.length > 0) {
          this.filteredOriginList = val;
        }
      });
      this.filteredDestinOptions
      .subscribe((val: string[]) => {
        if (val.length > 0) {
          this.filteredDestinList = val;
        }
      });
    });
  }

  filter(val: string): string[] {
    if (val.length > 1) {
      return this.stnList.filter(option =>
        option.toLowerCase().indexOf(val.toLowerCase()) >= 0);
    } else {
      return [];
    }
  }

  selectOrigin() {
    console.log(`this.origin.value: ${this.origin.value}`);
    if (this.stnList.indexOf(this.origin.value) < 0) {
      this.origin.setValue((this.filteredOriginList.length > 0) ? (this.filteredOriginList[0]) : '');
    }
  }
  selectDestin() {
    console.log(`this.destin.value: ${this.destin.value}`);
    if (this.stnList.indexOf(this.destin.value) < 0) {
      this.destin.setValue((this.filteredDestinList.length > 0) ? (this.filteredDestinList[0]) : '');
    }
  }
}
