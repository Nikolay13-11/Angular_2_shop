import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { HighlightDirective } from "./directives/highlight.directive";


@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatIconModule,
    HighlightDirective
  ],
})
export class SharedModule { }
