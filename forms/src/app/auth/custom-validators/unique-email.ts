import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EMPTY, Observable, of } from 'rxjs';

export class UniqueEmail {
  static validate(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    if ((control.value as string) === 'test@test.com') {
      return of({ emailAlreadyUsed: true });
    }
    return EMPTY;
  }
}
