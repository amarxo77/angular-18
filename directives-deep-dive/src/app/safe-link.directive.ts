import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
} from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
})
export class SafeLinkDirective {
  queryParam = input<string>('', { alias: 'appSafeLink' });
  private hostRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const wannaLeave = window.confirm('Do you want to leave the application?');
    if (wannaLeave) {
      const address = this.hostRef.nativeElement.href;
      this.hostRef.nativeElement.href = this.queryParam()
        ? `${address}?from=${this.queryParam()}`
        : address;
    } else event.preventDefault();
  }
}
