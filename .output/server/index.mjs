globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"b7cc-YMUEp6C7Cb+OyzIu/xEeju2GeWk\"",
		"mtime": "2026-08-06T05:15:55.661Z",
		"size": 47052,
		"path": "../public/apple-touch-icon.png"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-08-05T08:53:11.983Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"3693-kOz3RXqZYFsvsxzHyPbfkeJv3KE\"",
		"mtime": "2026-08-06T05:15:44.963Z",
		"size": 13971,
		"path": "../public/favicon.ico"
	},
	"/assets/about-CXRYDcin.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c6c-89b70Gtr0QRUOECX7ceTO1OLLXE\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 7276,
		"path": "../public/assets/about-CXRYDcin.js"
	},
	"/assets/arrow-right-DmyDV27P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-ZIWs/BHzHB1QXPoOsBhFJgjwjUY\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 154,
		"path": "../public/assets/arrow-right-DmyDV27P.js"
	},
	"/assets/arrow-left-BhvlpxRd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-kpleSZCQyA5I57gr4DVk2YHS5bI\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 154,
		"path": "../public/assets/arrow-left-BhvlpxRd.js"
	},
	"/assets/arrow-up-right-DE0hXFtl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9c-Ukwkxd8tkAWjssa4Qv8VR2G81YM\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 156,
		"path": "../public/assets/arrow-up-right-DE0hXFtl.js"
	},
	"/assets/anti-aging-before-after-D7AsUEK6.jpg": {
		"type": "image/jpeg",
		"etag": "\"10543-3prNFUA5VcNgYvVR43ohhHntIE0\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 66883,
		"path": "../public/assets/anti-aging-before-after-D7AsUEK6.jpg"
	},
	"/assets/ba-1-after-CvYf9GvN.jpg": {
		"type": "image/jpeg",
		"etag": "\"f48d-d3E+58IprZY038L9AzGxIpHEDx4\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 62605,
		"path": "../public/assets/ba-1-after-CvYf9GvN.jpg"
	},
	"/assets/ba-1-before-Bj3LwtYx.jpg": {
		"type": "image/jpeg",
		"etag": "\"10544-myXs8KFI6C7g0T/0OObiRoxaaXo\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 66884,
		"path": "../public/assets/ba-1-before-Bj3LwtYx.jpg"
	},
	"/assets/BeforeAfterSlider-DF8MZFwy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"966-x4mPIjJQItVYPoxI7l2T/spePcs\"",
		"mtime": "2026-08-07T05:07:53.137Z",
		"size": 2406,
		"path": "../public/assets/BeforeAfterSlider-DF8MZFwy.js"
	},
	"/assets/blog-CRHYmBzK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"755-bIR5vfMuezmdXfE74KxAHwBN+9Q\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 1877,
		"path": "../public/assets/blog-CRHYmBzK.js"
	},
	"/assets/ba-2-before-Du0-BbPP.jpg": {
		"type": "image/jpeg",
		"etag": "\"1b829-RO0u9aMP9hSGehSMQytRr2tsxr8\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 112681,
		"path": "../public/assets/ba-2-before-Du0-BbPP.jpg"
	},
	"/assets/ba-2-after-D9of65hW.jpg": {
		"type": "image/jpeg",
		"etag": "\"1302f-sCC99XH4mDOBufD/ilU5fI27Fek\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 77871,
		"path": "../public/assets/ba-2-after-D9of65hW.jpg"
	},
	"/assets/cat-antiaging-DZx0ryTW.jpg": {
		"type": "image/jpeg",
		"etag": "\"13e63-+VLzytkWfa/tg61LWtDkx4+lgeY\"",
		"mtime": "2026-08-07T05:07:53.152Z",
		"size": 81507,
		"path": "../public/assets/cat-antiaging-DZx0ryTW.jpg"
	},
	"/assets/cat-laser-KDBF2VHo.jpg": {
		"type": "image/jpeg",
		"etag": "\"fee0-8rukDTf9AhFh9VHsKwqOH25rl24\"",
		"mtime": "2026-08-07T05:07:53.153Z",
		"size": 65248,
		"path": "../public/assets/cat-laser-KDBF2VHo.jpg"
	},
	"/assets/cat-body-Bek18wuS.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ae5c-j1U53eNJ1ybOskEHRwFfMIMlz4k\"",
		"mtime": "2026-08-07T05:07:53.153Z",
		"size": 110172,
		"path": "../public/assets/cat-body-Bek18wuS.jpg"
	},
	"/assets/ConsultationCTA-Bn4X0waE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"580-twnzkPafsZvrUHXP2VDz4+AVOyo\"",
		"mtime": "2026-08-07T05:07:53.137Z",
		"size": 1408,
		"path": "../public/assets/ConsultationCTA-Bn4X0waE.js"
	},
	"/assets/cat-rejuvenation-BrMA4Uzu.jpg": {
		"type": "image/jpeg",
		"etag": "\"1177a-7dLv0yUyA9btQqmBWUsVLLPLBOc\"",
		"mtime": "2026-08-07T05:07:53.154Z",
		"size": 71546,
		"path": "../public/assets/cat-rejuvenation-BrMA4Uzu.jpg"
	},
	"/assets/ClientOnly-D63H53Ur.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3576-uKCnO2P71bTikshuxoP1vcxmPzc\"",
		"mtime": "2026-08-07T05:07:53.137Z",
		"size": 13686,
		"path": "../public/assets/ClientOnly-D63H53Ur.js"
	},
	"/assets/blog2-J0FcDHPc.jpeg": {
		"type": "image/jpeg",
		"etag": "\"987d2-s9NBMAx07q0mWbgq2ekAQZkQTxg\"",
		"mtime": "2026-08-07T05:07:53.151Z",
		"size": 624594,
		"path": "../public/assets/blog2-J0FcDHPc.jpeg"
	},
	"/assets/blog1-C-U79qAU.jpeg": {
		"type": "image/jpeg",
		"etag": "\"9f006-pkNng0c3u9O+aqpT41mbwAgTaYI\"",
		"mtime": "2026-08-07T05:07:53.151Z",
		"size": 651270,
		"path": "../public/assets/blog1-C-U79qAU.jpeg"
	},
	"/assets/blog3-CNT75S7g.jpeg": {
		"type": "image/jpeg",
		"etag": "\"9de64-5kFxMvLBDM0ZNJCzQAp4bPCeLxI\"",
		"mtime": "2026-08-07T05:07:53.152Z",
		"size": 646756,
		"path": "../public/assets/blog3-CNT75S7g.jpeg"
	},
	"/assets/contact-RZCS2fyE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"415d-m7pomlnfDK654xgewdxxWT0PbPA\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 16733,
		"path": "../public/assets/contact-RZCS2fyE.js"
	},
	"/assets/dialog-5rQq3JIQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f4e-zeicfwwNcqNgz3Xi+1H3UyTVDz4\"",
		"mtime": "2026-08-07T05:07:53.139Z",
		"size": 28494,
		"path": "../public/assets/dialog-5rQq3JIQ.js"
	},
	"/assets/DoctorSection-D30l4K1f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c36-99i0aYu/VGTTgYXryrBUpWF4x1I\"",
		"mtime": "2026-08-07T05:07:53.137Z",
		"size": 3126,
		"path": "../public/assets/DoctorSection-D30l4K1f.js"
	},
	"/assets/gallery-BA911pZQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7b0-/bXQeYNnqvWfd/iRIgNx/1H92rU\"",
		"mtime": "2026-08-07T05:07:53.141Z",
		"size": 1968,
		"path": "../public/assets/gallery-BA911pZQ.js"
	},
	"/assets/jsx-runtime-B5yqYJvp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2226-XsrmBuwhkbXf60BH0d4803yDfiE\"",
		"mtime": "2026-08-07T05:07:53.142Z",
		"size": 8742,
		"path": "../public/assets/jsx-runtime-B5yqYJvp.js"
	},
	"/assets/link-X-W2wHy-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1146-jY0mJjeh933Q299RFZ6u1j1tNxA\"",
		"mtime": "2026-08-07T05:07:53.142Z",
		"size": 4422,
		"path": "../public/assets/link-X-W2wHy-.js"
	},
	"/assets/matchContext-DDa1aE8u.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27a-pffCcent0Dg02NkOXhrrkqvWhLM\"",
		"mtime": "2026-08-07T05:07:53.143Z",
		"size": 634,
		"path": "../public/assets/matchContext-DDa1aE8u.js"
	},
	"/assets/message-circle-DtqgB3dY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"163-U/BWcXUNOovW1ctIL5RRda1w2f8\"",
		"mtime": "2026-08-07T05:07:53.143Z",
		"size": 355,
		"path": "../public/assets/message-circle-DtqgB3dY.js"
	},
	"/assets/ParticleField-B7fL7r-c.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"29a-I2s9GlADJbbH/yldYr3EpeYJIm0\"",
		"mtime": "2026-08-07T05:07:53.138Z",
		"size": 666,
		"path": "../public/assets/ParticleField-B7fL7r-c.js"
	},
	"/assets/PageHeader-DnevFvom.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"432-Vo953SNPN9IcUmYentFOJfF6XWA\"",
		"mtime": "2026-08-07T05:07:53.138Z",
		"size": 1074,
		"path": "../public/assets/PageHeader-DnevFvom.js"
	},
	"/assets/placeholder-result-L0-Ebwon.jpg": {
		"type": "image/jpeg",
		"etag": "\"54c8-16XNIrxcV3iimsvHhQA+Z8E6EdQ\"",
		"mtime": "2026-08-07T05:07:53.161Z",
		"size": 21704,
		"path": "../public/assets/placeholder-result-L0-Ebwon.jpg"
	},
	"/assets/qss-Bqk2G4CH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1bc-2N+JPG3965eWSB0QcbrDwgkqrgU\"",
		"mtime": "2026-08-07T05:07:53.144Z",
		"size": 444,
		"path": "../public/assets/qss-Bqk2G4CH.js"
	},
	"/assets/results-DVfB4ww4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"464-a6sY6Hw6opY73jmsLnmaWVnNvAo\"",
		"mtime": "2026-08-07T05:07:53.145Z",
		"size": 1124,
		"path": "../public/assets/results-DVfB4ww4.js"
	},
	"/assets/react-dom-DjQW_1RK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"dda-unTAmSURc9O2+D61NrhA5/rItfU\"",
		"mtime": "2026-08-07T05:07:53.144Z",
		"size": 3546,
		"path": "../public/assets/react-dom-DjQW_1RK.js"
	},
	"/assets/Reveal-CtYijhav.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"198-Ko6BDxI7XEIZuRTZ54sW9HQZpVw\"",
		"mtime": "2026-08-07T05:07:53.138Z",
		"size": 408,
		"path": "../public/assets/Reveal-CtYijhav.js"
	},
	"/assets/root-DLTE-HSj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20-vSYConOtSP6ciwr9zKsPixNwWmc\"",
		"mtime": "2026-08-07T05:07:53.145Z",
		"size": 32,
		"path": "../public/assets/root-DLTE-HSj.js"
	},
	"/assets/index-BUQ4g5ix.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"837eb-ZNScNzqNgn7UV3JzfIgoHDjCFWc\"",
		"mtime": "2026-08-07T05:07:53.136Z",
		"size": 538603,
		"path": "../public/assets/index-BUQ4g5ix.js"
	},
	"/assets/routes-CPNzB11l.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cf37-yGO3Lx4SVC3SNSBCFSuTlmfmow8\"",
		"mtime": "2026-08-07T05:07:53.146Z",
		"size": 53047,
		"path": "../public/assets/routes-CPNzB11l.js"
	},
	"/assets/sparkles-FDO8yWOl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1e3-HhAS+Wiq9CvNt8squh5V1kZfHHM\"",
		"mtime": "2026-08-07T05:07:53.147Z",
		"size": 483,
		"path": "../public/assets/sparkles-FDO8yWOl.js"
	},
	"/logo.png": {
		"type": "image/png",
		"etag": "\"24c76a-+3vmHLmbvtAPnCCzSe4RNEH8lbk\"",
		"mtime": "2026-08-07T04:38:43.151Z",
		"size": 2410346,
		"path": "../public/logo.png"
	},
	"/assets/star-C_khXm3n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-v0tDk/9MJubwuEZi5IaxOFhDEsY\"",
		"mtime": "2026-08-07T05:07:53.147Z",
		"size": 461,
		"path": "../public/assets/star-C_khXm3n.js"
	},
	"/assets/clinic-interior-BH-qkZaH.jpg": {
		"type": "image/jpeg",
		"etag": "\"26203a-8n4R1K7ZS95U3+bkctcKHGkEtE8\"",
		"mtime": "2026-08-07T05:07:53.156Z",
		"size": 2498618,
		"path": "../public/assets/clinic-interior-BH-qkZaH.jpg"
	},
	"/assets/treatments-df1VF84d.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-/iE8tcghOrijxqu4U53evyW5vTs\"",
		"mtime": "2026-08-07T05:07:53.148Z",
		"size": 154,
		"path": "../public/assets/treatments-df1VF84d.js"
	},
	"/assets/testimonials-X9rNbSh2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d2-+auw7Tx+jsO88I9CpohHRRTU7TY\"",
		"mtime": "2026-08-07T05:07:53.148Z",
		"size": 1490,
		"path": "../public/assets/testimonials-X9rNbSh2.js"
	},
	"/assets/styles-B6_9p9iG.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"19114-o0Q0wpCYjD2VU2iX18K4nDgV9Lc\"",
		"mtime": "2026-08-07T05:07:53.162Z",
		"size": 102676,
		"path": "../public/assets/styles-B6_9p9iG.css"
	},
	"/assets/treatments-Xru9VCNz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a04-PM/kROqPFc4feXnOnGvTlS7Li3g\"",
		"mtime": "2026-08-07T05:07:53.148Z",
		"size": 2564,
		"path": "../public/assets/treatments-Xru9VCNz.js"
	},
	"/assets/useStore-CKoCbIhc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15ab-NjLdoRkabgoSczuiCazuwyOTHqg\"",
		"mtime": "2026-08-07T05:07:53.148Z",
		"size": 5547,
		"path": "../public/assets/useStore-CKoCbIhc.js"
	},
	"/assets/user-check-CfWhcGS2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e8-tI/TpNxHTCspKc2qlHmnYfhbLRk\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 232,
		"path": "../public/assets/user-check-CfWhcGS2.js"
	},
	"/assets/_slug-CvyYuUPJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cff-g6i/c4B1GgxeYke22rsyeKgdeZc\"",
		"mtime": "2026-08-07T05:07:53.138Z",
		"size": 3327,
		"path": "../public/assets/_slug-CvyYuUPJ.js"
	},
	"/assets/_slug-BNDsSm_4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22b9-qPKNexbMieZughvXvgB20nJpY8I\"",
		"mtime": "2026-08-07T05:07:53.138Z",
		"size": 8889,
		"path": "../public/assets/_slug-BNDsSm_4.js"
	},
	"/assets/utils-c3IwTpAj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"947f-C0Um0619Jh0dx9ck1xX2l64Dqrk\"",
		"mtime": "2026-08-07T05:07:53.149Z",
		"size": 38015,
		"path": "../public/assets/utils-c3IwTpAj.js"
	},
	"/assets/hero-clinic-BjIfD1kp.jpg": {
		"type": "image/jpeg",
		"etag": "\"1fe934-XKB1XPArds8dhS2cFxgkRxdn8rI\"",
		"mtime": "2026-08-07T05:07:53.160Z",
		"size": 2091316,
		"path": "../public/assets/hero-clinic-BjIfD1kp.jpg"
	},
	"/doctor/fcam-certificate-presentation.jpg": {
		"type": "image/jpeg",
		"etag": "\"21fb5-a4NDMubAOdm473Z6jCcDX7Ls3QU\"",
		"mtime": "2026-08-05T08:53:11.989Z",
		"size": 139189,
		"path": "../public/doctor/fcam-certificate-presentation.jpg"
	},
	"/doctor/mafi-masters-certificate.jpg": {
		"type": "image/jpeg",
		"etag": "\"22adb-mCx9wQgbUxzEP/6C8BnhW2r4EUg\"",
		"mtime": "2026-08-05T08:53:12.004Z",
		"size": 142043,
		"path": "../public/doctor/mafi-masters-certificate.jpg"
	},
	"/assets/doctor-portrait-DTZJ6ldA.jpg": {
		"type": "image/jpeg",
		"etag": "\"204bce-qHRfGbWL9DkmscsTg8ZQ20mPIW4\"",
		"mtime": "2026-08-07T05:07:53.157Z",
		"size": 2116558,
		"path": "../public/assets/doctor-portrait-DTZJ6ldA.jpg"
	},
	"/assets/glow-skin-logo-BnqPzFRI.png": {
		"type": "image/png",
		"etag": "\"24c76a-+3vmHLmbvtAPnCCzSe4RNEH8lbk\"",
		"mtime": "2026-08-07T05:07:53.158Z",
		"size": 2410346,
		"path": "../public/assets/glow-skin-logo-BnqPzFRI.png"
	},
	"/doctor/clinical-training-batch.jpg": {
		"type": "image/jpeg",
		"etag": "\"aa6b0-/G/cPXyR+9k66IFXNb4p+nMFfeY\"",
		"mtime": "2026-08-04T06:42:15.210Z",
		"size": 698032,
		"path": "../public/doctor/clinical-training-batch.jpg"
	},
	"/doctor/mbbs-degree-certificate.jpg": {
		"type": "image/jpeg",
		"etag": "\"900f9-EEzYg1001SSMum8RkpOzX+2yaeg\"",
		"mtime": "2026-08-05T08:53:11.998Z",
		"size": 590073,
		"path": "../public/doctor/mbbs-degree-certificate.jpg"
	},
	"/doctor/fcam-fellowship-diploma.jpg": {
		"type": "image/jpeg",
		"etag": "\"a3812-2Zgh7Xp6bHjvuHbsXZ9fpzLL+JA\"",
		"mtime": "2026-08-05T08:53:12.011Z",
		"size": 669714,
		"path": "../public/doctor/fcam-fellowship-diploma.jpg"
	},
	"/treatments/80k-cavitation-fat-reduction.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c626-XrsBSNjCXvWhVQ6hQmhwQDWgFTw\"",
		"mtime": "2026-08-05T08:53:12.242Z",
		"size": 640550,
		"path": "../public/treatments/80k-cavitation-fat-reduction.jpg"
	},
	"/treatments/acne-and-acne-scar-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"a152d-IPjh++ez7pgtzTchEw+CpZrnMTo\"",
		"mtime": "2026-08-05T08:53:12.114Z",
		"size": 660781,
		"path": "../public/treatments/acne-and-acne-scar-treatment.jpg"
	},
	"/treatments/anti-aging-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"eb2a2-aoG7Rm0ygW5bCJ2HaYQZEzq9x1A\"",
		"mtime": "2026-08-05T08:53:12.226Z",
		"size": 963234,
		"path": "../public/treatments/anti-aging-treatment.jpg"
	},
	"/treatments/botox-face-hands-armpits.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c7be-vOvCadOxrhrCXuWmoqQZfqSDj6E\"",
		"mtime": "2026-08-05T08:53:12.030Z",
		"size": 640958,
		"path": "../public/treatments/botox-face-hands-armpits.jpg"
	},
	"/treatments/chemical-peeling.jpg": {
		"type": "image/jpeg",
		"etag": "\"9df98-EtbEIzaVByP0Q59qUXgMuuesN1s\"",
		"mtime": "2026-08-05T08:53:12.072Z",
		"size": 647064,
		"path": "../public/treatments/chemical-peeling.jpg"
	},
	"/treatments/diode-laser.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8ab5-wR+jans+bl+VznNueLhAIswgIXw\"",
		"mtime": "2026-08-05T08:53:12.105Z",
		"size": 690869,
		"path": "../public/treatments/diode-laser.jpg"
	},
	"/treatments/carbon-facial.jpg": {
		"type": "image/jpeg",
		"etag": "\"b4cb7-hCG+v0gjBuWpADiHDYgtd1fKNcQ\"",
		"mtime": "2026-08-05T08:53:12.048Z",
		"size": 740535,
		"path": "../public/treatments/carbon-facial.jpg"
	},
	"/treatments/dry-scaly-and-uneven-skin-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9f9f-+CO6T8d8ng7sa3ewgTfWmwzjVsc\"",
		"mtime": "2026-08-05T08:53:12.252Z",
		"size": 696223,
		"path": "../public/treatments/dry-scaly-and-uneven-skin-treatment.jpg"
	},
	"/treatments/ear-and-nose-piercing.jpg": {
		"type": "image/jpeg",
		"etag": "\"a5535-CrFTbnCAuoXx4nyAuOoRfoYJmW0\"",
		"mtime": "2026-08-05T08:53:12.131Z",
		"size": 677173,
		"path": "../public/treatments/ear-and-nose-piercing.jpg"
	},
	"/treatments/hair-loss-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad646-h+eyz2ZYBc5yyWJ77Vs496zimsM\"",
		"mtime": "2026-08-05T08:53:12.156Z",
		"size": 710214,
		"path": "../public/treatments/hair-loss-treatment.jpg"
	},
	"/treatments/facial-fillers-and-threads.jpg": {
		"type": "image/jpeg",
		"etag": "\"9ee76-6mp95OTpWNncLEzimhcmo/mPHlc\"",
		"mtime": "2026-08-05T08:53:12.139Z",
		"size": 650870,
		"path": "../public/treatments/facial-fillers-and-threads.jpg"
	},
	"/treatments/hydrafacial.jpg": {
		"type": "image/jpeg",
		"etag": "\"99c11-T4+NirYeIu1H12H/x5nEMdqbXpw\"",
		"mtime": "2026-08-05T08:53:12.185Z",
		"size": 629777,
		"path": "../public/treatments/hydrafacial.jpg"
	},
	"/treatments/laser-hair-removal.jpg": {
		"type": "image/jpeg",
		"etag": "\"947ec-kUqwHr/7EGN2mRvWN8hoXtrXutE\"",
		"mtime": "2026-08-05T08:53:12.064Z",
		"size": 608236,
		"path": "../public/treatments/laser-hair-removal.jpg"
	},
	"/treatments/hifu-lifting.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8e3d-QNCeu7zyIfcG13vIvlVsRR7eBO8\"",
		"mtime": "2026-08-05T08:53:12.080Z",
		"size": 691773,
		"path": "../public/treatments/hifu-lifting.jpg"
	},
	"/treatments/ipl-photofacial.jpg": {
		"type": "image/jpeg",
		"etag": "\"a0024-aQfSyYaOCMDWm393S9pdDaRGVrw\"",
		"mtime": "2026-08-05T08:53:12.261Z",
		"size": 655396,
		"path": "../public/treatments/ipl-photofacial.jpg"
	},
	"/treatments/lip-blushing-dark-lip-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"a5f26-J1ttjLGpwAABZAAyedy4BrCg5do\"",
		"mtime": "2026-08-05T08:53:12.055Z",
		"size": 679718,
		"path": "../public/treatments/lip-blushing-dark-lip-treatment.jpg"
	},
	"/treatments/microdermabrasion-mda.jpg": {
		"type": "image/jpeg",
		"etag": "\"9f390-dPg87sjAWh3yOSQr9x2jJh7yzpY\"",
		"mtime": "2026-08-05T08:53:12.217Z",
		"size": 652176,
		"path": "../public/treatments/microdermabrasion-mda.jpg"
	},
	"/treatments/microneedling.jpg": {
		"type": "image/jpeg",
		"etag": "\"a9128-/SChsC9HBQJFE3lPz1OlJOgzO0k\"",
		"mtime": "2026-08-05T08:53:12.146Z",
		"size": 692520,
		"path": "../public/treatments/microneedling.jpg"
	},
	"/treatments/pico-laser.jpg": {
		"type": "image/jpeg",
		"etag": "\"a6c7e-kEZMCtU5U2aa5OvNQaPIlhGYKpA\"",
		"mtime": "2026-08-05T08:53:12.201Z",
		"size": 683134,
		"path": "../public/treatments/pico-laser.jpg"
	},
	"/treatments/pigmentation-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"a1fa0-KbVWnZ1P6qRtyiMw/hfecLutVwc\"",
		"mtime": "2026-08-05T08:53:12.097Z",
		"size": 663456,
		"path": "../public/treatments/pigmentation-treatment.jpg"
	},
	"/treatments/prp-prf-body-and-knee-joints.jpg": {
		"type": "image/jpeg",
		"etag": "\"a42cf-7BDjVpE2pypiQQHvxywHfUOwLAQ\"",
		"mtime": "2026-08-05T08:53:12.235Z",
		"size": 672463,
		"path": "../public/treatments/prp-prf-body-and-knee-joints.jpg"
	},
	"/treatments/skin-whitening-and-rejuvenation.jpg": {
		"type": "image/jpeg",
		"etag": "\"9e114-bOIyglUugcAPrm2TNEnK6rHdhwM\"",
		"mtime": "2026-08-05T08:53:12.193Z",
		"size": 647444,
		"path": "../public/treatments/skin-whitening-and-rejuvenation.jpg"
	},
	"/treatments/prp-prf-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"9f468-d/VwQYpO3Dt7j8UN3kue+Bxo/Ok\"",
		"mtime": "2026-08-05T08:53:12.122Z",
		"size": 652392,
		"path": "../public/treatments/prp-prf-treatment.jpg"
	},
	"/treatments/special-collagen-treatment.jpg": {
		"type": "image/jpeg",
		"etag": "\"9df13-w7mOyUSrdZmAgzg3HndXo0JY8gI\"",
		"mtime": "2026-08-05T08:53:12.269Z",
		"size": 646931,
		"path": "../public/treatments/special-collagen-treatment.jpg"
	},
	"/treatments/stretch-marks-and-old-scars.jpg": {
		"type": "image/jpeg",
		"etag": "\"a49e5-F+LhEj9prYM2czjU+gqz5y95wyQ\"",
		"mtime": "2026-08-05T08:53:12.038Z",
		"size": 674277,
		"path": "../public/treatments/stretch-marks-and-old-scars.jpg"
	},
	"/treatments/warts-lumps-spots-naevi-removal.jpg": {
		"type": "image/jpeg",
		"etag": "\"a10c5-JmmQb+1W4uUv1Q6Ov7qukNgRRwA\"",
		"mtime": "2026-08-05T08:53:12.209Z",
		"size": 659653,
		"path": "../public/treatments/warts-lumps-spots-naevi-removal.jpg"
	},
	"/treatments/thread-lift.jpg": {
		"type": "image/jpeg",
		"etag": "\"a8752-GTw4J5IzzeAUhDcHvt3qG5TYoeY\"",
		"mtime": "2026-08-05T08:53:12.089Z",
		"size": 690002,
		"path": "../public/treatments/thread-lift.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_4bPC4f = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_4bPC4f
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
