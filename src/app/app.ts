import { Component, HostListener } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  menuOpen = false;
  currentYear = new Date().getFullYear();

  skills = [
    { title: 'Programming', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
    { title: 'Frontend', items: ['Angular', 'HTML', 'SCSS', 'Responsive UI'] },
    { title: 'Backend & Data', items: ['REST APIs', 'PostgreSQL', 'Pandas', 'NumPy'] },
    { title: 'Scientific & AI', items: ['Time-series analysis', 'Signal processing', 'Wavelets', 'Machine learning — developing'] }
  ];

  projects = [
    {
      number: '01',
      type: 'SCIENTIFIC COMPUTING · PYTHON',
      title: 'TESS Transient Detection',
      description: 'A research project exploring wavelet-based methods to identify photometric transient events in TESS light curves, with a focus on stellar flares.',
      tags: ['Python', 'Lightkurve', 'PyWavelets', 'Time Series'],
      status: 'Research project',
      link: ''
    },
    {
      number: '02',
      type: 'FULL-STACK · AI APPLICATION',
      title: 'AI Operations Assistant',
      description: 'A planned business workflow application concept for extracting order details from incoming emails, preparing structured records and keeping consequential actions under human approval.',
      tags: ['Angular', 'Python', 'FastAPI', 'PostgreSQL'],
      status: 'Planned project',
      link: ''
    },
    {
      number: '04',
      type: 'WEB APPLICATION · FRONTEND DEVELOPMENT',
      title: 'Portfolio Builder',
      description: 'An interactive, frontend-based portfolio builder that enables users to create, customize and preview professional portfolio websites through a visual editing experience.',
      tags: ['Angular 20', 'TypeScript', 'SCSS', 'HTML'],
      status: 'Live project',
      link: 'https://portfolio-builder-lyart-two.vercel.app/'
    }
  ];

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}