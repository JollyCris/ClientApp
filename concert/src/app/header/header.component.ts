import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/app.states';
import * as themeActions from '../actions/theme.actions';
import { reducers } from '../reducers/reducers';
import * as themeReducer from '../reducers/theme.reducer';
import { Theme } from '../models/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currZoom: number = 1.0;

  themeIn: string;
  @Output() logOut = new EventEmitter();
  @Output() showSideBar = new EventEmitter();
  @Input() sideBarVisible?: boolean = false;

  dialogRef: any;

  constructor(public router: Router, public dialog: MatDialog, private store: Store<AppState>) { }

  ngOnInit() {
    document.getElementsByTagName('html')[0].style.fontSize = '1.0rem';
    this.store.select(themeReducer.getTheme).subscribe((theme: Theme) => {
      this.themeIn = theme.theme;
    });
    console.log(`this.themeIn: ${this.themeIn}`);
  }

  setFontSize(req: number) {
    let fs = document.getElementsByTagName('html')[0].style.fontSize;
    fs = fs.substring(0, fs.length - 3);
    const fsn: number = ((req === 0) ? 1.0 : (Number(fs) + ((req > 0) ? 0.1 : -0.1)));
    if ((fsn === 1) || (fsn >= 0.8 && fsn <= 1.2)) {
      document.getElementsByTagName('html')[0].style.fontSize = fsn + 'rem';
    }
  }

  zoom(z: number) {
    // const bodyElement: HTMLElement = <HTMLElement>document.getElementsByTagName('html')[0];
    const bodyElement: HTMLElement = <HTMLElement>document.getElementById('divMain');
    if ( z === 0) {
      this.currZoom = 1.0;
    }  else if (this.currZoom <= 1.2 && z === 1) {
      this.currZoom += 0.1;
    } else if (this.currZoom >= 0.9 && z === -1) {
      this.currZoom -= 0.1;
    }
    bodyElement.style.zoom = this.currZoom.toString();
  }

  setTheme(theme: string) {
    this.store.dispatch(new themeActions.SetThemeAction({theme: theme}));
  }
}
