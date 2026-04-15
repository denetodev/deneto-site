import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-features.component.html',
  styleUrls: ['./carousel-features.component.scss'],
})
export class CarouselFeaturesComponent {
  images = [
    {
      src: '../../../../assets/images/features/1-git.svg',
      alt: 'Git',
    },
    {
      src: '../../../../assets/images/features/2-github.svg',
      alt: 'GitHub',
    },
    {
      src: '../../../../assets/images/features/3-javascript.svg',
      alt: 'JavaScript',
    },
    {
      src: '../../../../assets/images/features/4-typescript.svg',
      alt: 'TypeScript',
    },
    {
      src: '../../../../assets/images/features/5-java.svg',
      alt: 'Java',
    },
    {
      src: '../../../../assets/images/features/6-angular.svg',
      alt: 'Angular',
    },
    {
      src: '../../../../assets/images/features/7-spring.svg',
      alt: 'Spring Boot',
    },
    {
      src: '../../../../assets/images/features/n8n.svg',
      alt: 'N8N',
    },
    {
      src: '../../../../assets/images/features/postgresql.svg',
      alt: 'PostgreSQL',
    },
    {
      src: '../../../../assets/images/features/powerbi.svg',
      alt: 'Power BI',
    },
    {
      src: '../../../../assets/images/features/sfmc.svg',
      alt: 'Salesforce Marketing Cloud',
    },
    {
      src: '../../../../assets/images/features/whatsapp.svg',
      alt: 'WhatsApp API',
    },
  ];

  // Duplica as imagens para criar o efeito infinito
  duplicatedImages = [...this.images, ...this.images];
}
