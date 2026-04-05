import type { Department, FAQ } from '@/lib/types';

export const departments: Department[] = [
  {
    id: 'administration',
    icon: 'Building2',
    phone: '+41 22 123 45 00',
    email: 'admin@gencite.ch',
    hours: 'Lun-Ven: 8h00-12h00, 13h30-17h00',
  },
  {
    id: 'education',
    icon: 'GraduationCap',
    phone: '+41 22 123 45 10',
    email: 'education@gencite.ch',
    hours: 'Lun-Ven: 8h00-12h00, 13h30-16h30',
  },
  {
    id: 'social',
    icon: 'Heart',
    phone: '+41 22 123 45 20',
    email: 'social@gencite.ch',
    hours: 'Lun-Ven: 9h00-12h00, 14h00-17h00',
  },
  {
    id: 'technical',
    icon: 'Wrench',
    phone: '+41 22 123 45 30',
    email: 'technique@gencite.ch',
    hours: 'Lun-Ven: 7h30-12h00, 13h00-16h30',
  },
  {
    id: 'culture',
    icon: 'Music',
    phone: '+41 22 123 45 40',
    email: 'culture@gencite.ch',
    hours: 'Mar-Sam: 9h00-12h00, 14h00-18h00',
  },
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Comment obtenir une attestation de domicile ?',
    answer: 'Rendez-vous sur la page Services > Etat civil et remplissez le formulaire en ligne. Vous recevrez votre attestation par email sous 48h. Vous pouvez aussi vous rendre au guichet avec une piece d\'identite.',
    category: 'administrative',
  },
  {
    id: 'faq-2',
    question: 'Quels sont les horaires de la dechetterie ?',
    answer: 'La dechetterie est ouverte du mardi au samedi de 8h00 a 12h00 et de 13h30 a 17h30. Fermee les dimanches, lundis et jours feries.',
    category: 'environment',
  },
  {
    id: 'faq-3',
    question: 'Comment inscrire mon enfant a l\'ecole ?',
    answer: 'Les inscriptions se font en ligne via la page Services > Inscription scolaire. Vous aurez besoin du certificat de naissance, d\'un justificatif de domicile et du carnet de vaccination. Delai: avant le 31 mars pour la rentree de septembre.',
    category: 'education',
  },
  {
    id: 'faq-4',
    question: 'Comment signaler un probleme dans ma rue ?',
    answer: 'Utilisez notre page Signalement pour reporter tout probleme (eclairage, voirie, proprete, etc.). Vous pourrez suivre l\'avancement de votre signalement en temps reel.',
    category: 'safety',
  },
  {
    id: 'faq-5',
    question: 'Ou trouver les proces-verbaux du Conseil municipal ?',
    answer: 'Tous les proces-verbaux sont disponibles sur la page Transparence. Vous y trouverez les decisions du Conseil, les resultats des votes et les budgets detailles.',
    category: 'administrative',
  },
  {
    id: 'faq-6',
    question: 'Comment reserver une salle communale ?',
    answer: 'Les demandes de reservation se font via le formulaire en ligne sur la page Services > Location de salles. Prevoyez un delai de 2 semaines minimum. Une assurance responsabilite civile est requise.',
    category: 'culture',
  },
];
