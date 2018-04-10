import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyMaterialComponentsModule } from '../my-material-components/my-material-components.module';
import { AppRoutingModule } from '../app-routing.module';
import { MyAccountComponent } from './my-account/my-account.component';
import { DtcTxnComponent } from './dtc-txn/dtc-txn.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MyMaterialComponentsModule
  ],
  declarations: [MyAccountComponent, DtcTxnComponent]
})
export class MyAccountModule { }
