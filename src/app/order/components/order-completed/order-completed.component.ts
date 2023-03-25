import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

import { SharedModule } from "../../../shared/shared.module";

interface IData {
  formData: {
    address: {
      city: string;
      country: string;
      street: string
    },
    email: string
    firstName: string;
    lastName: string;
    phones: string[];
    pickUp: boolean;
  }
}

@Component({
  selector: 'app-order-completed',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './order-completed.component.html',
  styleUrls: ['./order-completed.component.scss']
})
export class OrderCompletedComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IData) {}

}
