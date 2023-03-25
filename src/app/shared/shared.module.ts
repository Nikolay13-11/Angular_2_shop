import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatDialogModule } from '@angular/material/dialog';

import { DialogModule } from '@angular/cdk/dialog';

import { ChangeFontSizeDirective, HighlightDirective, ValidateEmailInputDirective } from "./directives";
import { OrderByPipe } from './pipes/order-by.pipe';
import { RouterModule } from "@angular/router";





@NgModule({
  declarations: [HighlightDirective, ChangeFontSizeDirective, ValidateEmailInputDirective, OrderByPipe],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule,
    HighlightDirective,
    ChangeFontSizeDirective,
    ValidateEmailInputDirective,
    OrderByPipe,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    DialogModule,
    MatSlideToggleModule,
    MatTooltipModule,
    MatDialogModule,
  ],
})
export class SharedModule { }
