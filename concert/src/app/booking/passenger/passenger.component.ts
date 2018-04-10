import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {

  @Input() psgn: any;

  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  psgnName: FormControl;
  psgnGender: FormControl;
  psgnAge: FormControl;
  psgnBerthPref: FormControl;
  psgnFoodPref: FormControl;

  todayDate: Date = new Date();

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.psgnName = new FormControl('', [Validators.required]);
    this.psgnGender = new FormControl('', [Validators.required]);
    this.psgnAge = new FormControl('', [Validators.required, Validators.min(5), Validators.max(120)]);
    this.psgnBerthPref = new FormControl('', [Validators.required]);
    this.psgnFoodPref = new FormControl('', [Validators.required]);

    this.accomodationAvailabilityForm =  this.fb.group({
      psgnName: this.psgnName,
      psgnGender: this.psgnGender,
      psgnAge: this.psgnAge,
      psgnBerthPref: this.psgnBerthPref,
      psgnFoodPref: this.psgnFoodPref,
    });
  }

  ngOnInit() {
  }

  getPsgnErrorMessage(fc: FormControl) {
    return fc.hasError('required') ? 'You must enter a value.' : 'Enter a valid value.';
  }

  onlyNumericInput(e: any) {
    let key: any;
    key = ((document.all) ? (key = e.keyCode) : (key = e.which));
    return (key === 8 || key === 32 || (key >= 48 && key <= 57));
  }

  onlyAlphaInput(e: any) {
    let key: any;
    key = ((document.all) ? (key = e.keyCode) : (key = e.which));
    return (key === 8 || key === 32 || ((key >= 65 && key <= 90) || (key >= 97 && key <= 122)));
  }

  psgnAgeChangeFn(e: KeyboardEvent) {
    console.log('e: ' + e.key);

    // if (this.psgnAge.value.length === 5) {
    //   this.psgnName.setValue('SHIV GANGA EXP');
    // }
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
