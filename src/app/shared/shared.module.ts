import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

import { ChangeFontSizeDirective, HighlightDirective } from "./directives";
import { OrderByPipe } from './pipes/order-by.pipe';



@NgModule({
  declarations: [HighlightDirective, ChangeFontSizeDirective, OrderByPipe],
  imports: [],
  exports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule,
    HighlightDirective,
    ChangeFontSizeDirective,
    OrderByPipe,
    MatCheckboxModule,
    MatSelectModule
  ],
})
export class SharedModule { }
