import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MenuModule } from 'primeng/menu';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ScrollService } from '../../../shared/services/scroll.service';
import { ContactButtonComponent } from '../../../shared/components/contact-button/contact-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ContactButtonComponent,
    FormsModule,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
    MenuModule,

    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [MessageService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  newsletterForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private scrollService: ScrollService,
    private fb: FormBuilder  ) {
    this.newsletterForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollService.scrollToElement(sectionId);
        }, 100);
      });
    } else {
      this.scrollService.scrollToElement(sectionId);
    }
  }

  navigateToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
