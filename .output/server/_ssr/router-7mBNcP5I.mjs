import { a as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as whatsappLink, n as GoldLine, t as CLINIC, y as treatmentCategories } from "./SectionHeading-Ch6lScgU.mjs";
import { c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$10 } from "../_slug-C__3N1KJ.mjs";
import { C as Facebook, E as Clock, _ as Menu, f as Phone, g as MessageCircleMore, n as X, v as MapPin, x as Instagram, y as Mail } from "../_libs/lucide-react.mjs";
import { t as Route$11 } from "../_slug-CEKm6MzM.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-7mBNcP5I.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B6_9p9iG.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var glow_skin_logo_default = "/assets/glow-skin-logo-BnqPzFRI.png";
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Doctor"
	},
	{
		to: "/treatments",
		label: "Treatments"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const overHero = pathname === "/";
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	const solid = scrolled || !overHero;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? "glass-panel shadow-soft" : "border-b border-transparent bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: glow_skin_logo_default,
						alt: `${CLINIC.name} logo`,
						className: "h-11 w-11 shrink-0 rounded-full object-cover shadow-soft sm:h-12 sm:w-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `block truncate font-[family-name:var(--font-display)] text-xl tracking-[0.16em] uppercase transition-colors sm:text-2xl ${solid ? "text-foreground" : "text-pearl"}`,
							children: CLINIC.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `block truncate text-[10px] tracking-[0.3em] uppercase transition-colors ${solid ? "text-muted-foreground" : "text-pearl/75"}`,
							children: ["by ", CLINIC.doctor]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						activeOptions: { exact: l.to === "/" },
						className: `relative text-[11px] tracking-[0.22em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold-gradient after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100 data-[status=active]:after:origin-left data-[status=active]:after:scale-x-100 ${solid ? "text-foreground/75 hover:text-foreground" : "text-pearl/85 hover:text-pearl"}`,
						children: l.label
					}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						hash: "appointment",
						className: "rounded-full border border-gold/60 px-6 py-2.5 text-[11px] tracking-[0.22em] uppercase transition-all duration-500 hover:bg-gold-gradient hover:text-primary-foreground",
						style: { color: solid ? void 0 : "var(--pearl)" },
						children: "Book"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					className: `shrink-0 lg:hidden ${solid ? "text-foreground" : "text-pearl"}`,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `glass-panel overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1 px-6 pt-2 pb-6",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					activeOptions: { exact: l.to === "/" },
					className: "border-b border-border/60 py-3.5 text-[12px] tracking-[0.22em] text-foreground/80 uppercase last:border-0",
					children: l.label
				}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					hash: "appointment",
					onClick: () => setOpen(false),
					className: "mt-3 inline-flex items-center justify-center rounded-full bg-gold-gradient px-6 py-3.5 text-[11px] tracking-[0.22em] text-primary-foreground uppercase",
					children: "Book"
				})]
			})
		})]
	});
}
var ADMIN_PORTAL_URL = "http://localhost:8081/login";
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 border-t border-border/70 bg-secondary/50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-16 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: glow_skin_logo_default,
								alt: `${CLINIC.name} logo`,
								className: "h-14 w-14 rounded-full object-cover shadow-soft"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-[family-name:var(--font-display)] text-2xl tracking-[0.16em] uppercase",
								children: CLINIC.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-[10px] tracking-[0.3em] text-muted-foreground uppercase",
								children: ["by ", CLINIC.doctor]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 w-16",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldLine, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm leading-relaxed text-muted-foreground",
								children: "Advanced medical aesthetics delivered with precision, discretion and an uncompromising standard of care."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CLINIC.instagram,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									className: "grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-foreground/70 transition-colors hover:bg-gold-gradient hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CLINIC.facebook,
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Facebook",
									className: "grid h-10 w-10 place-items-center rounded-full border border-gold/50 text-foreground/70 transition-colors hover:bg-gold-gradient hover:text-primary-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Treatments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: treatmentCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/treatments",
								hash: c.slug,
								className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
								children: c.title
							}) }, c.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Visit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-4 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CLINIC.address })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CLINIC.hours })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `tel:${CLINIC.phone}`,
										className: "hover:text-foreground",
										children: CLINIC.phoneDisplay
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: `mailto:${CLINIC.email}`,
										className: "break-all hover:text-foreground",
										children: CLINIC.email
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Consultation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 rounded-xl border border-gold/40 bg-card/60 p-5 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-[family-name:var(--font-display)] text-base leading-snug",
									children: "Book a Consultation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-xs leading-relaxed text-muted-foreground",
									children: "Private, one-on-one skin assessment and treatment planning with Dr. Apeksha Herath."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold-gradient px-4 py-2.5 text-[10px] tracking-[0.24em] text-primary-foreground uppercase shadow-soft transition-transform duration-300 hover:scale-[1.02]",
									children: "Schedule Visit"
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col gap-3 border-t border-border/70 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					CLINIC.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tracking-[0.18em] uppercase",
						children: "Medical aesthetics · Kandy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: ADMIN_PORTAL_URL,
						className: "tracking-[0.18em] uppercase text-muted-foreground/80 transition-colors hover:text-foreground",
						children: "Admin Login"
					})]
				})]
			})]
		})
	});
}
function WhatsAppWidget() {
	const message = `Hello ${CLINIC.name}, I would like to book a consultation.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: whatsappLink(message),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat with Glow Skin Clinic on WhatsApp",
		title: "Chat with Glow Skin Clinic on WhatsApp",
		className: "group fixed bottom-5 right-5 z-50 flex items-end gap-3 sm:bottom-6 sm:right-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden rounded-full border border-white/10 bg-charcoal/90 px-4 py-2 text-[11px] tracking-[0.22em] text-pearl/90 uppercase shadow-luxe backdrop-blur-md transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 lg:inline-flex",
			children: "Book on WhatsApp"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_24px_50px_-20px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "whatsapp-ripple absolute inset-0 rounded-full border border-[#25D366]/50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "whatsapp-ripple whatsapp-ripple-delay-1 absolute inset-0 rounded-full border border-[#25D366]/35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "absolute -inset-2.5 rounded-full bg-[#25D366]/25 blur-2xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": true,
					className: "whatsapp-float relative grid h-full w-full place-items-center rounded-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleMore, {
						className: "h-8 w-8 drop-shadow-sm",
						strokeWidth: 1.9
					})
				})
			]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		richColors: true,
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			success: "group-[.toaster]:border-emerald-200 group-[.toaster]:bg-emerald-50 group-[.toaster]:text-emerald-950",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Glow Skin Clinic — Dr. Apeksha Herath" },
			{
				name: "description",
				content: "Luxury medical aesthetic clinic offering advanced skin, laser and anti-aging treatments by Dr. Apeksha Herath."
			},
			{
				name: "author",
				content: "Glow Skin Clinic"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppWidget, {})
		]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-CzXGqeqg.mjs");
