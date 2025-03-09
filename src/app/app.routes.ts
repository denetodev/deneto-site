import { Routes } from '@angular/router';
import { LandingPageComponent } from './landingpage/landingpage.component';
import { BlogComponent } from './landingpage/blog/blog.component';
import { ProjectsComponent } from './landingpage/projects/projects.component';
import { HomeComponent } from './landingpage/home/home.component';
import { OfficesComponent } from './landingpage/offices/offices.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Rota principal

  // Rota dentro da LandingPage
  { path: 'home', component: HomeComponent },
  { path: 'offices', component: OfficesComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'blog', component: BlogComponent },

  // Redireciona para a página principal se a rota não for encontrada
  { path: '**', redirectTo: '' },
];
