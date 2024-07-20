export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: TicketStatus;
}

type TicketStatus = 'open' | 'closed';
