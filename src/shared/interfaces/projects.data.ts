import { Project } from './project.interface';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Vatican Legacy',
    description:
      'Landing page responsiva em homenagem ao Papa Francisco, com design moderno e estrutura organizada para destacar sua trajetória de forma elegante e envolvente.',
    image: '../../assets/images/card-challenge/vatican-legacy.png',
    githubUrl: 'https://github.com/denetodev/vatican-legacy',
    siteUrl: 'https://vatican-legacy.vercel.app/',
    isHovered: false,
  },
  {
    id: '2',
    title: 'Carbon Sphere',
    description:
      'Landing page moderna para uma plataforma que une blockchain e IA, promovendo o acesso democrático ao mercado de créditos de carbono. Conecta empresas, projetos ambientais e investidores em um ecossistema digital.',
    image: '../../assets/images/card-challenge/carbon-sphere.png',
    githubUrl: 'https://github.com/denetodev/Carbon-Sphere-LandingPage',
    siteUrl: 'https://carbon-sphere.vercel.app/home',
    isHovered: false,
  },
  {
    id: '3',
    title: 'Bistro Bliss',
    description:
      'Site moderno e funcional para um restaurante fictício, com design elegante, navegação de cardápio, reservas online e blog para uma experiência digital completa.',
    image: '../../assets/images/card-challenge/bistro-bliss.png',
    githubUrl: 'https://github.com/denetodev/bistro-bliss',
    siteUrl: 'https://bistro-bliss-amber.vercel.app/',
    isHovered: false,
  },
  {
    id: '4',
    title: 'Menu Restaurante',
    description:
      'Aplicação web responsiva que simula pedidos online, com seleção de pratos, ajustes de quantidades e cálculo interativo do total.',
    image: '../../assets/images/card-challenge/menu-restaurante.png',
    githubUrl: 'https://github.com/denetodev/BootCampDevJr_Projeto-Menu',
    siteUrl: 'https://boot-camp-dev-jr-projeto-menu.vercel.app/',
    isHovered: false,
  },
];
