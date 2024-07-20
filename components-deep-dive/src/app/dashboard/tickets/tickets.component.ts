import { Component, signal } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from '../../models/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets = signal<Array<Ticket>>([]);

  onAdd({ request, title }: { title: string; request: string }) {
    const ticket: Ticket = {
      request,
      title,
      id: crypto.randomUUID(),
      status: 'open',
    };
    this.tickets.update((prev) => [...prev, ticket]);
  }

  onCloseTicket(id: string) {
    this.tickets.update((prev) =>
      prev.map((ticket) => {
        if (ticket.id === id) {
          return { ...ticket, status: 'closed' };
        }
        return ticket;
      })
    );
  }
}
