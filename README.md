# BR1CK3D — Software Consulting Website

A modern, dark-themed consulting website built with **Next.js 15**, **Tailwind CSS v4**, **Framer Motion**, and **Firebase**.

## Quick Start

```bash
npm install
cp .env.local.example .env.local   # Then add your Firebase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) and create a new project
2. Enable **Cloud Firestore** in the project
3. Go to Project Settings > General > Your apps > Add a **Web app**
4. Copy the config values into `.env.local`
5. In Firestore, the contact form writes to the `inquiries` collection

### Firestore Security Rules (recommended)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /inquiries/{docId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## Theming

The entire site's visual identity is controlled from two places:

- **`src/theme/theme.ts`** — JS/TS theme config (for programmatic access)
- **`src/app/globals.css`** — CSS custom properties under `@theme` (for Tailwind)

Change the colors, fonts, spacing, and animations from these files to restyle the entire site instantly.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- Framer Motion
- Firebase (Firestore)
- Lucide Icons
- TypeScript
