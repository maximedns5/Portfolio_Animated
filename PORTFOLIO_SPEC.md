# PORTFOLIO — SPECIFICATION COMPLÈTE POUR CODEX
> Ce document est la source de vérité pour la construction du portfolio.
> Lis-le entièrement avant d'écrire la moindre ligne de code.

---

## 1. VISION DU PROJET

Portfolio personnel minimaliste à l'esthétique "dessin industriel / blueprint".
L'objectif est de présenter des projets de manière claire, documentée, précise —
comme une fiche technique d'ingénieur, pas comme un portfolio d'agence.

Chaque projet doit être compris en 10 secondes (carte) et documenté en profondeur
(page détail). La partie personnelle est secondaire mais soignée.

**Mots-clés esthétiques :** blueprint, dessin technique, annotation, précision,
papier calque, encre, lignes fines, cotes, repères.

---

## 2. STACK TECHNIQUE

| Élément         | Choix                        | Raison                                          |
|-----------------|------------------------------|-------------------------------------------------|
| Bundler         | Vite                         | Rapide, simple, idéal pour GitHub Pages static  |
| Framework       | React 18                     | Composants réutilisables                        |
| Langage         | TypeScript strict            | Typage des projets, pas d'erreurs runtime       |
| Routing         | react-router-dom v6          | Navigation SPA avec routes dynamiques           |
| Animations      | framer-motion                | Transitions sobres, entrance animations         |
| Styles          | CSS Modules + variables CSS  | Pas de Tailwind — contrôle total sur l'esthétique |
| Déploiement     | GitHub Pages + GitHub Actions| Automatique sur push main                       |
| Markdown        | react-markdown               | Pour les descriptions longues de projets        |
| Icônes          | lucide-react                 | Légère, cohérente, sans serif                   |

**Aucune dépendance UI (pas de MUI, Chakra, shadcn).** Tout est codé à la main.

---

## 3. INITIALISATION DU PROJET

```bash
npm create vite@latest portfolio -- --template react-ts
cd portfolio
npm install react-router-dom framer-motion react-markdown lucide-react
npm install -D @types/node
```

### Configuration Vite pour GitHub Pages

Dans `vite.config.ts` :
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/NOM_DU_REPO_GITHUB/',  // ← remplacer par le nom exact du repo
})
```

### GitHub Actions — `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 4. ARCHITECTURE DES FICHIERS

```
portfolio/
├── public/
│   ├── favicon.ico
│   └── projects/                  ← images des projets (PNG/JPG/SVG)
│       ├── project-slug/
│       │   ├── cover.jpg
│       │   ├── img-01.jpg
│       │   └── ...
│
├── src/
│   ├── main.tsx                   ← point d'entrée React
│   ├── App.tsx                    ← router principal
│   │
│   ├── data/
│   │   └── projects.ts            ← SOURCE DE VÉRITÉ de tous les projets
│   │
│   ├── types/
│   │   └── project.ts             ← types TypeScript
│   │
│   ├── pages/
│   │   ├── Home.tsx               ← page d'accueil
│   │   ├── Projects.tsx           ← liste filtrée de tous les projets
│   │   ├── ProjectDetail.tsx      ← page détail d'un projet (route dynamique)
│   │   └── About.tsx              ← page personnelle
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.tsx         ← wrapper global (nav + footer)
│   │   │   ├── Nav.tsx            ← barre de navigation
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── ProjectCard/
│   │   │   ├── ProjectCard.tsx    ← carte projet pour la liste
│   │   │   └── ProjectCard.module.css
│   │   │
│   │   ├── ProjectGrid/
│   │   │   ├── ProjectGrid.tsx    ← grille + filtres par domaine
│   │   │   └── ProjectGrid.module.css
│   │   │
│   │   ├── BlueprintElements/
│   │   │   ├── CrosshairMark.tsx  ← croix de repérage SVG décorative
│   │   │   ├── DimensionLine.tsx  ← ligne de cote style technique
│   │   │   ├── GridBackground.tsx ← fond grille subtile
│   │   │   └── SectionLabel.tsx   ← label annoté style plan
│   │   │
│   │   └── ui/
│   │       ├── Tag.tsx            ← badge de domaine/technologie
│   │       ├── Button.tsx
│   │       └── ImageGallery.tsx   ← galerie d'images projet
│   │
│   └── styles/
│       ├── global.css             ← reset + variables CSS + styles de base
│       └── typography.css         ← règles typographiques globales
│
├── .github/
│   └── workflows/
│       └── deploy.yml
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 5. SYSTÈME DE DESIGN — VARIABLES CSS

Fichier : `src/styles/global.css`

```css
/* ============================================================
   PALETTE — STYLE BLUEPRINT / DESSIN INDUSTRIEL
   ============================================================ */
