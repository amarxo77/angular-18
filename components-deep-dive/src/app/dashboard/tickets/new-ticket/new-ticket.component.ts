import { Component, output, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule, NgForm } from '@angular/forms';
import { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  add = output<{title: string, request: string}>();
  ticketForm = viewChild<NgForm>('ticketForm');

  onSubmit() {
    const form = this.ticketForm() as NgForm;

    this.add.emit({
      title: form.controls['title'].value,
      request: form.controls['request'].value,
    });
    form.reset();
  }
}
