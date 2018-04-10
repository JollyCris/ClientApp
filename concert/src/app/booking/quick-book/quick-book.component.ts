import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-quick-book',
  templateUrl: './quick-book.component.html',
  styleUrls: ['./quick-book.component.scss']
})
export class QuickBookComponent implements OnInit {
  accomodationAvailabilityFetched: boolean;
  accomodationAvailabilityForm: FormGroup;

  inputTrainNo: FormControl;
  inputTrainName: FormControl;
  noOfPsgn: FormControl;
  inputLinkedPnr: FormControl;
  inputCoachChoice: FormControl;
  inputBoardingPoint: FormControl;

  helpMsg: Array<string> = [];
  infoMsg: string = '';
  panelOpenState: boolean = false;

  fetchedAccomodationAvailability: any = [
    {avl_2A: 'AVAILABLE 8', avl_SL: 'AVAILABLE 85'},
    {avl_2A: 'GNWL/AVAILABLE', avl_SL: 'RAC22/RAC 18'},
    {avl_2A: 'AVAILABLE 18', avl_SL: 'AVAILABLE 185'},
    {avl_2A: 'AVAILABLE 2', avl_SL: 'REGRET'},
    {avl_2A: 'AVAILABLE 1', avl_SL: 'GNWL/AVAILABLE'},
    {avl_2A: 'AVAILABLE 8', avl_SL: 'AVAILABLE 85'},
    {avl_2A: 'GNWL/AVAILABLE', avl_SL: 'RAC22/RAC 18'},
    {avl_2A: 'AVAILABLE 18', avl_SL: 'AVAILABLE 185'},
    {avl_2A: 'AVAILABLE 2', avl_SL: 'REGRET'},
    {avl_2A: 'AVAILABLE 1', avl_SL: 'GNWL/AVAILABLE'},
    {avl_2A: 'AVAILABLE 8', avl_SL: 'AVAILABLE 85'},
    {avl_2A: 'GNWL/AVAILABLE', avl_SL: 'RAC22/RAC 18'},
    {avl_2A: 'AVAILABLE 18', avl_SL: 'AVAILABLE 185'},
    {avl_2A: 'AVAILABLE 2', avl_SL: 'REGRET'},
    {avl_2A: 'AVAILABLE 1', avl_SL: 'GNWL/AVAILABLE'},
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
    this.noOfPsgn = new FormControl('', [Validators.required]);

    this.inputLinkedPnr = new FormControl('', [Validators.required]);
    this.inputCoachChoice = new FormControl('', [Validators.required]);
    this.inputBoardingPoint = new FormControl('', [Validators.required]);

    this.accomodationAvailabilityForm =  this.fb.group({
      inputTrainNo: this.inputTrainNo,
      inputTrainName: this.inputTrainName,
      noOfPsgn: this.noOfPsgn,
      inputLinkedPnr: this.inputLinkedPnr,
      inputCoachChoice: this.inputCoachChoice,
      inputBoardingPoint: this.inputBoardingPoint
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
    console.log(this.noOfPsgn.value);
  }

  showHelp() {
    this.infoMsg = 'Help Message';
    return false;
  }
}
