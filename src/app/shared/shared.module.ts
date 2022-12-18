import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule
  ]
})
export class SharedModule { }
