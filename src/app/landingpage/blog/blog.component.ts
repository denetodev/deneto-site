import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Tag } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { VerMaisButtonComponent } from '../../../shared/components/ver-mais-button/ver-mais-button.component';
import { BlogPost } from '../../../shared/interfaces/blogPost.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    CommonModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
    FloatLabelModule,
    FormsModule,
    ButtonModule,
    RouterModule,
    VerMaisButtonComponent,
    Tag,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      image: '../../../../assets/images/blog-section/ios-tumb.png',
      title: 'As Tendências Mais Quentes em Desenvolvimento Web para 2024',
      description:
        'Descubra as tecnologias e práticas que estão moldando o futuro da web',
      date: '13 Ago, 2025',
      category: 'Landing Page',
    },
    {
      image: '../../../../assets/images/blog-section/mobile-tumb.png',
      title:
        'Desenvolvimento Mobile: Dicas Essenciais para Criar Apps de Sucesso',
      description:
        'Do design à implementação, tudo o que você precisa saber para desenvolver aplicativos móveis incríveis',
      date: '08 Nov, 2025',
      category: 'E-commerce',
    },
    {
      image: '../../../../assets/images/blog-section/machine-learn-tumb.png',
      title:
        'Como a Inteligência Artificial Está Transformando o Desenvolvimento de Software',
      description:
        'Explorando o impacto da IA no desenvolvimento web e como você pode aproveitar essa tecnologia',
      date: '14 Dez, 2025',
      category: 'I.A.',
    },
  ];

  constructor(private router: Router) {}

  navigateToBlogPage() {
    this.router.navigate(['/blog-page']);
  }
}
