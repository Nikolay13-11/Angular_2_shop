import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appValidateEmailInput]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ValidateEmailInputDirective,
    multi: true
  }]
})
export class ValidateEmailInputDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control?.value || control.value.length === 0) {
      return {
        emailError: true,
      }
    }
    return null;
  }

}
