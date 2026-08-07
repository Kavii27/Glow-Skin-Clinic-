import treatment1 from "@/assets/treatment-1.jpg";
import treatment2 from "@/assets/treatment-2.jpg";
import treatment3 from "@/assets/treatment-3.jpg";

export type TreatmentStatus = "active" | "draft";

export type Treatment = {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: number;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  image: string;
  status: TreatmentStatus;
};

export type AppointmentStatus = "confirmed" | "pending" | "completed" | "cancelled";

export type Appointment = {
  id: string;
  patient: string;
  patientEmail: string;
  treatment: string;
  date: string;
  time: string;
  status: AppointmentStatus;
  note: string;
};

export const treatmentCategories = [
  "Facial Aesthetics",
  "Injectables",
  "Laser & Light",
  "Skin Health",
  "Body Contouring",
];

export const initialTreatments: Treatment[] = [
  {
    id: "t-01",
    name: "Signature Glow Facial",
    category: "Facial Aesthetics",
    price: 18500,
    duration: 75,
    shortDescription: "A bespoke resurfacing ritual for luminous, quiet radiance.",
    fullDescription:
      "Our house signature. A layered protocol of enzymatic cleansing, gentle lymphatic work and a cold-infusion serum finish, tailored to your skin on the day of treatment.",
    benefits: ["Immediate luminosity", "Refined texture", "No downtime"],
    image: treatment1,
    status: "active",
  },
  {
    id: "t-02",
    name: "Hydra Renewal Infusion",
    category: "Skin Health",
    price: 24000,
    duration: 60,
    shortDescription: "Deep hydration therapy with hyaluronic micro-infusion.",
    fullDescription:
      "A clinical hydration protocol delivering stabilised hyaluronic acid and peptide complexes into the upper dermis for a plumped, dewy finish that lasts.",
    benefits: ["Plumped skin", "Barrier repair", "Softened fine lines"],
    image: treatment2,
    status: "active",
  },
  {
    id: "t-03",
    name: "Gold Sculpt Lift",
    category: "Body Contouring",
    price: 42000,
    duration: 90,
    shortDescription: "Radiofrequency contouring for a lifted, defined profile.",
    fullDescription:
      "Fractional radiofrequency paired with sculpting massage to tighten the lower face and jawline. A course of three is recommended for a considered result.",
    benefits: ["Visible lift", "Collagen stimulation", "Progressive results"],
    image: treatment3,
    status: "active",
  },
  {
    id: "t-04",
    name: "Clarity Laser Resurfacing",
    category: "Laser & Light",
    price: 36000,
    duration: 55,
    shortDescription: "Fractional laser to soften pigmentation and scarring.",
    fullDescription:
      "Precision fractional laser calibrated by Dr. Apeksha for pigmentation, post-acne scarring and uneven tone, with a guided recovery protocol.",
    benefits: ["Even tone", "Scar softening", "Clinical precision"],
    image: treatment1,
    status: "active",
  },
  {
    id: "t-05",
    name: "Refined Contour Filler",
    category: "Injectables",
    price: 68000,
    duration: 45,
    shortDescription: "Discreet volume restoration with an editorial hand.",
    fullDescription:
      "A conservative injectable approach focused on natural architecture — cheek, chin and temple balance rather than volume for its own sake.",
    benefits: ["Natural balance", "Same-day result", "Reversible"],
    image: treatment3,
    status: "active",
  },
  {
    id: "t-06",
    name: "Midnight Peel Ritual",
    category: "Facial Aesthetics",
    price: 21000,
    duration: 50,
    shortDescription: "An overnight-acting peel for a fresh morning complexion.",
    fullDescription:
      "A gentle evening peel blending lactic and mandelic acids, sealed with a ceramide veil so the skin renews while you sleep.",
    benefits: ["Overnight renewal", "Gentle formulation", "Brightening"],
    image: treatment2,
    status: "draft",
  },
];

