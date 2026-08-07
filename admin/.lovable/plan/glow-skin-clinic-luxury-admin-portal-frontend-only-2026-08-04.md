# Glow Skin Clinic — Luxury Admin Portal (Frontend Only)

A premium, editorial admin interface for Dr. Apeksha Herath's aesthetic dermatology clinic. Warm ivory and champagne surfaces, gold and bronze accents, serif headings over clean sans body, generous whitespace, restrained motion. No backend — all data is local mock data held in the frontend.

## Design system

- Palette (tokens in `src/styles.css`, oklch): ivory background, soft-white cards, champagne and light-beige surfaces, soft gold / champagne gold / rose gold accents, deep charcoal text, elegant bronze, deep burgundy for destructive.
- Type: elegant serif for headings (Cormorant Garamond), modern sans for body (Karla), loaded via `<link>` in the root route head.
- Radius scale leaning xl/2xl, very soft layered shadows, smooth gradients, glass only on modals and the login card.
- Motion: fade-in on mount, hover lift, soft scale, gold sheen on primary buttons, skeleton shimmer.

## Pages

1. **Login** (`/login`) — split screen. Left: clinic image with beige overlay and serif lockup "Glow Skin Clinic / Admin Portal". Right: floating glass card with email, password, remember me, forgot password, gold gradient Login button. Submitting navigates to the dashboard (no auth).
2. **Dashboard Home** (`/`) — "Good Morning, Dr. Apeksha" welcome, gradient hero card with luxury illustration, today's appointment count and quick-access buttons; below, four overview cards (Appointments Today, Total Treatments, Pending Requests, Active Services) with gold icons and hover animation; a compact "Next appointments" list.
3. **Appointments** (`/appointments`) — premium table (Patient, Treatment, Date, Time, Status, Actions) with search, status filter, date picker, rounded status badges (Confirmed / Pending / Completed / Cancelled), alternating rows, soft hover, View details drawer.
4. **Treatments** (`/treatments`) — grid of service cards styled like skincare product cards: image, name, category chip, duration, price, short description, Edit and Delete.
5. **Add Treatment** (`/treatments/new`) and **Edit Treatment** (`/treatments/$id`) — centered Apple-settings-style form in grouped sections: name, category, price, duration, short description, full description, benefits (repeatable list), image upload preview, status toggle; large Save and Cancel.
6. **Messages** and **Settings** — elegant placeholder pages so sidebar links resolve.
7. **Delete modal** — glass blur dialog, serif copy, burgundy Delete, soft gray Cancel. Reused from treatments list and edit page.

## Layout & navigation

- Shared shell in the root route: slim top bar (logo lockup, search, notification bell, settings icon, admin profile) and a floating rounded sidebar that sits inset from the screen edges with icon+label items and gold hover treatment.
- Sidebar menu: Dashboard, Appointments, Treatments, Add Treatment, Patients, Messages, Settings, Logout.
- Login renders outside the shell.
- Mobile: sidebar collapses into a slide-over sheet with a hamburger in the top bar; tables become stacked cards; grids reflow to one column.

## Technical notes

- TanStack Router file routes under `src/routes/`; each page defines its own `head()` metadata.
- Mock data in `src/data/` (appointments, treatments, patients); mutations are in-memory only via local state so Add/Edit/Delete feel real within a session.
- Reusable pieces in `src/components/`: `AppShell`, `TopBar`, `Sidebar`, `StatCard`, `StatusBadge`, `TreatmentCard`, `TreatmentForm`, `ConfirmDeleteDialog`, `PageHeader`, skeleton loaders.
- Built on shadcn primitives (dialog, table, select, input, sheet, popover/calendar) restyled with the clinic tokens — no hardcoded color utilities.
- Hero and treatment/login imagery generated as assets under `src/assets/`.
