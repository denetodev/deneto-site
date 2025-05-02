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
      image: '../../../assets/images/blog-section/aprendizado.jpg',
      title:
        'Meu Verdadeiro Aprendizado em Programação: Uma Jornada de Desafios, Ilusões e Autodescoberta',
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
        'Retomei o hábito da leitura e Ultra Aprendizado, de Scott Young, transformou minha forma de aprender e estudar programação com métodos ativos e eficientes.',
      postUrl:
        'https://deneto.com.br/blog/melhores-livros-para-aprimorar-sua-carreira/',
      date: '19 Fev, 2025',
      category: 'Aprendizado',
    },
    {
      image: '../../../assets/images/blog-section/inteligencia-artificial.jpg',
      title:
        'Como a Inteligência Artificial Está Transformando o Desenvolvimento de Software',
      description:
        'Como artista que virou dev, percebi que a IA não resolve tudo — mas atua como ponte entre criatividade e lógica, traduzindo ideias em código.',
      postUrl:
        'https://deneto.com.br/blog/como-a-inteligencia-artificial-esta-transformando-o-desenvolvimento-de-software/',
      date: '03 Fev, 2025',
      category: 'I.A. & Automação',
    },
  ];

  constructor(private router: Router) {}

  navigateToBlogPage() {
    this.router.navigate(['/blog-page']);
  }
}
