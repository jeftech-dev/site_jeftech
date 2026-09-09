// Content for the Jëftech redesign (imported from the Claude Design mockup).
// Text is the source of truth for the marketing copy — edit here.

const WA = 'https://wa.me/221779649539'
const waText = (msg) => `${WA}?text=${encodeURIComponent(msg)}`

export const DOORS = [
  { n: '01', title: "J'ai besoin d'un site", desc: 'Vitrine, e-commerce, ou refonte de ce que vous avez déjà.', to: '/services' },
  { n: '02', title: "J'ai besoin d'une application", desc: 'iOS, Android, ou une application web pour vos utilisateurs.', to: '/services' },
  { n: '03', title: "J'ai besoin d'un logiciel métier", desc: 'Automatiser un processus interne qui vous coûte des heures.', to: '/services' },
  { n: '04', title: 'Je ne sais pas encore', desc: "Décrivez le problème, on vous dit s'il y a une solution logicielle.", to: '/contact' },
]

export const METHOD = [
  {
    tag: 'SEMAINE 1',
    title: 'On cadre, et on écrit tout.',
    desc: "Un appel de trente minutes, puis un document : le périmètre exact, les maquettes des écrans clés, le délai ferme et le prix ferme. Vous lisez, vous corrigez, vous validez — avant qu'une ligne de code existe.",
    out: 'Livrable : document de cadrage + maquettes + devis ferme',
  },
  {
    tag: 'SEMAINES 2-N',
    title: 'On construit, vous voyez avancer.',
    desc: "Une démo fonctionnelle chaque semaine, sur une vraie URL que vous pouvez ouvrir. Vous corrigez le cap tôt, quand ça coûte encore une heure au lieu d'une semaine.",
    out: 'Livrable : une version testable par semaine',
  },
  {
    tag: 'APRÈS',
    title: 'On reste, et le code est à vous.',
    desc: "Mise en ligne, formation de vos équipes, dépôt Git et documentation remis. Puis notre numéro direct : un bug, une question, une évolution — vous nous appelez, pas un ticket.",
    out: 'Livrable : dépôt Git, accès, documentation, contrat de maintenance',
  },
]

export const GUARANTEES = [
  { title: 'Le code est à vous', desc: "Dépôt Git, accès d'hébergement et documentation technique remis à la livraison. Vous n'êtes jamais prisonnier de nous." },
  { title: 'Périmètre et prix fermes', desc: 'Fixés par écrit au cadrage, validés par vous. Si le périmètre change, on le rechiffre avant, pas après.' },
  { title: 'Réponse sous 24 h ouvrées', desc: 'Par email, WhatsApp ou téléphone, par une personne qui travaille réellement sur votre projet.' },
]

export const SITE_FAQ = [
  { q: "Combien de temps dure l'appel ?", a: "Trente minutes. On écoute votre besoin, on pose les questions qui changent le devis, et on vous dit franchement si c'est un projet pour nous ou non." },
  { q: 'Comment fixez-vous le prix ?', a: "Au cadrage, jamais avant. Après l'appel on écrit un document — périmètre, maquettes, délai, prix ferme. Vous le validez, ou non. Le cadrage vous est facturé seulement si vous poursuivez." },
  { q: 'Quels sont vos délais typiques ?', a: "Site vitrine : 3 à 5 semaines. E-commerce : 6 à 8 semaines. Application mobile : 8 à 12 semaines. Logiciel métier : 3 à 6 mois. Le délai ferme est dans le document de cadrage." },
  { q: "Le code source m'appartient-il ?", a: "Oui, et c'est écrit dans le contrat. À la livraison on vous remet le dépôt Git, les accès d'hébergement et la documentation technique. Vous pouvez partir avec un autre prestataire à tout moment." },
  { q: 'Que se passe-t-il après la mise en ligne ?', a: "On corrige les bugs, on surveille la disponibilité et la sécurité, et on reste joignables pour les évolutions. Forfait mensuel ou intervention à la carte, vous choisissez." },
  { q: 'Travaillez-vous hors du Sénégal ?', a: "Oui. On est à Dakar et on travaille avec des clients en Afrique de l'Ouest, en France et ailleurs. Visio, WhatsApp, email — on s'adapte à vos horaires, et on vous dit sous quel fuseau on répond." },
]

export const SECTORS = [
  { sector: 'Secteur public', org: 'Direction Informatique du Trésor' },
  { sector: 'Défense & aviation', org: "École de l'Armée de l'Air" },
  { sector: 'Vision par ordinateur', org: 'Syrate' },
  { sector: 'Startup & plateforme', org: 'Njaboot Connect' },
  { sector: 'Événementiel tech', org: 'PARC — PanAfrican Robotics Competition' },
]

