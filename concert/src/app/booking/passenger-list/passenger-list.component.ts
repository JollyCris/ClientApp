import { Component, OnInit, Input } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit, OnChanges {

  @Input() noOfPsgn: number;
  psgnArray: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.psgnArray = [];
    let n: number = 0;
    while (n < this.noOfPsgn) {
      this.psgnArray.push({id: `m ${n}`, index: n});
      n = n + 1;
    }
    console.log(this.psgnArray);
  }
}
