import rejuvenation from "@/assets/cat-rejuvenation.jpg";
import laser from "@/assets/cat-laser.jpg";
import antiaging from "@/assets/cat-antiaging.jpg";
import blog1 from "@/assets/blog1.jpeg"
import blog2 from "@/assets/blog2.jpeg"
import blog3 from "@/assets/blog3.jpeg"
import body from "@/assets/cat-body.jpg";
import ba1Before from "@/assets/ba-1-before.jpg";
import ba1After from "@/assets/ba-1-after.jpg";
import ba2Before from "@/assets/ba-2-before.jpg";
import ba2After from "@/assets/ba-2-after.jpg";
import clinicInterior from "@/assets/clinic-interior.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export const CLINIC = {
  name: "Glow Skin Clinic",
  doctor: "Dr. Apeksha Herath",
  phoneDisplay: "077 225 2512",
  phone: "0772252512",
  whatsapp: "94772252512",
  email: "hello@glowskinclinic.com",
  address: "Glow Skin Clinic, Kandy, Sri Lanka",
  city: "Kandy",
  hours: "Mon – Sat · 9:00 AM – 7:00 PM",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  googleMapsPlaceUrl: "https://www.google.com/maps?cid=3174102701765895604&hl=en-GB",
};

export const mapEmbedUrl = `${CLINIC.googleMapsPlaceUrl}&output=embed`;
export const googleMapsUrl = CLINIC.googleMapsPlaceUrl;

export const findBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const whatsappLink = (message: string) =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;

export type Treatment = {
  name: string;
  blurb: string;
  detail: string;
  duration: string;
  image: string;
};

export type TreatmentCategory = {
  slug: string;
  title: string;
  tagline: string;
  image: string;
  treatments: Treatment[];
};

