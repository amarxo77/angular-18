import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PasswordCheck } from '../custom-validators/password-check';
import { UniqueEmail } from '../custom-validators/unique-email';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      asyncValidators: [UniqueEmail.validate],
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(6),
        PasswordCheck.validate,
      ],
    }),
  });

  get isEmailInvalid(): boolean {
    const { touched, dirty, invalid } = this.loginForm.controls.email;
    return touched && dirty && invalid;
  }

  get isEmailAlreadyInUseError(): boolean {
    return this.loginForm.controls.email?.errors?.['emailAlreadyUsed'];
  }

  get isPasswordInvalid(): boolean {
    const { touched, dirty, invalid } = this.loginForm.controls.password;
    return touched && dirty && invalid;
  }

  onSubmit() {}
}
