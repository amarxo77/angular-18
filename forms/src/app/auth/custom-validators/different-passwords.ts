import { AbstractControl, ValidationErrors } from "@angular/forms";

export class DifferentPasswords {
    static validate(control: AbstractControl): ValidationErrors | null {
        const passwordValue = control.get('password')?.value
        const confirmPasswordValue = control.get('confirmPassword')?.value
        return passwordValue !== confirmPasswordValue ? {passwordNotMatch: true} : null
    }
}