import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  Renderer2,
} from '@angular/core';
import type { Permission } from '../models/permission.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private elementRef: ElementRef<any> = inject(ElementRef);
  private renderer = inject(Renderer2);
  private authService: AuthService = inject(AuthService);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.userType()) {
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'display',
          'block'
        );
      } else {
        this.renderer.setStyle(
          this.elementRef.nativeElement,
          'display',
          'none'
        );
      }
    });
  }
}
