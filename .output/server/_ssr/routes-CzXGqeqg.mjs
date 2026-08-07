import { a as __toESM } from "../_runtime.mjs";
import { n as useScroll, t as useTransform } from "../_libs/framer-motion.mjs";
import { _ as require_jsx_runtime, a as Trigger2, g as require_react, i as Root2, n as Header, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { i as beforeAfterCases, l as faqs, r as SectionHeading, v as testimonials, y as treatmentCategories } from "./SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { A as ChevronLeft, F as ArrowRight, a as Stethoscope, c as ShieldCheck, d as Quote, j as ChevronDown, k as ChevronRight, o as Star, s as Sparkles } from "../_libs/lucide-react.mjs";
import { t as ConsultationCTA } from "./ConsultationCTA-CS_bNQT-.mjs";
import { t as DoctorSection } from "./DoctorSection-DWCQzgaB.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { t as ParticleField } from "./ParticleField-CJwk96fg.mjs";
import { t as BeforeAfterSlider } from "./BeforeAfterSlider-CDPyQZTc.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CzXGqeqg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_clinic_default = "/assets/hero-clinic-BjIfD1kp.jpg";
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "relative h-[100svh] min-h-[620px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { y },
				className: "absolute inset-0",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_clinic_default,
					alt: "Luxury treatment room at Glow Skin Clinic",
					width: 1920,
					height: 1280,
					className: "ken-burns h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, oklch(0.28 0.01 65 / 0.55) 0%, oklch(0.28 0.01 65 / 0.38) 45%, oklch(0.988 0.004 95 / 0.92) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, { count: 26 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { opacity: fade },
				className: "relative z-10 flex h-full items-center justify-center px-5 text-center sm:px-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .2,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "text-[11px] tracking-[0.42em] text-pearl/85 uppercase",
							children: "Medical Aesthetic Excellence"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 26
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1.2,
								delay: .4,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mt-6 text-5xl leading-[1.05] text-pearl sm:text-6xl lg:text-7xl",
							children: ["Reveal Your ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: "Natural Glow"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scaleX: 0 },
							animate: { scaleX: 1 },
							transition: {
								duration: 1.4,
								delay: .9,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mx-auto mt-8 h-px w-28 bg-gold-gradient"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 18
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1.1,
								delay: .75,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mx-auto mt-8 max-w-xl text-sm leading-relaxed text-pearl/90 sm:text-base",
							children: "Advanced medical aesthetic treatments by Dr. Apeksha Herath"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 18
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1.1,
								delay: 1,
								ease: [
									.22,
									1,
									.36,
									1
								]
							},
							className: "mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "w-full rounded-full bg-gold-gradient px-9 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-luxe transition-transform duration-500 hover:scale-[1.03] sm:w-auto",
								children: "Book Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/treatments",
								className: "w-full rounded-full border border-pearl/60 px-9 py-4 text-[11px] tracking-[0.26em] text-pearl uppercase backdrop-blur-sm transition-colors duration-500 hover:bg-pearl/15 sm:w-auto",
								children: "Explore Treatments"
							})]
						})
					]
				})
			})
		]
	});
}
function TestimonialCarousel({ items = testimonials }) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		align: "start"
	});
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(0);
	const [scrollSnaps, setScrollSnaps] = (0, import_react.useState)([]);
	const scrollPrev = (0, import_react.useCallback)(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
	const scrollNext = (0, import_react.useCallback)(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
	const scrollTo = (0, import_react.useCallback)((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);
	const onSelect = (0, import_react.useCallback)(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);
	(0, import_react.useEffect)(() => {
		if (!emblaApi) return;
		onSelect();
		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on("select", onSelect);
		emblaApi.on("reInit", onSelect);
	}, [emblaApi, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 flex items-center justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: scrollSnaps.map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => scrollTo(index),
					"aria-label": `Go to slide ${index + 1}`,
					className: `h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-gold" : "w-2 bg-border/80 hover:bg-gold/50"}`
				}, index))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: scrollPrev,
					"aria-label": "Previous testimonial",
					className: "grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-card/80 text-foreground shadow-soft transition-all duration-300 hover:border-gold hover:bg-gold-gradient hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: scrollNext,
					"aria-label": "Next testimonial",
					className: "grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-card/80 text-foreground shadow-soft transition-all duration-300 hover:border-gold hover:bg-gold-gradient hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden cursor-grab active:cursor-grabbing",
			ref: emblaRef,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "-ml-6 flex",
				children: items.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-gold",
								children: Array.from({ length: t.rating }).map((_, s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, s))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-6 w-6 text-gold/30" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 font-[family-name:var(--font-display)] text-lg leading-relaxed text-foreground/90 italic",
							children: [
								"“",
								t.quote,
								"”"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-8 border-t border-border/70 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm text-foreground",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[10px] tracking-[0.22em] text-muted-foreground uppercase",
								children: t.treatment
							})]
						})]
					})
				}, i))
			})
		})]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "faq",
		className: "mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "FAQ",
			title: "Common Questions",
			description: "Answers to what patients most often ask before their first consultation."
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: .1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-14 w-full",
				children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: faq.question,
					className: "border-border/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-6 text-left text-[15px] font-normal hover:no-underline sm:text-base [&>svg]:text-gold",
						children: faq.question
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-6 text-[13px] leading-relaxed text-muted-foreground sm:text-sm",
						children: faq.answer
					})]
				}, faq.question))
			})
		})]
	});
}
var pillars = [
	{
		icon: Stethoscope,
		title: "Physician-Led",
		text: "Every protocol is prescribed and performed by a qualified medical doctor — never delegated."
	},
	{
		icon: Sparkles,
		title: "Advanced Technology",
		text: "Pico, HIFU, diode and fractional platforms selected for results and comfort in equal measure."
	},
	{
		icon: ShieldCheck,
		title: "Discreet & Safe",
		text: "Private suites, sterile medical standards and honest counsel on what you truly need."
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-3",
				children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "h-full rounded-2xl border border-border/70 bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-luxe",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.icon, {
								className: "h-6 w-6 text-gold",
								strokeWidth: 1.2
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-2xl",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[13px] leading-relaxed text-muted-foreground",
								children: p.text
							})
						]
					})
				}, p.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorSection, { compact: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50 py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Signature Treatments",
					title: "Four Pillars of Care",
					description: "From regenerative skin therapies to precision laser and refined facial enhancement — each category is built around a full medical assessment."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: treatmentCategories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .08,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/treatments",
							hash: c.slug,
							className: "group block h-full overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-luxe",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.title,
									loading: "lazy",
									width: 1024,
									height: 1024,
									className: "aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-2xl leading-snug",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-[13px] leading-relaxed text-muted-foreground",
										children: c.tagline
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-5 inline-flex items-center gap-2 text-[10px] tracking-[0.24em] text-foreground/70 uppercase transition-colors group-hover:text-gold",
										children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						})
					}, c.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Before & After",
					title: "Quietly Remarkable Results",
					description: "Drag to reveal. Real protocols, documented under identical clinical lighting."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid gap-8 lg:grid-cols-2",
					children: beforeAfterCases.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfterSlider, { ...c })
					}, c.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/gallery",
						className: "inline-flex items-center gap-2 rounded-full border border-gold/60 px-8 py-3.5 text-[11px] tracking-[0.26em] uppercase transition-colors duration-500 hover:bg-secondary",
						children: ["View Full Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50 py-24 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Testimonials",
					title: "Trusted by Discerning Patients"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCarousel, { items: testimonials })
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationCTA, {})
	] });
}
//#endregion
export { Index as component };
