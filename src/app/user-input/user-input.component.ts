import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  enteredInitialInvestment = signal<string>('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredExpectedReturn = signal<string>('5');
  enteredDuration = signal<string>('10');
  private investmentService: InvestmentService = inject(InvestmentService);

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      annualInvestment: Number(this.enteredAnnualInvestment()),
      duration: Number(this.enteredDuration()),
      expectedReturn: Number(this.enteredExpectedReturn()),
      initialInvestment: Number(this.enteredInitialInvestment()),
    });
    this.enteredInitialInvestment.set('0');
    this.enteredExpectedReturn.set('0');
    this.enteredDuration.set('0');
  }
}
