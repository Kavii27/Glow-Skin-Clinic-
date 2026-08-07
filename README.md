# Glow Skin Clinic — Monorepo

This repo contains two fully independent apps, each with its own `package.json`,
`vite.config.ts`, and CSS — they do not share styles or build output.

```
glow-skin-clinic/
├── site/     Main public website (Glow Skin Clinic)
└── admin/    Admin dashboard (glow-admin-suite)
```

## Running locally

Each app is run separately, from inside its own folder:

```bash
# Terminal 1 — main site (http://localhost:8080)
cd site
npm install
npm run dev

# Terminal 2 — admin dashboard (http://localhost:8081)
cd admin
npm install
npm run dev
```

## Building for production

```bash
cd site && npm run build
cd admin && npm run build
```

Each produces its own independent build output — deploy them as two separate
projects/sites (e.g. two Vercel/Netlify projects both pointed at this repo,
one with root directory `site/` and the other with root directory `admin/`).

## Notes

- The "Admin Login" link in the site's footer (`site/src/components/Footer.tsx`)
  points at the admin app's `/login` route. Update `ADMIN_PORTAL_URL` there once
  the admin dashboard has a real deployed URL.
- Git history for the main site is preserved (this repo was originally the
  site's repo, restructured into `site/`). The admin app was added as a fresh
  copy without its prior history.
