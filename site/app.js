(() => {
"use strict";

// ---------- Text ----------
const T = {
  nl: {
    heroTitle: "Slimme trucs van runners, voor runners",
    heroSub: "Alles wat je normaal pas na maanden leert, op één plek. Deel je eigen tip of like wat jij handig vindt.",
    loading: "Tips laden…",
    statTips: n => n + (n === 1 ? " tip" : " tips"), statLikes: n => n + (n === 1 ? " like" : " likes"), statPeople: n => n + (n === 1 ? " tipgever" : " tipgevers"),
    top: "Top 3 tips", topSub: "Hier begin je. Nieuw? Lees deze drie eerst.", delComment: "Verwijderen", delConfirm: "Deze reactie verwijderen?", commentDeleted: "Reactie verwijderd",
    ctaTitle: "Heb jij een slimme truc?", ctaText: "Iets waardoor je shift makkelijker of sneller gaat? Deel het. Het kost een halve minuut en scheelt een nieuwe collega weken uitzoeken.",
    share: "Deel een tip", people: "Tipgevers", peopleSub: "Bedankt voor het delen!",
    all: "Alle tips", allCat: "Alles", handy: "Handigst", newest: "Nieuwst", count: n => n + (n === 1 ? " tip" : " tips"),
    empty: "Meer tips komen eraan. Deel jij de volgende?", emptyBtn: "Deel een tip",
    like: "Handig", comment: "Reageer", comments: n => n + (n === 1 ? " reactie" : " reacties"),
    whatsapp: "Deel in WhatsApp", report: "Melden", reported: "Gemeld",
    by: "door", anon: "Anoniem", isNew: "Nieuw",
    addComment: "Schrijf een reactie…", yourName: "Je naam (optioneel)", post: "Plaats",
    rulesTitle: "Huisregels",
    rules: ["Geen namen, adressen of foto's van klanten, huisnummers of kentekens.", "Tips vervangen nooit de officiële regels of veiligheidsinstructies. Botst het, dan geldt de officiële regel.", "Houd het vriendelijk. Moderators kunnen tips en reacties verbergen.", "De site telt anoniem hoeveel bezoekers er zijn. Er wordt niets over jou opgeslagen."],
    stToday: "mensen vandaag", stWeek: "mensen, laatste 7 dagen", stTotal: "mensen in totaal", stViews: "keer geopend", stSpark: "Mensen per dag, laatste 2 weken. Alleen jij ziet dit.", stSince: d => `Telt sinds ${d}. Bezoeken van daarvoor zijn niet bijgehouden.`, stViewsNote: "\"Keer geopend\" telt ook als iemand later terugkomt.", locale: "nl-NL",
    sharePage: "Stuur deze pagina door", homeHint: "Tip: zet deze pagina op je beginscherm. iPhone: Deel-knop, dan \"Zet op beginscherm\". Android: menu, dan \"Toevoegen aan startscherm\".",
    sheetTitle: "Deel een tip", fCat: "Waar gaat het over?", fTitle: "Korte titel", fTitlePh: "Bijv. deksels laag in het frame",
    fBody: "Jouw tip", fBodyPh: "Wat doe je, en waarom helpt het?", fBodyHint: "Een paar zinnen is perfect.",
    fPhoto: "Foto (optioneel)", fPhotoPick: "Voeg een foto toe", fPhotoHint: "Geen klanten, huisnummers of kentekens in beeld.", fPhotoDel: "Foto weghalen",
    fName: "Je naam (optioneel)", fNamePh: "Leeg laten = anoniem", fOk: "Geen klantgegevens, en niets wat tegen de officiële regels ingaat.",
    cancel: "Annuleer", postTip: "Plaats tip", posting: "Bezig…",
    errFill: "Vul een titel en de tip zelf in.", errTitle: "De titel is te kort.", errBody: "De tip is te kort.", errOk: "Vink het vakje aan om de huisregels te bevestigen.", errCat: "Kies een categorie.",
    tipPosted: "Tip geplaatst. Bedankt!", commentPosted: "Reactie geplaatst", copied: "Link gekopieerd", netErr: "Dat lukte niet. Check je internet en probeer opnieuw.",
    reportTitle: "Wat is er mis met deze tip?", reportSub: "Een moderator kijkt ernaar. Niemand ziet wie het gemeld heeft.",
    reasons: [["notwork", "Werkt niet zo bij ons"], ["unsafe", "Onveilig of tegen de regels"], ["customer", "Bevat klantgegevens"], ["other", "Iets anders"]],
    reportDone: "Bedankt, de tip is gemeld",
    gateTitle: "Welkom bij Runner Tips", gateText: "Open de link uit de WhatsApp-groep, of vul de hubcode in.", gatePh: "Hubcode", gateBtn: "Open", gateErr: "Deze code klopt niet.",
    modBar: "Moderatormodus: je ziet ook verborgen tips en meldingen.", modOff: "Bekijk als collega", modOffNote: "Moderatormodus staat uit op dit apparaat. Open je moderatorlink om hem weer aan te zetten.", hide: "Verbergen", unhide: "Terugzetten", clearReports: "Meldingen wissen", hiddenLbl: "Verborgen", reportsLbl: n => n + (n === 1 ? " melding" : " meldingen"),
    preview: "Voorbeeldmodus: nog niet verbonden met de database. Niets wordt opgeslagen.",
    waText: (t, url) => `Handige runner-tip: *${t.title}*\n${t.body}\n\nMeer tips: ${url}`,
    pageShare: url => `Runner Tips: handige trucs van collega's, en deel je eigen tip! ${url}`,
    ago: s => s < 3600 ? "net" : s < 86400 ? Math.floor(s / 3600) + " uur geleden" : s < 172800 ? "gisteren" : s < 604800 ? Math.floor(s / 86400) + " dagen geleden" : s < 1209600 ? "1 week geleden" : Math.floor(s / 604800) + " weken geleden"
  },
  en: {
    heroTitle: "Smart tricks from runners, for runners",
    heroSub: "Everything you'd normally only learn after months, in one place. Share your own tip or like the ones you find handy.",
    loading: "Loading tips…",
    statTips: n => n + (n === 1 ? " tip" : " tips"), statLikes: n => n + (n === 1 ? " like" : " likes"), statPeople: n => n + (n === 1 ? " contributor" : " contributors"),
    top: "Top 3 tips", topSub: "Start here. New? Read these three first.", delComment: "Delete", delConfirm: "Delete this comment?", commentDeleted: "Comment deleted",
    ctaTitle: "Got a smart trick?", ctaText: "Something that makes your shift easier or faster? Share it. It takes half a minute and saves a new colleague weeks of figuring it out.",
    share: "Share a tip", people: "Contributors", peopleSub: "Thanks for sharing!",
    all: "All tips", allCat: "All", handy: "Most handy", newest: "Newest", count: n => n + (n === 1 ? " tip" : " tips"),
    empty: "More tips are on the way. Will you share the next one?", emptyBtn: "Share a tip",
    like: "Handy", comment: "Comment", comments: n => n + (n === 1 ? " comment" : " comments"),
    whatsapp: "Share on WhatsApp", report: "Report", reported: "Reported",
    by: "by", anon: "Anonymous", isNew: "New",
    addComment: "Write a comment…", yourName: "Your name (optional)", post: "Post",
    rulesTitle: "House rules",
    rules: ["No customer names, addresses or photos of customers, house numbers or licence plates.", "Tips never replace official rules or safety instructions. If they clash, the official rule wins.", "Keep it friendly. Moderators can hide tips and comments.", "The site anonymously counts how many people visit. Nothing about you is stored."],
    stToday: "people today", stWeek: "people, last 7 days", stTotal: "people in total", stViews: "times opened", stSpark: "People per day, last 2 weeks. Only you can see this.", stSince: d => `Counting since ${d}. Earlier visits were not tracked.`, stViewsNote: "\"Times opened\" also counts people coming back later.", locale: "en-GB",
    sharePage: "Send this page to someone", homeHint: "Tip: add this page to your home screen. iPhone: Share button, then \"Add to Home Screen\". Android: menu, then \"Add to Home screen\".",
    sheetTitle: "Share a tip", fCat: "What's it about?", fTitle: "Short title", fTitlePh: "E.g. keep the lids low in the frame",
    fBody: "Your tip", fBodyPh: "What do you do, and why does it help?", fBodyHint: "A few sentences is perfect.",
    fPhoto: "Photo (optional)", fPhotoPick: "Add a photo", fPhotoHint: "No customers, house numbers or licence plates in the picture.", fPhotoDel: "Remove photo",
    fName: "Your name (optional)", fNamePh: "Leave empty to post anonymously", fOk: "No customer info, and nothing that goes against the official rules.",
    cancel: "Cancel", postTip: "Post tip", posting: "Posting…",
    errFill: "Add a title and the tip itself.", errTitle: "The title is too short.", errBody: "The tip is too short.", errOk: "Tick the box to confirm the house rules.", errCat: "Pick a category.",
    tipPosted: "Tip posted. Thanks!", commentPosted: "Comment posted", copied: "Link copied", netErr: "That didn't work. Check your connection and try again.",
    reportTitle: "What's wrong with this tip?", reportSub: "A moderator will look at it. Nobody sees who reported it.",
    reasons: [["notwork", "Doesn't work like that here"], ["unsafe", "Unsafe or against the rules"], ["customer", "Contains customer info"], ["other", "Something else"]],
    reportDone: "Thanks, the tip has been reported",
    gateTitle: "Welcome to Runner Tips", gateText: "Open the link from the WhatsApp group, or enter the hub code.", gatePh: "Hub code", gateBtn: "Open", gateErr: "That code isn't right.",
    modBar: "Moderator mode: you also see hidden tips and reports.", modOff: "View as colleague", modOffNote: "Moderator mode is off on this device. Open your moderator link to turn it back on.", hide: "Hide", unhide: "Restore", clearReports: "Clear reports", hiddenLbl: "Hidden", reportsLbl: n => n + (n === 1 ? " report" : " reports"),
    preview: "Preview mode: not connected to the database yet. Nothing is saved.",
    waText: (t, url) => `Handy runner tip: *${t.title}*\n${t.body}\n\nMore tips: ${url}`,
    pageShare: url => `Runner Tips: handy tricks from colleagues, and share your own! ${url}`,
    ago: s => s < 3600 ? "just now" : s < 86400 ? Math.floor(s / 3600) + "h ago" : s < 172800 ? "yesterday" : s < 604800 ? Math.floor(s / 86400) + " days ago" : s < 1209600 ? "1 week ago" : Math.floor(s / 604800) + " weeks ago"
  }
};
// Order here is the order of the filter chips and the category picker.
// Follows a trip: pit lane (load) > on the road (EPV) > at the customer > back in the pit lane.
const CATS = {
  pit:     { nl: "Pitstraat", en: "Pit lane" },
  route:   { nl: "Onderweg & EPV", en: "On the road & EPV" },
  cust:    { nl: "Bij de klant", en: "At the customer" },
  device:  { nl: "Device", en: "Device" },
  body:    { nl: "Tillen & je lijf", en: "Lifting & your body" },
  weather: { nl: "Weer", en: "Weather" },
  new:     { nl: "Nieuwe runners", en: "New runners" },
  general: { nl: "Algemeen", en: "General" },
  crates:  { nl: "Kratten", en: "Crates", hidden: true },
  returns: { nl: "Retour", en: "Returns", hidden: true },
  van:     { nl: "In de EPV", en: "In the EPV", hidden: true },
  stairs:  { nl: "Trappen", en: "Stairs", hidden: true }
};
const PICKABLE = Object.keys(CATS).filter(k => !CATS[k].hidden);
// English text when the tip has it, otherwise the original.
const txt = t => S.lang === "en" && t.title_en ? { title: t.title_en, body: t.body_en || t.body } : { title: t.title, body: t.body };
const ICON = {
  like: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2 21h4V9H2v12zm20-11a2 2 0 0 0-2-2h-6.3l1-4.6v-.3c0-.4-.2-.8-.4-1.1L13.2 1 6.6 7.6c-.4.4-.6.9-.6 1.4v10c0 1.1.9 2 2 2h9c.8 0 1.5-.5 1.8-1.2l3-7.1c.1-.2.2-.5.2-.7v-2z"/></svg>',
  chat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M4 5h16v11H9l-5 4V5z"/></svg>',
  wa: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.5 3.9 1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.4-.3z"/></svg>',
  flag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M5 21V4m0 0h11l-2 4 2 4H5"/></svg>',
  cam: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9 3 7.2 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3.2L15 3H9zm3 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>'
};

// ---------- Local settings ----------
// The offline demo keeps nothing between runs, so every reload starts from the same state.
const IS_DEMO = !!(window.RT_CONFIG || {}).demo;
const memStore = new Map();
const store = IS_DEMO ? {
  get(k) { return memStore.has(k) ? memStore.get(k) : null; },
  set(k, v) { v == null ? memStore.delete(k) : memStore.set(k, v); }
} : {
  get(k) { try { return localStorage.getItem("rt_" + k); } catch (e) { return null; } },
  set(k, v) { try { v == null ? localStorage.removeItem("rt_" + k) : localStorage.setItem("rt_" + k, v); } catch (e) {} }
};
const params = new URLSearchParams(location.search);
if (params.get("c")) store.set("code", params.get("c").trim().toLowerCase());
// ?admin=<key> turns moderator mode on for this browser, ?admin=off turns it off again.
if (params.get("admin")) store.set("admin", params.get("admin").trim() === "off" ? null : params.get("admin").trim());
// The code stays in the address bar on purpose: an iPhone home-screen icon saves the current address
// and has its own storage, so without it the icon would open on the "enter hub code" screen.
if (!store.get("voter")) store.set("voter", (crypto.randomUUID ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (c ^ Math.random() * 16 >> c / 4).toString(16))));

const S = {
  lang: store.get("lang") || (window.RT_CONFIG || {}).defaultLang || "nl",
  code: store.get("code"),
  admin: store.get("admin"),
  voter: store.get("voter"),
  name: store.get("name") || "",
  tips: [], isAdmin: false, loaded: false,
  cat: "all", sort: "handy", open: {}, fresh: null, photos: new Map()
};
const L = () => T[S.lang];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const initials = n => (n || "?").trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();
const $ = id => document.getElementById(id);
const siteUrl = () => (window.RT_CONFIG || {}).siteUrl || location.origin + location.pathname + (S.code && S.code !== cfg.hubCode ? "?c=" + encodeURIComponent(S.code) : "");

// ---------- Backend ----------
const cfg = window.RT_CONFIG || {};
if (!S.code && cfg.hubCode) S.code = cfg.hubCode;
// ?mock runs on sample data in memory, for testing changes without touching the real database.
const PREVIEW = !cfg.supabaseUrl || cfg.supabaseUrl.startsWith("PASTE") || params.has("mock");
let rpc;
if (!PREVIEW) {
  const sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey, { auth: { persistSession: false } });
  rpc = async (fn, args) => {
    const { data, error } = await sb.rpc(fn, args);
    if (error) throw error;
    return data;
  };
} else {
  // Local stand-in: sample data in memory. The offline demo build provides its own data as window.RT_DEMO.
  if (!S.code) { S.code = "preview"; }
  const now = Date.now();
  const votesOf = n => new Set(Array.from({ length: n }, (_, i) => "x" + i));
  const mk = (cat, title, body, author, hoursAgo, votes) => ({ id: "m" + Math.random().toString(36).slice(2), created_at: new Date(now - hoursAgo * 3600e3).toISOString(), category: cat, title, body, author, hidden: false, has_photo: false, votesSet: votesOf(votes), reports: [], comments: [] });
  const demo = window.RT_DEMO;
  const db = demo ? demo.tips.map(t => ({ hidden: false, reports: [], comments: [], ...t, has_photo: !!t.photo, votesSet: votesOf(t.votes || 0) })) : [
    Object.assign(mk("route", "Zet je krat voor koelelementen laag", "Voorbeeldtekst voor de preview.", "Marco", 30, 6), { title_en: "Move your cooling-pack crate lower", body_en: "Preview text.", pin: 1 }),
    mk("weather", "Koud drinken op warme dagen", "Voorbeeldtekst voor de preview.", "Marco", 5, 9),
    mk("route", "Sorteer na elke stop", "Voorbeeldtekst voor de preview.", "Marco", 200, 2),
    mk("device", "Accu wisselen", "Voorbeeldtekst voor de preview.", null, 300, 1),
    mk("cust", "Loop twee keer", "Voorbeeldtekst voor de preview.", "Marco", 100, 0)
  ];
  const day = n => { const d = new Date(now - n * 86400e3); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const stats = demo?.stats || { visitors_today: 4, visitors_week: 17, visitors_total: 23, views_total: 61, days: [3, 5, 2, 8, 6, 9, 4].map((v, i) => ({ day: day(6 - i), visitors: v, views: v + 2 })) };
  rpc = async (fn, a) => {
    await new Promise(r => setTimeout(r, demo ? 60 : 150));
    const find = id => db.find(t => t.id === id);
    switch (fn) {
      case "get_tips": {
        const shown = db.filter(t => S.admin || !t.hidden);
        const contributors = new Set(db.filter(t => !t.hidden).map(t => t.voter || (t.author || "").toLowerCase() || t.id)).size;
        return { admin: !!S.admin, contributors, tips: shown.map(t => ({ ...t, photo: undefined, votes: t.votesSet.size, voted: t.votesSet.has(a.p_voter), reported: t.reports.some(r => r.voter === a.p_voter), reports: S.admin ? t.reports.length : 0, report_reasons: S.admin ? [...new Set(t.reports.map(r => r.reason))].join(", ") : null, comments: t.comments.filter(c => S.admin || !c.hidden).map(c => ({ ...c, mine: c.voter === a.p_voter })), votesSet: undefined })).sort((x, y) => y.created_at.localeCompare(x.created_at)) };
      }
      case "get_photo": return find(a.p_tip).photo || null;
      case "add_tip": { const t = mk(a.p_category, a.p_title, a.p_body, a.p_author || null, 0, 0); t.photo = a.p_photo; t.has_photo = !!a.p_photo; t.voter = a.p_voter; db.push(t); return t.id; }
      case "toggle_vote": { const t = find(a.p_tip); if (t.votesSet.has(a.p_voter)) { t.votesSet.delete(a.p_voter); return false; } t.votesSet.add(a.p_voter); return true; }
      case "add_comment": find(a.p_tip).comments.push({ id: "c" + Math.random(), created_at: new Date().toISOString(), author: a.p_author || null, body: a.p_body, hidden: false, voter: a.p_voter }); return null;
      case "delete_comment": db.forEach(t => { t.comments = t.comments.filter(c => !(c.id === a.p_comment && c.voter === a.p_voter)); }); return null;
      case "report_tip": find(a.p_tip).reports.push({ voter: a.p_voter, reason: a.p_reason }); return null;
      case "admin_set_hidden": { if (a.p_kind === "tip") find(a.p_id).hidden = a.p_hidden; else db.forEach(t => t.comments.forEach(c => { if (c.id === a.p_id) c.hidden = a.p_hidden; })); return null; }
      case "admin_clear_reports": find(a.p_tip).reports = []; return null;
      case "log_visit": return null;
      case "get_stats": return stats;
    }
  };
}
async function loadTips() {
  const res = await rpc("get_tips", { p_code: S.code, p_voter: S.voter, p_admin: S.admin || null });
  S.tips = res.tips || [];
  S.isAdmin = !!res.admin;
  S.contributors = res.contributors;
  if (S.isAdmin) { try { S.stats = await rpc("get_stats", { p_admin: S.admin }); } catch (e) { S.stats = null; } }
  S.loaded = true;
}

// Anonymous visit count (per device per day), only shown in moderator mode. Never blocks the page.
function logVisit() { rpc("log_visit", { p_code: S.code, p_voter: S.voter }).catch(() => {}); }

function statsBlock() {
  const st = S.stats, l = L();
  if (!st) return "";
  // Always 14 slots (oldest left, today right) so one day of data doesn't fill the whole chart.
  const byDay = new Map((st.days || []).map(d => [d.day, d]));
  const fmt = d => d.toLocaleDateString(l.locale, { day: "numeric", month: "short" });
  const key = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const slots = Array.from({ length: 14 }, (_, i) => { const d = new Date(); d.setDate(d.getDate() - 13 + i); return { date: d, v: byDay.get(key(d))?.visitors || 0 }; });
  const max = Math.max(1, ...slots.map(s => s.v));
  const first = (st.days || [])[0];
  const inWindow = (st.days || []).reduce((n, d) => n + Number(d.views), 0) === Number(st.views_total);
  const since = first && inWindow && slots.findIndex(s => key(s.date) === first.day) > 0 ? fmt(new Date(first.day + "T12:00:00")) : null;
  return `<div class="stats-card"><div class="stats-row">
      <div><b>${st.visitors_today}</b><span>${l.stToday}</span></div>
      <div><b>${st.visitors_week}</b><span>${l.stWeek}</span></div>
      <div><b>${st.visitors_total}</b><span>${l.stTotal}</span></div>
      <div><b>${st.views_total}</b><span>${l.stViews}</span></div></div>
    <div class="spark" aria-hidden="true">${slots.map(s => `<i class="${s.v ? "" : "zero"}" style="height:${s.v ? Math.max(6, Math.round(s.v / max * 100)) : 3}%" title="${fmt(s.date)}: ${s.v}"></i>`).join("")}</div>
    <div class="spark-axis"><span>${fmt(slots[0].date)}</span><span>${fmt(slots[13].date)}</span></div>
    <small>${l.stSpark} ${since ? l.stSince(since) + " " : ""}${l.stViewsNote}</small>
  </div>`;
}
// ---------- Rendering ----------
function sortedByHandy(list) { return list.slice().sort((a, b) => b.votes - a.votes || b.created_at.localeCompare(a.created_at)); }

function tipCard(t, rank) {
  const l = L();
  const age = (Date.now() - new Date(t.created_at)) / 1000;
  const open = S.open[t.id];
  const nC = t.comments.length;
  const x = txt(t);
  const meta = `<div class="meta"><span class="pill">${esc(CATS[t.category]?.[S.lang] || t.category)}</span>${age < 5 * 86400 ? `<span class="badge-new">${l.isNew}</span>` : ""}${t.hidden ? `<span class="badge-new">${l.hiddenLbl}</span>` : ""}</div>`;
  const head = `<div class="tip-head">${meta}<h3>${esc(x.title)}</h3></div>`;
  const mod = S.isAdmin ? `<div class="mod">${t.reports ? `<span class="warn">${l.reportsLbl(t.reports)}${t.report_reasons ? ": " + esc(t.report_reasons.split(", ").map(k => (l.reasons.find(r => r[0] === k) || [k, k])[1]).join(", ")) : ""}</span>` : ""}
      <button class="mini" data-hide="${t.id}" data-to="${!t.hidden}">${t.hidden ? l.unhide : l.hide}</button>
      ${t.reports ? `<button class="mini" data-clear="${t.id}">${l.clearReports}</button>` : ""}</div>` : "";
  const comments = open ? `<div class="comments">
      ${t.comments.map(c => `<div class="comment${c.hidden ? " is-hidden" : ""}"><div class="comment-head"><b>${esc(c.author || l.anon)}</b><span>${c.mine ? `<button class="mini" data-delc="${c.id}">${l.delComment}</button>` : ""}${S.isAdmin ? ` <button class="mini" data-hidec="${c.id}" data-to="${!c.hidden}">${c.hidden ? l.unhide : l.hide}</button>` : ""}</span></div>${esc(S.lang === "en" && c.body_en ? c.body_en : c.body)}</div>`).join("")}
      <form class="cform" data-tip="${t.id}">
        ${S.name ? "" : `<input id="cn-${t.id}" maxlength="30" placeholder="${l.yourName}" aria-label="${l.yourName}" style="max-width:38%">`}
        <input id="c-${t.id}" maxlength="300" placeholder="${l.addComment}" aria-label="${l.addComment}">
        <button class="btn small" type="submit">${l.post}</button>
      </form></div>` : "";
  return `<article class="tip${t.hidden ? " is-hidden" : ""}${S.fresh === t.id ? " fresh" : ""}" id="tip-${t.id}">
    ${rank ? `<div class="tip-top"><div class="rank${rank === 1 ? " r1" : ""}">${rank}</div>${head}</div>` : head}
    ${t.has_photo ? `<div class="photo-wrap" data-photo="${t.id}">${S.photos.has(t.id) ? `<img src="${S.photos.get(t.id)}" alt="">` : ""}</div>` : ""}
    <p>${esc(x.body)}</p>
    <div class="author"><span class="avatar">${esc(t.author ? initials(t.author) : "?")}</span>${t.author ? l.by + " " + esc(t.author) : l.anon}</div>
    ${mod}
    <div class="actions">
      <button class="act like" data-like="${t.id}" aria-pressed="${t.voted}">${ICON.like}${l.like} <span class="n">${t.votes}</span></button>
      <button class="act" data-open="${t.id}" aria-expanded="${!!open}">${ICON.chat}${nC ? l.comments(nC) : l.comment}</button>
      <a class="act" href="https://wa.me/?text=${encodeURIComponent(l.waText(x, siteUrl()))}" target="_blank" rel="noopener" aria-label="${l.whatsapp}" title="${l.whatsapp}">${ICON.wa}</a>
      <button class="act flag" data-flag="${t.id}" data-done="${t.reported}" aria-label="${t.reported ? l.reported : l.report}" title="${t.reported ? l.reported : l.report}">${ICON.flag}</button>
    </div>
    ${comments}
  </article>`;
}

function renderStatic() {
  document.documentElement.lang = S.lang;
  document.querySelectorAll("[data-t]").forEach(el => { el.textContent = L()[el.dataset.t]; });
  $("hubname").textContent = cfg.hubName ? "Hub " + cfg.hubName : "";
  $("l-nl").setAttribute("aria-pressed", S.lang === "nl");
  $("l-en").setAttribute("aria-pressed", S.lang === "en");
}

function render() {
  renderStatic();
  const l = L();
  const app = $("app");
  if (!S.code) {
    $("fab").hidden = true; $("stats").innerHTML = "";
    app.innerHTML = `<form class="gate" id="gate"><h2>${l.gateTitle}</h2><p>${l.gateText}</p>
      <input id="gate-code" placeholder="${l.gatePh}" autocomplete="off" autocapitalize="off">
      <div class="err" id="gate-err"></div><button class="btn" type="submit">${l.gateBtn}</button></form>`;
    return;
  }
  if (!S.loaded) return;
  $("fab").hidden = false;

  const tips = S.tips;
  const likes = tips.reduce((n, t) => n + t.votes, 0);
  const named = new Map();
  tips.filter(t => !t.hidden && t.author).forEach(t => { const k = t.author.trim(); named.set(k, (named.get(k) || 0) + 1); });
  // The database counts anonymous contributors too; fall back to named ones if it does not send a count.
  const people_n = S.contributors ?? named.size;
  $("stats").innerHTML = `<span class="stat">${l.statTips(tips.filter(t => !t.hidden).length)}</span><span class="stat">${l.statLikes(likes)}</span>${people_n ? `<span class="stat">${l.statPeople(people_n)}</span>` : ""}`;

  const visible = tips.filter(t => !t.hidden || S.isAdmin);
  // Likes decide the top 3. "pin" (set in the database) only breaks ties, so it sets the starting order
  // and a tip with more likes overtakes it.
  const pinRank = t => t.pin || 99;
  const top = visible.filter(t => !t.hidden).sort((a, b) => b.votes - a.votes || pinRank(a) - pinRank(b) || b.created_at.localeCompare(a.created_at)).slice(0, 3);
  const topIds = new Set(top.map(t => t.id));
  // Only categories that have tips get a filter chip; tapping the active chip again shows everything.
  const usedCats = Object.keys(CATS).filter(k => k === S.cat || visible.some(t => t.category === k));
  let list = visible.filter(t => S.cat === "all" ? !topIds.has(t.id) : t.category === S.cat);
  list = S.sort === "handy" ? sortedByHandy(list) : list.slice().sort((a, b) => b.created_at.localeCompare(a.created_at));
  if (S.isAdmin) list.sort((a, b) => (b.reports > 0) - (a.reports > 0));

  const people = [...named.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);

  app.innerHTML = `
    ${PREVIEW && !IS_DEMO ? `<div class="modbar">${l.preview}</div>` : ""}
    ${S.isAdmin ? `<div class="modbar modbar-row"><span>${l.modBar}</span><button class="mini" data-modoff>${l.modOff}</button></div>${statsBlock()}` : ""}
    ${top.length ? `<section class="sec"><div class="sec-head"><div><h2>${l.top}</h2><p>${l.topSub}</p></div></div>
      <div class="list">${top.map((t, i) => tipCard(t, i + 1)).join("")}</div></section>` : ""}
    <section class="cta"><h2>${l.ctaTitle}</h2><p>${l.ctaText}</p><button class="btn" data-share>${l.share}</button></section>
    <section class="sec">
      <div class="sec-head"><h2>${l.all}</h2></div>
      ${usedCats.length > 1 ? `<div class="filters" role="group" aria-label="${l.all}">
        ${usedCats.map(k => `<button class="chip" data-cat="${k}" aria-pressed="${S.cat === k}">${esc(CATS[k][S.lang])}</button>`).join("")}
      </div>` : ""}
      <div class="listbar"><span>${l.count(list.length)}</span>
        <div class="seg" role="group"><button data-sort="handy" aria-pressed="${S.sort === "handy"}">${l.handy}</button><button data-sort="new" aria-pressed="${S.sort === "new"}">${l.newest}</button></div></div>
      <div class="list">${list.length ? list.map(t => tipCard(t)).join("") : `<div class="empty"><span>${l.empty}</span><button class="btn small" data-share>${l.emptyBtn}</button></div>`}</div>
    </section>
    ${people.length ? `<section class="sec"><div class="sec-head"><div><h2>${l.people}</h2><p>${l.peopleSub}</p></div></div>
      <div class="people">${people.map(([n, c]) => `<span class="person"><span class="avatar">${esc(initials(n))}</span>${esc(n)} <small>${c}</small></span>`).join("")}</div></section>` : ""}
    <footer class="foot">
      <div class="row"><button class="btn ghost small" data-sharepage>${l.sharePage}</button></div>
      <p style="margin:0">${l.homeHint}</p>
      <div><h4>${l.rulesTitle}</h4><ul>${l.rules.map(r => `<li>${esc(r)}</li>`).join("")}</ul></div>
    </footer>`;
  observePhotos();
}

// Photos load only when the card scrolls into view.
let io;
function observePhotos() {
  if (io) io.disconnect();
  const load = async el => {
    const id = el.dataset.photo;
    if (S.photos.has(id)) return;
    try {
      const src = await rpc("get_photo", { p_code: S.code, p_tip: id });
      if (src) { S.photos.set(id, src); document.querySelectorAll(`[data-photo="${id}"]`).forEach(w => { w.innerHTML = `<img src="${src}" alt="">`; }); }
    } catch (e) {}
  };
  const els = document.querySelectorAll("[data-photo]");
  if (!("IntersectionObserver" in window)) { els.forEach(load); return; }
  io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { io.unobserve(e.target); load(e.target); } }), { rootMargin: "300px" });
  els.forEach(el => { if (!S.photos.has(el.dataset.photo)) io.observe(el); });
}

