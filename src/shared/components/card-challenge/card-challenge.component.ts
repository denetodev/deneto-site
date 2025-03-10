import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { ProjectButtonsComponent } from '../project-buttons/project-buttons.component';
import { Project } from '../../interfaces/project.interface';
import { PROJECTS } from '../../interfaces/projects.data';

@Component({
  selector: 'app-card-challenge',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ButtonModule,
    ProjectButtonsComponent,
  ],
  templateUrl: './card-challenge.component.html',
  styleUrls: ['./card-challenge.component.scss'],
})
export class CardChallengeComponent implements OnInit {
  projects: Project[] = [];
  loading = true;

  responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 },
  ];

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projects = PROJECTS;
    this.loading = false;
  }

  onMouseEnter(project: Project) {
    project.isHovered = true;
  }

  onMouseLeave(project: Project) {
    project.isHovered = false;
  }
}
