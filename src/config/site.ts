/**
 * Cayes Talent Lab — configuration centralisée.
 *
 * SEUL fichier à éditer quand ZLC confirme les informations en attente.
 * Tous les `[À confirmer]` / placeholders sont regroupés ici.
 *
 * Référence : 03_Wireframes_Cayes_Talent_Lab.md (§11 « Spécificités à valider »)
 * et 01_Conventions_Communes_2_Sites.md (§5 conventions rédactionnelles).
 */

/* ─────────────────────────────  Site  ───────────────────────────── */

export const site = {
  name: 'Cayes Talent Lab',
  /** Mention discrète à côté du logo (doc 03 §2). */
  editionMention: 'Une édition du Haiti Talent Lab',
  url: 'https://cayestalentlab.com',
  /** Tagline maîtresse — proposition par défaut, à valider ZLC (doc 01 §5.1). */
  tagline: 'Connecter les talents haïtiens aux opportunités réelles.',
  description:
    "La 1ʳᵉ édition nationale du Haiti Talent Lab arrive aux Cayes. " +
    'Deux jours pour connecter les talents du Sud d’Haïti aux entreprises qui recrutent.',
  locale: 'fr',
  lang: 'fr',
} as const;

/* ────────────────────────────  Événement  ─────────────────────────── */

export const event = {
  /** Affichage tant que la date précise n'est pas fixée (doc 01 §5.4). */
  dateLabel: 'Juillet 2026',
  /**
   * Date PROVISOIRE servant uniquement au compte à rebours.
   * À remplacer par la date réelle confirmée par ZLC (🔴 critique).
   * Haïti = UTC-4 en juillet (heure d'été).
   */
  dateISO: '2026-07-15T08:00:00-04:00',
  dateConfirmed: false,

  city: 'Les Cayes',
  locationLabel: '[Lieu — à confirmer], Les Cayes',
  locationConfirmed: false,

  schedule: '8h–17h les deux jours',
  access: 'Sur inscription — gratuit pour les candidats présélectionnés',

  /** Date limite de dépôt des candidatures (🔴 critique, doc 03 §11). */
  applicationDeadlineLabel: '[Date à confirmer]',
  applicationDeadlineConfirmed: false,

  /**
   * Carte — centrée sur la ville des Cayes tant que le lieu exact n'est
   * pas confirmé. Quand le venue est arrêté : mettre les coordonnées
   * précises ici (+ passer mapConfirmed à true).
   */
  mapLat: 18.1939,
  mapLng: -73.7444,
  mapZoom: 14,
  mapQuery: 'Les Cayes, Haïti',
  mapConfirmed: false,
} as const;

/* ────────────────────  Écosystème (liens croisés)  ─────────────────── */
/* Règles de renvoi : doc 01 §3.1. */

export const ecosystem = {
  haitiTalentLab: 'https://haititalentlab.cv',
  capTalentLab: 'https://captalentlab.com',
  hub: 'https://haititalenthub.com',
  /** Redirection directe candidature candidat (doc brief). */
  hubCandidateSignup: 'https://haititalenthub.com/login?role=candidate#signup',
  zeroLoss: 'https://zeroloss-ht.com',
} as const;

/* ──────────────────  Preuve sociale — pilote Cap T.L.  ─────────────── */
/* Bloc #1, doc 01 §4. Format chiffres : doc 01 §5.3. */

export const pilot = {
  name: 'Cap Talent Lab',
  city: 'Cap-Haïtien',
  dateLabel: '23-24 janvier 2026',
  url: 'https://captalentlab.com',
  stats: [
    { value: '+200', label: 'candidatures recueillies' },
    { value: '+100', label: 'candidats présélectionnés' },
    /** « 20+ » retenu (dossier de presse officiel) — à valider ZLC. */
    { value: '20+', label: 'entreprises partenaires' },
    { value: '4,9 / 5', label: 'satisfaction' },
    { value: '+10 %', label: 'candidats placés' },
  ],
} as const;

/* ─────────────────  Calendrier national — 6 villes  ────────────────── */
/* Doc 03 §3.7 / doc 02 §3.5. */

export type EditionStatus = 'current' | 'upcoming' | 'soon';

