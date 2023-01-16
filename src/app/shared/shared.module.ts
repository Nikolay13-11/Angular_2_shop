import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

import { ChangeFontSizeDirective, HighlightDirective } from "./directives";


@NgModule({
  declarations: [HighlightDirective, ChangeFontSizeDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule,
    HighlightDirective,
    ChangeFontSizeDirective
  ],
})
export class SharedModule { }
