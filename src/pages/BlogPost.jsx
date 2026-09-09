import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Share2 } from 'lucide-react'
import { BLOG_POSTS } from '../data/blog-posts.js'
import ContactBand from '../components/ContactBand.jsx'

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function getPostContent(slug) {
  const contents = {
    'cout-site-web-senegal': `
      <h2>Les quatre types de projets web</h2>
      
      <h3>1. Site vitrine simple</h3>
      <p><strong>Pour qui ?</strong> Artisans, consultants, TPE, associations.</p>
      <p><strong>Ce que vous obtenez :</strong> 5-8 pages (Accueil, À propos, Services, Réalisations, Contact), design responsive, formulaire de contact, SEO de base, hébergement inclus la première année.</p>
      <p><strong>Délai :</strong> 2-3 semaines.</p>

      <h3>2. Site vitrine professionnel</h3>
      <p><strong>Pour qui ?</strong> PME, cabinets, écoles, ONG, startups.</p>
      <p><strong>Ce que vous obtenez :</strong> Design sur mesure, blog/CMS pour publier du contenu, optimisation SEO avancée, analytics, formulaires avancés, conformité RGPD, performance (Lighthouse > 90), formation à l'administration.</p>
      <p><strong>Délai :</strong> 4-6 semaines.</p>

      <h3>3. E-commerce</h3>
      <p><strong>Pour qui ?</strong> Commerçants, marques, distributeurs.</p>
      <p><strong>Ce que vous obtenez :</strong> Catalogue produits illimité, variantes (tailles, couleurs), panier, paiement <strong>Orange Money + Wave + Carte</strong>, espace client, gestion stocks/commandes, emails transactionnels, dashboard admin, SEO fiches produits, facturation auto.</p>
      <p><strong>Délai :</strong> 6-10 semaines.</p>

      <h3>4. Application web / SaaS sur mesure</h3>
      <p><strong>Pour qui ?</strong> Entreprises avec processus métiers uniques, startups tech, Scale-ups.</p>
      <p><strong>Ce que vous obtenez :</strong> Architecture modulaire, API documentées, authentification SSO/2FA, rôles/permissions (RBAC), temps réel, automatisations, tests automatisés, CI/CD, monitoring, documentation technique, propriété du code.</p>
      <p><strong>Délai :</strong> 3-6 mois.</p>

      <h2>Ce qui influence le budget</h2>
      <ul>
        <li>Nombre de pages uniques et leur complexité</li>
        <li>Design sur mesure vs template</li>
        <li>Intégration paiement (Orange Money, Wave, Stripe)</li>
        <li>Espace membre / espace client</li>
        <li>Multilingue (FR/EN/WO)</li>
        <li>Migration données existantes</li>
        <li>Maintenance incluse (1 an)</li>
      </ul>

      <h2>Les pièges à éviter</h2>
      <h3>❌ "Je vais prendre le moins cher"</h3>
      <p>Un site low-cost fait avec un builder (Wix, WordPress + thème) vous coûtera plus cher à long terme : performances médiocres, SEO inexistant, impossible à faire évoluer, dépendance au prestataire.</p>

      <h3>❌ "Mon neveu sait faire des sites"</h3>
      <p>Compétence technique ≠ expertise produit. Un site pro demande : UX, SEO, accessibilité, sécurité, performance, conversion, maintenance. C'est un métier.</p>

      <h3>❌ Négliger le contenu</h3>
      <p>Le design sans contenu, c'est une coquille vide. Prévoyez du temps pour : textes optimisés SEO, photos pro, vidéos, témoignages clients.</p>

      <h3>❌ Oublier l'après-lancement</h3>
      <p>Un site non maintenu = faille de sécurité + lenteur + baisse SEO. Prévoyez un budget maintenance annuel.</p>

      <h2>Notre approche chez Jëftech</h2>
      <ol>
        <li><strong>Appel découverte gratuit (30 min)</strong> : On comprend votre besoin, votre cible, vos objectifs.</li>
        <li><strong>Cadrage & devis détaillé</strong> : Pas de surprise. Chaque ligne est explicite.</li>
        <li><strong>Maquettes validées avant code</strong> : Vous voyez le résultat avant qu'on développe.</li>
        <li><strong>Livraison par étapes</strong> : Démo hebdomadaire, vous validez au fur et à mesure.</li>
        <li><strong>Formation + documentation</strong> : Vous êtes autonome.</li>
        <li><strong>Maintenance incluse 3 mois</strong> : Puis forfait mensuel ou à la carte.</li>
      </ol>
    `,
    'choisir-agence-web-senegal': `
      <h2>1. Regardez le portfolio — mais pas seulement les captures d'écran</h2>
      <p><strong>Ce qu'il faut vérifier :</strong></p>
      <ul>
        <li>Les sites sont-ils <strong>en ligne</strong> et <strong>fonctionnels</strong> ? (Cliquez les liens)</li>
        <li>Sont-ils <strong>rapides</strong> ? (Testez sur mobile avec PageSpeed Insights)</li>
        <li>Y a-t-il des <strong>projets similaires</strong> au vôtre ? (E-commerce, SaaS, mobile, etc.)</li>
        <li>Le code est-il <strong>maintenable</strong> ? (Demandez l'accès au repo Git ou à la doc technique)</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> Portfolio avec seulement des images, pas de liens vers des sites vivants.</p>

      <h2>2. Vérifiez l'expertise technique réelle</h2>
      <p><strong>Questions à poser :</strong></p>
      <ul>
        <li>"Quelle stack utilisez-vous et pourquoi ?" (Pas de bonne réponse unique, mais une réponse argumentée)</li>
        <li>"Comment gérez-vous la sécurité ?" (Auth, HTTPS, headers, RGPD, OWASP)</li>
        <li>"Quelle est votre approche performance ?" (Core Web Vitals, lazy loading, caching, CDN)</li>
        <li>"Faites-vous des tests automatisés ?" (Unit, integration, E2E)</li>
        <li>"Comment déployez-vous ?" (CI/CD, staging, rollback, monitoring)</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> "On fait du WordPress pour tout" ou "On utilise [techno à la mode] sans savoir pourquoi".</p>

      <h2>3. Exigez un processus clair et transparent</h2>
      <p>Une agence pro a un processus <strong>documenté</strong> qu'elle vous explique au premier rendez-vous :</p>
      <ol>
        <li><strong>Découverte</strong> : Besoins, cibles, objectifs, KPIs</li>
        <li><strong>Cadrage</strong> : Périmètre, planning, risques</li>
        <li><strong>Design</strong> : Wireframes → Maquettes → Prototypes → Validation</li>
        <li><strong>Développement</strong> : Sprints hebdomadaires, démo, feedback</li>
        <li><strong>Tests</strong> : QA, UAT, performance, sécurité, accessibilité</li>
        <li><strong>Lancement</strong> : Go-live, DNS, monitoring, formation</li>
        <li><strong>Maintenance</strong> : SLA, surveillance, évolutions</li>
      </ol>
      <p><strong>Drapeau rouge :</strong> "On commence demain, on verra au fur à mesure" ou pas de planning avec jalons.</p>

      <h2>4. La transparence — pas de surprise</h2>
      <p><strong>Un devis pro contient :</strong></p>
      <ul>
        <li>Détail par fonctionnalité/écran</li>
        <li>Coût de la maintenance (annuel ou mensuel)</li>
        <li>Ce qui est <strong>inclus</strong> et ce qui ne l'est <strong>pas</strong> (contenu, photos, SEO avancé, hébergement, noms de domaine, emails pro)</li>
        <li>Conditions de paiement (échéancier lié aux livrables)</li>
        <li>Clause de propriété du code source</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> Devis une ligne "Site web complet" sans détail.</p>

      <h2>5. La maintenance n'est pas une option</h2>
      <p><strong>Posez ces questions :</strong></p>
      <ul>
        <li>"Que se passe-t-il si mon site tombe en panne un dimanche ?"</li>
        <li>"Combien coûte une modification mineure après livraison ?"</li>
        <li>"Faites-vous les mises à jour de sécurité ?"</li>
        <li>"Y a-t-il un monitoring uptime ?"</li>
        <li>"Quel est le SLA (temps de réponse garanti) ?"</li>
      </ul>
      <p><strong>Chez Jëftech :</strong> 3 mois offerts, puis forfait mensuel (surveillance + mises à jour + support prioritaire) ou à la carte. Code source = vôtre.</p>

      <h2>6. Les avis clients — allez au-delà des 5 étoiles</h2>
      <p><strong>Ce qu'il faut creuser :</strong></p>
      <ul>
        <li>Demandez 2-3 <strong>références directes</strong> (téléphone/email de vrais clients)</li>
        <li>Appelez-les : "Qu'est-ce qui s'est bien passé ? Qu'est-ce qui a été difficile ? Referiez-vous appel à eux ?"</li>
        <li>Cherchez des avis sur Google, LinkedIn, Clutch — pas seulement sur le site de l'agence</li>
      </ul>
      <p><strong>Drapeau rouge :</strong> Aucune référence vérifiable, ou refus de donner des contacts clients.</p>

      <h2>7. Le feeling — vous allez travailler ensemble pendant des mois</h2>
      <ul>
        <li>Répondent-ils <strong>vite</strong> et <strong>clairement</strong> à vos questions ?</li>
        <li>Vous parlent-ils <strong>langage business</strong> ou <strong>jargon technique</strong> ?</li>
        <li>Sont-ils <strong>honnêtes</strong> sur ce qui est possible/difficile/risqué ?</li>
        <li>Vous sentez-vous <strong>écouté</strong> ou <strong>vendu</strong> ?</li>
      </ul>
    `,
    'cout-application-mobile-senegal': `
      <h2>Les 3 approches techniques</h2>
      <table>
        <thead>
          <tr><th>Approche</th><th>Description</th><th>Pour qui ?</th></tr>
        </thead>
        <tbody>
          <tr><td>React Native / Expo (Cross-platform)</td><td>Un code base pour iOS + Android. 80-90% code partagé.</td><td>Startups, PME, MVP, apps métiers</td></tr>
          <tr><td>Flutter (Cross-platform Google)</td><td>Un code base, performance proche native, UI cohérente.</td><td>Apps exigeantes UI, équipes Flutter</td></tr>
          <tr><td>Native (Swift iOS + Kotlin Android)</td><td>Deux codes séparés, performance max, accès total APIs.</td><td>Apps critiques (banque, santé, jeux 3D), gros budgets</td></tr>
        </tbody>
      </table>
      <p><strong>Notre recommandation par défaut : React Native + Expo</strong> — meilleur ratio délai/coût/qualité pour 90% des projets au Sénégal.</p>

      <h2>Ce qui influence le budget</h2>
      <h3>Complexité fonctionnelle</h3>
      <table>
        <thead><tr><th>Niveau</th><th>Exemples</th></tr></thead>
        <tbody>
          <tr><td>Simple</td><td>Catalogue, vitrine, formulaire, contenu statique, auth basique</td></tr>
          <tr><td>Moyenne</td><td>E-commerce, réservation, chat, paiement, notifications, géoloc, mode offline partiel</td></tr>
          <tr><td>Complexe</td><td>Temps réel (tracking, chat), IA/ML, sync offline-first, multi-rôles, API tierces multiples</td></tr>
        </tbody>
      </table>

      <h3>Fonctionnalités qui augmentent le coût</h3>
      <ul>
        <li>Paiement mobile money (Orange Money, Wave, CinetPay)</li>
        <li>Notifications push (Firebase, OneSignal)</li>
        <li>Géolocalisation + carte interactive</li>
        <li>Mode hors-ligne complet (sync bidirectionnelle)</li>
        <li>Chat temps réel / messagerie</li>
        <li>Authentification biométrique / SSO</li>
        <li>Tableau de bord admin web associé</li>
        <li>Publication stores (comptes dev, review, metadata)</li>
      </ul>

      <h2>Exemples de projets Jëftech</h2>
      <h3>Senegal Food App — Livraison repas Dakar</h3>
      <ul><li><strong>Stack :</strong> React Native (Expo) + Node.js/Express + PostgreSQL + Firebase</li><li><strong>Délai :</strong> 14 semaines</li><li><strong>Résultat :</strong> 1000+ commandes mois 1, note 4.7/5 stores</li></ul>

      <h3>Foot Vert — Réservation terrains foot</h3>
      <ul><li><strong>Stack :</strong> PWA (Next.js) + Firebase — choix PWA vs natif pour déploiement instantané sans store</li><li><strong>Délai :</strong> 8 semaines</li></ul>

      <h3>App interne logistique — Client B2B</h3>
      <ul><li><strong>Stack :</strong> React Native (Expo) + API existante client</li><li><strong>Délai :</strong> 6 semaines</li></ul>
    `,
    'digitaliser-pme-senegal': `
      <h2>Pourquoi les PME sénégalaises tardent-elles ?</h2>
      <table>
        <thead><tr><th>Frein</th><th>Réalité</th></tr></thead>
        <tbody>
          <tr><td>"C'est trop cher"</td><td>Le coût de l'inaction est plus élevé (perte clients, inefficacité)</td></tr>
          <tr><td>"On n'a pas le temps"</td><td>Les bons outils libèrent du temps dès le premier mois</td></tr>
          <tr><td>"Nos clients ne sont pas en ligne"</td><td>11M+ internautes au Sénégal, 95% sur mobile (ARTP 2024)</td></tr>
          <tr><td>"On ne sait pas par où commencer"</td><td>C'est pour ça qu'existe cet article</td></tr>
        </tbody>
      </table>

      <h2>La méthode Jëftech en 5 étapes</h2>

      <h3>Étape 1 : Audit de maturité digitale (1-2 semaines)</h3>
      <p>Diagnostiquez 6 piliers :</p>
      <table>
        <thead><tr><th>Pilier</th><th>Questions clés</th></tr></thead>
        <tbody>
          <tr><td>Présence web</td><td>Site à jour ? SEO ? Mobile ? Analytics ? Conversion ?</td></tr>
          <tr><td>Relation client</td><td>CRM ? Emailing ? WhatsApp Business ? Support ? Fidélité ?</td></tr>
          <tr><td>Processus internes</td><td>Devis/factures auto ? Stocks ? RH ? Comptabilité ? Projets ?</td></tr>
          <tr><td>Paiements</td><td>Orange Money ? Wave ? Carte ? Virement ? Facturation auto ?</td></tr>
          <tr><td>Données & pilotage</td><td>KPIs suivis ? Tableaux de bord ? Décisions data-driven ?</td></tr>
          <tr><td>Équipe & culture</td><td>Formation ? Outils collaboratifs ? Gestion du changement ?</td></tr>
        </tbody>
      </table>
      <p><strong>Résultat :</strong> Matrice de priorités — Quick wins vs Projets structurants.</p>

      <h3>Étape 2 : Quick wins — À faire ce mois-ci (budget réduit)</h3>
      <table>
        <thead><tr><th>Action</th><th>Outil suggéré</th><th>Gain</th></tr></thead>
        <tbody>
          <tr><td>Google My Business optimisé</td><td>Gratuit</td><td>+30% visibilité locale</td></tr>
          <tr><td>WhatsApp Business + réponses rapides</td><td>Gratuit</td><td>Réponse < 5 min</td></tr>
          <tr><td>Signature email pro + liens réseaux</td><td>Gratuit</td><td>Crédibilité</td></tr>
          <tr><td>Formulaire contact/site → email + WhatsApp</td><td>Web3Forms, Formspree</td><td>Leads capturés</td></tr>
          <tr><td>Facturation dématérialisée</td><td>Facture.net, Sage, Odoo</td><td>-80% temps admin</td></tr>
          <tr><td>Paiement mobile money sur devis/factures</td><td>CinetPay, SenPay, Wave Pro</td><td>Encaissement +40%</td></tr>
          <tr><td>Drive partagé (Drive, OneDrive, Notion)</td><td>Gratuit / faible coût</td><td>Fini les pertes de fichiers</td></tr>
          <tr><td>Réunions visio régulières</td><td>Meet, Zoom, Teams</td><td>Équipes alignées</td></tr>
        </tbody>
      </table>

      <h3>Étape 3 : Projets structurants — 3-12 mois</h3>
      <p><strong>Priorité 1 : Site web pro + SEO local</strong> — Visibilité 24/7, crédibilité, leads qualifiés</p>
      <p><strong>Priorité 2 : CRM léger + pipeline commercial</strong> — Outils : HubSpot (gratuit), Pipedrive, Brevo, Odoo, Notion CRM</p>
      <p><strong>Priorité 3 : Gestion stocks/commandes (si commerce)</strong> — Outils : Odoo, TradeGecko, solution sur mesure</p>
      <p><strong>Priorité 4 : Espace client / Portail</strong> — Fonctionnalités : Suivi commande, factures, tickets, documents, paiement</p>

      <h3>Étape 4 : Pilotage par la data — Continu</h3>
      <p>Tableau de bord mensuel minimal (15 min de lecture) : CA mensuel, Nouveaux leads, Taux conversion, Panier moyen, CAC, NPS, Trafic site, Taux panier abandonné.</p>

      <h3>Étape 5 : Culture & formation — Le vrai levier</h3>
      <p>Sans adhésion de l'équipe, les outils servent à rien. Formation 30 min hebdo mois 1, puis mensuel. "Digital champion" par équipe.</p>
    `,
    'logiciel-sur-mesure-entreprise': `
      <h2>SaaS standard vs Logiciel sur mesure : le match</h2>
      <table>
        <thead><tr><th>Critère</th><th>SaaS Standard</th><th>Logiciel Sur Mesure</th></tr></thead>
        <tbody>
          <tr><td>Adaptation à VOS processus</td><td>Vous adaptez votre métier à l'outil</td><td>L'outil s'adapte à votre métier</td></tr>
          <tr><td>Fonctionnalités inutiles</td><td>60-80% non utilisées, payées quand même</td><td>100% utiles, rien d'autre</td></tr>
          <tr><td>Intégration existants</td><td>Connecteurs limités, souvent payants</td><td>API natives, sync temps réel</td></tr>
          <tr><td>Évolutivité</td><td>Dépend de la roadmap de l'éditeur</td><td>Vous décidez la roadmap</td></tr>
          <tr><td>Coût récurrent</td><td>Abonnement mensuel par utilisateur (à vie)</td><td>Investissement unique + maintenance optionnelle</td></tr>
          <tr><td>Propriété des données</td><td>Hébergées chez l'éditeur</td><td>Chez vous, où vous voulez</td></tr>
          <tr><td>Sécurité / Conformité</td><td>Standardisée</td><td>Sur mesure (banque, santé, RGPD strict)</td></tr>
          <tr><td>Différenciation concurrentielle</td><td>Même outils que vos concurrents</td><td>Avantage unique, difficile à copier</td></tr>
        </tbody>
      </table>

      <h2>Les 5 signaux qu'il faut passer au sur-mesure</h2>
      <ol>
        <li><strong>"On a 15 Excel/Google Sheets qui se parlent mal"</strong> — Si votre équipe passe plus de temps à copier-coller qu'à travailler, vous perdez de l'argent et de la fiabilité.</li>
        <li><strong>"Le SaaS nous oblige à changer notre processus"</strong> — Votre processus métier EST votre avantage concurrentiel. Ne le cassez pas pour un outil générique.</li>
        <li><strong>"On paie des licences pour 50 users mais 5 l'utilisent vraiment"</strong> — Modèle pervers : vous payez pour des fonctionnalités dont personne ne se sert.</li>
        <li><strong>"On ne peut pas connecter notre [ERP/compta/production] au reste"</strong> — Les silos de données coûtent cher : erreurs, délais, décisions à l'aveugle.</li>
        <li><strong>"On a une idée de service digital à vendre à NOS clients"</strong> — Votre expertise métier peut devenir un produit SaaS. Nous l'avons fait pour Foot Vert, SmartStock, Senegal Food.</li>
      </ol>

      <h2>Ce que le sur-mesure vous apporte concrètement</h2>
      <h3>Automatisation de vos processus uniques</h3>
      <p><em>Exemple : Cabinet d'expertise comptable → Génération auto des liasses fiscales à partir de la saisie, envoi client, signature électronique, archivage légal. Gain : 40h/mois/collaborateur.</em></p>
      <h3>Intégration transparente</h3>
      <p>Votre logiciel parle à : votre site web, votre compta (Sage, Odoo, QuickBooks), vos paiements (OM, Wave, Stripe), votre CRM, votre stock, vos fournisseurs (EDI, API), l'administration (DGID, API publiques).</p>
      <h3>Interface pensée pour VOS utilisateurs</h3>
      <p>Pas de menus inutiles, pas de jargon étranger. Vos opérateurs sont formés en 30 min, pas 3 jours.</p>
      <h3>Propriété totale</h3>
      <ul><li>Code source = vôtre (dépôt Git privé)</li><li>Base de données = vôtre (votre serveur, votre cloud)</li><li>Documentation technique = fournie</li><li>Pas de vendor lock-in. Vous pouvez changer de prestataire.</li></ul>
      <h3>Scalabilité maîtrisée</h3>
      <p>Architecture modulaire : on ajoute des modules sans casser l'existant. Micro-services si besoin. Kubernetes, serverless, ou VM simple — vous choisissez.</p>

      <h2>Types de projets et délais indicatifs</h2>
      <table>
        <thead><tr><th>Type de projet</th><th>Délai</th><th>ROI typique</th></tr></thead>
        <tbody>
          <tr><td>Outil interne unique (ex: devis auto, planning)</td><td>6-10 semaines</td><td>6-12 mois</td></tr>
          <tr><td>Portail client/fournisseur</td><td>3-5 mois</td><td>12-18 mois</td></tr>
          <tr><td>SaaS à revendre (multi-tenant)</td><td>6-12 mois</td><td>18-36 mois</td></tr>
          <tr><td>Remplacement ERP legacy</td><td>12-24 mois</td><td>24-48 mois</td></tr>
        </tbody>
      </table>
    `,
    'application-web-vs-mobile': `
      <h2>Les 4 options techniques — et ce qu'elles impliquent</h2>
      <table>
        <thead><tr><th>Type</th><th>Technos typiques</th><th>Installation</th><th>Accès matériel</th><th>Stores</th></tr></thead>
        <tbody>
          <tr><td>Site web responsive</td><td>HTML/CSS/JS, React, Vue, Next.js</td><td>Aucune (navigateur)</td><td>Limité (caméra, GPS, push partiel)</td><td>Non</td></tr>
          <tr><td>PWA (Progressive Web App)</td><td>Next.js, Vite, Workbox, Service Workers</td><td>Optionnelle (icône home screen)</td><td>Étendu (GPS, caméra, push, offline, background sync)</td><td>Non (mais installable)</td></tr>
          <tr><td>Hybride / Cross-platform</td><td>React Native, Expo, Flutter, Ionic</td><td>Oui (App Store / Play Store)</td><td>Complet (natif via bridges)</td><td>Oui</td></tr>
          <tr><td>Native pur</td><td>Swift/SwiftUI (iOS), Kotlin/Jetpack Compose (Android)</td><td>Oui</td><td>Total, performance max</td><td>Oui</td></tr>
        </tbody>
      </table>

      <h2>Matrice de décision rapide</h2>
      <p>Répondez à ces 8 questions. Majorité de <strong>A</strong> = Web/PWA. Majorité de <strong>B</strong> = Mobile (Hybride/Native).</p>
      <table>
        <thead><tr><th>Question</th><th>A → Web/PWA</th><th>B → Mobile</th></tr></thead>
        <tbody>
          <tr><td>1. Où sont vos utilisateurs ?</td><td>Majoritairement desktop / bureautique</td><td>Majoritairement mobile / terrain / transport</td></tr>
          <tr><td>2. Besoin caméra / GPS / Bluetooth / Capteurs ?</td><td>Non ou basique (scan QR occasionnel)</td><td>Oui, intensif (scan codes-barres, AR, tracking, santé)</td></tr>
          <tr><td>3. Mode hors-ligne critique ?</td><td>Non (connexion dispo)</td><td>Oui (terrain, métro, zones blanches, sync différée)</td></tr>
          <tr><td>4. Notifications push indispensables ?</td><td>Non (email/WhatsApp suffit)</td><td>Oui (alertes temps réel, rappels, promos)</td></tr>
          <tr><td>5. Budget développement ?</td><td>Modéré</td><td>Plus élevé</td></tr>
          <tr><td>6. Délai mise en marché ?</td><td>Court</td><td>Plus long</td></tr>
          <tr><td>7. Public cible "grand public" B2C ?</td><td>Non (B2B, interne, partenaires)</td><td>Oui (consommateurs, téléchargement store)</td></tr>
          <tr><td>8. Monétisation via stores ?</td><td>Non</td><td>Oui (abonnements, achats in-app, pubs natives)</td></tr>
        </tbody>
      </table>

      <h2>Quand choisir le Web / PWA ?</h2>
      <p><strong>✅ Idéal pour :</strong> Outils internes / B2B, Portails clients/fournisseurs, SaaS métiers, Sites e-commerce, MVP / Validation marché, Budget serré / Délai court.</p>
      <p><strong>🎯 PWA = Le meilleur des deux mondes (souvent)</strong> : Installable depuis le navigateur, fonctionne hors-ligne, push notifications, mise à jour instantanée, SEO natif, partageable par URL.</p>
      <p><strong>Exemple Jëftech : Foot Vert</strong> — Réservation terrains foot. Choisi en PWA car : utilisateurs sur mobile MAIS pas besoin caméra/Bluetooth, pas de store = déploiement instantané, SEO crucial, budget plus réduit que natif.</p>

      <h2>Quand choisir le Mobile (Hybride recommandé) ?</h2>
      <p><strong>✅ Idéal pour :</strong> Apps grand public B2C, Usage terrain / mobile-first, Fonctions natives critiques, Hors-ligne réel requis, Monétisation stores, Marque / Visibilité.</p>
      <p><strong>🎯 React Native / Expo = Notre choix par défaut</strong> : 1 codebase iOS+Android, performance quasi-native, écosystème énorme, Expo = dev rapide, build cloud, OTA updates.</p>
      <p><strong>Exemple Jëftech : Senegal Food App</strong> — Livraison repas. Choisi React Native car : livreurs (GPS continu, caméra, push, hors-ligne), clients (push, tracking, paiement in-app), stores = confiance + paiement in-app + visibilité.</p>

      <h2>Quand choisir le Native pur (Swift/Kotlin) ?</h2>
      <p><strong>Uniquement si :</strong> Performance critique (60fps, 3D, AR/VR, audio temps réel), Intégration OS profonde (widgets, Live Activities, WatchOS, HealthKit), Sécurité maximale (banque, santé, gov), Équipe dédiée par plateforme (budget important).</p>
    `,
  }
  return contents[slug] || '<p>Contenu en cours de rédaction...</p>'
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find(p => p.slug === slug)

  if (!post) {
    return (
      <section className="jt-section">
        <div className="jt-article__wrap" style={{ textAlign: 'center' }}>
          <h1 className="jt-page-title">Article non trouvé</h1>
          <p className="jt-lede" style={{ margin: '0 auto 24px' }}>Cet article n'existe pas ou a été déplacé.</p>
          <Link to="/blog" className="jt-btn jt-btn--ink">
            <ArrowLeft size={16} strokeWidth={2} /> Retour au blog
          </Link>
        </div>
      </section>
    )
  }

  const content = getPostContent(slug)
  const shareUrl = `https://jeftech.dev/blog/${post.slug}`

  return (
    <>
      <article className="jt-section" itemScope itemType="https://schema.org/BlogPosting">
        <meta itemProp="headline" content={post.title} />
        <meta itemProp="description" content={post.description} />
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="author" content={post.author} />
        <meta itemProp="articleSection" content={post.category} />
        <meta itemProp="image" content={post.image} />
        <meta itemProp="url" content={shareUrl} />

        <div className="jt-article__wrap">
          <Link to="/blog" className="jt-article__back">
            <ArrowLeft size={16} strokeWidth={2} /> Retour au blog
          </Link>

          <header>
            <span className="jt-eyebrow jt-article__cat" itemProp="articleSection">{post.category}</span>
            <h1 className="jt-article__title" itemProp="headline">{post.title}</h1>
            <div className="jt-article__meta">
              <time dateTime={post.date} itemProp="datePublished">{formatDate(post.date)}</time>
              <span itemProp="author" itemScope itemType="https://schema.org/Person">
                <span itemProp="name">{post.author}</span>
              </span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div
            className="jt-article__cover"
            style={{ backgroundImage: `url(${post.image})` }}
            role="img"
            aria-label={post.title}
            itemProp="image"
          />

          <div className="jt-prose" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: content }} />

          <footer className="jt-article__footer">
            <div className="jt-article__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="jt-tag">{tag}</span>
              ))}
            </div>
            <div className="jt-share">
              <span className="jt-share__label">Partager</span>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Partager sur X">
                <Share2 size={19} strokeWidth={1.8} />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Partager sur LinkedIn">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 102.5 6 2.5 2.5 0 004.98 3.5zM3 8.98h4V21H3zM9 8.98h3.8v1.64h.05a4.16 4.16 0 013.75-2.06c4 0 4.75 2.64 4.75 6.06V21h-4v-5.36c0-1.28 0-2.92-1.78-2.92s-2.05 1.39-2.05 2.83V21H9z" /></svg>
              </a>
            </div>

            <div className="jt-article__cta">
              <h3>Besoin d'accompagnement sur ce sujet ?</h3>
              <p>On en discute gratuitement. 30 min, sans engagement, conseils concrets.</p>
              <Link to="/contact" className="jt-btn jt-btn--brand">Réserver un appel</Link>
            </div>
          </footer>
        </div>
      </article>

      <ContactBand />
    </>
  )
}