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
      link: 'https://github.com/'
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
      number: '03',
      type: 'DATA SCIENCE · ANALYTICS',
      title: 'Data Analytics Workbench',
      description: 'A planned interactive workspace for exploring datasets, visualising trends and experimenting with forecasting and anomaly-detection techniques.',
      tags: ['Python', 'Pandas', 'SQL', 'Visualisation'],
      status: 'Planned project',
      link: ''
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