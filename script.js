"use strict";

/* ====== CONTENU À PERSONNALISER ====== */

// Langues proposées (doivent exister dans i18n.js et dans le sélecteur de index.html)
// Pour réactiver le russe, le portugais ou l'espagnol : ajoutez "ru", "pt", "es" ici
// et leurs <option> dans le sélecteur de index.html (les traductions sont déjà dans i18n.js).
const LANGS = ["fr", "en"];
const DEFAULT_LANG = "fr";

// Mots qui défilent sous le titre (effet machine à écrire)
const TYPED_WORDS = ["SQL","NoSQL", "R","Python", "Power BI", "Excel", "Tableau"];

// Projets : clé (data-project) → préfixe des textes de la carte et outils affichés dans la fenêtre
const PROJECTS = {
  ventes:       { card: "p1", tags: ["SQL"] },
  segmentation: { card: "p2", tags: ["Python", "scikit-learn"] },
  kpi:          { card: "p3", tags: ["Excel"] },
  knime:        { card: "p4", tags: ["Knime"] },
  tableau:      { card: "p5", tags: ["Tableau"] },
  powerbi:      { card: "p6", tags: ["Power BI"] },
  python2:      { card: "p7", tags: ["Python"] },
  python3:      { card: "p8", tags: ["Python"] },
  python4:      { card: "p9", tags: ["Python"] },
  python5:      { card: "p10", tags: ["Python"] }
};

/* ====== OUTILS ====== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

// Le stockage local peut être indisponible : on protège chaque accès
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* ignoré */ } }
};

/* ====== LANGUE (FR / EN / RU) ====== */

let lang = DEFAULT_LANG;

// Renvoie la traduction d'une clé (retombe sur le français, puis sur la clé elle-même)
const t = key => (I18N[lang] && I18N[lang][key]) ?? I18N[DEFAULT_LANG][key] ?? key;

function applyLang(code) {
  lang = LANGS.includes(code) ? code : DEFAULT_LANG;
  document.documentElement.lang = lang;
  document.title = t("meta.title");

  $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
  $$("[data-page-current]").forEach(el => {
    el.setAttribute("aria-label", t("projects.page")
      .replace("{current}", el.dataset.pageCurrent)
      .replace("{total}", el.dataset.pageTotal));
  });
  $$("[data-i18n-alt]").forEach(el => el.setAttribute("alt", t(el.dataset.i18nAlt)));

  $("#langSelect").value = lang;

  store.set("lang", lang);
}

(function initLang() {
  const saved = store.get("lang");
  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  applyLang(LANGS.includes(saved) ? saved : (LANGS.includes(browser) ? browser : DEFAULT_LANG));
  $("#langSelect").addEventListener("change", e => applyLang(e.target.value));
})();

/* ====== THÈME CLAIR / SOMBRE (mémorisé) ====== */

(function initTheme() {
  const root = document.documentElement;
  const saved = store.get("theme");
  root.dataset.theme = saved === "light" ? "light" : "dark";

  $("#themeBtn").addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    store.set("theme", next);
  });
})();

/* ====== MENU MOBILE ====== */

(function initMenu() {
  const burger = $("#burger");
  const links = $("#navLinks");
  const close = () => {
    links.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
    burger.textContent = "☰";
  };
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.textContent = open ? "✕" : "☰";
  });
  links.addEventListener("click", e => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
})();

/* ====== EFFET MACHINE À ÉCRIRE ====== */

(function initTyped() {
  const el = $("#typed");
  if (!el) return;
  if (reduceMotion) { el.textContent = TYPED_WORDS.join(", "); return; }

  let w = 0, i = 0, deleting = false;
  function tick() {
    const word = TYPED_WORDS[w];
    el.textContent = word.slice(0, i);
    let delay = deleting ? 45 : 90;
    if (!deleting && i === word.length) { deleting = true; delay = 1400; }
    else if (deleting && i === 0) { deleting = false; w = (w + 1) % TYPED_WORDS.length; delay = 350; }
    i += deleting ? -1 : 1;
    setTimeout(tick, delay);
  }
  tick();
})();