:root {
  /* Fonds */
  --color-bg:          #F4F0E6;   /* papier ivoire / calque */
  --color-bg-alt:      #EDE9DC;   /* légèrement plus sombre, pour sections */
  --color-surface:     #FDFAF4;   /* cartes, éléments surélevés */

  /* Encre */
  --color-ink:         #1C1C1A;   /* texte principal, presque noir */
  --color-ink-light:   #6B6860;   /* texte secondaire, annotations */
  --color-ink-faint:   #B0ACA2;   /* placeholders, lignes décoratives */

  /* Accent unique — bleu blueprint */
  --color-accent:      #2952A3;   /* bleu cobalt plan d'architecte */
  --color-accent-soft: #D6E0F5;   /* fond de badge, hover subtil */

  /* Grille décorative */
  --color-grid:        rgba(28, 28, 26, 0.045);

  /* Bordures */
  --color-border:      rgba(28, 28, 26, 0.18);
  --color-border-strong: rgba(28, 28, 26, 0.45);

  /* ============================================================
     TYPOGRAPHIE
     ============================================================ */
  /* Importer depuis Google Fonts dans index.html :
     - "IBM Plex Mono" (400, 500) → labels, annotations, code, numéros
     - "Cormorant Garamond" (400, 500, 600) → titres, noms de projets
     - "IBM Plex Sans" (400) → corps de texte courant
  */

  --font-title:  'Cormorant Garamond', Georgia, serif;   /* titres */
  --font-body:   'IBM Plex Sans', system-ui, sans-serif; /* corps */
  --font-mono:   'IBM Plex Mono', 'Courier New', monospace; /* annotations */

  /* Échelle typographique (modular scale ×1.333) */
  --text-xs:   0.64rem;   /* 10px — labels minuscules */
  --text-sm:   0.8rem;    /* 13px — annotations */
  --text-base: 1rem;      /* 16px — corps */
  --text-md:   1.2rem;    /* 19px — sous-titres */
  --text-lg:   1.6rem;    /* 26px — titres section */
  --text-xl:   2.4rem;    /* 38px — titres page */
  --text-2xl:  4rem;      /* 64px — hero */

  /* Letter-spacing technique */
  --tracking-tight:  -0.02em;
  --tracking-normal:  0;
  --tracking-wide:    0.08em;  /* pour les labels en majuscules */
  --tracking-wider:   0.16em; /* pour les annotations style plan */

  /* ============================================================
     ESPACEMENTS
     ============================================================ */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-7:  48px;
  --space-8:  64px;
  --space-9:  96px;
  --space-10: 128px;

  /* ============================================================
     LAYOUT
     ============================================================ */
  --max-width:        1100px;
  --max-width-text:   680px;   /* pour les pages de texte / about */
  --page-padding:     clamp(20px, 5vw, 60px);

  /* ============================================================
     BORDERS & EFFETS
     ============================================================ */
  --border-thin:   1px solid var(--color-border);
  --border-strong: 1px solid var(--color-border-strong);
  --border-accent: 1px solid var(--color-accent);

  /* Pas de border-radius arrondi — style technique = angles droits */
  --radius:        0px;
  --radius-sm:     2px;  /* uniquement pour les badges/tags */

  /* Transitions */
  --transition-fast:   120ms ease;
  --transition-base:   220ms ease;
  --transition-slow:   400ms ease;
}

