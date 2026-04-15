import { Component } from '@angular/core';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { Tag } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
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
    Tag,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss',
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      image: '../../../assets/images/blog-section/inteligencia-artificial.jpg',
      title:
        'Por que automatizar o atendimento não é sobre tecnologia — é sobre tempo',
      description:
        'A maioria dos donos de negócio que me procura não sabe o que é N8N. Mas todos sabem que estão perdendo cliente porque não conseguem responder rápido o suficiente.',
      postUrl: 'https://deneto.com.br/blog/',
      date: '2026',
      category: 'I.A. & Automação',
    },
    {
      image: '../../../assets/images/blog-section/aprendizado.jpg',
      title:
        'Meu Verdadeiro Aprendizado em Programação: Uma Jornada de Desafios e Autodescoberta',
      description:
        'Como arquiteto, sempre conectei arte e técnica, usando tecnologia para transformar ideias abstratas em soluções práticas.',
      postUrl:
        'https://deneto.com.br/blog/o-que-atrasou-meu-aprendizado-em-programacao/',
      date: '05 Fev, 2025',
      category: 'Desenvolvimento',
    },
    {
      image: '../../../assets/images/blog-section/livros-tecnologia.jpg',
      title:
        'Os Livros Que Mudaram Minha Forma de Aprender Programação (e a Vida)',
      description:
        'Retomei o hábito da leitura e Ultra Aprendizado, de Scott Young, transformou minha forma de aprender e estudar programação.',
      postUrl:
        'https://deneto.com.br/blog/melhores-livros-para-aprimorar-sua-carreira/',
      date: '19 Fev, 2025',
      category: 'Aprendizado',
    },
  ];

  constructor(private router: Router) {}
}
