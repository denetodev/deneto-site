import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-group-button',
  standalone: true,
  imports: [ButtonModule, RouterModule],
  templateUrl: './group-button.component.html',
  styleUrl: './group-button.component.scss',
})
export class GroupButtonComponent {
  constructor(private router: Router, private scrollService: ScrollService) {}

  navigateToProjectPage(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.href = 'https://deneto.com.br/portfolio';
    }, 50);
  }

  // Método para navegar para a página de links
  navigateToLinksPage(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.location.href = 'https://dott.bio/denetodev';
    }, 50);
  }
}
