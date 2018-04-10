import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-passengers-booked-in-each-coach',
  templateUrl: './passengers-booked-in-each-coach.component.html',
  styleUrls: ['./passengers-booked-in-each-coach.component.scss']
})
export class PassengersBookedInEachCoachComponent implements OnInit {
  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  inputTrainName: FormControl;

  fetchedAccomodationAvailability: any = [
    {coachId: 'S1', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S2', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S3', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S4', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S5', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S6', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S7', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S8', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'S9', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'B1', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'B2', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
    {coachId: 'B3', gn_total: '5', gn_used: '5', rs_total: '0', rs_used: '0', oq_total: '75', oq_used: '4'},
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
