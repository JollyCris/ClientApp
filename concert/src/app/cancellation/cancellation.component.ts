import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.scss']
})
export class CancellationComponent implements OnInit {
  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  randomWindowNo: FormControl;

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
    this.randomWindowNo = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]);
    this.accomodationAvailabilityForm =  this.fb.group({
      inputTrainNo: this.inputTrainNo,
      randomWindowNo: this.randomWindowNo,
    });
  }

  ngOnInit() {
  }

  getInputTrainNoErrorMessage() {
    return this.inputTrainNo.hasError('required') ? 'You must enter a value' : 'Enter a valid PNR No.';
  }

  getRandomWindowNoErrorMessage() {
    return this.randomWindowNo.hasError('required') ? 'You must enter a value' : 'Enter a valid Random-Window No.';
  }

  onlyNumericInput(e:any) {
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
      this.accomodationAvailabilityFetched = false;
      this.snackBar.open('Please fill the form appropriately!', '', {
        duration: 4000,
      });
    }
  }
}
