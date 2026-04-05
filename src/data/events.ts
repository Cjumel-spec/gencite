import type { CommuneEvent, NewsArticle } from '@/lib/types';

export const events: CommuneEvent[] = [
  {
    id: 'e-1',
    category: 'culture',
    title: 'Festival de Musique de Printemps',
    date: '2026-04-18',
    time: '18:00 - 23:00',
    location: 'Place Centrale',
    description: 'Concert en plein air avec des artistes locaux et regionaux. Entree libre.',
  },
  {
    id: 'e-2',
    category: 'sports',
    title: 'Course des Communes 10km',
    date: '2026-04-25',
    time: '09:00 - 12:00',
    location: 'Depart: Parc des Sports',
    description: 'Course populaire ouverte a tous. Inscription en ligne ou sur place des 8h.',
  },
  {
    id: 'e-3',
    category: 'family',
    title: 'Chasse aux oeufs de Paques',
    date: '2026-04-12',
    time: '10:00 - 13:00',
    location: 'Parc des Tilleuls',
    description: 'Activite pour les enfants de 3 a 10 ans. Gouter offert.',
  },
  {
    id: 'e-4',
    category: 'senior',
    title: 'Apres-midi Jeux de Societe',
    date: '2026-04-10',
    time: '14:00 - 17:00',
    location: 'Maison de Quartier',
    description: 'Rencontre intergenerationnelle autour de jeux de societe. The et biscuits offerts.',
  },
  {
    id: 'e-5',
    category: 'community',
    title: 'Assemblee Communale',
    date: '2026-04-30',
    time: '19:30 - 21:30',
    location: 'Salle Communale',
    description: 'Assemblee ouverte a tous les residents. Ordre du jour: budget 2026 et projets d\'infrastructure.',
  },
  {
    id: 'e-6',
    category: 'culture',
    title: 'Exposition Art Local',
    date: '2026-05-05',
    time: '10:00 - 18:00',
    location: 'Galerie Municipale',
    description: 'Exposition d\'artistes locaux. Vernissage le 4 mai a 18h.',
  },
];

export const news: NewsArticle[] = [
  {
    id: 'n-1',
    title: 'Nouvelle piste cyclable inauguree',
    summary: 'La nouvelle piste cyclable reliant le centre-ville a la gare a ete inauguree ce matin. Longue de 2.3 km, elle ameliore la securite des cyclistes.',
    date: '2026-04-02',
    category: 'Infrastructure',
  },
  {
    id: 'n-2',
    title: 'Budget 2026 adopte a large majorite',
    summary: 'Le Conseil municipal a approuve le budget 2026 de 40M CHF, en hausse de 5% par rapport a l\'annee precedente. L\'education reste la priorite.',
    date: '2026-03-28',
    category: 'Politique',
  },
  {
    id: 'n-3',
    title: 'Collecte de dechets electroniques',
    summary: 'Une collecte speciale de dechets electroniques aura lieu le samedi 19 avril au parking de la salle communale, de 9h a 16h.',
    date: '2026-03-25',
    category: 'Environnement',
  },
  {
    id: 'n-4',
    title: 'Inscription creche : ouverture des demandes',
    summary: 'Les demandes d\'inscription pour les creches communales 2026-2027 sont ouvertes jusqu\'au 15 mai. Formulaire disponible en ligne.',
    date: '2026-03-20',
    category: 'Education',
  },
];