export const treatmentCategories: TreatmentCategory[] = [
  {
    slug: "skin-rejuvenation",
    title: "Skin Rejuvenation",
    tagline: "Restore luminosity, clarity and a refined skin texture.",
    image: rejuvenation,
    treatments: [
      {
        name: "Anti-Aging Treatment",
        blurb: "Medical-grade protocols that soften lines and restore firmness.",
        detail:
          "A tailored combination of collagen-stimulating therapies designed around your skin's biology, delivering a naturally rested and lifted appearance over a graded course.",
        duration: "45–60 min",
        image: "/treatments/anti-aging-treatment.jpg",
      },
      {
        name: "Skin Whitening & Rejuvenation",
        blurb: "Even tone, luminous clarity, no compromise on skin health.",
        detail:
          "Physician-formulated brightening protocols targeting melanin activity and dullness, combining topical actives, in-clinic infusions and light-based correction.",
        duration: "40 min",
        image: "/treatments/skin-whitening-and-rejuvenation.jpg",
      },
      {
        name: "PRP / PRF Treatment",
        blurb: "Your own growth factors, harnessed for genuine regeneration.",
        detail:
          "Platelet-rich plasma and fibrin concentrates are prepared from your own blood and reintroduced to stimulate collagen, improve texture and revive tired skin.",
        duration: "60 min",
        image: "/treatments/prp-prf-treatment.jpg",
      },
      {
        name: "Microneedling",
        blurb: "Controlled micro-injury for smoother, denser skin.",
        detail:
          "Precision micro-channels trigger the skin's repair cascade, refining pores, scarring and fine lines while enhancing absorption of medical serums.",
        duration: "45 min",
        image: "/treatments/microneedling.jpg",
      },
      {
        name: "Hydrafacial",
        blurb: "Deep cleansing and hydration with immediate glow.",
        detail:
          "A multi-step resurfacing ritual that cleanses, exfoliates, extracts and saturates the skin with antioxidants and peptides. Zero downtime.",
        duration: "50 min",
        image: "/treatments/hydrafacial.jpg",
      },
      {
        name: "Chemical Peeling",
        blurb: "Layered resurfacing calibrated to your skin type.",
        detail:
          "Medical peels at carefully selected depths to address pigmentation, congestion and dullness, always prescribed after a full skin assessment.",
        duration: "30 min",
        image: "/treatments/chemical-peeling.jpg",
      },
      {
        name: "Microdermabrasion (MDA)",
        blurb: "Gentle crystal-free polishing for instant radiance.",
        detail:
          "Mechanical micro-exfoliation lifts dulling surface cells and refines congested pores, leaving skin smoother with no downtime.",
        duration: "30 min",
        image: "/treatments/microdermabrasion-mda.jpg",
      },
      {
        name: "Carbon Facial",
        blurb: "Laser-activated deep cleanse for oily, congested skin.",
        detail:
          "A medical-grade carbon layer is drawn into pores then vaporised with laser energy, lifting debris, minimising pores and refining texture.",
        duration: "30–40 min",
        image: "/treatments/carbon-facial.jpg",
      },
      {
        name: "Special Collagen Treatment",
        blurb: "Restorative infusion for skin, tone and hair vitality.",
        detail:
          "A concentrated collagen-based protocol addressing anti-aging concerns, dry and dull skin, and hair thinning through targeted infusion and stimulation techniques.",
        duration: "45–60 min",
        image: "/treatments/special-collagen-treatment.jpg",
      },
      {
        name: "Dry / Scaly & Uneven Skin Treatment",
        blurb: "Specialised care for compromised skin barriers.",
        detail:
          "A dedicated protocol combining barrier-repair actives and in-clinic therapies to calm, hydrate and even out rough, flaking or uneven skin.",
        duration: "40 min",
        image: "/treatments/dry-scaly-and-uneven-skin-treatment.jpg",
      },
    ],
  },
  {
    slug: "laser-treatments",
    title: "Laser Treatments",
    tagline: "Precision light technology for pigment, hair and clarity.",
    image: laser,
    treatments: [
      {
        name: "Pico Laser",
        blurb: "Ultra-short pulses that shatter pigment gently.",
        detail:
          "Picosecond energy fragments unwanted pigment and stimulates dermal remodelling with minimal thermal impact — ideal for melasma, sun damage and tattoo removal.",
        duration: "30 min",
        image: "/treatments/pico-laser.jpg",
      },
      {
        name: "IPL Photofacial",
        blurb: "Broadband light for redness, sun damage and tone.",
        detail:
          "Intense pulsed light targets vascular and pigmented irregularities, leaving a clearer, more even complexion across a short treatment course.",
        duration: "35 min",
        image: "/treatments/ipl-photofacial.jpg",
      },
      {
        name: "Diode Laser",
        blurb: "Gold-standard comfort for long-term hair reduction.",
        detail:
          "Cooled diode technology delivers consistent, comfortable energy to the follicle across all treatable skin types.",
        duration: "20–60 min",
        image: "/treatments/diode-laser.jpg",
      },
      {
        name: "Laser Hair Removal",
        blurb: "Permanent reduction, meticulously mapped.",
        detail:
          "A structured protocol across growth cycles for face and body, planned to your hair density, skin tone and desired result.",
        duration: "20–60 min",
        image: "/treatments/laser-hair-removal.jpg",
      },
      {
        name: "Pigmentation Treatment",
        blurb: "Melasma, freckles and post-inflammatory marks.",
        detail:
          "Combination therapy uniting laser, medical topicals and photoprotection strategy for durable, relapse-aware pigment control.",
        duration: "30–45 min",
        image: "/treatments/pigmentation-treatment.jpg",
      },
    ],
  },
  {
    slug: "anti-aging",
    title: "Anti-Aging & Face Enhancement",
    tagline: "Refined, undetectable enhancement of your own features.",
    image: antiaging,
    treatments: [
      {
        name: "Botox — Face / Hands / Armpits",
        blurb: "Softened expression lines and control of excess sweating.",
        detail:
          "Micro-dosed neuromodulation placed with anatomical precision for facial lines, rejuvenated hands, or underarm hyperhidrosis, so movement and comfort stay natural.",
        duration: "20–40 min",
        image: "/treatments/botox-face-hands-armpits.jpg",
      },
      {
        name: "Facial Fillers & Threads",
        blurb: "Volume, lift and rejuvenation restored where time has taken it.",
        detail:
          "Hyaluronic acid artistry and PDO thread placement for cheeks, lips, chin, jawline and tear troughs — always structural first, decorative second.",
        duration: "45–60 min",
        image: "/treatments/facial-fillers-and-threads.jpg",
      },
      {
        name: "Thread Lift",
        blurb: "Discreet lifting without surgery.",
        detail:
          "Absorbable PDO threads reposition soft tissue and stimulate collagen along the jawline, mid-face and neck.",
        duration: "60 min",
        image: "/treatments/thread-lift.jpg",
      },
      {
        name: "HIFU Lifting",
        blurb: "Focused ultrasound tightening for sagging skin.",
        detail:
          "High-intensity focused ultrasound reaches the foundational layers to firm and contour sagging skin progressively over three to six months.",
        duration: "60–90 min",
        image: "/treatments/hifu-lifting.jpg",
      },
      {
        name: "Lip Blushing / Dark Lip Treatment",
        blurb: "Soft, natural colour correction for lips.",
        detail:
          "Semi-permanent pigmentation or brightening protocols restore a healthy, even lip tone and definition for a naturally polished finish.",
        duration: "60–90 min",
        image: "/treatments/lip-blushing-dark-lip-treatment.jpg",
      },
    ],
  },
  {
    slug: "body-hair",
    title: "Body & Hair Treatments",
    tagline: "Care that extends beyond the face, with the same rigour.",
    image: body,
    treatments: [
      {
        name: "Hair Loss Treatment",
        blurb: "Medical diagnosis before any prescription.",
        detail:
          "Trichological assessment followed by PRP, mesotherapy, low-level laser and prescription therapy tailored to the cause of your shedding.",
        duration: "45 min",
        image: "/treatments/hair-loss-treatment.jpg",
      },
      {
        name: "Stretch Marks & Old Scars",
        blurb: "Texture and tone, visibly improved.",
        detail:
          "Fractional resurfacing and microneedling with growth factors to rebuild dermal architecture and soften striae and old scarring.",
        duration: "45 min",
        image: "/treatments/stretch-marks-and-old-scars.jpg",
      },
      {
        name: "80K Cavitation — Fat Reduction",
        blurb: "Non-surgical contouring for double chin, abdomen, thighs & arms.",
        detail:
          "Ultrasonic cavitation technology targets localised fat deposits around the double chin, abdomen, thighs and arms, planned alongside realistic, medically sound expectations.",
        duration: "45–60 min",
        image: "/treatments/80k-cavitation-fat-reduction.jpg",
      },
      {
        name: "PRP / PRF — Body & Knee Joints",
        blurb: "Regenerative therapy beyond the face.",
        detail:
          "Platelet-rich plasma and fibrin concentrates prepared from your own blood, used to support tissue repair and comfort in body areas and knee joints.",
        duration: "45–60 min",
        image: "/treatments/prp-prf-body-and-knee-joints.jpg",
      },
      {
        name: "Acne & Acne Scar Treatment",
        blurb: "Clearer skin and refined scar texture.",
        detail:
          "A staged medical approach combining peels, laser, microneedling and topical therapy to calm active breakouts and resurface acne scarring.",
        duration: "40–60 min",
        image: "/treatments/acne-and-acne-scar-treatment.jpg",
      },
      {
        name: "Warts / Lumps / Spots / Naevi Removal",
        blurb: "Safe, precise removal of unwanted skin growths.",
        detail:
          "Clinical removal of warts, lumps, spots and naevi using the most appropriate energy-based or minor-procedure technique, assessed individually for the safest outcome.",
        duration: "20–40 min",
        image: "/treatments/warts-lumps-spots-naevi-removal.jpg",
      },
      {
        name: "Ear & Nose Piercing",
        blurb: "Hygienic, precise piercing for adults and children.",
        detail:
          "Performed in a sterile clinical setting with precision placement and aftercare guidance, suitable for both adults and children.",
        duration: "15–20 min",
        image: "/treatments/ear-and-nose-piercing.jpg",
      },
    ],
  },
];

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\//g, " ")
    .replace(/—/g, " ")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function findTreatmentBySlug(slug: string) {
  for (const category of treatmentCategories) {
    const treatment = category.treatments.find((t) => slugify(t.name) === slug);
    if (treatment) return { treatment, category };
  }
  return null;
}