export const nationalCalendar: ReadonlyArray<{
  city: string;
  dateLabel: string;
  note: string;
  status: EditionStatus;
  url?: string;
}> = [
  {
    city: 'Les Cayes',
    dateLabel: 'Juillet 2026',
    note: '1ʳᵉ ville — édition nationale',
    status: 'current',
  },
  {
    city: 'Cap-Haïtien',
    dateLabel: 'Septembre 2026',
    note: '2ᵉ édition — Nord',
    status: 'upcoming',
    url: ecosystem.capTalentLab,
  },
  {
    city: 'Port-au-Prince',
    dateLabel: 'Novembre 2026',
    note: 'Capitale — audience nationale',
    status: 'soon',
  },
  {
    city: 'Gonaïves',
    dateLabel: 'Janvier 2027',
    note: 'Artibonite',
    status: 'soon',
  },
  { city: 'Jacmel', dateLabel: 'Mars 2027', note: 'Grand Sud-Est', status: 'soon' },
  {
    city: 'Port-de-Paix',
    dateLabel: 'Mai 2027',
    note: 'Grand Nord-Ouest',
    status: 'soon',
  },
];

/* ────────────────────────────  Navigation  ────────────────────────── */
/* Header : doc 03 §2. Le CTA POSTULER est la priorité n°1. */

export const nav: ReadonlyArray<{ label: string; href: string }> = [
  { label: "L'événement", href: '/levenement' },
  { label: 'Candidats', href: '/candidats' },
  { label: 'Entreprises', href: '/entreprises' },
  { label: 'Partenaires', href: '/partenaires' },
  { label: 'Programme', href: '/programme' },
  { label: 'Presse', href: '/presse' },
];

export const primaryCta = { label: 'Postuler', href: '/candidats' } as const;

/* ──────────────────────────────  Footer  ──────────────────────────── */
/* Structure commune : doc 01 §3.2. Section Éditions : Cayes en 1ᵉʳ. */

export const footerColumns: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<{ label: string; href: string; here?: boolean }>;
}> = [
  {
    title: 'Le programme',
    links: [
      { label: "L'événement", href: '/levenement' },
      { label: 'Le programme', href: '/programme' },
      { label: 'Programme national', href: ecosystem.haitiTalentLab },
    ],
  },
  {
    title: 'Éditions',
    links: [
      { label: 'Les Cayes 2026', href: '/', here: true },
      { label: 'Cap-Haïtien', href: ecosystem.capTalentLab },
      { label: 'Voir toutes les villes', href: `${ecosystem.haitiTalentLab}/editions` },
    ],
  },
  {
    title: 'Participer',
    links: [
      { label: 'Candidats', href: '/candidats' },
      { label: 'Entreprises', href: '/entreprises' },
      { label: 'Partenaires', href: '/partenaires' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Presse', href: '/presse' },
      { label: 'Contact', href: '/contact' },
      { label: 'Haiti Talent Hub', href: ecosystem.hub },
    ],
  },
];

export const social: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Facebook', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
];

export const legalLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/confidentialite' },
  { label: 'Contact', href: '/contact' },
];

/* ──────────────────────────────  Contacts  ────────────────────────── */
/* Page Contact : doc 03 §10 (3 contacts). Placeholders à désigner ZLC. */

export const contacts: ReadonlyArray<{
  audience: string;
  name: string;
  email: string;
  phone: string;
}> = [
  {
    audience: 'Candidats',
    name: '[Contact à désigner]',
    email: 'candidats@cayestalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
  {
    audience: 'Entreprises recruteuses',
    name: '[Contact à désigner]',
    email: 'entreprises@cayestalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
  {
    audience: 'Partenaires & médias',
    name: '[Contact à désigner]',
    email: 'partenaires@cayestalentlab.com',
    phone: '[Téléphone à confirmer]',
  },
];

/* ──────────────────────────────  Formulaires  ─────────────────────── */

/** ID Formspree depuis l'env (voir .env.example). Vide = non configuré. */
export const formspreeId: string = import.meta.env.PUBLIC_FORMSPREE_ID ?? '';
export const formsConfigured = formspreeId.trim().length > 0;
export const formspreeEndpoint = formsConfigured
  ? `https://formspree.io/f/${formspreeId}`
  : '';

/* ──────────────────────  Schema.org Event  ────────────────────────── */

export const eventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: site.name,
  description: site.description,
  startDate: event.dateISO,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: event.city,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Les Cayes',
      addressCountry: 'HT',
    },
  },
  image: `${site.url}/og-cayes.png`,
  url: site.url,
  organizer: {
    '@type': 'Organization',
    name: 'Zero Loss Consulting',
    url: ecosystem.zeroLoss,
  },
} as const;

/* ────────────────────  Organisation porteuse  ─────────────────────── */

export const org = {
  name: 'Zero Loss Consulting',
  url: ecosystem.zeroLoss,
  initiativeLine: 'Une initiative de Zero Loss Consulting',
  hubLine: 'Plateforme partenaire : Haiti Talent Hub',
} as const;
