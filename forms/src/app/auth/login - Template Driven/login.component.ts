import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-login-template-driven',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponentTemplateDriven implements AfterViewInit, OnDestroy {
  private loginForm = viewChild.required<NgForm>('loginForm');
  private subscription: Subscription | undefined;

  ngAfterViewInit(): void {
    // this.subscription = this.loginForm()
    //   .valueChanges?.pipe(debounceTime(1000))
    //   .subscribe((value) => {
    //     console.log(value);
    //   });
    setTimeout(() => {
      this.loginForm().setValue({
        email: 'sasi@baka.com',
        password: 'test123',
      });
    }, 0);
  }

  onSubmit() {
    const { email, password } = this.loginForm().value;
    this.loginForm();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
