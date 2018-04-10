import { Component, OnInit, Input, EventEmitter, Output, Inject } from '@angular/core';
import { TrainDetail } from '../../DTOs/TrainDetailDTO';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  @Input() train: TrainDetail;
  @Input() index: number;
  @Input() selected: number;

  @Output() trainSelected = new EventEmitter();

  numOfPsgn: string = '';

  panelOpenState: boolean = false;
  todayDate: Date = new Date();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  showFareDetails(): void {
    const dialogRef = this.dialog.open(FareDetailsDialogComponent, {
      width: '350px',
      disableClose: false,
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  showTimeTable(): void {
    const dialogRef = this.dialog.open(TimeTableDialogComponent, {
      disableClose: false,
      data: { name: 'this.name', animal: 'this.animal' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

@Component({
  selector: 'app-fare-details-dialog',
  templateUrl: './fare-details-dialog.html',
})
export class FareDetailsDialogComponent {

  hide: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<FareDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  login(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-time-table-dialog',
  templateUrl: './time-table-dialog.html',
})
export class TimeTableDialogComponent {

  hide: boolean = true;

  fetchedAccomodationAvailability: any = [
    {stn_Code: 'NDLS', stn_Name: 'New Delhi', arrival_Time: 'Source', departure_Time: '18:55', distance: '0', day: '1' },
    {stn_Code: 'CNB', stn_Name: 'New Delhi', arrival_Time: '00:40', departure_Time: '00:55', distance: '440', day: '2' },
    {stn_Code: 'ALD', stn_Name: 'New Delhi', arrival_Time: '03:20', departure_Time: '03:45', distance: '634', day: '2' },
    {stn_Code: 'MUV', stn_Name: 'New Delhi', arrival_Time: '07:55', departure_Time: 'Destination', distance: '755', day: '2' }
  ];

  constructor(
    public dialogRef: MatDialogRef<TimeTableDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  login(): void {
    this.dialogRef.close();
  }
}
