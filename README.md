# Lejour Consulting — Investissement Courbevoie

Site premium de présentation d'une opportunité d'investissement immobilier sélectionnée par Lejour Consulting.

Premier bien présenté : un studio dans la résidence étudiante Studéa Léonard de Vinci à Courbevoie.

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS v4
- Framer Motion (animations parcimonieuses)
- Lucide React (icônes)
- Web3Forms (formulaires)
- Vercel (déploiement)

## Structure

- `src/data/property.ts` : fichier central de configuration du bien (le seul à modifier pour un nouveau bien).
- `src/app/sections/` : sections de la page d'atterrissage.
- `src/app/components/` : composants réutilisables.
- `src/app/hooks/` : logique métier (envoi Web3Forms).
- `public/images/` : photos du bien.
- `public/documents/` : documents PDF.

## Installation

```bash
npm install
```

## Développement local

```bash
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Build

```bash
npm run lint
npm run build
```

## Variables d'environnement

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Clé d'accès Web3Forms |
| `NEXT_PUBLIC_SITE_URL` | URL canonique (http://localhost:3000 en local) |
| `NEXT_PUBLIC_GA_ID` | Identifiant Google Analytics 4 (optionnel) |
| `NEXT_PUBLIC_GSC_TOKEN` | Token Google Search Console (optionnel) |

## Publier un nouveau bien

1. Remplacer les données dans `src/data/property.ts`
2. Ajouter les photos dans `public/images/`
3. Ajouter les documents PDF dans `public/documents/`
4. Générer une image Open Graph de 1200×630 px (`public/og-image.webp`)
5. Tester en local, puis pousser sur `main`

---

