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
import galeryImg1 from "@/assets/galery-img1.jpeg";
import galeryImg2 from "@/assets/galery-img2.jpeg";
import galeryImg3 from "@/assets/galery-img3.jpeg";
import galeryImg4 from "@/assets/galery-img4.jpeg";
import galeryImg5 from "@/assets/galery-img5.jpeg";
import galeryImg6 from "@/assets/galery-img6.jpeg";
import galeryImg7 from "@/assets/galery-img7.jpeg";
import galeryImg8 from "@/assets/galery-img8.jpeg";
import placeholderResult from "@/assets/placeholder-result.jpg";
import antiAgingResult from "@/assets/results/anti-aging-before-after.jpg";
import skinWhiteningResult from "@/assets/results/skin-whitening-result.jpg";
import prpPrfResult from "@/assets/results/prp-prf-result.jpg";
import microneedlingResult from "@/assets/results/microneedling-result.jpg";
import hydraFacialResult from "@/assets/results/hydra-facial-result.jpg";
import chemicalPeelingResult from "@/assets/results/chemical-peeling-result.jpg";
import carbonFacialResult from "@/assets/results/carbon-facial-result.jpg";
import picoLaserResult from "@/assets/results/pico-laser-treatment.jpg";
import iplPhotofacialResult from "@/assets/results/ipl-photofacial-result.jpg";
import laserHairRemovalResult from "@/assets/results/Laser-hair-removal-result.jpeg";
import pigmentationResult from "@/assets/results/pigmentation-result.jpg";
import hairLossResult from "@/assets/results/hair-loss-results.jpg";
import stretchMarksResult from "@/assets/results/stretch-marks-results.jpg";
import cavitationResult from "@/assets/results/80k-cavitation-result.jpg";
import collagenResult from "@/assets/results/Collagen-result.jpeg";
import dryScalyUnevenResult from "@/assets/results/dry-scaly-uneven-result.jpeg";
import kneeJointResult from "@/assets/results/knee-joint-results.jpeg";
import microdermabrasionResult from "@/assets/results/Microdermabrasion-result.jpeg";
import earPiercingResult from "@/assets/results/ears-piersing-result.jpeg";
import wartLumpsResult from "@/assets/results/wart-lumps-results.jpeg";
import botoxResult from "@/assets/results/botox-results.jpeg";
import facialResult from "@/assets/results/facial-results.jpeg";
import hifuResult from "@/assets/results/hifu-results.jpeg";
import lipResult from "@/assets/results/lip-results.jpeg";
import threadResult from "@/assets/results/thread-results.jpeg";