export const initialAppointments: Appointment[] = [
  {
    id: "a-01",
    patient: "Nethmi Perera",
    patientEmail: "nethmi.p@email.com",
    treatment: "Signature Glow Facial",
    date: "2026-08-04",
    time: "09:30",
    status: "confirmed",
    note: "Prefers fragrance-free products.",
  },
  {
    id: "a-02",
    patient: "Ayesha Fernando",
    patientEmail: "ayesha.f@email.com",
    treatment: "Hydra Renewal Infusion",
    date: "2026-08-04",
    time: "11:00",
    status: "confirmed",
    note: "Second session of a course of three.",
  },
  {
    id: "a-03",
    patient: "Dilani Jayasuriya",
    patientEmail: "dilani.j@email.com",
    treatment: "Gold Sculpt Lift",
    date: "2026-08-04",
    time: "13:15",
    status: "pending",
    note: "Awaiting consultation notes.",
  },
  {
    id: "a-04",
    patient: "Ruwan Silva",
    patientEmail: "ruwan.s@email.com",
    treatment: "Clarity Laser Resurfacing",
    date: "2026-08-04",
    time: "15:00",
    status: "confirmed",
    note: "Patch test completed last week.",
  },
  {
    id: "a-05",
    patient: "Malsha Weerasinghe",
    patientEmail: "malsha.w@email.com",
    treatment: "Refined Contour Filler",
    date: "2026-08-05",
    time: "10:00",
    status: "pending",
    note: "First visit — full consultation booked.",
  },
  {
    id: "a-06",
    patient: "Sanduni Rathnayake",
    patientEmail: "sanduni.r@email.com",
    treatment: "Signature Glow Facial",
    date: "2026-08-05",
    time: "12:30",
    status: "cancelled",
    note: "Rescheduling requested for September.",
  },
  {
    id: "a-07",
    patient: "Ishara Gunawardena",
    patientEmail: "ishara.g@email.com",
    treatment: "Midnight Peel Ritual",
    date: "2026-08-03",
    time: "16:45",
    status: "completed",
    note: "Follow-up in four weeks.",
  },
  {
    id: "a-08",
    patient: "Tharindu Bandara",
    patientEmail: "tharindu.b@email.com",
    treatment: "Hydra Renewal Infusion",
    date: "2026-08-02",
    time: "09:00",
    status: "completed",
    note: "Excellent tolerance, no reaction.",
  },
  {
    id: "a-09",
    patient: "Hasini Ekanayake",
    patientEmail: "hasini.e@email.com",
    treatment: "Gold Sculpt Lift",
    date: "2026-08-06",
    time: "14:00",
    status: "confirmed",
    note: "Requested late afternoon slots only.",
  },
];

export type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  visits: number;
  lastVisit: string;
  preferred: string;
};

export const patients: Patient[] = [
  {
    id: "p-01",
    name: "Nethmi Perera",
    email: "nethmi.p@email.com",
    phone: "+94 77 214 8830",
    visits: 12,
    lastVisit: "2026-08-04",
    preferred: "Signature Glow Facial",
  },
  {
    id: "p-02",
    name: "Ayesha Fernando",
    email: "ayesha.f@email.com",
    phone: "+94 71 550 2214",
    visits: 8,
    lastVisit: "2026-08-04",
    preferred: "Hydra Renewal Infusion",
  },
  {
    id: "p-03",
    name: "Dilani Jayasuriya",
    email: "dilani.j@email.com",
    phone: "+94 76 908 1122",
    visits: 5,
    lastVisit: "2026-07-22",
    preferred: "Gold Sculpt Lift",
  },
  {
    id: "p-04",
    name: "Ruwan Silva",
    email: "ruwan.s@email.com",
    phone: "+94 70 331 7745",
    visits: 3,
    lastVisit: "2026-07-14",
    preferred: "Clarity Laser Resurfacing",
  },
  {
    id: "p-05",
    name: "Malsha Weerasinghe",
    email: "malsha.w@email.com",
    phone: "+94 77 664 9021",
    visits: 1,
    lastVisit: "2026-06-30",
    preferred: "Refined Contour Filler",
  },
  {
    id: "p-06",
    name: "Ishara Gunawardena",
    email: "ishara.g@email.com",
    phone: "+94 75 128 4460",
    visits: 9,
    lastVisit: "2026-08-03",
    preferred: "Midnight Peel Ritual",
  },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-LK", {
    style: "currency",
    currency: "LKR",
    maximumFractionDigits: 0,
  }).format(value);

export const formatDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