export const beforeAfterCases = [
  {
    title: "Melasma & Pigmentation",
    protocol: "Pico Laser · 4 sessions",
    before: ba1Before,
    after: ba1After,
  },
  {
    title: "Fine Lines & Skin Laxity",
    protocol: "HIFU + PRP · 3 sessions",
    before: ba2Before,
    after: ba2After,
  },
];

export const testimonials = [
  {
    name: "Nethmi R.",
    treatment: "Hydrafacial & Pico Laser",
    rating: 5,
    quote:
      "From the moment I walked in, it felt like a private atelier rather than a clinic. Dr. Apeksha explained every step, and my pigmentation has faded beyond what I hoped for.",
  },
  {
    name: "Sanduni P.",
    treatment: "PRP & Microneedling",
    rating: 5,
    quote:
      "I have never been treated with such care. The results are subtle in the best way — people simply tell me my skin looks well, not that I have had something done.",
  },
  {
    name: "Ayesha M.",
    treatment: "Thread Lift",
    rating: 5,
    quote:
      "Meticulous, honest and utterly professional. She talked me out of what I did not need and delivered exactly what I did. That earns real trust.",
  },
  {
    name: "Dilini K.",
    treatment: "Laser Hair Removal",
    rating: 5,
    quote:
      "The most comfortable sessions I have experienced anywhere, and the clinic itself is beautiful. Six sessions in and the difference is remarkable.",
  },
  {
    name: "Hasini W.",
    treatment: "Anti-Aging Programme",
    rating: 5,
    quote:
      "A genuinely medical approach wrapped in luxury. My skin has not looked this rested in a decade.",
  },
  {
    name: "Tharushi S.",
    treatment: "Facial Fillers",
    rating: 5,
    quote:
      "Natural, balanced and elegant. Dr. Apeksha has an artist's eye and a physician's discipline.",
  },
];

