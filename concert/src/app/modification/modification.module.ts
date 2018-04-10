import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { MyMaterialComponentsModule } from '../my-material-components/my-material-components.module';
import { ModificationComponent } from './modification.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MyMaterialComponentsModule
  ],
  declarations: [
    ModificationComponent
  ]
})
export class ModificationModule { }
