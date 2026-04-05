import type { Service } from '@/lib/types';

export const services: Service[] = [
  // Administrative
  {
    id: 'civil-registry',
    category: 'administrative',
    icon: 'FileText',
    estimatedTime: '5-10 min',
    requiredDocs: ['Piece d\'identite', 'Justificatif de domicile'],
    status: 'online',
  },
  {
    id: 'building-permits',
    category: 'administrative',
    icon: 'Building2',
    estimatedTime: '15-30 min',
    requiredDocs: ['Plans architecturaux', 'Formulaire de demande', 'Titre de propriete'],
    status: 'mixed',
  },
  {
    id: 'parking-permits',
    category: 'administrative',
    icon: 'Car',
    estimatedTime: '5 min',
    requiredDocs: ['Carte grise', 'Piece d\'identite'],
    status: 'online',
  },
  // Education
  {
    id: 'school-enrollment',
    category: 'education',
    icon: 'GraduationCap',
    estimatedTime: '10-15 min',
    requiredDocs: ['Certificat de naissance', 'Justificatif de domicile', 'Carnet de vaccination'],
    status: 'mixed',
  },
  {
    id: 'library',
    category: 'education',
    icon: 'BookOpen',
    estimatedTime: '5 min',
    requiredDocs: ['Piece d\'identite'],
    status: 'online',
  },
  {
    id: 'extracurricular',
    category: 'education',
    icon: 'Palette',
    estimatedTime: '5-10 min',
    requiredDocs: ['Certificat medical (pour sports)'],
    status: 'online',
  },
  // Social
  {
    id: 'social-aid',
    category: 'social',
    icon: 'Heart',
    estimatedTime: '20-30 min',
    requiredDocs: ['Piece d\'identite', 'Justificatifs de revenus', 'Attestation de domicile'],
    status: 'inPerson',
  },
  {
    id: 'senior-services',
    category: 'social',
    icon: 'Users',
    estimatedTime: '10 min',
    requiredDocs: ['Piece d\'identite'],
    status: 'mixed',
  },
  // Culture
  {
    id: 'cultural-events',
    category: 'culture',
    icon: 'Music',
    estimatedTime: '2-5 min',
    requiredDocs: [],
    status: 'online',
  },
  {
    id: 'venue-rental',
    category: 'culture',
    icon: 'Home',
    estimatedTime: '15 min',
    requiredDocs: ['Formulaire de reservation', 'Assurance responsabilite civile'],
    status: 'mixed',
  },
  // Environment
  {
    id: 'waste-collection',
    category: 'environment',
    icon: 'Recycle',
    estimatedTime: '2 min',
    requiredDocs: [],
    status: 'online',
  },
  {
    id: 'green-initiatives',
    category: 'environment',
    icon: 'TreePine',
    estimatedTime: '10 min',
    requiredDocs: ['Formulaire de participation'],
    status: 'online',
  },
  // Safety
  {
    id: 'emergency-contacts',
    category: 'safety',
    icon: 'Phone',
    estimatedTime: '1 min',
    requiredDocs: [],
    status: 'online',
  },
  {
    id: 'noise-complaint',
    category: 'safety',
    icon: 'Volume2',
    estimatedTime: '5-10 min',
    requiredDocs: ['Description detaillee'],
    status: 'online',
  },
];