function toast(msg) {
  document.querySelectorAll(".toast").forEach(t => t.remove());
  const el = document.createElement("div");
  el.className = "toast"; el.setAttribute("role", "status"); el.textContent = msg;
  (document.querySelector(".phone") || document.body).appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function demoPanel() {
  const b = document.querySelector("[data-demo-mod]");
  if (b) { b.setAttribute("aria-pressed", !!S.admin); b.textContent = S.admin ? "Moderator mode: on" : "Moderator mode: off"; }
}

// ---------- Actions ----------
async function refresh() { await loadTips(); render(); }

async function toggleLike(id) {
  const t = S.tips.find(x => x.id === id); if (!t) return;
  t.voted = !t.voted; t.votes += t.voted ? 1 : -1; render();
  try { await rpc("toggle_vote", { p_code: S.code, p_tip: id, p_voter: S.voter }); }
  catch (e) { t.voted = !t.voted; t.votes += t.voted ? 1 : -1; render(); toast(L().netErr); }
}

function sheet(html) {
  const ov = document.createElement("div");
  ov.className = "overlay";
  ov.innerHTML = `<div class="bsheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
  // In the demo's phone frame the frame scrolls, not the page.
  const scroller = document.querySelector(".phone") || document.body;
  (document.querySelector(".phone") || document.body).appendChild(ov);
  scroller.style.overflow = "hidden";
  const close = () => { ov.remove(); scroller.style.overflow = ""; };
  ov.addEventListener("click", e => { if (e.target === ov) close(); });
  document.addEventListener("keydown", function esc(e) { if (e.key === "Escape") { close(); document.removeEventListener("keydown", esc); } });
  return { el: ov, close };
}

function shrink(file) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const max = 1000, s = Math.min(1, max / Math.max(img.width, img.height));
      const cv = document.createElement("canvas");
      cv.width = Math.round(img.width * s); cv.height = Math.round(img.height * s);
      cv.getContext("2d").drawImage(img, 0, 0, cv.width, cv.height);
      URL.revokeObjectURL(url);
      resolve(cv.toDataURL("image/jpeg", 0.72));
    };
    img.onerror = reject;
    img.src = url;
  });
}

function openAdd() {
  const l = L();
  let photo = null, cat = S.cat !== "all" ? S.cat : null;
  const s = sheet(`<form id="addform" class="field" style="gap:14px" novalidate>
    <h2>${l.sheetTitle}</h2>
    <div class="field"><span class="lbl">${l.fCat}</span><div class="cats" id="f-cats">
      ${PICKABLE.map(k => `<button type="button" class="chip" data-pick="${k}" aria-pressed="${cat === k}">${esc(CATS[k][S.lang])}</button>`).join("")}</div></div>
    <div class="field"><label for="f-title">${l.fTitle}</label><input id="f-title" maxlength="80" placeholder="${l.fTitlePh}"></div>
    <div class="field"><label for="f-body">${l.fBody}</label><textarea id="f-body" rows="4" maxlength="500" placeholder="${l.fBodyPh}"></textarea><small>${l.fBodyHint}</small></div>
    <div class="field"><span class="lbl">${l.fPhoto}</span>
      <label class="photo-pick" id="f-pick">${ICON.cam}<span>${l.fPhotoPick}</span><input type="file" id="f-photo" accept="image/*"></label>
      <div class="preview" id="f-prev" hidden></div><small>${l.fPhotoHint}</small></div>
    <div class="field"><label for="f-name">${l.fName}</label><input id="f-name" maxlength="30" placeholder="${l.fNamePh}" value="${esc(S.name)}"></div>
    <label class="check"><input type="checkbox" id="f-ok"><span>${l.fOk}</span></label>
    <div class="err" id="f-err" role="alert"></div>
    <div class="sheet-actions"><button type="button" class="btn ghost" id="f-cancel">${l.cancel}</button><button type="submit" class="btn" id="f-submit">${l.postTip}</button></div>
  </form>`);
  const root = s.el;
  root.querySelector("#f-cancel").onclick = s.close;
  root.querySelector("#f-cats").addEventListener("click", e => {
    const b = e.target.closest("[data-pick]"); if (!b) return;
    cat = b.dataset.pick;
    root.querySelectorAll("[data-pick]").forEach(x => x.setAttribute("aria-pressed", x === b));
  });
  const pick = root.querySelector("#f-pick"), prev = root.querySelector("#f-prev");
  root.querySelector("#f-photo").addEventListener("change", async e => {
    const f = e.target.files[0]; if (!f) return;
    try { photo = await shrink(f); } catch (err) { return; }
    prev.innerHTML = `<img src="${photo}" alt=""><button type="button" class="btn ghost small" id="f-del">${l.fPhotoDel}</button>`;
    prev.hidden = false; pick.hidden = true;
    prev.querySelector("#f-del").onclick = () => { photo = null; prev.hidden = true; prev.innerHTML = ""; pick.hidden = false; root.querySelector("#f-photo").value = ""; };
  });
  root.querySelector("#addform").addEventListener("submit", async e => {
    e.preventDefault();
    const err = root.querySelector("#f-err");
    const title = root.querySelector("#f-title").value.trim();
    const body = root.querySelector("#f-body").value.trim();
    const name = root.querySelector("#f-name").value.trim();
    if (!cat) { err.textContent = l.errCat; return; }
    if (!title || !body) { err.textContent = l.errFill; return; }
    if (title.length < 3) { err.textContent = l.errTitle; return; }
    if (body.length < 5) { err.textContent = l.errBody; return; }
    if (!root.querySelector("#f-ok").checked) { err.textContent = l.errOk; return; }
    const btn = root.querySelector("#f-submit"); btn.disabled = true; btn.textContent = l.posting;
    try {
      const args = { p_code: S.code, p_category: cat, p_title: title, p_body: body, p_author: name || null, p_photo: photo };
      // Older database versions do not take p_voter yet; retry without it.
      const id = await rpc("add_tip", { ...args, p_voter: S.voter }).catch(() => rpc("add_tip", args));
      S.name = name; store.set("name", name || null);
      if (photo) S.photos.set(id, photo);
      S.fresh = id; S.cat = "all"; S.sort = "new";
      setTimeout(() => { if (S.fresh === id) { S.fresh = null; document.getElementById("tip-" + id)?.classList.remove("fresh"); } }, 4000);
      s.close();
      await refresh();
      const el = $("tip-" + id); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      toast(l.tipPosted);
    } catch (ex) { err.textContent = l.netErr; btn.disabled = false; btn.textContent = l.postTip; }
  });
}

function openReport(id) {
  const l = L();
  const s = sheet(`<h2>${l.reportTitle}</h2><p style="margin:0;color:var(--muted)">${l.reportSub}</p>
    <div class="reasons">${l.reasons.map(([k, n]) => `<button data-reason="${k}">${esc(n)}</button>`).join("")}</div>
    <button class="btn ghost" id="r-cancel">${l.cancel}</button>`);
  s.el.querySelector("#r-cancel").onclick = s.close;
  s.el.querySelector(".reasons").addEventListener("click", async e => {
    const b = e.target.closest("[data-reason]"); if (!b) return;
    try {
      await rpc("report_tip", { p_code: S.code, p_tip: id, p_voter: S.voter, p_reason: b.dataset.reason });
      s.close(); const t = S.tips.find(x => x.id === id); if (t) t.reported = true; render(); toast(l.reportDone);
    } catch (ex) { toast(l.netErr); }
  });
}

async function sharePage() {
  const l = L(), url = siteUrl();
  if (navigator.share) { try { await navigator.share({ title: "Runner Tips", text: l.pageShare(url) }); return; } catch (e) { if (e.name === "AbortError") return; } }
  try { await navigator.clipboard.writeText(url); toast(l.copied); } catch (e) { prompt("", url); }
}

document.addEventListener("click", async e => {
  const g = sel => e.target.closest(sel);
  let b;
  if ((b = g("#l-nl")) || (b = g("#l-en"))) { S.lang = b.id === "l-nl" ? "nl" : "en"; store.set("lang", S.lang); render(); return; }
  if (g("#fab") || g("[data-share]")) { openAdd(); return; }
  if (g("[data-sharepage]")) { sharePage(); return; }
  if ((b = g("[data-like]"))) { toggleLike(b.dataset.like); return; }
  if ((b = g("[data-open]"))) { S.open[b.dataset.open] = !S.open[b.dataset.open]; render(); if (S.open[b.dataset.open]) { const i = $("c-" + b.dataset.open); if (i) i.focus({ preventScroll: true }); } return; }
  if ((b = g("[data-flag]"))) { if (b.dataset.done !== "true") openReport(b.dataset.flag); return; }
  if ((b = g("[data-cat]"))) { S.cat = S.cat === b.dataset.cat ? "all" : b.dataset.cat; render(); return; }
  if ((b = g("[data-sort]"))) { S.sort = b.dataset.sort; render(); return; }
  if ((b = g("[data-hide]"))) { try { await rpc("admin_set_hidden", { p_admin: S.admin, p_kind: "tip", p_id: b.dataset.hide, p_hidden: b.dataset.to === "true" }); await refresh(); } catch (ex) { toast(L().netErr); } return; }
  // Offline demo controls (outside the phone frame).
  if (g("[data-demo-mod]")) { S.admin = S.admin ? null : "demo"; await refresh(); demoPanel(); return; }
  if (g("[data-demo-reset]")) { location.reload(); return; }
  if (g("[data-modoff]")) { store.set("admin", null); S.admin = null; if (!IS_DEMO) history.replaceState(null, "", location.pathname); await refresh(); demoPanel(); if (!IS_DEMO) toast(L().modOffNote); return; }
  if ((b = g("[data-delc]"))) { if (!confirm(L().delConfirm)) return; try { await rpc("delete_comment", { p_code: S.code, p_comment: b.dataset.delc, p_voter: S.voter }); await refresh(); toast(L().commentDeleted); } catch (ex) { toast(L().netErr); } return; }
  if ((b = g("[data-hidec]"))) { try { await rpc("admin_set_hidden", { p_admin: S.admin, p_kind: "comment", p_id: b.dataset.hidec, p_hidden: b.dataset.to === "true" }); await refresh(); } catch (ex) { toast(L().netErr); } return; }
  if ((b = g("[data-clear]"))) { try { await rpc("admin_clear_reports", { p_admin: S.admin, p_tip: b.dataset.clear }); await refresh(); } catch (ex) { toast(L().netErr); } return; }
});

document.addEventListener("submit", async e => {
  if (e.target.id === "gate") {
    e.preventDefault();
    const code = $("gate-code").value.trim().toLowerCase();
    if (!code) return;
    S.code = code;
    try { await loadTips(); store.set("code", code); render(); }
    catch (ex) { S.code = null; $("gate-err").textContent = L().gateErr; }
    return;
  }
  if (e.target.classList.contains("cform")) {
    e.preventDefault();
    const id = e.target.dataset.tip;
    const text = $("c-" + id).value.trim();
    if (!text) return;
    const nameEl = $("cn-" + id);
    if (nameEl && nameEl.value.trim()) { S.name = nameEl.value.trim(); store.set("name", S.name); }
    try { await rpc("add_comment", { p_code: S.code, p_tip: id, p_author: S.name || null, p_body: text, p_voter: S.voter }); await refresh(); toast(L().commentPosted); }
    catch (ex) { toast(L().netErr); }
  }
});

// ---------- Start ----------
renderStatic();
(async () => {
  if (!S.code) { $("loading").hidden = true; render(); return; }
  if (!S.admin) logVisit();
  try { await loadTips(); render(); }
  catch (e) {
    if (String(e.message || e).includes("bad_code")) { S.code = null; store.set("code", null); render(); }
    else { $("app").innerHTML = `<div class="empty">${esc(L().netErr)}<button class="btn small" onclick="location.reload()">↻</button></div>`; }
  }
})();
})();
