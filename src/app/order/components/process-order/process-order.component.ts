import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { Subject, takeUntil } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

import { SharedModule } from "../../../shared/shared.module";
import { GetErrorMessagePipe } from "../../pipes/get-error-message.pipe";
import { OrderCompletedComponent } from "../order-completed/order-completed.component";

import * as RouterActions from '../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'app-process-order',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SharedModule, GetErrorMessagePipe],
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {

  orderForm!: FormGroup;

  nameValidatorRegExp = new RegExp(/^[A-Z]/);

  countries: Array<string> = [
    'Ukraine',
    'Armenia',
    'Belarus',
    'Hungary',
    'Kazakhstan',
    'Poland',
    'Russia'
  ];


  private unsubscribe$: Subject<void> = new Subject();

  constructor(private fb: FormBuilder, public dialog: MatDialog, private store: Store) {}

  ngOnInit() {
    this.createForm();
    this.pickUp.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(value => {
        this.updateAddressValidation(value);
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.complete();
  }

  createForm() {
    this.orderForm = this.fb.nonNullable.group({
      firstName: ['', [Validators.required, Validators.pattern(this.nameValidatorRegExp)]],
      lastName: '',
      email: ['', Validators.email],
      phones: this.fb.array([
        new FormControl(null)
      ]),
      pickUp: true,
      address: this.fb.group({
        country: '',
        city: '',
        street: ''
      })
    });
  }

  get firstName() {
    return this.orderForm.get('firstName')!;
  }

  get lastName() {
    return this.orderForm.get('lastName');
  }

  get email() {
    return this.orderForm.get('email')!;
  }

  get pickUp() {
    return this.orderForm.get('pickUp')!;
  }

  get country() {
    return this.orderForm.get('address.country')!;
  }
  get city() {
    return this.orderForm.get('address.city')!;
  }
  get street() {
    return this.orderForm.get('address.street')!;
  }

  get address() {
    return this.orderForm.get('address');
  }

  get phones(): FormArray {
    return this.orderForm.get('phones') as unknown as FormArray;
  }

  onAddPhone(): void {
    this.phones.push(this.fb.control(null));
  }

  onRemovePhone(index: number): void {
    this.phones.removeAt(index);
  }

  onSubmit() {
    console.log(this.orderForm);
    const dialogRef = this.dialog.open(OrderCompletedComponent, {
      data: {
        formData: this.orderForm.value
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.closeDialog();
    });
  }

  private closeDialog() {
    this.orderForm.reset();
    this.store.dispatch(RouterActions.go({
      path: ['']
    }));
  }

  private updateAddressValidation(value: boolean) {
    const controls = new Map();
    controls.set('countryControl', this.country);
    controls.set('emailGroup', this.city);
    controls.set('emailControl', this.street);

    if(value) {
      controls.forEach(control => {
        control.clearValidators();
        control.updateValueAndValidity();
      })
    } else if(!value) {
      controls.forEach(control => {
        control.setValidators(Validators.required);
        control.updateValueAndValidity();
      })
    }
  }
}
