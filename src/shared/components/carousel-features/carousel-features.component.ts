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
      alt: 'imagem do ícone do Git',
    },
    {
      src: '../../../../assets/images/features/2-github.svg',
      alt: 'imagem do ícone do GitHub',
    },
    {
      src: '../../../../assets/images/features/3-javascript.svg',
      alt: 'imagem do ícone do JavaScript',
    },
    {
      src: '../../../../assets/images/features/4-typescript.svg',
      alt: 'imagem do ícone do TypeScript',
    },
    {
      src: '../../../../assets/images/features/5-java.svg',
      alt: 'imagem do ícone do Java',
    },
    {
      src: '../../../../assets/images/features/6-angular.svg',
      alt: 'imagem do ícone do Angular',
    },
    {
      src: '../../../../assets/images/features/7-spring.svg',
      alt: 'imagem do ícone do Spring Boot',
    },
    {
      src: '../../../../assets/images/features/8-wordpress.svg',
      alt: 'imagem do ícone do WordPress',
    },
    {
      src: '../../../../assets/images/features/9-elementor.svg',
      alt: 'imagem do ícone do Elementor',
    },
    {
      src: '../../../../assets/images/features/10-woocommerce.svg',
      alt: 'imagem do ícone do WooCommerce',
    },
    {
      src: '../../../../assets/images/features/12-flutterflow.svg',
      alt: 'imagem do ícone do FlutterFlow',
    },
  ];

  // Duplica as imagens para criar o efeito infinito
  duplicatedImages = [...this.images, ...this.images];
}