var Route$8 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Glow Skin Clinic | Luxury Aesthetic Dermatology in Kandy" },
		{
			name: "description",
			content: "Reveal your natural glow with advanced medical aesthetic treatments by Dr. Apeksha Herath — laser, anti-aging, skin rejuvenation and body care."
		},
		{
			property: "og:title",
			content: "Glow Skin Clinic | Luxury Aesthetic Dermatology"
		},
		{
			property: "og:description",
			content: "Advanced medical aesthetic treatments by Dr. Apeksha Herath in an exclusive Kandy clinic."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./about-Mf0NMb1m.mjs");
var Route$7 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Dr. Apeksha Herath | Aesthetic Physician — Glow Skin Clinic" },
		{
			name: "description",
			content: "Meet Dr. Apeksha Herath — consultant aesthetic physician behind Glow Skin Clinic, with advanced training in dermatology, injectables and laser medicine."
		},
		{
			property: "og:title",
			content: "Dr. Apeksha Herath | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "Advanced training in dermatology, injectables and energy-based devices, practised with restraint."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./contact-UhYlMTTi.mjs");
var Route$6 = createFileRoute("/contact")({
	validateSearch: (search) => ({ treatment: typeof search["treatment"] === "string" ? search["treatment"] : void 0 }),
	head: () => ({ meta: [
		{ title: "Book a Consultation | Glow Skin Clinic, Kandy" },
		{
			name: "description",
			content: "Request a private consultation with Dr. Apeksha Herath. Call, email or book instantly via WhatsApp."
		},
		{
			property: "og:title",
			content: "Book a Consultation | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "Private consultations with Dr. Apeksha Herath in Kandy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-hOPQOkYH.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery | Glow Skin Clinic" },
		{
			name: "description",
			content: "A look inside Glow Skin Clinic — our treatment suites, facilities and a selection of patient results."
		},
		{
			property: "og:title",
			content: "Gallery | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "A look inside Glow Skin Clinic's treatment suites and facilities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./results-BaCtueIJ.mjs");
var Route$4 = createFileRoute("/results")({
	head: () => ({ meta: [
		{ title: "Before & After Gallery | Glow Skin Clinic" },
		{
			name: "description",
			content: "Documented before and after transformations from pigmentation, anti-aging and skin rejuvenation protocols at Glow Skin Clinic."
		},
		{
			property: "og:title",
			content: "Before & After | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "Real patient results from laser, HIFU and regenerative skin protocols."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./testimonials-DWlEzRIH.mjs");
var Route$3 = createFileRoute("/testimonials")({
	head: () => ({ meta: [
		{ title: "Patient Testimonials | Glow Skin Clinic" },
		{
			name: "description",
			content: "Read what patients say about their experience with Dr. Apeksha Herath and the team at Glow Skin Clinic."
		},
		{
			property: "og:title",
			content: "Patient Testimonials | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "Discerning patients on care, comfort and results at Glow Skin Clinic."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./treatments-CXjwHqMc.mjs");
var Route$2 = createFileRoute("/treatments")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./blog-WEYNQZe_.mjs");
var Route$1 = createFileRoute("/blog/")({
	head: () => ({ meta: [
		{ title: "Blog | Glow Skin Clinic" },
		{
			name: "description",
			content: "Skincare insight, treatment guidance and clinic news from Dr. Apeksha Herath and the team."
		},
		{
			property: "og:title",
			content: "Blog | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "Skincare insight and treatment guidance from Glow Skin Clinic."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./treatments-BEWJMzBA.mjs");
var Route = createFileRoute("/treatments/")({
	head: () => ({ meta: [
		{ title: "Treatments | Laser, Anti-Aging & Skin Care — Glow Skin Clinic" },
		{
			name: "description",
			content: "Explore skin rejuvenation, laser therapy, anti-aging enhancement and body treatments prescribed by Dr. Apeksha Herath at Glow Skin Clinic."
		},
		{
			property: "og:title",
			content: "Treatments | Glow Skin Clinic"
		},
		{
			property: "og:description",
			content: "Hydrafacial, Pico laser, PRP, HIFU, fillers and more — medical aesthetics tailored to your skin."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$9
});
var ResultsRoute = Route$4.update({
	id: "/results",
	path: "/results",
	getParentRoute: () => Route$9
});
var TestimonialsRoute = Route$3.update({
	id: "/testimonials",
	path: "/testimonials",
	getParentRoute: () => Route$9
});
var TreatmentsRoute = Route$2.update({
	id: "/treatments",
	path: "/treatments",
	getParentRoute: () => Route$9
});
var BlogIndexRoute = Route$1.update({
	id: "/blog/",
	path: "/blog/",
	getParentRoute: () => Route$9
});
var BlogSlugRoute = Route$10.update({
	id: "/blog/$slug",
	path: "/blog/$slug",
	getParentRoute: () => Route$9
});
var TreatmentsIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => TreatmentsRoute
});
var TreatmentsRouteChildren = {
	TreatmentsSlugRoute: Route$11.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => TreatmentsRoute
	}),
	TreatmentsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	GalleryRoute,
	ResultsRoute,
	TestimonialsRoute,
	TreatmentsRoute: TreatmentsRoute._addFileChildren(TreatmentsRouteChildren),
	BlogSlugRoute,
	BlogIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
