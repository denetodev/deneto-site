import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ver-mais-button',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './ver-mais-button.component.html',
  styleUrl: './ver-mais-button.component.scss',
})
export class VerMaisButtonComponent {
  @Input() externalUrl: string = '';

  navigateToExternalUrl(): void {
    // Redireciona para a URL
    if (this.externalUrl) {
      window.location.href = this.externalUrl;
    }
  }
}
