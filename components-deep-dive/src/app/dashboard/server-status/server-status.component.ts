import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';

enum ServerStatus {
  ONLINE = 'online',
  OFFLINE = 'offline',
  UNKNOWN = 'unknown',
}

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [NgClass],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnDestroy, OnInit {
  private interval?: ReturnType<typeof setInterval>;
  currentStatus = signal<'online' | 'offline' | 'unknown'>(
    ServerStatus.ONLINE
  );

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rand = Math.random();
      rand < 0.5
        ? this.currentStatus.set(ServerStatus.ONLINE)
        : rand < 0.9
        ? this.currentStatus.set(ServerStatus.OFFLINE)
        : this.currentStatus.set(ServerStatus.UNKNOWN);
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
