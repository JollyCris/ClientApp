import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pnr-session-history',
  templateUrl: './pnr-session-history.component.html',
  styleUrls: ['./pnr-session-history.component.scss']
})
export class PnrSessionHistoryComponent implements OnInit {
  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  inputTrainName: FormControl;

  fetchedAccomodationAvailability: any = [
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', bkg_status: 'S1  , 75/GN', cur_status: 'S1  , 75'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', bkg_status: 'S1  , 75/GN', cur_status: 'S1  , 75'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', bkg_status: 'S1  , 75/GN', cur_status: 'S1  , 75'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', bkg_status: 'S1  , 75/GN', cur_status: 'S1  , 75'},
    {pnr: '2717796715', name: 'Ankit Pandey', sex: 'Male', age: '23', bkg_status: 'S1  , 75/GN', cur_status: 'S1  , 75'},
  ];

  todayDate: Date = new Date();
  stnList:  any = [
    {stnCode: 'NDLS', stnName: 'New Delhi'},
    {stnCode: 'CNB', stnName: 'Kanpur Central'},
    {stnCode: 'ALD', stnName: 'Allahabad Jn'},
    {stnCode: 'MUV', stnName: 'Manduadih'},
  ];

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.inputTrainNo = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]);
    this.inputTrainName = new FormControl({value: '', disabled: true}, [Validators.required]);
    this.accomodationAvailabilityForm =  this.fb.group({
      inputTrainNo: this.inputTrainNo,
      inputTrainName: this.inputTrainName
    });
  }

  ngOnInit() {
  }

  getInputTrainNoErrorMessage() {
    return this.inputTrainNo.hasError('required') ? 'You must enter a value' : 'Enter a valid PNR No.';
  }

  onlyNumericInput(e: any) {
    let key: any;
    key = ((document.all) ? (key = e.keyCode) : (key = e.which));
    return (key === 8 || key === 32 || (key >= 48 && key <= 57));
  }

  inputTrainNoChangeFn(e: KeyboardEvent) {
    // console.log('e: ' + e.key);
    if (this.accomodationAvailabilityForm.valid) {
      this.snackBar.open('PNR status Fetched!', '', {
        duration: 3000,
      });

      this.accomodationAvailabilityFetched = true;
    } else {
      this.accomodationAvailabilityFetched = false;

      // this.snackBar.open('Please fill the form appropriately!', '', {
      //   duration: 4000,
      // });
    }
  }

  fetchAccomodationAvailability() {
    if (this.accomodationAvailabilityForm.valid) {
      this.snackBar.open('Accomodation Availability Fetched!', '', {
        duration: 3000,
      });

      this.accomodationAvailabilityFetched = true;
    } else {
      this.accomodationAvailabilityFetched = true;
      this.snackBar.open('Please fill the form appropriately!', '', {
        duration: 4000,
      });
    }
  }
}
