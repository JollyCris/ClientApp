import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-passengers-booked-after-charting',
  templateUrl: './passengers-booked-after-charting.component.html',
  styleUrls: ['./passengers-booked-after-charting.component.scss']
})
export class PassengersBookedAfterChartingComponent implements OnInit {

  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  inputTrainName: FormControl;

  fetchedAccomodationAvailability: any = [
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', quota: 'GN', berth: 'S1  , 75', src: 'NDLS', dest: 'MUV'},
  ];

  todayDate: Date = new Date();
  stnList:  any = [
    {stnCode: 'NDLS', stnName: 'New Delhi'},
    {stnCode: 'CNB', stnName: 'Kanpur Central'},
    {stnCode: 'ALD', stnName: 'Allahabad Jn'},
    {stnCode: 'MUV', stnName: 'Manduadih'},
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.inputTrainNo = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]);
    this.inputTrainName = new FormControl({value: '', disabled: true}, [Validators.required]);
    this.accomodationAvailabilityForm =  this.fb.group({
      inputTrainNo: this.inputTrainNo,
      inputTrainName: this.inputTrainName
    });
  }

  ngOnInit() {
  }

  getInputTrainNoErrorMessage() {
    return this.inputTrainNo.hasError('required') ? 'You must enter a value' : 'Enter a valid Train No.';
  }

  onlyNumericInput(e: any) {
    let key: any;
    key = ((document.all) ? (key = e.keyCode) : (key = e.which));
    return (key === 8 || key === 32 || (key >= 48 && key <= 57));
  }

  inputTrainNoChangeFn(e: KeyboardEvent) {
    console.log('e: ' + e.key);

    if (this.inputTrainNo.value.length === 5) {
      this.inputTrainName.setValue('SHIV GANGA EXP');
    }
  }

  fetchAccomodationAvailability() {
    if (this.accomodationAvailabilityForm.valid) {
      this.snackBar.open('Accomodation Availability Fetched!', '', {
        duration: 3000,
      });

      this.accomodationAvailabilityFetched = true;
    } else {
      this.snackBar.open('Please fill the form appropriately!', '', {
        duration: 4000,
      });
    }
  }
}
