import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { VerMaisButtonComponent } from '../../../shared/components/ver-mais-button/ver-mais-button.component';
import { CardChallengeComponent } from '../../../shared/components/card-challenge/card-challenge.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [VerMaisButtonComponent, ButtonModule, CardChallengeComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {}