/* ============================================================
   RESET & BASE
   ============================================================ */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

body {
  background-color: var(--color-bg);
  color: var(--color-ink);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  min-height: 100vh;
}

/* Sélection de texte */
::selection {
  background-color: var(--color-accent-soft);
  color: var(--color-accent);
}

/* Liens */
a {
  color: inherit;
  text-decoration: none;
}

/* Images */
img {
  display: block;
  max-width: 100%;
}
```

---

## 6. TYPOGRAPHIE — `typography.css`

```css
/* Titres */
h1, h2, h3, h4 {
  font-family: var(--font-title);
  font-weight: 500;
  letter-spacing: var(--tracking-tight);
  line-height: 1.1;
  color: var(--color-ink);
}

h1 { font-size: var(--text-2xl); }
h2 { font-size: var(--text-xl); }
h3 { font-size: var(--text-lg); }
h4 { font-size: var(--text-md); }

/* Labels techniques — toujours en MONO + MAJUSCULES */
.label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-ink-light);
}

/* Annotations style plan */
.annotation {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-ink-light);
  letter-spacing: var(--tracking-wide);
}

/* Corps de texte */
p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--color-ink);
  max-width: 65ch;
}
```

---

## 7. TYPES TYPESCRIPT

Fichier : `src/types/project.ts`

```ts
export type ProjectDomain =
  | 'mécanique'
  | 'électronique'
  | 'software'
  | 'design'
  | 'recherche'
  | 'autre';

export type ProjectLink = {
  label: string;   // ex: "GitHub", "Rapport PDF", "Démo live"
  url: string;
  type: 'github' | 'pdf' | 'demo' | 'external';
};

export type ProjectImage = {
  src: string;       // chemin relatif depuis /public
  alt: string;
  caption?: string;  // optionnel, style légende technique
};

export type Project = {
  id: string;               // slug URL-safe, ex: "robot-soudeur-autonome"
  title: string;            // nom complet du projet
  subtitle?: string;        // sous-titre court optionnel
  year: number;
  duration?: string;        // ex: "6 mois", "1 an"
  context?: string;         // ex: "Projet de fin d'études", "Personnel"
  domains: ProjectDomain[]; // peut appartenir à plusieurs domaines
  tags: string[];           // mots-clés libres, ex: ["ROS", "Python", "SLAM"]
  shortDesc: string;        // 1-2 phrases, affichée sur la carte (max 150 chars)
  fullDesc: string;         // description longue au format Markdown
  coverImage: string;       // chemin vers l'image de couverture (dans /public)
  images?: ProjectImage[];  // galerie complémentaire
  links?: ProjectLink[];    // liens externes
  featured?: boolean;       // apparaît en premier sur la home
  status?: 'completed' | 'in-progress' | 'archived'; // par défaut: completed
};
```

---

## 8. DONNÉES PROJETS

Fichier : `src/data/projects.ts`

```ts
import type { Project } from '../types/project';

export const projects: Project[] = [
  // Les projets seront ajoutés ici un par un.
  // Exemple de structure (à remplacer) :
  {
    id: 'exemple-projet',
    title: 'Exemple de projet',
    year: 2024,
    domains: ['mécanique'],
    tags: ['CAO', 'Impression 3D'],
    shortDesc: 'Courte description affichée sur la carte.',
    fullDesc: `
# Exemple de projet

Description complète en Markdown.

## Contexte
...

## Approche technique
...

## Résultats
...
    `,
    coverImage: '/projects/exemple-projet/cover.jpg',
    featured: true,
  },
];

/* Helper : récupérer un projet par son id */
export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