export const SERVICES = [
  {
    n: '01', variant: 'ground', title: 'Sites & e-commerce',
    wa: waText("Bonjour Jëftech, je veux parler d'un projet de site ou d'e-commerce."),
    lede: "Vitrines qui expliquent votre activité en dix secondes, et boutiques qui encaissent en mobile money comme en carte.",
    timeline: '3 à 8 semaines',
    stack: 'React, Next.js, TypeScript, CinetPay, Stripe, Vercel',
    gets: [
      'Un site rapide sur un vrai téléphone, pas seulement sur votre bureau',
      'Paiement carte, Orange Money et Wave, testés en production',
      'Un espace où vous modifiez vos textes et produits sans nous appeler',
      'Référencement technique : sitemap, données structurées, Core Web Vitals',
      "Formation d'une heure à la prise en main",
    ],
    needs: [
      "Vos textes, ou une heure d'entretien pour qu'on les écrive",
      'Votre logo et vos photos produits',
      'Un compte marchand chez votre opérateur de paiement',
    ],
  },
  {
    n: '02', variant: 'surface', title: 'Applications mobiles',
    wa: waText("Bonjour Jëftech, je veux parler d'un projet d'application mobile."),
    lede: "iOS et Android, publiés sur les stores, avec le mode hors-ligne que vos utilisateurs auront de toute façon besoin.",
    timeline: '8 à 12 semaines',
    stack: 'React Native, Expo, TypeScript, Supabase, EAS Build',
    gets: [
      "Une application sur l'App Store et le Play Store, publiée par nous",
      'Mode hors-ligne et synchronisation à la reconnexion',
      'Notifications push et paiement mobile money intégrés',
      'Un tableau de bord web pour piloter le contenu',
      'Les comptes développeur restent à votre nom',
    ],
    needs: [
      'Une décision claire sur ce que fait la version 1',
      'Un interlocuteur unique disponible une heure par semaine',
      'Les comptes Apple et Google — on vous guide pour les ouvrir',
    ],
  },
  {
    n: '03', variant: 'ground', title: 'Applications web & SaaS',
    wa: waText("Bonjour Jëftech, je veux parler d'un projet d'application web ou de SaaS."),
    lede: "Tableaux de bord, portails clients, plateformes multi-utilisateurs. Là où un tableur ne suffit plus.",
    timeline: '3 à 6 mois',
    stack: 'Next.js, Node.js, PostgreSQL, Prisma, Docker',
    gets: [
      'Comptes, rôles et permissions pensés dès le départ',
      'Une API documentée, pour brancher vos autres outils',
      'Des tableaux de bord qui répondent à vos questions, pas à des questions génériques',
      'Hébergement qui suit la charge, avec sauvegardes vérifiées',
      'Documentation technique lisible par un autre développeur',
    ],
    needs: [
      'Vos processus actuels décrits honnêtement, exceptions incluses',
      'Un accès à un utilisateur final, pas seulement à la direction',
      "Les données existantes à migrer, dans n'importe quel format",
    ],
  },
  {
    n: '04', variant: 'surface', title: 'Logiciels métier & automatisation',
    wa: waText("Bonjour Jëftech, je veux parler d'un projet de logiciel métier ou d'automatisation."),
    lede: "Le travail répétitif que quelqu'un chez vous fait à la main chaque semaine. On le supprime.",
    timeline: '2 à 5 mois',
    stack: 'Python, Node.js, PostgreSQL, Redis, intégrations API',
    gets: [
      "Un audit chiffré : combien d'heures par mois vous récupérez",
      'Un outil qui parle à vos logiciels existants, sans double saisie',
      'Des automatisations qui vous alertent quand elles échouent',
      'Formation des équipes concernées, pas seulement du chef',
      "Maintenance évolutive : le métier change, l'outil suit",
    ],
    needs: [
      "Une demi-journée d'observation sur place ou en visio",
      'Un exemple réel de chaque cas, y compris ceux qui cassent la règle',
      'Un responsable interne qui a le pouvoir de trancher',
    ],
  },
]

export const CONCEPTS = [
  {
    variant: 'ground', kind: 'SaaS & tableau de bord', title: 'SmartStock AI',
    idea: "Une gérante de boutique commande trop ou trop peu, parce qu'elle prévoit de mémoire. Est-ce qu'un modèle simple sur son historique fait mieux ?",
    built: "Une application de gestion de stock avec prévisions de demande, alertes de réapprovisionnement et tableaux de bord analytiques.",
    learned: "La prévision n'est pas le problème : la saisie l'est. On a réécrit l'entrée de stock trois fois avant qu'elle prenne moins de dix secondes par référence.",
    stack: 'Next.js · PostgreSQL · Python · Vercel',
    url: 'https://smartstock-ai-topaz.vercel.app/',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
  },
  {
    variant: 'surface', kind: 'Application web', title: 'Foot Vert',
    idea: "Réserver un terrain à Dakar se fait par appels et par WhatsApp. On voulait voir ce que donnait un planning partagé en temps réel entre plusieurs complexes.",
    built: "Une plateforme de réservation : planning temps réel, paiement en ligne, gestion multi-complexes, notifications automatiques et dashboard gérant.",
    learned: "Les conflits de réservation simultanée sont le cœur du problème, pas l'interface. Le verrouillage optimiste au niveau base a été la vraie décision d'architecture.",
    stack: 'React · Node.js · PostgreSQL · WebSockets',
    url: 'https://foot-vert.vercel.app/',
    img: 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785278883/Screenshot_2026-07-28_at_22.46.42_g7unvh.png',
  },
  {
    variant: 'ground', kind: 'Application mobile', title: 'Senegal Food App',
    idea: "Tester une commande de repas de bout en bout avec un paiement mobile money réel et un suivi de livreur, sur des connexions instables.",
    built: "Catalogue restaurants, panier, paiement mobile money, suivi livreur en temps réel, programme de fidélité et dashboard restaurant.",
    learned: "Le suivi temps réel doit dégrader proprement : quand le réseau tombe, afficher la dernière position connue avec son horodatage vaut mieux qu'une carte vide.",
    stack: 'React Native · Expo · Supabase · CinetPay',
    url: 'https://senegal-food-app.vercel.app/',
    img: 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279162/Screenshot_2026-07-28_at_22.51.55_urcwir.png',
  },
]

export const ORG_COUNT = SECTORS.length
