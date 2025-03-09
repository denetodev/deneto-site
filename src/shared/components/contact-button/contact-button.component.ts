import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-button',
  standalone: true,
  imports: [ButtonModule, RouterModule, CommonModule],
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss'],
})
export class ContactButtonComponent {
  @Input() variant: 'outlined' | 'text' | undefined; // Tipos permitidos pelo `p-button`
  @Input() severity:
    | 'success'
    | 'info'
    | 'warn'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | null
    | undefined; // Tipos permitidos pelo `p-button`

  constructor(private router: Router) {}

  navigateToLinksPage() {
    this.router.navigate(['/links']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