/* ====== COMPTEURS ANIMÉS (KPI) ====== */

(function initCounters() {
  const counters = $$("[data-count]");
  const run = el => {
    const target = Number(el.dataset.count);
    if (reduceMotion) { el.textContent = target; return; }
    const duration = 1400;
    const start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(start);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  counters.forEach(c => io.observe(c));
})();

/* ====== APPARITION AU DÉFILEMENT (sections + barres de compétences) ====== */

(function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
})();

/* ====== BARRE DE PROGRESSION, LIEN ACTIF, BOUTON "HAUT DE PAGE" ====== */

(function initScroll() {
  const progress = $("#progress");
  const toTop = $("#toTop");
  const links = $$(".nav-links a");
  const sections = links.map(a => $(a.getAttribute("href"))).filter(Boolean);

  function onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    progress.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    toTop.hidden = h.scrollTop < 600;

    // Section actuellement visible = lien actif
    let current = null;
    const line = window.innerHeight * 0.35;
    sections.forEach(s => { if (s.getBoundingClientRect().top <= line) current = s.id; });
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
})();

/* ====== FILTRE DES PROJETS ====== */

(function initFilters() {
  const buttons = $$(".filter");
  const cards = $$("#projectGrid .card");
  const empty = $("#emptyMsg");
  const pagination = $("#projectPagination");
  const pageSize = 3;
  let activeFilter = "all";
  let currentPage = 1;

  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.toggle("active", b === btn));
    activeFilter = btn.dataset.filter;
    currentPage = 1;
    render();
  }));

  function render() {
    const matching = cards.filter(card =>
      activeFilter === "all" || card.dataset.cat.split(" ").includes(activeFilter)
    );
    const pageCount = Math.ceil(matching.length / pageSize);
    currentPage = pageCount ? Math.min(currentPage, pageCount) : 1;
    const first = (currentPage - 1) * pageSize;

    cards.forEach(card => {
      const index = matching.indexOf(card);
      card.classList.toggle("hide", index < first || index >= first + pageSize);
    });
    empty.hidden = matching.length > 0;
    pagination.replaceChildren();
    pagination.hidden = pageCount <= 1;

    for (let page = 1; page <= pageCount; page++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "page-btn" + (page === currentPage ? " active" : "");
      button.textContent = String(page);
      button.dataset.pageCurrent = String(page);
      button.dataset.pageTotal = String(pageCount);
      button.setAttribute("aria-label", t("projects.page")
        .replace("{current}", button.dataset.pageCurrent)
        .replace("{total}", button.dataset.pageTotal));
      if (page === currentPage) button.setAttribute("aria-current", "page");
      button.addEventListener("click", () => {
        currentPage = page;
        render();
      });
      pagination.append(button);
    }
  }

  render();
})();

/* ====== FENÊTRE DE DÉTAIL D'UN PROJET ====== */

(function initModal() {
  const modal = $("#modal");
  const title = $("#modalTitle");
  const body = $("#modalBody");
  const tags = $("#modalTags");
  let lastFocus = null;

  function open(id, trigger) {
    const p = PROJECTS[id];
    if (!p) return;
    lastFocus = trigger;
    title.textContent = t(p.card + ".title");

    // Les textes sont relus dans la langue active à chaque ouverture
    const labels = t("detail.labels");
    const texts = t("detail." + (p.detail || id));
    body.replaceChildren();
    labels.forEach((label, i) => {
      const dt = document.createElement("dt"); dt.textContent = label;
      const dd = document.createElement("dd"); dd.textContent = texts[i] || "";
      body.append(dt, dd);
    });

    tags.replaceChildren();
    p.tags.forEach(tag => { const s = document.createElement("span"); s.textContent = tag; tags.append(s); });

    modal.hidden = false;
    document.body.style.overflow = "hidden";
    $("#modalClose").focus();
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $$("[data-project]").forEach(btn => btn.addEventListener("click", () => open(btn.dataset.project, btn)));
  $("#modalClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) close(); });
})();

/* ====== DIVERS ====== */

$("#year").textContent = new Date().getFullYear();
