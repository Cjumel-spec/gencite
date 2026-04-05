import type { BudgetItem, CouncilDecision } from '@/lib/types';

export const budgetCurrent: BudgetItem[] = [
  { category: 'Education', amount: 12400000, color: '#3b82f6' },
  { category: 'Infrastructure', amount: 8200000, color: '#f59e0b' },
  { category: 'Social', amount: 6800000, color: '#22c55e' },
  { category: 'Culture', amount: 3500000, color: '#a855f7' },
  { category: 'Administration', amount: 4100000, color: '#64748b' },
  { category: 'Safety', amount: 5000000, color: '#e63946' },
];

export const budgetPrevious: BudgetItem[] = [
  { category: 'Education', amount: 11800000, color: '#3b82f6' },
  { category: 'Infrastructure', amount: 7500000, color: '#f59e0b' },
  { category: 'Social', amount: 6200000, color: '#22c55e' },
  { category: 'Culture', amount: 3200000, color: '#a855f7' },
  { category: 'Administration', amount: 4000000, color: '#64748b' },
  { category: 'Safety', amount: 4800000, color: '#e63946' },
];

export const councilDecisions: CouncilDecision[] = [
  {
    id: 'cd-1',
    title: 'Renovation de la Place Centrale',
    summary: 'Approbation du budget de 2.4M CHF pour la renovation complete de la Place Centrale, incluant un nouvel eclairage, des bancs et une fontaine.',
    date: '2026-03-28',
    result: 'approved',
    votesFor: 18,
    votesAgainst: 3,
    abstentions: 2,
  },
  {
    id: 'cd-2',
    title: 'Zone 30 km/h Quartier des Ecoles',
    summary: 'Extension de la zone 30 km/h autour des ecoles primaires et du college pour ameliorer la securite des enfants.',
    date: '2026-03-15',
    result: 'approved',
    votesFor: 21,
    votesAgainst: 1,
    abstentions: 1,
  },
  {
    id: 'cd-3',
    title: 'Nouveau Centre Sportif Municipal',
    summary: 'Proposition de construction d\'un nouveau centre sportif avec piscine olympique. Budget estime: 15M CHF.',
    date: '2026-03-01',
    result: 'pending',
    votesFor: 0,
    votesAgainst: 0,
    abstentions: 0,
  },
  {
    id: 'cd-4',
    title: 'Subvention Panneaux Solaires',
    summary: 'Programme de subventions pour l\'installation de panneaux solaires sur les toitures des residences privees.',
    date: '2026-02-20',
    result: 'approved',
    votesFor: 20,
    votesAgainst: 2,
    abstentions: 1,
  },
  {
    id: 'cd-5',
    title: 'Privatisation du Stationnement',
    summary: 'Proposition de deleguer la gestion des parkings municipaux a une entreprise privee.',
    date: '2026-02-10',
    result: 'rejected',
    votesFor: 5,
    votesAgainst: 15,
    abstentions: 3,
  },
];

export const metrics = {
  population: 24350,
  budgetPerCapita: 1645,
  greenSpacePerResident: 42,
  satisfactionRate: 78,
};
