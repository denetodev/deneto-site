import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactButtonComponent } from '../../../shared/components/contact-button/contact-button.component';
import { CardServicesComponent } from '../../../shared/components/card-services/card-services.component';
import { CarouselFeaturesComponent } from '../../../shared/components/carousel-features/carousel-features.component';

@Component({
  selector: 'app-offices',
  standalone: true,
  imports: [
    CommonModule,
    CardServicesComponent,
    CarouselFeaturesComponent,
    ContactButtonComponent,
  ],
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.scss'],
})
export class OfficesComponent {
  services = [
    {
      icon: 'pi pi-comments',
      title: 'Atendimento Inteligente no WhatsApp',
      description:
        'Seu WhatsApp respondendo, qualificando e agendando leads automaticamente — 24 horas por dia, sem você precisar estar online. Ideal para clínicas, consultórios, advogados, fotógrafos, tatuadores e qualquer negócio onde o primeiro contato define se o cliente fica ou vai embora.',
    },
    {
      icon: 'pi pi-cog',
      title: 'Automação de Processos',
      description:
        'Tarefas repetitivas que tomam seu tempo e atenção viram fluxos automáticos. Notificações, integrações entre sistemas, relatórios, follow-ups — tudo rodando sem intervenção manual. Você foca no que gera valor, o processo cuida do resto.',
    },
    {
      icon: 'pi pi-search',
      title: 'Consultoria e Diagnóstico Digital',
      description:
        'Antes de construir qualquer coisa, entendemos juntos onde está o problema real. Mapeio seus processos, identifico os gargalos e apresento um plano concreto — com o que resolver primeiro, o que vai gerar mais resultado e o que não vale a pena automatizar agora.',
    },
  ];
}