export const credentials = [
  "MBBS — University of Peradeniya",
  "Fellowship in Cosmetology & Aesthetic Medicine (FCAM)",
  "Masters Course in Advanced Facial Injectables (MAFI)",
  "Advanced Clinical & Injectable Training",
];

export const milestones = [
  {
    year: "2012",
    title: "MBBS, University of Peradeniya",
    description:
      "Awarded the Bachelor of Medicine and Bachelor of Surgery degree, conferred at the Peradeniya convocation.",
    image: "/doctor/mbbs-degree-certificate.jpg",
  },
  {
    year: "Training",
    title: "Advanced Clinical & Injectable Training",
    description:
      "Hands-on training alongside a team of aesthetic practitioners, refining injectable and procedural technique.",
    image: "/doctor/clinical-training-batch.jpg",
  },
  {
    year: "2024",
    title: "Fellowship in Cosmetology & Aesthetic Medicine (FCAM)",
    description:
      "Completed a specialised fellowship in cosmetology and aesthetic medicine, graded with distinction.",
    image: "/doctor/fcam-fellowship-diploma.jpg",
  },
  {
    year: "2024",
    title: "Receiving the FCAM Certification",
    description:
      "Presented with her Fellowship in Cosmetology & Aesthetic Medicine certificate by the institute's faculty.",
    image: "/doctor/fcam-certificate-presentation.jpg",
  },
  {
    year: "2025",
    title: "Masters Course in Advanced Facial Injectables (MAFI)",
    description:
      "Certified in advanced facial injectable technique after an intensive, hands-on masters programme.",
    image: "/doctor/mafi-masters-certificate.jpg",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "Do I need a consultation before booking a treatment?",
    answer:
      "Yes. Every patient begins with a private consultation with Dr. Apeksha Herath so the protocol can be tailored to your skin, medical history and goals before any treatment is scheduled.",
  },
  {
    question: "Are the treatments performed by a doctor?",
    answer:
      "All procedures at Glow Skin Clinic are prescribed and performed personally by Dr. Apeksha Herath — nothing is delegated to unqualified staff.",
  },
  {
    question: "How much downtime should I expect?",
    answer:
      "It depends on the treatment. Many of our laser and injectable protocols have little to no visible downtime, while more intensive procedures may need a few days of recovery. This is discussed in detail during your consultation.",
  },
  {
    question: "How many sessions will I need to see results?",
    answer:
      "Most treatment plans are structured as a course of sessions rather than a single visit, since skin responds best to a gradual, medically guided protocol. Your doctor will outline an expected timeline for your specific goals.",
  },
  {
    question: "Is it safe for sensitive or acne-prone skin?",
    answer:
      "Every protocol is selected after a full skin assessment, so treatments are adapted for sensitive, acne-prone or reactive skin types rather than applied as a one-size-fits-all approach.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can request a consultation through the Book a Consultation page, or message us directly on WhatsApp for a faster response.",
  },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: "Clinic" | "Treatments" | "Results";
};

