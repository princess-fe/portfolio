"use strict";

/* ====== CONTENU À PERSONNALISER ====== */

// Mots qui défilent sous le titre (effet machine à écrire)
const TYPED_WORDS = ["SQL", "Python", "Power BI", "Excel", "Tableau"];

// Adresse qui reçoit les messages du formulaire
const CONTACT_EMAIL = "prenom.nom@exemple.fr";

// Détail de chaque projet (clé = valeur de data-project dans index.html)
const PROJECTS = {
  ventes: {
    title: "Analyse des ventes e-commerce",
    fields: {
      "Contexte": "[Entreprise ou cadre du projet, et la question posée.]",
      "Données": "[Source, volume, période, qualité des données.]",
      "Méthode": "[Nettoyage, requêtes SQL, indicateurs calculés, outils.]",
      "Résultat": "[Résultat chiffré et recommandations.]",
      "Livrable": "[Dashboard Power BI, rapport, présentation… ajoutez un lien.]"
    },
    tags: ["SQL", "Power BI"]
  },
  segmentation: {
    title: "Segmentation clients",
    fields: {
      "Contexte": "[Entreprise ou cadre du projet, et la question posée.]",
      "Données": "[Source, volume, période, qualité des données.]",
      "Méthode": "[RFM, clustering, validation des segments.]",
      "Résultat": "[Segments identifiés et actions marketing proposées.]",
      "Livrable": "[Notebook, présentation… ajoutez un lien GitHub.]"
    },
    tags: ["Python", "scikit-learn"]
  },
  kpi: {
    title: "Suivi de KPI automatisé",
    fields: {
      "Contexte": "[Entreprise ou cadre du projet, et la question posée.]",
      "Données": "[Sources connectées, fréquence de mise à jour.]",
      "Méthode": "[Automatisation du reporting, formules, connecteurs.]",
      "Résultat": "[Temps gagné, fiabilité, décisions facilitées.]",
      "Livrable": "[Dashboard Tableau ou classeur Excel.]"
    },
    tags: ["Excel", "Tableau"]
  }
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

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ====== THÈME CLAIR / SOMBRE (mémorisé) ====== */

(function initTheme() {
  const root = document.documentElement;
  const saved = store.get("theme");
  if (saved) root.dataset.theme = saved;
  else if (matchMedia("(prefers-color-scheme: light)").matches) root.dataset.theme = "light";

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

  buttons.forEach(btn => btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    let visible = 0;
    cards.forEach(card => {
      const match = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("hide", !match);
      if (match) visible++;
    });
    empty.hidden = visible > 0;
  }));
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
    title.textContent = p.title;
    body.replaceChildren();
    Object.entries(p.fields).forEach(([k, v]) => {
      const dt = document.createElement("dt"); dt.textContent = k;
      const dd = document.createElement("dd"); dd.textContent = v;
      body.append(dt, dd);
    });
    tags.replaceChildren();
    p.tags.forEach(t => { const s = document.createElement("span"); s.textContent = t; tags.append(s); });
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

/* ====== COPIE DE L'E-MAIL ====== */

(function initCopy() {
  $("#mailText").textContent = CONTACT_EMAIL;
  $("#copyMail").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toast("E-mail copié !");
    } catch {
      toast("Copie impossible, sélectionnez l'adresse à la main.");
    }
  });
})();

/* ====== FORMULAIRE DE CONTACT (validation + ouverture du client mail) ====== */

(function initForm() {
  const form = $("#contactForm");
  const rules = {
    name: v => v.trim().length >= 2 || "Indiquez votre nom.",
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || "Adresse e-mail invalide.",
    message: v => v.trim().length >= 10 || "Message trop court (10 caractères minimum)."
  };

  function check(field) {
    const res = rules[field.name](field.value);
    const msg = $(`.err[data-for="${field.name}"]`);
    const ok = res === true;
    field.classList.toggle("invalid", !ok);
    msg.textContent = ok ? "" : res;
    return ok;
  }

  $$("input, textarea", form).forEach(f => {
    f.addEventListener("blur", () => check(f));
    f.addEventListener("input", () => { if (f.classList.contains("invalid")) check(f); });
  });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const fields = $$("input, textarea", form);
    const valid = fields.map(check).every(Boolean);
    if (!valid) { fields.find(f => f.classList.contains("invalid")).focus(); return; }

    const data = Object.fromEntries(new FormData(form));
    const subject = encodeURIComponent("Contact depuis votre portfolio – " + data.name);
    const text = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${text}`;
    toast("Ouverture de votre messagerie…");
    form.reset();
  });
})();

/* ====== DIVERS ====== */

$("#year").textContent = new Date().getFullYear();
