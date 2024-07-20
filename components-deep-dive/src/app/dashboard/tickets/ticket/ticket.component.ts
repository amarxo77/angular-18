import { Component, input, output, signal } from '@angular/core';
import type { Ticket } from '../../../models/ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  close = output<string>();
  detailsVisible = signal<boolean>(false);

  onToggleDetails(): void {
    this.detailsVisible.update((prev) => !prev);
  }

  onMarkAsComplete() {
    this.close.emit(this.data().id);
  }
}
