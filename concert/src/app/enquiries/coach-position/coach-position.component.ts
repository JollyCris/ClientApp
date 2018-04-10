import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-coach-position',
  templateUrl: './coach-position.component.html',
  styleUrls: ['./coach-position.component.scss']
})
export class CoachPositionComponent implements OnInit {
  accomodationAvailabilityFetched: boolean = false;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  inputTrainName: FormControl;

  fetchedAccomodationAvailability: any = [
    {coach_id: 'SLR', coach_position: '01', class: 'OT'},
    {coach_id: 'GEN', coach_position: '01', class: 'GN'},
    {coach_id: 'S1', coach_position: '01', class: 'SL'},
    {coach_id: 'S2', coach_position: '01', class: 'SL'},
    {coach_id: 'S3', coach_position: '01', class: 'SL'},
    {coach_id: 'S4', coach_position: '01', class: 'SL'},
    {coach_id: 'S5', coach_position: '01', class: 'SL'},
    {coach_id: 'PC', coach_position: '01', class: 'SL'},
    {coach_id: 'A1', coach_position: '01', class: '1A'},
    {coach_id: 'B1', coach_position: '01', class: '2A'},
    {coach_id: 'B2', coach_position: '01', class: '2A'},
    {coach_id: 'B3', coach_position: '01', class: '2A'},
    {coach_id: 'B4', coach_position: '01', class: '2A'},
    {coach_id: 'B5', coach_position: '01', class: '2A'},
    {coach_id: 'SLR', coach_position: '01', class: 'SL'},
/*     {coach_id: 'S6', coach_position: '01', class: 'SL'},
    {coach_id: 'S7', coach_position: '01', class: 'SL'},
    {coach_id: 'S8', coach_position: '01', class: 'SL'},
    {coach_id: 'S9', coach_position: '01', class: 'SL'}, */
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
