import { Pipe, PipeTransform } from '@angular/core';
import {ValidationErrors} from "@angular/forms";

const errorsMessages: {
  [key: string]: {
    [K: string]: string
  }
} = {
  firstName: {
    pattern: 'First name must start from capital letter',
    required: 'First name is required'
  },
  email: {
    email: 'Please enter your email address in format youremail@example.com',
    emailError: 'Email is required'
  },
  country: {
    required: 'Country is required'
  },
  city: {
    required: 'City is required'
  },
  street: {
    required: 'Street is required'
  }
}

@Pipe({
  name: 'getErrorMessage',
  standalone: true
})
export class GetErrorMessagePipe implements PipeTransform {

  transform(controlErrors: ValidationErrors | null, controlName: string): string {
    const key = Object.keys(controlErrors ?? [])[0];
    return errorsMessages[controlName][key] ?? 'Field is not Valid';
  }

}
