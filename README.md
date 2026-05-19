# Cayes Talent Lab — site web

Site événementiel statique de la 1ʳᵉ édition nationale du **Haiti Talent Lab** (Les Cayes, juillet 2026).
`cayestalentlab.com`

## Stack

- [Astro](https://astro.build) — site statique multi-pages (`output: 'static'`)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`)
- Police : Inter (Fontsource, locale)
- Icônes : [`@lucide/astro`](https://lucide.dev)
- Déploiement : **GitHub Pages**, domaine personnalisé `cayestalentlab.com`

## Démarrer

> Node.js ≥ 20 requis. Sur cette machine, Node est installé dans `~/.local/node`.
> Si `node` est introuvable, exécuter au préalable :
> `export PATH="$HOME/.local/node/bin:$PATH"`

```bash
npm install
npm run dev        # serveur de dev → http://localhost:4321
npm run build      # build de production → ./dist
npm run preview    # prévisualiser le build
```

## Configuration

Tous les contenus variables (date, lieu, dates limites, URLs croisées,
chiffres pilote, calendrier des 6 villes, navigation, tagline) sont
centralisés dans **`src/config/site.ts`** — un seul fichier à mettre à jour
quand ZLC confirme les informations.

Formulaires (contact, entreprise, newsletter) : copier `.env.example`
en `.env` et renseigner `PUBLIC_FORMSPREE_ID`. La candidature candidat
redirige directement vers le Haiti Talent Hub (pas de back-end).

## Déploiement

Push sur `main` → le workflow `.github/workflows/deploy.yml` build et
publie sur GitHub Pages. Le fichier `public/CNAME` configure le domaine
personnalisé ; activer GitHub Pages (source : *GitHub Actions*) dans les
réglages du dépôt et pointer le DNS de `cayestalentlab.com` vers GitHub.

## Structure

```
src/
├── components/   Header, Footer, blocs réutilisables, Card…
├── config/       site.ts — placeholders centralisés
├── layouts/      BaseLayout.astro — SEO, meta, OG, lang fr
├── pages/        8 pages (index, levenement, candidats…)
└── styles/       global.css — palette, base, animations
public/            images, favicon, CNAME, robots.txt, .nojekyll
```

## Statut

Brouillon de production v0 — en attente de validations ZLC
(date précise, lieu, logo définitif, date limite candidatures,
partenaires Sud, programme détaillé). Voir les `[À confirmer]` dans
`src/config/site.ts` et les sections marquées dans les wireframes.
