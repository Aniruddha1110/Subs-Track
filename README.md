# Subs-Track 💳
### The Subscription Tracker

Subs-Track is a personal subscription management app that helps you track, analyse, and stay on top of all your subscriptions in one place. Never miss a renewal or overspend on subscriptions again.

---

## Features

- 📋 **Subscription Tracking** — Add and manage subscriptions with name, cost, billing cycle, category, and more
- 📊 **Analytics Dashboard** — Visualise monthly and yearly spending across categories
- 🔔 **Renewal Reminders** — Know exactly when your next charge is due
- 💰 **Budgeting Tools** — Keep your subscription spending in check
- 📤 **Data Export** — Export your subscription data *(coming soon)*
- 🌗 **Dark & Light Mode** — Clean, modern UI with full theme support
- 🔐 **Secure Auth** — Firebase Authentication with per-user data isolation

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React JSX + Next.js 15 |
| Backend | Node.js |
| Database | Firebase Firestore |
| Auth | Firebase Authentication |
| Storage | Firebase Storage |
| Styling | Tailwind CSS |
| Deployment | Local + GitHub |

---

## Getting Started

### Prerequisites
- Node.js 18+
- A Firebase project (free Spark plan is sufficient)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/subs-track.git
cd subs-track
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Copy `.env.example` to `.env.local` and fill in your Firebase credentials:
```bash
cp .env.example .env.local
```

Get your Firebase config from:
Firebase Console → Project Settings → Your Apps → Web App

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Project Structure

```
subs-track/
├── app/                  # Next.js app router pages
│   ├── dashboard/        # Main dashboard page
│   ├── privacy/          # Privacy policy page
│   ├── tos/              # Terms of service page
│   └── layout.js         # Root layout with header & footer
├── components/           # Reusable React components
│   ├── GoTo.jsx          # Header navigation
│   ├── Login.jsx         # Login / signup form
│   ├── SubscriptionForm.jsx      # Add / edit subscription form
│   ├── SubscriptionsDisplay.jsx  # Subscription cards grid
│   └── SubscriptionSummary.jsx   # Analytics summary cards
├── context/
│   └── AuthContext.jsx   # Firebase Auth + Firestore context
├── firebase/
│   └── config.js         # Firebase initialization
├── utils/
│   └── index.js          # Helper functions and mock data
├── .env.example          # Environment variable template
└── .gitignore
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your values:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

---

## Status

🚧 **In active development** — This is an ongoing solo project. Features are being added incrementally.

---

## License

© 2026 Aniruddha Dutta. All rights reserved.

This project is for personal and portfolio use. Not licensed for redistribution or commercial use.