/* Helper : filtrer par domaine */
export const getProjectsByDomain = (domain: string): Project[] =>
  domain === 'all'
    ? projects
    : projects.filter((p) => p.domains.includes(domain as any));

/* Helper : projets mis en avant */
export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);
```

---

## 9. ROUTING — `App.tsx`

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

// Pour GitHub Pages : basename = nom du repo
const BASENAME = '/NOM_DU_REPO_GITHUB/';

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Layout>
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/projects"      element={<Projects />} />
          <Route path="/projects/:id"  element={<ProjectDetail />} />
          <Route path="/about"         element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
```

---

## 10. COMPOSANTS — SPÉCIFICATIONS DÉTAILLÉES

### 10.1 `<Nav />`

**Comportement :**
- Fixe en haut de page, fond transparent qui devient `--color-bg` avec
  légère bordure basse au scroll (threshold: 20px).
- Hauteur : 56px.
- Logo/nom à gauche : prénom + nom en `font-mono`, taille `text-sm`,
  `tracking-wider`, en majuscules. Cliquable → `/`.
- Liens à droite : "Projets" → `/projects`, "À propos" → `/about`.
  Style : `font-mono`, `text-sm`, `tracking-wide`, pas de soulignement.
  Lien actif : trait fin sous le texte en `--color-accent`.
- Élément décoratif : une petite croix de repérage SVG entre le nom
  et les liens, en `--color-ink-faint`.
- Pas de burger menu sur mobile — les liens passent en dessous du nom.

### 10.2 `<ProjectCard />`

**Données reçues :** un objet `Project`.

**Structure visuelle (du haut en bas) :**
1. Image de couverture : 100% largeur, ratio 16/9, `object-fit: cover`.
   Pas d'arrondi. Border fine.
2. Bandeau de tags : ligne de domains en petits badges `<Tag />` avec
   `font-mono` + `text-xs`. Marge top 12px.
3. Titre du projet : `font-title`, `text-lg`. Marge top 8px.
4. Année : annotation à droite du titre, `font-mono`, `text-sm`,
   `--color-ink-light`.
5. Description courte : `font-body`, `text-sm`, 2 lignes max
   (overflow ellipsis).
6. Lien "Voir le projet →" : `font-mono`, `text-sm`, `--color-accent`.
   L'arrow se déplace de 4px vers la droite au hover.

**Interactions :**
- Au hover sur la carte : bordure passe de `--border-thin` à
  `--border-accent`. Transition `var(--transition-base)`.
- Image : léger scale(1.02) au hover, transition 300ms.
- L'ensemble de la carte est cliquable (Link wrapping).

**Layout de la grille :** 3 colonnes desktop, 2 tablette, 1 mobile.
Pas de gap uniforme — gap horizontal 32px, vertical 48px.

### 10.3 `<ProjectDetail />`

**En-tête de page :**
- Numéro de projet (index dans la liste) en `font-mono` `text-xs`
  `tracking-wider` `--color-ink-faint`, style "REF. 001".
- Titre en grand (`text-2xl`, `font-title`).
- Sous-titre si présent (`text-md`, `--color-ink-light`).
- Ligne horizontale avec, sur la même ligne :
  domaine(s), année, durée, contexte — séparés par des tirets (`—`),
  tout en `font-mono` `text-sm`.
- Badges de tags sous cette ligne.
- Boutons de liens externes (GitHub, PDF, etc.) en haut à droite.