export const galleryImages: GalleryImage[] = [
  { src: clinicInterior, alt: "Reception and waiting lounge", category: "Clinic" },
  { src: rejuvenation, alt: "Skin rejuvenation treatment room", category: "Treatments" },
  { src: laser, alt: "Laser treatment suite", category: "Treatments" },
  { src: antiaging, alt: "Anti-aging consultation room", category: "Treatments" },
  { src: body, alt: "Body care treatment suite", category: "Treatments" },
  { src: ba1After, alt: "Skin rejuvenation result", category: "Results" },
  { src: ba2After, alt: "Laser treatment result", category: "Results" },
  { src: doctorPortrait, alt: "Dr. Apeksha Herath", category: "Clinic" },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  author: string;
  category: string;
  image: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-laser-treatment",
    title: "Choosing the Right Laser Treatment for Your Skin",
    excerpt:
      "Pico, fractional, diode — the range of laser platforms can be confusing. Here's how a proper assessment narrows it down to what your skin actually needs.",
    content: [
      "With so many laser platforms available today, it's easy to assume more advanced automatically means better suited to you. In practice, the right choice depends entirely on your skin type, concern and goals.",
      "During a consultation, your doctor evaluates pigmentation, texture, sensitivity and downtime tolerance before recommending a protocol — rather than defaulting to whichever technology is trending.",
      "This is why every treatment at Glow Skin Clinic begins with a medical assessment, not a treatment menu.",
    ],
    date: "2025-03-14",
    author: "Dr. Apeksha Herath",
    category: "Laser Treatments",
    image: blog1,
  },
  {
    slug: "skin-rejuvenation-what-to-expect",
    title: "Skin Rejuvenation: What to Expect From Your First Session",
    excerpt:
      "A look at what a typical rejuvenation protocol involves, from the initial assessment through to aftercare.",
    content: [
      "Skin rejuvenation is rarely a single treatment — it's a structured course built around your skin's response over time.",
      "Your first session usually begins with a full skin assessment, followed by a gentle introductory protocol to gauge sensitivity and set a realistic timeline for visible results.",
      "Most patients see a gradual improvement in tone and texture over several weeks, with results building session by session rather than overnight.",
    ],
    date: "2025-05-02",
    author: "Dr. Apeksha Herath",
    category: "Skin Rejuvenation",
    image: blog2,
  },
  {
    slug: "pre-treatment-skin-care-tips",
    title: "5 Things to Do Before Any Aesthetic Treatment",
    excerpt:
      "Simple preparation steps that make a real difference to comfort, downtime and results.",
    content: [
      "Preparing your skin properly before a treatment can noticeably improve both comfort during the session and how quickly you see results.",
      "Avoid sun exposure and active retinoid products in the days leading up to your appointment, and arrive with clean, product-free skin.",
      "Most importantly, be upfront with your doctor about any medications, allergies or recent procedures — this shapes the entire protocol.",
    ],
    date: "2025-06-20",
    author: "Dr. Apeksha Herath",
    category: "Clinic Advice",
    image: blog3,
  },
];