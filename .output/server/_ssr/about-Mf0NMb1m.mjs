import { a as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as milestones, r as SectionHeading, x as whyChoose } from "./SectionHeading-Ch6lScgU.mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { D as ClipboardCheck, M as BookOpen, N as Award, S as GraduationCap, T as Expand, a as Stethoscope, c as ShieldCheck, i as Syringe, r as UserCheck, s as Sparkles, t as Zap } from "../_libs/lucide-react.mjs";
import { t as DoctorSection } from "./DoctorSection-DWCQzgaB.mjs";
import { n as DialogContent, t as Dialog } from "./dialog-DtqG9M7g.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Mf0NMb1m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	Stethoscope,
	GraduationCap,
	Award,
	Syringe,
	ClipboardCheck,
	Sparkles,
	UserCheck,
	ShieldCheck,
	BookOpen,
	Zap
];
function WhyChooseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Patient Trust",
			title: "Why Patients Choose Dr. Herath",
			description: "A physician-led practice defined by qualification, discipline, and genuine care for every outcome."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-5",
			children: whyChoose.map((item, i) => {
				const Icon = icons[i % icons.length];
				if (!Icon) return null;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group flex h-full flex-col items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold-gradient text-primary-foreground shadow-soft transition-transform duration-500 group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] leading-relaxed font-medium text-foreground/85",
							children: item
						})]
					})
				}, item);
			})
		})]
	});
}
function CredentialsGallery() {
	const [active, setActive] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-secondary/40 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-center",
					children: "The Journey"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-4 text-center font-[family-name:var(--font-display)] text-3xl sm:text-4xl",
					children: "Medical Education to Modern Aesthetic Practice"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-center text-[13px] text-muted-foreground",
					children: "Tap any certificate to view it in full."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 bottom-0 left-6 w-px bg-gold/30 sm:left-1/2 sm:-translate-x-1/2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-16",
						children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative flex flex-col gap-6 pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} sm:items-center`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-1 left-6 -translate-x-1/2 sm:left-1/2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-3.5 w-3.5 rounded-full border-2 border-gold bg-background shadow-soft" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:w-1/2 sm:px-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setActive(m),
											className: `group block w-full overflow-hidden rounded-2xl border border-border/70 bg-card text-left shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-luxe ${i % 2 === 0 ? "sm:ml-auto sm:max-w-sm" : "sm:mr-auto sm:max-w-sm"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: `relative w-full overflow-hidden bg-muted ${m.aspect ?? "aspect-[3/4]"}`,
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: m.image,
														alt: m.title,
														loading: "lazy",
														className: "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute top-3 left-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] tracking-[0.22em] text-pearl uppercase backdrop-blur-sm",
														children: m.year
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-charcoal/30 group-hover:opacity-100",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "flex items-center gap-2 rounded-full bg-background/90 px-4 py-2 text-[10px] tracking-[0.18em] text-foreground uppercase shadow-soft",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { className: "h-3.5 w-3.5" }), "View"]
														})
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "p-4",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "font-[family-name:var(--font-display)] text-sm leading-snug",
													children: m.title
												})
											})]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "sm:w-1/2 sm:px-10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `sm:max-w-md ${i % 2 === 0 ? "sm:mr-auto" : "sm:ml-auto"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[11px] tracking-[0.22em] text-gold uppercase",
													children: m.year
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
													className: "mt-2 font-[family-name:var(--font-display)] text-lg leading-snug text-foreground",
													children: m.title
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-3 text-[13px] leading-relaxed text-muted-foreground",
													children: m.description
												})
											]
										})
									})
								]
							})
						}, m.title))
					})]
				})
			] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!active,
			onOpenChange: (open) => !open && setActive(null),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				className: "max-w-3xl border-none bg-transparent p-0 shadow-none",
				children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-2xl bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: active.image,
						alt: active.title,
						className: "max-h-[85vh] w-full object-contain"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.22em] text-gold uppercase",
							children: active.year
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-1 font-[family-name:var(--font-display)] text-lg leading-snug",
							children: active.title
						})]
					})]
				})
			})
		})]
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "About the Doctor",
			title: "Medical Excellence. Continuous Learning. Trusted Care.",
			description: "A clinical philosophy built on assessment, restraint and results that age well."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctorSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyChooseSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CredentialsGallery, {})
	] });
}
//#endregion
export { AboutPage as component };