**Image de couverture :**
- Pleine largeur (jusqu'aux bords du conteneur), ratio 16/9.
- Légende sous l'image en `font-mono` `text-xs`.

**Corps de texte (Markdown rendu) :**
- Max-width 680px, centré.
- H2 dans le markdown → séparateur ligne fine avant, label annoté.
- Code inline → `font-mono`, fond `--color-bg-alt`.
- Listes → pas de disques, remplacés par un trait `—`.

**Galerie d'images :**
- Grille 2 colonnes avec légendes.
- Click → lightbox simple (overlay sombre, image grande, fermeture ESC/click).

**Navigation bas de page :**
- "← Projet précédent" | "Projet suivant →"
- En `font-mono`, `text-sm`.

### 10.4 `<ProjectGrid />` (page `/projects`)

**Filtres :**
- Rangée de boutons filtre en haut : "Tout" + un bouton par domaine présent
  dans les données.
- Style bouton actif : fond `--color-accent`, texte blanc.
- Style bouton inactif : fond transparent, bordure fine, texte `--color-ink`.
- Filtre = état React local `useState<string>('all')`.
- Transition sur le changement de grille : `framer-motion` avec `AnimatePresence`
  + `layout` prop sur chaque carte.

### 10.5 `<Home />`

**Section hero (viewport complet) :**
- Fond grille blueprint subtile (composant `<GridBackground />`).
- Croix de repérage aux quatre coins (composant `<CrosshairMark />`).
- Texte centré :
  - Label annoté : "PORTFOLIO — [ANNÉE]" en `font-mono`.
  - Titre principal : prénom + nom en `text-2xl`, `font-title`.
  - Phrase d'accroche courte (1 ligne) en `text-md`, `--color-ink-light`.
- Flèche scroll-down animée en bas (rebondit doucement).
- Éléments décoratifs positionnés en `absolute` : petites cotations,
  lignes de repère, annotations style plan.

**Section projets mis en avant :**
- Titre de section avec `<SectionLabel />` : "PROJETS SÉLECTIONNÉS / [N PROJETS]".
- Grille des `featured: true`, max 3.
- Lien "Voir tous les projets →" en bas.

**Section à propos (teaser) :**
- 2 colonnes : texte court à gauche, lien "En savoir plus →" à droite.

### 10.6 Composants Blueprint décoratifs

**`<GridBackground />`**
```tsx
// SVG en position absolute, pointer-events: none
// Grille de 40px × 40px
// Stroke-color: var(--color-grid)
// Couvre 100% du parent (parent doit être position: relative)
```

**`<CrosshairMark />`**
```tsx
// SVG inline : croix + cercle central, 24px × 24px
// Couleur: var(--color-ink-faint)
// Usage : coins de sections, éléments décoratifs
```

**`<SectionLabel />`**
```tsx
// Props: label (string), count? (number)
// Rendu: [ ——— LABEL / COUNT ——— ] en font-mono text-xs tracking-wider
// Ligne horizontale s'étendant sur toute la largeur
```

**`<DimensionLine />`**
```tsx
// Props: direction ('horizontal' | 'vertical'), label (string)
// Ligne fine avec flèches aux extrémités + label au centre
// Style: SVG, --color-ink-faint
```

---

## 11. ANIMATIONS

Utiliser `framer-motion` de façon sobre. Toutes les animations doivent être
rapides et fonctionnelles, pas décoratives.

**Règles globales :**
- `duration` max : 0.4s pour les entrées, 0.2s pour les interactions.
- `ease` : `[0.25, 0.1, 0.25, 1]` (ease standard) ou `easeOut`.
- Pas d'animations en boucle sauf la flèche scroll-down.

**Entrance animation — toutes les pages :**
```tsx
// Chaque page se monte avec :
initial={{ opacity: 0, y: 12 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.35, ease: 'easeOut' }}
```

**Cards — staggered appearance :**
```tsx
// La grille de projets apparaît en cascade
// Chaque carte : délai = index × 0.06s
```

**Filtre de projets :**
```tsx
// AnimatePresence mode="popLayout" sur le conteneur
// Chaque carte : layout prop pour transition de position fluide
```

**Flèche hero :**
```tsx
animate={{ y: [0, 6, 0] }}
transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
```

---

## 12. PAGE `About` — STRUCTURE

La page personnelle doit rester sobre et alignée avec l'esthétique générale.

**Contenu à intégrer (compléter avec les vraies informations) :**
- Prénom, nom, statut (étudiant / ingénieur / etc.)
- Photo (optionnelle) — si présente : N&B ou désaturée, encadrée avec
  bordure fine, pas d'arrondi.
- Quelques paragraphes de présentation personnelle.
- Section "Formation" : timeline verticale, ligne fine à gauche,
  date en `font-mono`, diplôme/école en `font-title`.
- Section "Compétences" : pas de barres de progression (cliché),
  mais une liste organisée par catégories, style plan technique.
- Section "Contact" : email cliquable, liens LinkedIn/GitHub,
  en `font-mono`.

---

## 13. RESPONSIVE

**Breakpoints :**
```css
/* Mobile first */
/* sm: */   @media (min-width: 640px)  { ... }
/* md: */   @media (min-width: 768px)  { ... }
/* lg: */   @media (min-width: 1024px) { ... }
/* xl: */   @media (min-width: 1200px) { ... }
```

**Grille projets :**
- Mobile : 1 colonne
- ≥ 640px : 2 colonnes
- ≥ 1024px : 3 colonnes

**Hero :**
- Mobile : titres réduits, éléments décoratifs cachés (trop petits pour être lisibles)
- `--text-2xl` passe à `clamp(2rem, 8vw, 4rem)`

**Nav :**
- Mobile : liens sous le nom, colonne
- ≥ 640px : tout sur une ligne

---

## 14. PERFORMANCES & BONNES PRATIQUES

- **Images** : toutes les images dans `/public/projects/[slug]/`.
  Utiliser des JPG optimisés (max 200ko par image).
  Ajouter `loading="lazy"` sur toutes les images hors hero.
- **Fonts** : charger depuis Google Fonts avec `display=swap`.
  Précharger uniquement `Cormorant Garamond` 500.
- **Code splitting** : Vite le fait automatiquement par route avec
  `React.lazy()` + `Suspense` pour `ProjectDetail`.
- **SEO minimal** : `<title>` et `<meta name="description">` mis à jour
  dynamiquement dans chaque page avec un hook `useDocumentTitle`.
- **404 GitHub Pages** : copier `index.html` en `404.html` dans `/public`
  pour que le routing SPA fonctionne correctement.

---

## 15. ORDRE DE DÉVELOPPEMENT RECOMMANDÉ

1. Init Vite + dépendances + config GitHub Pages
2. Variables CSS + typography.css
3. Types TypeScript (`project.ts`)
4. Fichier de données (`projects.ts`) — ajouter les projets au fur et à mesure
5. Layout + Nav + Footer
6. Composants blueprint décoratifs (GridBackground, CrosshairMark, SectionLabel)
7. Page Home (hero + section projets + teaser about)
8. Composant ProjectCard
9. Page Projects + filtres
10. Page ProjectDetail
11. Page About
12. Animations framer-motion
13. Responsive
14. GitHub Actions + déploiement
15. Optimisation images + SEO minimal

---

## 16. NOTES IMPORTANTES POUR CODEX

- **Ne jamais utiliser Tailwind, MUI, Chakra, Bootstrap ou autre framework CSS.**
  Tout le style est en CSS Modules + variables CSS globales.
- **Toutes les couleurs passent par les variables CSS** — aucun hex codé en dur
  dans les composants.
- **Aucun `border-radius` supérieur à 2px** — l'esthétique est technique,
  les angles sont droits.
- **Police par défaut = IBM Plex Sans, pas Inter, pas Roboto.**
- **Le fichier `src/data/projects.ts` est la seule source de vérité.** Ne jamais
  coder un projet en dur dans un composant.
- **Les projets sont ajoutés progressivement** — le code doit fonctionner
  avec 0 ou 20 projets sans modification.
- Quand tu génères un composant, **génère aussi son fichier `.module.css`** associé.
- **Commit régulier** avec messages clairs : `feat(card): ajouter ProjectCard`,
  `style(nav): scroll opacity`, etc.

---

*Fin de la spécification. Ajouter les projets dans `src/data/projects.ts`
en suivant le type `Project` défini en section 7.*
