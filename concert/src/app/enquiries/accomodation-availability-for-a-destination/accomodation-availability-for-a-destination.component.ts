import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-accomodation-availability-for-a-destination',
  templateUrl: './accomodation-availability-for-a-destination.component.html',
  styleUrls: ['./accomodation-availability-for-a-destination.component.scss']
})
export class AccomodationAvailabilityForADestinationComponent implements OnInit {
  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  inputTrainName: FormControl;

  fetchedAccomodationAvailability: any = [
    {train_no: '12560', train_name: 'ANVT BUI SF EXP', date_cnf: '13/01 AVBL 0014', date_rac: '', date_wl: ''},
    {train_no: '14650', train_name: 'SARYUYAMUNA EXP', date_cnf: '', date_rac: '13/01 RAC 0014', date_wl: ''},
    {train_no: '12562', train_name: 'SWATANTRTA S EXP', date_cnf: '', date_rac: '', date_wl: '13/01 GNWL 0014'},
    {train_no: '15116', train_name: 'LOK NAYAKEXP', date_cnf: '19/01 AVBL 0014', date_rac: '', date_wl: ''},
    {train_no: '12560', train_name: 'NDLS DBRG RJDHN', date_cnf: '17/01 PQWL/CNF', date_rac: '', date_wl: '13/01 PQWL 0004'},
    {train_no: '12560', train_name: 'ANVT BUI SF EXP', date_cnf: '13/01 AVBL 0014', date_rac: '', date_wl: ''},
    {train_no: '14650', train_name: 'SARYUYAMUNA EXP', date_cnf: '', date_rac: '13/01 RAC 0014', date_wl: ''},
    {train_no: '12562', train_name: 'SWATANTRTA S EXP', date_cnf: '', date_rac: '', date_wl: '13/01 GNWL 0014'},
    {train_no: '15116', train_name: 'LOK NAYAKEXP', date_cnf: '19/01 AVBL 0014', date_rac: '', date_wl: ''},
    {train_no: '12560', train_name: 'NDLS DBRG RJDHN', date_cnf: '17/01 PQWL/CNF', date_rac: '', date_wl: '13/01 PQWL 0004'},
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
      // inputTrainNo: this.inputTrainNo,
      // inputTrainName: this.inputTrainName
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
    // console.log('e: ' + e.key);

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
