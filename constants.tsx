import React from 'react';
import { ServiceItem, ProjectItem, StatItem } from './types';

export const SERVICES: ServiceItem[] = [
  { id: 1, title: 'Motion Graphics', description: 'Fluid animations that breathe life into your brand story.', icon: '🎬' },
  { id: 2, title: 'Content Strategy', description: 'Purpose-driven narratives that connect with your audience.', icon: '📝' },
  { id: 3, title: 'Digital Marketing', description: 'Data-led growth strategies for the modern digital landscape.', icon: '📈' },
  { id: 4, title: 'Creative & Production', description: 'Full-spectrum production from concept to final pixel.', icon: '🎨' },
  { id: 5, title: 'Media & Activations', description: 'Experiential brand moments that leave lasting impressions.', icon: '⚡' },
  { id: 6, title: 'Tech Solutions', description: 'Robust, scalable infrastructure for complex digital needs.', icon: '💻' },
];

export const PORTFOLIO: ProjectItem[] = [
  { id: 1, title: 'Neon Pulse', category: 'Motion Graphics', image: 'https://picsum.photos/seed/p1/800/600' },
  { id: 2, title: 'Ether Cloud', category: 'Tech Solutions', image: 'https://picsum.photos/seed/p2/800/600' },
  { id: 3, title: 'Lumina Brand', category: 'Creative & Production', image: 'https://picsum.photos/seed/p3/800/600' },
  { id: 4, title: 'Vortex Media', category: 'Media & Activations', image: 'https://picsum.photos/seed/p4/800/600' },
  { id: 5, title: 'Quantum Content', category: 'Content Strategy', image: 'https://picsum.photos/seed/p5/800/600' },
  { id: 6, title: 'Nexus Growth', category: 'Digital Marketing', image: 'https://picsum.photos/seed/p6/800/600' },
];

export const STATS: StatItem[] = [
  { label: 'Completed Projects', value: 450, suffix: '+' },
  { label: 'Happy Clients', value: 120, suffix: '+' },
  { label: 'Project Demos', value: 85, suffix: '' },
  { label: 'World Wide Clients', value: 580, suffix: '+' },
];