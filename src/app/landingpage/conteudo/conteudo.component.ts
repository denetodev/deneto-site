import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

export interface VideoCard {
  thumbnail: string;
  title: string;
  description: string;
  youtubeUrl: string;
  tag: string;
}

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss'],
})
export class ConteudoComponent {
  videos: VideoCard[] = [
    {
      thumbnail: '',
      title: 'Em breve: Case #01 — Atendimento IA para tatuadora',
      description:
        'Do diagnóstico à entrega. Como automatizei o WhatsApp de um estúdio de tatuagem com IA — o que funcionou, o que quebrou e o resultado final.',
      youtubeUrl: 'https://www.youtube.com/@denetodev',
      tag: 'Case Real',
    },
    {
      thumbnail: '',
      title: 'Em breve: Case #02 — Fotógrafa com atendimento 24h',
      description:
        'Uma fotógrafa que perdia lead toda vez que estava em sessão. Como mudamos isso sem ela precisar estar online.',
      youtubeUrl: 'https://www.youtube.com/@denetodev',
      tag: 'Case Real',
    },
    {
      thumbnail: '',
      title: 'Em breve: Por dentro de uma automação do zero',
      description:
        'Como eu penso um fluxo antes de abrir qualquer ferramenta. O processo começa no papel, não na tela.',
      youtubeUrl: 'https://www.youtube.com/@denetodev',
      tag: 'Bastidores',
    },
  ];
}
