## Glow Skin Clinic — Premium Aesthetic Dermatology Website

A luxury medical-spa site with a champagne-gold / pearl-white design system, cinematic hero, and scroll-reveal animations throughout.

### Design system
- Palette (tokens in `src/styles.css`): pearl white background, soft beige surfaces, nude blush accent, champagne gold primary, deep charcoal text, metallic gold gradient + soft shadow tokens.
- Typography: Cormorant Garamond (headings) + Inter (body), loaded via `<link>` in the root route head.
- Generous whitespace, soft rounded corners, subtle shadows, thin animated gold divider lines.

### Pages (separate routes, each with its own SEO metadata)
- `/` — Home: hero, doctor teaser, treatment highlights, before/after preview, testimonials, booking CTA
- `/about` — Dr. Apeksha Herath profile
- `/treatments` — full treatment catalogue
- `/results` — Before & After gallery
- `/testimonials` — patient reviews
- `/contact` — appointment form, location, WhatsApp

### Sections
1. **Navbar** — transparent over hero, turns glassmorphic + sticky on scroll; "Glow Skin Clinic" logo with "by Dr. Apeksha Herath" line; mobile slide-in menu.
2. **Hero** — full-screen generated image of a luxury treatment room / glowing skin portrait, slow Ken Burns zoom, floating gold particle layer, staggered fade-in of "Reveal Your Natural Glow" + subheading, two CTAs (Book Consultation, Explore Treatments), light parallax on scroll.
3. **About Doctor** — large portrait card, credentials list, short premium intro, gold-accented card with soft shadow.
4. **Treatments** — four categories (Skin Rejuvenation, Laser, Anti-Aging & Face Enhancement, Body & Hair) with all listed treatments as cards: image with hover zoom, gold hover border, "Learn More" opening a detail dialog.
5. **Before & After** — draggable image-comparison sliders (custom component, no extra dependency), 3–4 cases.
6. **Testimonials** — star ratings, patient quotes, staggered scroll-reveal cards.
7. **Appointment** — elegant form (name, phone, email, treatment select, preferred date, message) plus a WhatsApp booking button that opens a prefilled `wa.me` message.
8. **Footer** — clinic address, phone/email, social links, Instagram-style image grid.

### Animations
Motion for React for fade-up scroll reveals, staggered children, hero parallax and particles; CSS transitions for hover zoom and glassmorphism.

### Technical notes
- Mobile-first responsive layouts using the grid + `min-w-0` header pattern.
- Images generated into `src/assets/` (hero, doctor portrait, treatment category images, before/after pairs).
- Placeholders used for address, phone, WhatsApp number and real credentials — tell me the real details and I'll swap them in.
- The appointment form is front-end only for now (shows a success toast). If you want submissions stored and emailed, I can add Lovable Cloud in a follow-up.
