import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordCheck {
  static validate(control: AbstractControl): ValidationErrors | null {
    if (!(control.value as string).includes('?')) {
      return { noQuestionMark: true } as ValidationErrors;
    }
    return null;
  }
}
