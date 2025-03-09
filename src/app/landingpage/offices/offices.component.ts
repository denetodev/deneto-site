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
      icon: 'pi pi-code',
      title: 'Desenvolvimento Web',
      description:
        'Sistemas web robustos e escaláveis utilizando Angular e Spring Boot. APIs REST, integrações com banco de dados, autenticação segura e interface responsiva. Desenvolvimento completo desde o front-end até o back-end.',
    },
    {
      icon: 'pi pi-globe',
      title: 'Sites e Landing Pages',
      description:
        'Sites institucionais e páginas de vendas otimizadas para conversão. Design moderno, alta performance no Google, integração com análise de dados e ferramentas de marketing. Desenvolvimento com WordPress e tecnologias modernas.',
    },
    {
      icon: 'pi pi-mobile',
      title: 'Aplicativos Mobile',
      description:
        'Apps mobile multiplataforma desenvolvidos com Bubble.io. Sem código nativo, mais agilidade na entrega e facilidade nas atualizações. Integração com APIs, autenticação, notificações push e features personalizadas.',
    },
  ];
}
