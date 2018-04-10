import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dtc-txn',
  templateUrl: './dtc-txn.component.html',
  styleUrls: ['./dtc-txn.component.scss']
})
export class DtcTxnComponent implements OnInit {
  activeCard: string = '';

  constructor() { }

  ngOnInit() {
  }

  print() {
    window.print();
  }

}
