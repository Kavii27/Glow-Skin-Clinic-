import { _ as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as slugify, b as whatsappLink, d as findTreatmentBySlug, n as GoldLine, t as CLINIC } from "./_ssr/SectionHeading-Ch6lScgU.mjs";
import { g as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./_ssr/Reveal-DqvvsA3G.mjs";
import { E as Clock, I as ArrowLeft, O as CircleCheck, P as ArrowUpRight, h as MessageCircle, l as ShieldAlert, r as UserCheck, s as Sparkles } from "./_libs/lucide-react.mjs";
import { t as Route } from "./_slug-CEKm6MzM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-CbIUzn1T.js
var import_jsx_runtime = require_jsx_runtime();
function TreatmentDetailPage() {
	const { slug } = Route.useParams();
	const found = findTreatmentBySlug(slug);
	if (!found) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative mx-auto max-w-2xl px-5 pt-44 pb-28 text-center sm:px-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Not Found"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl sm:text-5xl",
				children: "We couldn't find that treatment"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-[15px] leading-relaxed text-muted-foreground",
				children: "The treatment you're looking for may have been renamed or moved."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/treatments",
				className: "mt-9 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), "Back to Treatments"]
			})
		]
	});
	const { treatment, category } = found;
	const related = category.treatments.filter((t) => t.name !== treatment.name).slice(0, 3);
	const waMessage = `Hello ${CLINIC.name}, I would like to book "${treatment.name}" with ${CLINIC.doctor}.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden pt-28 sm:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/9]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: treatment.image,
				alt: treatment.name,
				className: "h-full w-full object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-charcoal/70 via-charcoal/10 to-transparent" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-4xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "-mt-20 rounded-2xl border border-border/70 bg-card p-7 shadow-luxe sm:-mt-24 sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/treatments",
							hash: category.slug,
							className: "inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-muted-foreground uppercase transition-colors hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-3.5 w-3.5" }), category.title]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-5 text-3xl leading-tight sm:text-5xl",
							children: treatment.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 w-16",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLine, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground",
							children: treatment.detail
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex items-center gap-2 text-[11px] tracking-[0.2em] text-muted-foreground uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3.5 w-3.5 text-gold" }), treatment.duration]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-col gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								hash: "appointment",
								search: { treatment: treatment.name },
								className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.02] sm:w-auto",
								children: ["Book This Treatment", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappLink(waMessage),
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-[11px] tracking-[0.26em] text-foreground uppercase transition-colors duration-500 hover:bg-secondary sm:w-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-gold" }), "Ask on WhatsApp"]
							})]
						})
					]
				}) }),
				(treatment.benefits || treatment.idealFor) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 grid gap-5 sm:grid-cols-2",
						children: [treatment.benefits && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Key Benefits"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: treatment.benefits.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})]
						}), treatment.idealFor && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Ideal For"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: treatment.idealFor.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})]
						})]
					})
				}),
				treatment.sessions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .08,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-3 rounded-2xl border border-gold/30 bg-secondary/60 px-7 py-5 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[14px] leading-relaxed text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "Recommended course: "
							}), treatment.sessions]
						})]
					})
				}),
				treatment.sideEffects && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "h-4 w-4 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: "Possible Side Effects"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-[13px] leading-relaxed text-muted-foreground",
								children: "As with any medical aesthetic procedure, individual responses vary. These effects are typically mild and temporary when the treatment is performed and followed up correctly."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 space-y-3",
								children: treatment.sideEffects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							})
						]
					})
				}),
				treatment.aftercare && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .12,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 rounded-2xl border border-border/70 bg-card p-7 shadow-soft sm:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Aftercare Guidance"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-3",
								children: treatment.aftercare.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-[14px] leading-relaxed text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
								}, item))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-[12px] leading-relaxed text-muted-foreground italic",
								children: "General guidance only — always follow the specific aftercare instructions given to you by Dr. Apeksha Herath after your consultation."
							})
						]
					})
				}),
				treatment.resultImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Before & After"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-[family-name:var(--font-display)] text-2xl leading-snug sm:text-3xl",
								children: "Real results, medically guided"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground",
								children: "Individual results vary by skin type, concern and the number of sessions completed."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "mt-6 max-w-xl overflow-hidden rounded-2xl border border-border/70 bg-card shadow-luxe",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: treatment.resultImage,
									alt: `${treatment.name} — before and after result`,
									loading: "lazy",
									className: "w-full object-cover"
								})
							})
						]
					})
				}),
				related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .15,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 mb-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: ["Also in ", category.title]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6 grid gap-5 sm:grid-cols-3",
							children: related.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/treatments/$slug",
								params: { slug: slugify(t.name) },
								className: "group flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] w-full overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.image,
										alt: t.name,
										loading: "lazy",
										className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-[family-name:var(--font-display)] text-lg leading-snug",
										children: t.name
									})
								})]
							}, t.name))
						})]
					})
				})
			]
		})]
	});
}
//#endregion
export { TreatmentDetailPage as component };