// TEMPORARY placeholder image used for every treatment's Before/After photo.
// It's a single combined image showing "before" on the left and "after" on the
// right. To add a real result photo for a specific treatment, import the image
// at the top of this file (like the other assets above) and pass it as that
// treatment's `resultImage` value instead of `placeholderResult`.
// Example:
//   import antiAgingResult from "@/assets/results/anti-aging-before-after.jpg";
//   ... then in the "Anti-Aging Treatment" object below:
//   resultImage: antiAgingResult,

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
  /** Roughly how many sessions are typically recommended, e.g. "3–6 sessions, spaced 3–4 weeks apart". */
  sessions?: string;
  /** Key benefits / what the treatment addresses. */
  benefits?: string[];
  /** Who this treatment is generally suitable for. */
  idealFor?: string[];
  /** Possible/expected side effects, shown with a medical-safety framing. */
  sideEffects?: string[];
  /** Aftercare guidance. */
  aftercare?: string[];
  /** Combined before/after result photo (one image showing both). Defaults to a placeholder — replace per-treatment when a real photo is available. */
  resultImage?: string;
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
        sessions: "Course of 4–6 sessions, spaced 3–4 weeks apart, with periodic maintenance",
        benefits: [
          "Softens fine lines and expression wrinkles",
          "Stimulates natural collagen and elastin production",
          "Improves firmness, tone and overall radiance",
          "Gradual, natural-looking results with no surgery",
        ],
        idealFor: [
          "Early to moderate signs of skin ageing",
          "Anyone wanting a preventative, medically guided routine",
          "Patients seeking natural results rather than a dramatic change",
        ],
        sideEffects: [
          "Temporary redness or warmth immediately after treatment",
          "Mild swelling or sensitivity for 24–48 hours",
          "Occasional dryness or light peeling depending on the protocol used",
          "Rare: irritation or breakout in sensitive skin",
        ],
        aftercare: [
          "Apply broad-spectrum SPF 30+ daily",
          "Use a gentle cleanser and moisturiser for a few days after",
          "Avoid strong actives (retinoids, acids) until skin has settled",
          "Avoid direct sun and saunas for 24–48 hours",
        ],
        resultImage: antiAgingResult,
      },
      {
        name: "Skin Whitening & Rejuvenation",
        blurb: "Even tone, luminous clarity, no compromise on skin health.",
        detail:
          "Physician-formulated brightening protocols targeting melanin activity and dullness, combining topical actives, in-clinic infusions and light-based correction.",
        duration: "40 min",
        image: "/treatments/skin-whitening-and-rejuvenation.jpg",
        sessions: "4–8 sessions, typically every 2–3 weeks",
        benefits: [
          "Evens out patchy or dull skin tone",
          "Reduces the appearance of dark spots and pigmentation",
          "Restores a brighter, healthier-looking complexion",
          "Combines topical actives with in-clinic treatment for faster results",
        ],
        idealFor: [
          "Dull, uneven or tired-looking skin",
          "Mild pigmentation or sun-related dullness",
          "Anyone wanting a gradual, medically supervised brightening plan",
        ],
        sideEffects: [
          "Mild redness or tightness after treatment",
          "Temporary increased sun sensitivity",
          "Rare: irritation if actives are introduced too quickly",
        ],
        aftercare: [
          "Daily broad-spectrum sunscreen is essential",
          "Avoid unprotected sun exposure between sessions",
          "Follow the prescribed home-care regimen consistently",
          "Report any unusual irritation to your doctor promptly",
        ],
        resultImage: skinWhiteningResult,
      },
      {
        name: "PRP / PRF Treatment",
        blurb: "Your own growth factors, harnessed for genuine regeneration.",
        detail:
          "Platelet-rich plasma and fibrin concentrates are prepared from your own blood and reintroduced to stimulate collagen, improve texture and revive tired skin.",
        duration: "60 min",
        image: "/treatments/prp-prf-treatment.jpg",
        sessions: "3–4 sessions, spaced 4–6 weeks apart",
        benefits: [
          "Uses your own platelets, so it's naturally biocompatible",
          "Stimulates collagen for firmer, more even-textured skin",
          "Improves tired, dull or thinning skin",
          "Often combined with microneedling for enhanced absorption",
        ],
        idealFor: [
          "Early skin ageing, dullness or fine lines",
          "Patients who prefer a treatment using their own biological material",
          "Skin that needs a regenerative boost after sun damage or stress",
        ],
        sideEffects: [
          "Redness, minor swelling and pinpoint bruising at injection sites",
          "Mild tenderness for 1–2 days",
          "Rare: infection if aftercare instructions are not followed",
        ],
        aftercare: [
          "Avoid makeup for 12–24 hours",
          "Avoid strenuous exercise, sauna and alcohol for 24 hours",
          "Keep skin clean and apply recommended soothing products",
          "Use sunscreen daily during the healing period",
        ],
        resultImage: prpPrfResult,
      },
      {
        name: "Microneedling",
        blurb: "Controlled micro-injury for smoother, denser skin.",
        detail:
          "Precision micro-channels trigger the skin's repair cascade, refining pores, scarring and fine lines while enhancing absorption of medical serums.",
        duration: "45 min",
        image: "/treatments/microneedling.jpg",
        sessions: "3–6 sessions, spaced 3–4 weeks apart",
        benefits: [
          "Refines pore size and improves overall texture",
          "Softens acne scarring and fine lines",
          "Boosts absorption of medical-grade serums",
          "Stimulates natural collagen production over time",
        ],
        idealFor: [
          "Enlarged pores, acne scarring or uneven texture",
          "Fine lines and early collagen loss",
          "Most skin types, with settings adjusted individually",
        ],
        sideEffects: [
          "Redness and a warm, sunburn-like sensation for 24–48 hours",
          "Mild swelling, pinpoint bleeding or tightness",
          "Rare: breakouts or prolonged redness in sensitive skin",
        ],
        aftercare: [
          "Avoid makeup for at least 24 hours",
          "Use a gentle cleanser and fragrance-free moisturiser",
          "Avoid sun exposure and apply SPF 30+ once skin has settled",
          "Skip active ingredients (retinoids, acids) for a few days",
        ],
        resultImage: microneedlingResult,
      },
      {
        name: "Hydrafacial",
        blurb: "Deep cleansing and hydration with immediate glow.",
        detail:
          "A multi-step resurfacing ritual that cleanses, exfoliates, extracts and saturates the skin with antioxidants and peptides. Zero downtime.",
        duration: "50 min",
        image: "/treatments/hydrafacial.jpg",
        sessions: "Monthly, or ahead of a special occasion",
        benefits: [
          "Deeply cleanses and unclogs congested pores",
          "Delivers instant hydration and a visible glow",
          "Gentle enough for regular, zero-downtime maintenance",
          "Suits sensitive or reactive skin types",
        ],
        idealFor: [
          "Congested, dull or dehydrated skin",
          "First-time patients wanting a gentle introduction to skincare treatments",
          "Anyone wanting a quick glow before an event",
        ],
        sideEffects: [
          "Mild, temporary redness immediately after treatment",
          "Rare: slight tightness in very sensitive skin",
        ],
        aftercare: [
          "No downtime — makeup can usually be applied the same day",
          "Keep skin hydrated and apply SPF 30+ the following day",
          "Avoid harsh exfoliants for 24 hours",
        ],
        resultImage: hydraFacialResult,
      },
      {
        name: "Chemical Peeling",
        blurb: "Layered resurfacing calibrated to your skin type.",
        detail:
          "Medical peels at carefully selected depths to address pigmentation, congestion and dullness, always prescribed after a full skin assessment.",
        duration: "30 min",
        image: "/treatments/chemical-peeling.jpg",
        sessions: "3–6 sessions, spaced 2–4 weeks apart depending on peel depth",
        benefits: [
          "Addresses pigmentation, congestion and dullness",
          "Improves overall texture and tone",
          "Peel depth is calibrated to your specific skin needs",
        ],
        idealFor: [
          "Uneven pigmentation, mild acne scarring or dull texture",
          "Patients who have completed a full skin assessment beforehand",
        ],
        sideEffects: [
          "Temporary redness, tightness or flaking",
          "Peeling or mild sensitivity for several days depending on depth",
          "Rare: prolonged redness or pigment changes if aftercare is not followed",
        ],
        aftercare: [
          "Strict daily SPF 30+ is essential",
          "Do not pick or peel flaking skin",
          "Use only the gentle, prescribed skincare during recovery",
          "Avoid sun exposure and heat for several days",
        ],
        resultImage: chemicalPeelingResult,
      },
      {
        name: "Microdermabrasion (MDA)",
        blurb: "Gentle crystal-free polishing for instant radiance.",
        detail:
          "Mechanical micro-exfoliation lifts dulling surface cells and refines congested pores, leaving skin smoother with no downtime.",
        duration: "30 min",
        image: "/treatments/microdermabrasion-mda.jpg",
        sessions: "4–6 sessions, spaced 2–3 weeks apart",
        benefits: [
          "Instantly smoother, more radiant skin",
          "Refines congested and enlarged pores",
          "Crystal-free, gentle on most skin types",
          "Zero downtime",
        ],
        idealFor: [
          "Dull, rough or congested skin",
          "Patients wanting a gentle, low-risk polishing treatment",
        ],
        sideEffects: [
          "Mild, temporary redness or sensitivity",
          "Rare: light dryness for a day",
        ],
        aftercare: [
          "Apply SPF 30+ before sun exposure",
          "Keep skin moisturised",
          "Avoid strong actives for 24 hours",
        ],
        resultImage: microdermabrasionResult,
      },
      {
        name: "Carbon Facial",
        blurb: "Laser-activated deep cleanse for oily, congested skin.",
        detail:
          "A medical-grade carbon layer is drawn into pores then vaporised with laser energy, lifting debris, minimising pores and refining texture.",
        duration: "30–40 min",
        image: "/treatments/carbon-facial.jpg",
        sessions: "4–6 sessions, spaced 2–4 weeks apart",
        benefits: [
          "Deep-cleans pores and lifts trapped debris and oil",
          "Refines pore size and improves skin texture",
          "Adds a mild, immediate brightening effect",
        ],
        idealFor: [
          "Oily or congested skin",
          "Enlarged pores and mild acne-prone skin",
        ],
        sideEffects: [
          "Mild warmth, redness or tightness immediately after",
          "Rare: temporary sensitivity in reactive skin",
        ],
        aftercare: [
          "Apply SPF 30+ daily",
          "Avoid harsh exfoliants for 24–48 hours",
          "Keep skin hydrated",
        ],
        resultImage: carbonFacialResult,
      },
      {
        name: "Special Collagen Treatment",
        blurb: "Restorative infusion for skin, tone and hair vitality.",
        detail:
          "A concentrated collagen-based protocol addressing anti-aging concerns, dry and dull skin, and hair thinning through targeted infusion and stimulation techniques.",
        duration: "45–60 min",
        image: "/treatments/special-collagen-treatment.jpg",
        sessions: "4–6 sessions, spaced 3–4 weeks apart",
        benefits: [
          "Supports collagen renewal for firmer, plumper skin",
          "Improves dry, dull or lacklustre skin",
          "May support hair vitality alongside skin goals",
        ],
        idealFor: [
          "Early ageing, dryness or dullness",
          "Patients wanting a combined skin-and-hair vitality protocol",
        ],
        sideEffects: [
          "Mild redness or swelling at infusion or injection points",
          "Temporary tenderness for a day or two",
        ],
        aftercare: [
          "Avoid strenuous exercise for 24 hours",
          "Keep the treated area clean",
          "Follow the individualised aftercare plan from your doctor",
        ],
        resultImage: collagenResult,
      },
      {
        name: "Dry / Scaly & Uneven Skin Treatment",
        blurb: "Specialised care for compromised skin barriers.",
        detail:
          "A dedicated protocol combining barrier-repair actives and in-clinic therapies to calm, hydrate and even out rough, flaking or uneven skin.",
        duration: "40 min",
        image: "/treatments/dry-scaly-and-uneven-skin-treatment.jpg",
        sessions: "Course tailored to severity, reviewed monthly",
        benefits: [
          "Calms and repairs a compromised skin barrier",
          "Improves hydration and evens rough, flaking texture",
          "Individually formulated after a skin-barrier assessment",
        ],
        idealFor: [
          "Chronically dry, flaking or rough skin",
          "Patients with a compromised or sensitised skin barrier",
        ],
        sideEffects: [
          "Mild stinging or redness on application in very reactive skin",
          "Rare: temporary flare-up before improvement",
        ],
        aftercare: [
          "Use only the barrier-repair products recommended by your doctor",
          "Avoid harsh cleansers, hot water and exfoliation",
          "Apply moisturiser and SPF consistently",
        ],
        resultImage: dryScalyUnevenResult,
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
        sessions: "4–6 sessions, spaced 3–4 weeks apart",
        benefits: [
          "Effectively fragments unwanted pigment (melasma, sunspots, tattoo ink)",
          "Minimal thermal damage means less downtime than older lasers",
          "Stimulates dermal collagen for improved overall texture",
        ],
        idealFor: [
          "Melasma, sun damage and stubborn pigmentation",
          "Tattoo removal",
          "Patients assessed as suitable under the Fitzpatrick skin-type system",
        ],
        sideEffects: [
          "Temporary redness, mild swelling or pinpoint bleeding",
          "Short-lived darkening of treated pigment before it clears",
          "Rare: blistering or pigment changes if aftercare is not followed",
        ],
        aftercare: [
          "Strict daily SPF 30+ for several weeks after",
          "Avoid direct sun exposure and tanning beds",
          "Avoid picking at any treated spots",
          "Follow your doctor's individualised skincare guidance",
        ],
        resultImage: picoLaserResult,
      },
      {
        name: "IPL Photofacial",
        blurb: "Broadband light for redness, sun damage and tone.",
        detail:
          "Intense pulsed light targets vascular and pigmented irregularities, leaving a clearer, more even complexion across a short treatment course.",
        duration: "35 min",
        image: "/treatments/ipl-photofacial.jpg",
        sessions: "3–5 sessions, spaced 3–4 weeks apart",
        benefits: [
          "Improves facial redness and visible blood vessels",
          "Reduces sun damage and pigment irregularities",
          "Leaves a clearer, more even complexion",
        ],
        idealFor: [
          "Redness, rosacea-prone skin or sun damage",
          "Uneven skin tone from vascular or pigment concerns",
        ],
        sideEffects: [
          "Temporary redness or a warm, sunburn-like feeling",
          "Short-lived darkening of pigmented spots before they fade",
          "Rare: blistering in overly sun-exposed skin",
        ],
        aftercare: [
          "Daily SPF 30+ is essential",
          "Avoid sun exposure and tanning beds for several weeks",
          "Use gentle, soothing skincare for a few days",
        ],
        resultImage: iplPhotofacialResult,
      },
      {
        name: "Diode Laser",
        blurb: "Gold-standard comfort for long-term hair reduction.",
        detail:
          "Cooled diode technology delivers consistent, comfortable energy to the follicle across all treatable skin types.",
        duration: "20–60 min",
        image: "/treatments/diode-laser.jpg",
        sessions: "6–8 sessions across the hair growth cycle",
        benefits: [
          "Long-term hair reduction with consistent, comfortable energy delivery",
          "Cooling technology improves comfort during treatment",
          "Suitable across a range of skin types",
        ],
        idealFor: [
          "Unwanted facial or body hair",
          "Most skin tones, assessed individually before treatment",
        ],
        sideEffects: [
          "Mild redness or slight swelling around follicles",
          "Rare: temporary pigment changes in sensitive skin",
        ],
        aftercare: [
          "Avoid sun exposure and apply SPF between sessions",
          "Avoid plucking or waxing between treatments (shaving is fine)",
          "Moisturise treated areas and avoid heat/friction for 24 hours",
        ],
        resultImage: placeholderResult,
      },
      {
        name: "Laser Hair Removal",
        blurb: "Permanent reduction, meticulously mapped.",
        detail:
          "A structured protocol across growth cycles for face and body, planned to your hair density, skin tone and desired result.",
        duration: "20–60 min",
        image: "/treatments/laser-hair-removal.jpg",
        sessions: "6–8 sessions, spaced 4–6 weeks apart, planned to your growth cycle",
        benefits: [
          "Permanent hair reduction across face and body",
          "Protocol mapped to your hair density and skin tone",
          "Reduces ingrown hairs and shaving-related irritation over time",
        ],
        idealFor: [
          "Anyone seeking a long-term alternative to shaving or waxing",
          "Most skin types, assessed individually beforehand",
        ],
        sideEffects: [
          "Mild redness, swelling or a warm sensation around follicles",
          "Rare: temporary pigment changes or, very rarely, blistering",
        ],
        aftercare: [
          "Avoid sun exposure and apply SPF between sessions",
          "Avoid plucking or waxing between treatments",
          "Avoid hot showers, saunas and vigorous exercise for 24 hours",
        ],
        resultImage: laserHairRemovalResult,
      },
      {
        name: "Pigmentation Treatment",
        blurb: "Melasma, freckles and post-inflammatory marks.",
        detail:
          "Combination therapy uniting laser, medical topicals and photoprotection strategy for durable, relapse-aware pigment control.",
        duration: "30–45 min",
        image: "/treatments/pigmentation-treatment.jpg",
        sessions: "4–6 sessions, spaced 3–4 weeks apart",
        benefits: [
          "Targets melasma, freckles and post-inflammatory marks",
          "Combines laser, topicals and photoprotection for durable results",
          "Relapse-aware planning to help maintain long-term clarity",
        ],
        idealFor: [
          "Melasma, freckles and stubborn pigmentation",
          "Patients wanting a structured, medically supervised plan rather than a single quick fix",
        ],
        sideEffects: [
          "Temporary darkening of treated pigment before it clears",
          "Mild redness or sensitivity",
          "Rare: rebound pigmentation if sun protection is not maintained",
        ],
        aftercare: [
          "Strict daily SPF 30+ is non-negotiable for lasting results",
          "Avoid direct sun and tanning beds",
          "Continue prescribed topicals as directed",
        ],
        resultImage: pigmentationResult,
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
        sessions: "Results last 3–6 months; touch-ups scheduled accordingly",
        benefits: [
          "Softens expression lines (forehead, frown lines, crow's feet)",
          "Controls excess sweating in hands or underarms",
          "Anatomically precise dosing preserves natural movement and expression",
        ],
        idealFor: [
          "Dynamic wrinkles caused by repeated facial expression",
          "Hyperhidrosis of the hands or underarms",
        ],
        sideEffects: [
          "Mild bruising, redness or swelling at injection sites",
          "Temporary headache",
          "Rare: slight asymmetry or drooping, usually temporary and reviewed at follow-up",
        ],
        aftercare: [
          "Avoid lying down or touching the area for 4 hours",
          "Avoid strenuous exercise for 24 hours",
          "Avoid rubbing or massaging the treated area",
        ],
        resultImage: botoxResult,
      },
      {
        name: "Facial Fillers & Threads",
        blurb: "Volume, lift and rejuvenation restored where time has taken it.",
        detail:
          "Hyaluronic acid artistry and PDO thread placement for cheeks, lips, chin, jawline and tear troughs — always structural first, decorative second.",
        duration: "45–60 min",
        image: "/treatments/facial-fillers-and-threads.jpg",
        sessions: "Results last 6–18 months depending on the area and product used",
        benefits: [
          "Restores volume lost with age (cheeks, lips, chin, jawline, tear troughs)",
          "Structural, natural-looking lift rather than an overfilled appearance",
          "PDO threads add lift while stimulating collagen",
        ],
        idealFor: [
          "Volume loss, flattened cheeks or a tired-looking mid-face",
          "Patients wanting subtle, balanced enhancement",
        ],
        sideEffects: [
          "Bruising, swelling or tenderness at injection sites",
          "Temporary lumps or asymmetry that settle within days",
          "Rare: vascular complications, which is why placement by a trained physician matters",
        ],
        aftercare: [
          "Avoid touching or massaging the area unless instructed",
          "Avoid strenuous exercise, alcohol and extreme heat for 24–48 hours",
          "Sleep with your head slightly elevated the first night",
        ],
        resultImage: facialResult,
      },
      {
        name: "Thread Lift",
        blurb: "Discreet lifting without surgery.",
        detail:
          "Absorbable PDO threads reposition soft tissue and stimulate collagen along the jawline, mid-face and neck.",
        duration: "60 min",
        image: "/treatments/thread-lift.jpg",
        sessions: "Results typically last 12–18 months",
        benefits: [
          "Discreet lift along jawline, mid-face and neck without surgery",
          "Absorbable threads stimulate collagen as they dissolve",
          "Minimal downtime compared to surgical alternatives",
        ],
        idealFor: [
          "Mild to moderate skin laxity and early sagging",
          "Patients seeking a non-surgical lifting option",
        ],
        sideEffects: [
          "Bruising, swelling or tenderness along thread paths",
          "Temporary puckering or visible dimpling that resolves",
          "Rare: thread migration or infection if aftercare is not followed",
        ],
        aftercare: [
          "Avoid wide mouth movements, dental work and facial massage for 2 weeks",
          "Sleep on your back with head elevated for the first few nights",
          "Avoid strenuous exercise and saunas for at least a week",
        ],
        resultImage: threadResult,
      },
      {
        name: "HIFU Lifting",
        blurb: "Focused ultrasound tightening for sagging skin.",
        detail:
          "High-intensity focused ultrasound reaches the foundational layers to firm and contour sagging skin progressively over three to six months.",
        duration: "60–90 min",
        image: "/treatments/hifu-lifting.jpg",
        sessions: "1 session, with results building over 3–6 months; touch-ups yearly",
        benefits: [
          "Firms and contours sagging skin without surgery or downtime",
          "Focused ultrasound reaches deeper foundational layers",
          "Progressive, natural-looking tightening over time",
        ],
        idealFor: [
          "Mild to moderate skin laxity of the face, jawline or neck",
          "Patients wanting a non-invasive alternative to a facelift",
        ],
        sideEffects: [
          "Temporary redness, swelling or tenderness",
          "Rare: transient numbness or tingling that resolves on its own",
        ],
        aftercare: [
          "Use gentle skincare for a few days",
          "Apply SPF 30+ daily",
          "Avoid extreme heat and strenuous exercise for 24–48 hours",
        ],
        resultImage: hifuResult,
      },
      {
        name: "Lip Blushing / Dark Lip Treatment",
        blurb: "Soft, natural colour correction for lips.",
        detail:
          "Semi-permanent pigmentation or brightening protocols restore a healthy, even lip tone and definition for a naturally polished finish.",
        duration: "60–90 min",
        image: "/treatments/lip-blushing-dark-lip-treatment.jpg",
        sessions: "1–2 sessions plus a touch-up; semi-permanent results",
        benefits: [
          "Corrects dark or uneven lip tone",
          "Adds soft, natural-looking colour and definition",
          "Semi-permanent, low-maintenance result",
        ],
        idealFor: [
          "Naturally dark, pigmented or uneven-toned lips",
          "Anyone wanting subtle, long-lasting lip definition",
        ],
        sideEffects: [
          "Swelling, tenderness or mild peeling as pigment settles",
          "Temporary colour intensity before it softens to the final shade",
          "Rare: cold sore reactivation in predisposed patients",
        ],
        aftercare: [
          "Keep lips moisturised with the recommended balm",
          "Avoid spicy food, hot drinks and excessive lip movement for a few days",
          "Avoid sun exposure and swimming until fully healed",
        ],
        resultImage: lipResult,
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
        sessions: "Course of 4–6 sessions, then maintenance based on response",
        benefits: [
          "Addresses hair thinning based on a proper trichological diagnosis",
          "Combines PRP, mesotherapy, low-level laser and prescription therapy as needed",
          "Tailored to the underlying cause rather than a generic fix",
        ],
        idealFor: [
          "Early to moderate hair thinning or shedding",
          "Patients wanting a diagnosis-first approach before treatment",
        ],
        sideEffects: [
          "Mild scalp tenderness, redness or swelling after PRP/mesotherapy",
          "Rare: temporary shedding before regrowth (a recognised part of the process)",
        ],
        aftercare: [
          "Avoid washing hair for 12–24 hours after PRP/mesotherapy",
          "Avoid strenuous exercise on treatment day",
          "Follow the prescribed home-care routine consistently",
        ],
        resultImage: hairLossResult,
      },
      {
        name: "Stretch Marks & Old Scars",
        blurb: "Texture and tone, visibly improved.",
        detail:
          "Fractional resurfacing and microneedling with growth factors to rebuild dermal architecture and soften striae and old scarring.",
        duration: "45 min",
        image: "/treatments/stretch-marks-and-old-scars.jpg",
        sessions: "4–6 sessions, spaced 4–6 weeks apart",
        benefits: [
          "Rebuilds dermal structure to soften striae and old scarring",
          "Improves texture and tone of the treated area",
          "Combines fractional resurfacing with growth-factor microneedling",
        ],
        idealFor: [
          "Stretch marks (recent or older)",
          "Old surgical, injury or acne scarring",
        ],
        sideEffects: [
          "Redness, swelling or pinpoint bleeding at the treated site",
          "Mild tenderness for a few days",
        ],
        aftercare: [
          "Keep the area clean and moisturised",
          "Avoid sun exposure on the treated area",
          "Avoid tight clothing rubbing the area for a few days",
        ],
        resultImage: stretchMarksResult,
      },
      {
        name: "80K Cavitation — Fat Reduction",
        blurb: "Non-surgical contouring for double chin, abdomen, thighs & arms.",
        detail:
          "Ultrasonic cavitation technology targets localised fat deposits around the double chin, abdomen, thighs and arms, planned alongside realistic, medically sound expectations.",
        duration: "45–60 min",
        image: "/treatments/80k-cavitation-fat-reduction.jpg",
        sessions: "6–8 sessions, spaced weekly",
        benefits: [
          "Non-surgical contouring for double chin, abdomen, thighs and arms",
          "No downtime — return to normal activity immediately",
          "Planned around realistic, medically sound expectations",
        ],
        idealFor: [
          "Localised fat deposits resistant to diet and exercise",
          "Patients seeking a non-surgical contouring option, not a weight-loss substitute",
        ],
        sideEffects: [
          "Mild redness, warmth or tingling in the treated area",
          "Rare: temporary bruising or tenderness",
        ],
        aftercare: [
          "Drink plenty of water to support the body's natural elimination process",
          "Light activity is encouraged between sessions",
          "Maintain a balanced diet to support and extend results",
        ],
        resultImage: cavitationResult,
      },
      {
        name: "PRP / PRF — Body & Knee Joints",
        blurb: "Regenerative therapy beyond the face.",
        detail:
          "Platelet-rich plasma and fibrin concentrates prepared from your own blood, used to support tissue repair and comfort in body areas and knee joints.",
        duration: "45–60 min",
        image: "/treatments/prp-prf-body-and-knee-joints.jpg",
        sessions: "3–4 sessions, spaced 4–6 weeks apart",
        benefits: [
          "Uses your own platelets to support tissue repair",
          "May improve comfort in treated joints",
          "Extends regenerative therapy benefits beyond the face",
        ],
        idealFor: [
          "Patients wanting a regenerative approach for body areas or knee joints",
          "Those who prefer treatments using their own biological material",
        ],
        sideEffects: [
          "Redness, swelling or bruising at injection sites",
          "Mild soreness for a day or two, similar to a minor strain",
        ],
        aftercare: [
          "Rest the treated joint/area for 24 hours",
          "Avoid strenuous exercise for 48 hours",
          "Apply cold compress if advised for swelling",
        ],
        resultImage: kneeJointResult,
      },
      {
        name: "Acne & Acne Scar Treatment",
        blurb: "Clearer skin and refined scar texture.",
        detail:
          "A staged medical approach combining peels, laser, microneedling and topical therapy to calm active breakouts and resurface acne scarring.",
        duration: "40–60 min",
        image: "/treatments/acne-and-acne-scar-treatment.jpg",
        sessions: "Staged course, reviewed monthly based on progress",
        benefits: [
          "Calms active breakouts and reduces future flare-ups",
          "Resurfaces and softens acne scarring over time",
          "Combines peels, laser, microneedling and topical therapy as needed",
        ],
        idealFor: [
          "Active acne or acne-prone skin",
          "Post-acne scarring and pigmentation",
        ],
        sideEffects: [
          "Temporary redness, dryness or peeling",
          "Possible short-term purging before improvement",
          "Rare: irritation if multiple actives are introduced too quickly",
        ],
        aftercare: [
          "Follow the prescribed skincare routine exactly as advised",
          "Avoid picking at active breakouts or healing skin",
          "Apply SPF 30+ daily, especially after laser or peel sessions",
        ],
        resultImage: placeholderResult,
      },
      {
        name: "Warts / Lumps / Spots / Naevi Removal",
        blurb: "Safe, precise removal of unwanted skin growths.",
        detail:
          "Clinical removal of warts, lumps, spots and naevi using the most appropriate energy-based or minor-procedure technique, assessed individually for the safest outcome.",
        duration: "20–40 min",
        image: "/treatments/warts-lumps-spots-naevi-removal.jpg",
        sessions: "Usually 1 session per lesion; some cases need a follow-up",
        benefits: [
          "Safe, precise removal assessed individually per lesion",
          "Minimises scarring risk with the most appropriate technique",
          "Suitable for warts, lumps, spots and naevi",
        ],
        idealFor: [
          "Unwanted, benign skin growths affecting appearance or comfort",
          "Patients who want any new or changing lesion medically assessed first",
        ],
        sideEffects: [
          "Mild redness, scabbing or a small mark during healing",
          "Rare: infection or scarring if aftercare is not followed",
        ],
        aftercare: [
          "Keep the treated area clean and dry",
          "Avoid picking at any scab that forms",
          "Apply SPF once healed to reduce pigment changes",
        ],
        resultImage: wartLumpsResult,
      },
      {
        name: "Ear & Nose Piercing",
        blurb: "Hygienic, precise piercing for adults and children.",
        detail:
          "Performed in a sterile clinical setting with precision placement and aftercare guidance, suitable for both adults and children.",
        duration: "15–20 min",
        image: "/treatments/ear-and-nose-piercing.jpg",
        sessions: "Single visit, with a follow-up check if needed",
        benefits: [
          "Performed in a sterile clinical setting with precision placement",
          "Suitable for both adults and children",
          "Includes clear aftercare guidance to reduce complications",
        ],
        idealFor: [
          "Adults and children wanting a hygienic, medically supervised piercing",
        ],
        sideEffects: [
          "Mild redness, tenderness or swelling at the site",
          "Rare: infection if aftercare instructions are not followed",
        ],
        aftercare: [
          "Clean the piercing as instructed, usually twice daily",
          "Avoid touching the area with unwashed hands",
          "Avoid swimming pools and sea water until fully healed",
        ],
        resultImage: earPiercingResult,
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

export const doctorProfile = {
  heading: "Meet Your Physician",
  name: "Dr. H.M.T. Apeksha Herath, MBBS",
  title: "Consultant Aesthetic Physician & Cosmetic Dermatology Practitioner",
  paragraphs: [
    "Dr. Apeksha Herath combines evidence-based medicine with advanced aesthetic training to deliver natural, balanced, and patient-focused results. A medical graduate of the University of Peradeniya, she believes every patient deserves a personalised treatment plan built on facial anatomy, skin biology, and long-term skin health — never a one-size-fits-all procedure.",
    "Her expertise is continually refined through specialised training in cosmetic dermatology, facial injectables, laser medicine, and non-surgical facial rejuvenation, so every treatment at Glow Skin Clinic reflects current evidence and modern technique.",
  ],
  closing:
    "Her goal is simple: to help every patient feel more confident through safe, ethical, medically guided aesthetic care.",
};

export const professionalPhilosophy = {
  eyebrow: "Professional Philosophy",
  description:
    "Instead of chasing cosmetic trends, Dr. Herath believes aesthetic medicine should enhance confidence while preserving individuality. Every treatment begins with a detailed consultation, medical assessment, and discussion of realistic expectations. Safety, ethics, and long-term skin health remain at the centre of every recommendation.",
};

export const whyChoose = [
  "Fully qualified MBBS medical doctor",
  "University of Peradeniya graduate",
  "Fellowship-trained in Aesthetic Medicine (FCAM)",
  "Advanced Facial Injectable Certification (MAFI)",
  "Evidence-based treatment planning",
  "Focus on natural-looking enhancements",
  "Individualised treatment plans",
  "Commitment to patient safety and ethical practice",
  "Continuous professional education",
  "Modern laser and injectable techniques",
];

export type Qualification = {
  category: string;
  title: string;
  institution: string;
  description: string;
};

export const qualifications: Qualification[] = [
  {
    category: "Medical Qualifications",
    title: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    institution: "University of Peradeniya, Sri Lanka",
    description:
      "Graduated from one of Sri Lanka's leading medical faculties, building a strong clinical foundation in medicine, surgery, dermatology, and patient care.",
  },
  {
    category: "Specialist Training",
    title: "Fellowship in Cosmetology & Aesthetic Medicine (FCAM)",
    institution: "",
    description:
      "Completed advanced fellowship training focused on evidence-based aesthetic medicine, facial rejuvenation, skin ageing, injectables, laser therapies, and non-surgical cosmetic procedures.",
  },
  {
    category: "Advanced Injectable Medicine",
    title: "Masters Course in Advanced Facial Injectables (MAFI)",
    institution: "",
    description:
      "Comprehensive hands-on training in advanced facial anatomy, dermal fillers, botulinum toxin treatments, facial balancing, and complication management.",
  },
  {
    category: "Clinical Injectable Training",
    title: "Advanced Clinical & Injectable Training",
    institution: "",
    description:
      "Completed intensive practical training in modern injectable procedures under experienced aesthetic physicians, focusing on safe techniques, facial assessment, and natural-looking outcomes.",
  },
];

export const milestones = [
  {
    year: "2012",
    title: "Bachelor of Medicine & Bachelor of Surgery (MBBS)",
    description:
      "Dr. Herath's medical career began at the University of Peradeniya, one of Sri Lanka's oldest and most respected medical faculties. Over the course of her degree she trained across internal medicine, surgery, dermatology, pharmacology and patient care, sitting clinical rotations in public and private hospitals across the country. This foundation gave her a rigorous, evidence-based approach to diagnosis and treatment planning — a discipline she carries into every aesthetic consultation, where medical assessment always comes before any procedure is recommended. It is this grounding in general medicine, rather than a purely cosmetic background, that shapes her cautious, safety-first philosophy today.",
    image: "/doctor/mbbs-degree-certificate.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    year: "Training",
    title: "Advanced Clinical & Injectable Training",
    description:
      "Following her medical degree, Dr. Herath undertook an extended period of hands-on clinical training alongside a team of experienced aesthetic physicians. This apprenticeship-style training focused on live-patient injection technique, facial assessment under supervision, sterile procedure protocols, and — critically — how to recognise and manage complications before they become serious. Working directly under senior practitioners allowed her to build the kind of practical judgement that cannot be taught from a textbook: reading individual facial anatomy, adjusting technique in real time, and understanding when a patient is not a suitable candidate for a given treatment.",
    image: "/doctor/clinical-training-batch.jpg",
    aspect: "aspect-video",
  },
  {
    year: "2024",
    title: "Fellowship in Cosmetology & Aesthetic Medicine (FCAM)",
    description:
      "The Fellowship in Cosmetology & Aesthetic Medicine is a structured postgraduate programme covering the full breadth of modern aesthetic practice — cosmetic dermatology, facial rejuvenation, chemical peels, microneedling, laser and light-based therapies, and non-surgical body contouring. The curriculum combines academic study with supervised clinical practice, culminating in assessed casework. Dr. Herath completed the fellowship with distinction, deepening her understanding of skin physiology, the ageing process, and how to sequence treatments over time for results that look natural rather than artificial.",
    image: "/doctor/fcam-fellowship-diploma.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    year: "2024",
    title: "Receiving the FCAM Certification",
    description:
      "Dr. Herath was formally presented with her Fellowship in Cosmetology & Aesthetic Medicine certificate by the institute's faculty, marking the completion of her postgraduate fellowship. The certification is recognised as a benchmark of advanced competency in aesthetic medicine, requiring not only theoretical examination but demonstrated clinical skill across a range of real patient cases — reflecting a standard of training well beyond a short weekend course.",
    image: "/doctor/fcam-certificate-presentation.jpg",
    aspect: "aspect-video",
  },
  {
    year: "2025",
    title: "Masters Course in Advanced Facial Injectables (MAFI)",
    description:
      "The Masters Course in Advanced Facial Injectables is an intensive, hands-on programme focused on the finer points of injectable medicine: detailed facial anatomy including vascular danger zones, advanced dermal filler and botulinum toxin techniques, whole-face harmonisation planning, and complication prevention and management. This training equips Dr. Herath to plan injectable treatments holistically — considering how the eyes, cheeks, lips, jawline and chin work together — rather than treating each area in isolation, and to respond quickly and correctly should a rare complication arise.",
    image: "/doctor/mafi-masters-certificate.jpg",
    aspect: "aspect-[3/4]",
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
};

export const galleryImages: GalleryImage[] = [
  { src: galeryImg1, alt: "Glow Skin Clinic gallery image 1" },
  { src: galeryImg2, alt: "Glow Skin Clinic gallery image 2" },
  { src: galeryImg3, alt: "Glow Skin Clinic gallery image 3" },
  { src: galeryImg4, alt: "Glow Skin Clinic gallery image 4" },
  { src: galeryImg5, alt: "Glow Skin Clinic gallery image 5" },
  { src: galeryImg6, alt: "Glow Skin Clinic gallery image 6" },
  { src: galeryImg7, alt: "Glow Skin Clinic gallery image 7" },
  { src: galeryImg8, alt: "Glow Skin Clinic gallery image 8" },
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
      "Laser technology has transformed modern dermatology, making it possible to treat concerns such as pigmentation, acne scars, unwanted hair, vascular lesions, wrinkles, and uneven skin texture with greater precision than ever before. However, choosing the right laser treatment is not as simple as selecting the newest machine or the most popular procedure.",
      "Different lasers work in different ways, and the ideal treatment depends on your individual skin characteristics, medical history, and treatment goals. A personalised medical assessment is essential to ensure both safety and the best possible results.",
      "## How Do Laser Treatments Work?",
      "Laser stands for Light Amplification by Stimulated Emission of Radiation. Medical lasers emit concentrated light at specific wavelengths, targeting particular structures in the skin known as chromophores — including melanin (pigment), hemoglobin (blood vessels), and water within skin tissue.",
      "Depending on the wavelength and settings used, laser energy can remove excess pigmentation, stimulate collagen production, improve skin texture, reduce acne scars, treat visible blood vessels, remove unwanted hair, and reduce signs of photoageing. Each laser has a specific purpose, which is why there is no single laser suitable for every skin concern.",
      "## Why One Laser Does Not Fit Everyone",
      "Many patients ask, \"Which laser is the best?\" The better question is: \"Which laser is best for my skin?\" Several factors influence treatment selection.",
      "**Skin Type** — Darker skin tones contain more melanin, increasing the risk of complications such as post-inflammatory hyperpigmentation if inappropriate laser settings are used. Dermatologists commonly assess skin type using the Fitzpatrick Skin Type Classification, which helps guide safe treatment selection.",
      "**Primary Skin Concern** — Different concerns require different approaches, from acne scars and fine lines to melasma, rosacea, enlarged pores and unwanted facial hair. A laser designed for hair removal will not effectively treat acne scars, and vice versa.",
      "**Medical History** — Your doctor will ask about previous laser treatments, current medications, pregnancy or breastfeeding, recent isotretinoin use, a history of cold sores, keloid scarring, autoimmune conditions, and recent tanning or excessive sun exposure. These factors may affect treatment timing or suitability.",
      "## Common Types of Laser Treatments",
      "Although every clinic offers different technologies, most laser treatments fall into several categories.",
      "**Pigment Lasers** target excess melanin and are commonly used for sunspots, freckles, age spots and some tattoo pigments. Results often require multiple sessions depending on pigment depth.",
      "**Fractional Lasers** create microscopic treatment zones while leaving surrounding skin intact, encouraging natural healing. Common indications include acne scars, surgical scars, fine wrinkles, uneven texture and enlarged pores, with collagen remodelling continuing for several months after treatment.",
      "**Hair Removal Lasers** selectively damage hair follicles during the active growth phase. Because hair grows in cycles, multiple treatment sessions are usually required to achieve long-term hair reduction.",
      "**Vascular Lasers** target abnormal blood vessels and may help improve facial redness, spider veins, rosacea and certain birthmarks.",
      "## Is Laser Treatment Painful?",
      "Most patients describe laser treatments as causing mild discomfort rather than severe pain. The sensation varies depending on treatment area, laser type, energy settings and individual pain tolerance. Cooling systems or topical anaesthetic creams are often used to improve comfort.",
      "## How Many Sessions Will I Need?",
      "Laser treatment is usually a course rather than a single appointment. The number of sessions depends on the condition being treated, its severity, and how your skin responds. For many concerns, improvement occurs gradually as collagen remodelling and skin renewal continue over weeks to months.",
      "## Possible Side Effects",
      "Laser treatments performed by trained medical professionals are generally safe, but temporary side effects may include redness, mild swelling, dryness, temporary darkening of pigmented spots and mild peeling. Less common complications include infection, prolonged pigmentation changes, blistering or scarring, particularly if aftercare instructions are not followed.",
      "## Preparing for Your Appointment",
      "Your dermatologist may recommend avoiding excessive sun exposure for several weeks beforehand, wearing sunscreen daily, discontinuing certain skincare products such as retinoids if advised, informing your doctor about all medications and supplements, and avoiding tanning beds. Always follow the individualised instructions provided during your consultation.",
      "## The Importance of a Medical Consultation",
      "A thorough consultation helps ensure treatment is both safe and effective. During your assessment, your dermatologist evaluates skin type, pigmentation, texture, medical history, current skincare routine, lifestyle factors, expected recovery time and treatment goals. Sometimes laser treatment is combined with other therapies to achieve better overall results.",
      "## Final Thoughts",
      "Laser treatments have become valuable tools in modern dermatology, but successful outcomes depend on selecting the appropriate treatment for the right patient. At Glow Skin Clinic, every laser treatment begins with a comprehensive medical consultation so that recommendations are based on your skin — not on trends or one-size-fits-all solutions.",
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
      "Healthy, youthful-looking skin is influenced by many factors including genetics, sun exposure, lifestyle, hormones, and the natural ageing process. As collagen production gradually decreases with age, the skin may begin to show fine lines, uneven texture, enlarged pores, pigmentation changes, and reduced firmness.",
      "Skin rejuvenation treatments aim to improve overall skin quality by stimulating natural repair processes rather than creating dramatic overnight changes. Understanding what happens during your first appointment can help you feel informed and confident before beginning treatment.",
      "## What Is Skin Rejuvenation?",
      "Skin rejuvenation refers to a range of medical and cosmetic procedures designed to improve skin tone, texture, elasticity, hydration, fine lines, pigmentation, acne scars and overall skin health. Treatment recommendations vary depending on each patient's skin condition and goals.",
      "## Your Consultation Comes First",
      "Your first visit is usually longer than future appointments because it focuses on assessment and treatment planning. Your dermatologist will evaluate your medical history, current skincare products, previous treatments, allergies, sun exposure habits, lifestyle, medications and pregnancy status when relevant. Your skin is then examined under appropriate lighting to assess pigmentation, oil production, hydration, texture and signs of ageing.",
      "## Setting Realistic Expectations",
      "Many patients expect immediate transformation after one treatment. In reality, skin rejuvenation is a gradual process. Collagen remodelling takes time, and depending on the procedure, visible improvement may continue for several weeks or months after treatment. Long-term improvement is usually achieved through a planned treatment course combined with good skincare and sun protection.",
      "## Your First Treatment",
      "Depending on your assessment, your doctor may recommend a gentle introductory treatment to evaluate how your skin responds. The session may include skin cleansing, photography for treatment comparison, topical numbing cream if required, the treatment procedure itself, and cooling and soothing products afterward. The exact process depends on the selected treatment.",
      "## What You May Experience Afterwards",
      "Temporary effects are common and generally improve within several days. These may include mild redness, a warm sensation, slight swelling, dryness and tightness. Your doctor will explain what is expected and when to seek medical advice if symptoms are unusual.",
      "## Aftercare Matters",
      "Proper aftercare supports healing and helps reduce complications. Patients are commonly advised to use a gentle cleanser, apply moisturiser regularly, wear broad-spectrum sunscreen SPF 30 or higher every day, avoid excessive heat and direct sun exposure, and avoid picking or exfoliating treated skin until healed. Follow your dermatologist's specific instructions, as recommendations differ between procedures.",
      "## Maintaining Results",
      "Skin rejuvenation is not a one-time event. Healthy skin is maintained through daily sunscreen, consistent skincare, healthy nutrition, adequate sleep, avoiding smoking and regular follow-up appointments. Maintenance treatments may be recommended depending on your skin goals.",
      "## Frequently Asked Questions",
      "**Will I need time off work?** Some treatments have little to no downtime, while others may require several days of recovery.",
      "**Is skin rejuvenation suitable for everyone?** Most healthy adults can benefit from some form of skin rejuvenation, but treatment choice depends on individual assessment, skin type and medical history.",
      "**When will I see results?** Some treatments produce an early improvement in skin brightness, while collagen-stimulating treatments often continue improving over several months.",
      "## Final Thoughts",
      "The first skin rejuvenation session is the beginning of a personalised treatment journey. Rather than aiming for instant change, the focus is on gradually improving skin quality in a safe, evidence-based manner. Working closely with your dermatologist and following recommended aftercare can help you achieve healthier, more resilient skin over time.",
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
      "Whether you are planning laser therapy, skin rejuvenation, chemical peels, or another aesthetic procedure, preparing your skin beforehand can improve comfort, reduce the risk of complications, and support optimal healing.",
      "Although preparation varies depending on the treatment, these five general recommendations are helpful for many patients.",
      "## 1. Protect Your Skin From the Sun",
      "Recent sun exposure increases skin sensitivity and may raise the risk of pigmentation changes after certain procedures. For several weeks before treatment:",
      "- Wear broad-spectrum sunscreen (SPF 30 or higher)",
      "- Wear hats when outdoors",
      "- Avoid tanning beds",
      "- Minimise prolonged direct sun exposure",
      "Sun protection should continue after treatment as well.",
      "## 2. Review Your Skincare Routine",
      "Some skincare ingredients may increase skin sensitivity. Your dermatologist may advise temporarily stopping products containing:",
      "- Retinoids",
      "- Retinol",
      "- Tretinoin",
      "- Strong exfoliating acids (AHAs/BHAs)",
      "- Benzoyl peroxide",
      "Only discontinue products if instructed by your healthcare provider.",
      "## 3. Tell Your Doctor About Your Medical History",
      "A full medical history helps ensure safe treatment. Be sure to mention:",
      "- Current medications",
      "- Pregnancy or breastfeeding",
      "- Allergies",
      "- Cold sore history",
      "- Previous cosmetic procedures",
      "- Recent isotretinoin treatment",
      "- Tendency to develop keloid scars",
      "Providing complete information allows your doctor to tailor your treatment safely.",
      "## 4. Arrive With Clean Skin",
      "On the day of treatment:",
      "- Remove makeup",
      "- Avoid heavy moisturisers if instructed",
      "- Avoid perfume on treatment areas",
      "- Remove sunscreen immediately before treatment if requested",
      "Clean skin helps reduce contamination and allows better treatment accuracy.",
      "## 5. Understand the Procedure",
      "Every treatment has benefits, limitations, risks, and recovery expectations. Before proceeding, ensure you understand:",
      "- Expected results",
      "- Number of sessions required",
      "- Recovery time",
      "- Possible side effects",
      "- Cost of ongoing treatment",
      "- Home care instructions",
      "Don't hesitate to ask questions during your consultation. Informed patients are better prepared to participate in their treatment plan.",
      "## Common Questions Patients Ask",
      "**Can I exercise after treatment?** Depending on the procedure, your doctor may recommend avoiding strenuous exercise for 24–48 hours to reduce irritation and swelling.",
      "**Should I stop my medications?** Never stop prescription medications unless specifically advised by your prescribing doctor or dermatologist.",
      "**Can I wear makeup afterwards?** This depends on the treatment. Some procedures allow makeup the following day, while others require several days of healing.",
      "## Why Preparation Matters",
      "Good preparation helps:",
      "- Reduce irritation",
      "- Support faster healing",
      "- Lower the chance of complications",
      "- Improve treatment consistency",
      "- Enhance overall patient experience",
      "Although preparation cannot guarantee results, it creates the best possible conditions for successful treatment.",
      "## Final Thoughts",
      "Aesthetic treatments work best when they are approached as part of a comprehensive skincare plan rather than isolated procedures. Careful preparation, open communication with your dermatologist, and following aftercare advice all contribute to safe and satisfying outcomes.",
      "At Glow Skin Clinic, every treatment begins with a detailed consultation so that recommendations are based on your skin's unique needs and medical history, helping ensure that your treatment plan is both safe and appropriate.",
    ],
    date: "2025-06-20",
    author: "Dr. Apeksha Herath",
    category: "Clinic Advice",
    image: blog3,
  },
];