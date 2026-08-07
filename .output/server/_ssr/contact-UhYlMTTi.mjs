import { a as __toESM } from "../_runtime.mjs";
import { _ as require_jsx_runtime, g as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as whatsappLink, m as mapEmbedUrl, o as clinic_interior_default, p as googleMapsUrl, r as SectionHeading, t as CLINIC, y as treatmentCategories } from "./SectionHeading-Ch6lScgU.mjs";
import { _ as useSearch } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Reveal } from "./Reveal-DqvvsA3G.mjs";
import { E as Clock, O as CircleCheck, b as LoaderCircle, f as Phone, h as MessageCircle, p as Navigation, u as Send, v as MapPin, w as ExternalLink, y as Mail } from "../_libs/lucide-react.mjs";
import { t as ParticleField } from "./ParticleField-CJwk96fg.mjs";
import { t as PageHeader } from "./PageHeader-CK7BxbWJ.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
import { t as APPOINTMENT_SLOTS } from "./appointment-slots-DiwGfV1N.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-hURwVI_C.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-UhYlMTTi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getBookedSlots = createServerFn({ method: "GET" }).validator((data) => data).handler(createSsrRpc("b5c81c0194427fc006fb62e4d5e31e4e456d48c90b84cbb5f8c7a0ac9050a575"));
var bookAppointment = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("66b64440c189ce50244b0879ffec532f08b57bdd13aa7ec11622d9baabdd6209"));
var allTreatments = treatmentCategories.flatMap((c) => c.treatments.map((t) => t.name));
var todayIso = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
function AppointmentSection() {
	const search = useSearch({ strict: false });
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		email: "",
		treatment: "",
		date: "",
		slot: "",
		message: ""
	});
	const [bookedSlots, setBookedSlots] = (0, import_react.useState)([]);
	const [loadingSlots, setLoadingSlots] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (search.treatment && allTreatments.includes(search.treatment)) setForm((f) => ({
			...f,
			treatment: search.treatment ?? ""
		}));
	}, [search.treatment]);
	(0, import_react.useEffect)(() => {
		if (!form.date) {
			setBookedSlots([]);
			return;
		}
		let cancelled = false;
		setLoadingSlots(true);
		getBookedSlots({ data: { date: form.date } }).then((slots) => {
			if (!cancelled) setBookedSlots(slots);
		}).catch(() => {
			if (!cancelled) setBookedSlots([]);
		}).finally(() => {
			if (!cancelled) setLoadingSlots(false);
		});
		return () => {
			cancelled = true;
		};
	}, [form.date]);
	(0, import_react.useEffect)(() => {
		if (form.slot && bookedSlots.includes(form.slot)) setForm((f) => ({
			...f,
			slot: ""
		}));
	}, [bookedSlots]);
	const set = (key) => (e) => setForm((f) => ({
		...f,
		[key]: e.target.value
	}));
	const availableSlots = (0, import_react.useMemo)(() => APPOINTMENT_SLOTS.map((s) => ({
		...s,
		taken: bookedSlots.includes(s.id)
	})), [bookedSlots]);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (!form.date) {
			toast.error("Please select a preferred date.");
			return;
		}
		if (!form.slot) {
			toast.error("Please select a time slot.");
			return;
		}
		setSubmitting(true);
		try {
			const result = await bookAppointment({ data: {
				name: form.name,
				phone: form.phone,
				email: form.email,
				treatment: form.treatment,
				message: form.message,
				date: form.date,
				slot: form.slot
			} });
			if (!result.ok) {
				toast.error(result.error);
				const refreshed = await getBookedSlots({ data: { date: form.date } });
				setBookedSlots(refreshed);
				return;
			}
			setSubmitted(true);
			toast.success("Consultation request received", { description: `Thank you, ${form.name.split(" ")[0] || "there"}. Our team has received your request and will review it soon.` });
			setForm({
				name: "",
				phone: "",
				email: "",
				treatment: "",
				date: "",
				slot: "",
				message: ""
			});
			setBookedSlots([]);
		} catch {
			toast.error("Something went wrong submitting your request. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	const waMessage = `Hello ${CLINIC.name}, I would like to book a consultation with ${CLINIC.doctor}.`;
	const fieldClass = "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-gold disabled:cursor-not-allowed disabled:opacity-60";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "appointment",
		className: "relative overflow-hidden bg-secondary/50 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, { count: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-5xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Appointments",
				title: "Begin Your Consultation",
				description: "Share a few details and our patient coordinator will contact you to arrange a private consultation with Dr. Apeksha Herath. Clinic hours are 9:00 AM – 7:00 PM."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .15,
				children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 flex flex-col items-center rounded-2xl border border-gold/40 bg-card p-10 text-center shadow-luxe sm:p-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-16 w-16 place-items-center rounded-full bg-gold-gradient text-primary-foreground shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-6 text-2xl",
							children: "Request Submitted"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-md text-[14px] leading-relaxed text-muted-foreground",
							children: "Thank you — your consultation request has been received. Our patient coordinator will call you shortly to confirm your appointment."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSubmitted(false),
							className: "mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-3.5 text-[11px] tracking-[0.26em] uppercase transition-colors duration-500 hover:bg-secondary",
							children: "Book Another Appointment"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					className: "mt-14 rounded-2xl border border-border/70 bg-card p-7 shadow-luxe sm:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "name",
								className: "eyebrow",
								children: "Full Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "name",
								required: true,
								value: form.name,
								onChange: set("name"),
								placeholder: "Your name",
								className: `mt-3 ${fieldClass}`
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "phone",
								className: "eyebrow",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "phone",
								required: true,
								type: "tel",
								value: form.phone,
								onChange: set("phone"),
								placeholder: "+94 7X XXX XXXX",
								className: `mt-3 ${fieldClass}`
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "email",
								className: "eyebrow",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								type: "email",
								value: form.email,
								onChange: set("email"),
								placeholder: "you@email.com",
								className: `mt-3 ${fieldClass}`
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "date",
								className: "eyebrow",
								children: "Preferred Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "date",
								required: true,
								type: "date",
								min: todayIso(),
								value: form.date,
								onChange: set("date"),
								className: `mt-3 ${fieldClass}`
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "eyebrow",
										children: "Preferred Time Slot"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[11px] text-muted-foreground",
										children: "Clinic hours: 9:00 AM – 7:00 PM · 2-hour appointment slots"
									}),
									!form.date ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 rounded-lg border border-dashed border-border px-4 py-3 text-[12px] text-muted-foreground",
										children: "Select a preferred date above to see available time slots."
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 flex flex-wrap gap-3",
										children: availableSlots.map((s) => {
											const selected = form.slot === s.id;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												disabled: s.taken || loadingSlots,
												onClick: () => setForm((f) => ({
													...f,
													slot: s.id
												})),
												"aria-pressed": selected,
												title: s.label,
												className: `flex min-w-21 flex-col items-center gap-1 rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ${s.taken ? "cursor-not-allowed border-border/60 bg-muted text-muted-foreground/45" : selected ? "border-gold bg-gold-gradient text-primary-foreground shadow-soft" : "border-border bg-background text-foreground hover:border-gold/60"}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.label })
											}, s.id);
										})
									}),
									loadingSlots && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 flex items-center gap-2 text-[11px] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), " Checking availability…"]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "treatment",
									className: "eyebrow",
									children: "Treatment of Interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									id: "treatment",
									value: form.treatment,
									onChange: set("treatment"),
									className: `mt-3 ${fieldClass}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Not sure yet — please advise"
									}), allTreatments.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t,
										children: t
									}, t))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sm:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "eyebrow",
									children: "Your Concern"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									rows: 4,
									value: form.message,
									onChange: set("message"),
									placeholder: "Tell us briefly what you would like to address.",
									className: `mt-3 resize-none ${fieldClass}`
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-9 flex flex-col gap-4 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: submitting,
							className: "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
							children: [submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-3.5 w-3.5" }), submitting ? "Submitting…" : "Request Consultation"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink(waMessage),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/60 px-8 py-4 text-[11px] tracking-[0.26em] text-foreground uppercase transition-colors duration-500 hover:bg-secondary sm:w-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5 text-gold" }), "Book via WhatsApp"]
						})]
					})]
				})
			})]
		})]
	});
}
var details = [
	{
		icon: MapPin,
		label: "Clinic",
		value: CLINIC.address
	},
	{
		icon: Clock,
		label: "Hours",
		value: CLINIC.hours
	},
	{
		icon: Phone,
		label: "Telephone",
		value: CLINIC.phoneDisplay,
		href: `tel:${CLINIC.phone}`
	},
	{
		icon: Mail,
		label: "Email",
		value: CLINIC.email,
		href: `mailto:${CLINIC.email}`
	}
];
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			eyebrow: "Contact",
			title: "Visit the Clinic",
			description: "A private suite in Kandy, by appointment only."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "group overflow-hidden rounded-2xl shadow-luxe",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: clinic_interior_default,
						alt: "Glow Skin Clinic reception",
						loading: "lazy",
						width: 1536,
						height: 1024,
						className: "aspect-4/3 w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .12,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-8",
						children: details.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/50",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.icon, {
									className: "h-4 w-4 text-gold",
									strokeWidth: 1.4
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "eyebrow",
									children: d.label
								}), d.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: d.href,
									className: "mt-2 block text-[15px] break-words text-foreground transition-colors hover:text-gold",
									children: d.value
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-[15px] leading-relaxed text-foreground",
									children: d.value
								})]
							})]
						}, d.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappLink(`Hello ${CLINIC.name}, I would like to enquire about a treatment.`),
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full bg-gold-gradient px-8 py-4 text-[11px] tracking-[0.26em] text-primary-foreground uppercase shadow-soft transition-transform duration-500 hover:scale-[1.03]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-3.5 w-3.5" }), "Message on WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: googleMapsUrl,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex items-center gap-2 rounded-full border border-gold/50 bg-background/50 px-6 py-4 text-[11px] tracking-[0.2em] text-foreground uppercase backdrop-blur-sm transition-colors hover:border-gold hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-3.5 w-3.5 text-gold" }), "Get Directions"]
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-2xl border border-border/70 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					title: `${CLINIC.name} location`,
					src: mapEmbedUrl,
					width: "100%",
					height: "450",
					style: { border: 0 },
					loading: "lazy",
					referrerPolicy: "no-referrer-when-downgrade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-4 right-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: googleMapsUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full bg-card/90 px-4 py-2.5 text-xs font-medium text-foreground backdrop-blur-md shadow-md border border-border/80 transition-colors hover:border-gold hover:text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-3.5 w-3.5 text-gold" }), "View on Google Maps"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: googleMapsUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex items-center gap-1.5 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-medium text-primary-foreground shadow-md transition-transform hover:scale-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navigation, { className: "h-3.5 w-3.5" }), "Get Directions"]
					})]
				})]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppointmentSection, {})
	] });
}
//#endregion
export { ContactPage as component };
