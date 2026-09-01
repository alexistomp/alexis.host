/* ===== App data (general apps — no M365 / Google Workspace tools) ===== */
const LINKS = [
  {
    category: "Productivity",
    items: [
      { name: "Notion", desc: "Notes", url: "https://notion.so", icon: "📝" },
      { name: "Trello", desc: "Tasks", url: "https://trello.com", icon: "📋" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "GitHub", desc: "Code", url: "https://github.com", icon: "🐙" },
      { name: "VS Code", desc: "Editor", url: "https://vscode.dev", icon: "💻" },
      { name: "Stack Overflow", desc: "Q&A", url: "https://stackoverflow.com", icon: "💬" },
      { name: "MDN", desc: "Docs", url: "https://developer.mozilla.org", icon: "📖" },
      { name: "CodePen", desc: "Playground", url: "https://codepen.io", icon: "🖊️" },
      { name: "Squarespace", desc: "Builder", url: "https://www.squarespace.com", icon: "⬛" },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "ChatGPT", desc: "AI", url: "https://chatgpt.com", icon: "🤖" },
      { name: "Claude", desc: "AI", url: "https://claude.ai", icon: "✨" },
      { name: "Grok", desc: "AI", url: "https://grok.com", icon: "⚡" },
    ],
  },
  {
    category: "Creative",
    items: [
      { name: "Canva", desc: "Design", url: "https://canva.com", icon: "🎨" },
      { name: "Figma", desc: "Design", url: "https://figma.com", icon: "✏️" },
      { name: "Excalidraw", desc: "Sketch", url: "https://excalidraw.com", icon: "🖌️" },
      { name: "Remove.bg", desc: "Edit", url: "https://remove.bg", icon: "✂️" },
    ],
  },
  {
    category: "Education",
    items: [
      { name: "Canvas", desc: "Learning", url: "https://canvas.qut.edu.au/login", icon: "🎓" },
      { name: "Khan Academy", desc: "Learning", url: "https://khanacademy.org", icon: "📚" },
      { name: "Wikipedia", desc: "Reference", url: "https://wikipedia.org", icon: "🌐" },
    ],
  },
  {
    category: "Social Media",
    items: [
      { name: "Discord", desc: "Chat", url: "https://discord.com/app", icon: "🎮" },
      { name: "WhatsApp", desc: "Messaging", url: "https://web.whatsapp.com", icon: "💚" },
      { name: "Facebook", desc: "Social", url: "https://facebook.com", icon: "📘" },
      { name: "Instagram", desc: "Photos", url: "https://instagram.com", icon: "📷" },
      { name: "Snapchat", desc: "Snaps", url: "https://web.snapchat.com", icon: "👻" },
      { name: "Pinterest", desc: "Ideas", url: "https://pinterest.com", icon: "📌" },
      { name: "LinkedIn", desc: "Network", url: "https://linkedin.com", icon: "💼" },
      { name: "Reddit", desc: "Discuss", url: "https://reddit.com", icon: "🟠" },
      { name: "X (Twitter)", desc: "Social", url: "https://x.com", icon: "𝕏" },
    ],
  },
  {
    category: "Music & Entertainment",
    items: [
      { name: "Spotify", desc: "Music", url: "https://open.spotify.com", icon: "🎵" },
      { name: "YouTube", desc: "Video", url: "https://youtube.com", icon: "▶️" },
      { name: "Twitch", desc: "Streaming", url: "https://twitch.tv", icon: "🟣" },
    ],
  },
  {
    category: "Shopping",
    items: [
      { name: "Amazon", desc: "Shopping", url: "https://amazon.com", icon: "📦" },
    ],
  },
  {
    category: "Services",
    items: [
      { name: "Apple", desc: "Products", url: "https://apple.com", icon: "🍎" },
      { name: "Samsung", desc: "Products", url: "https://samsung.com", icon: "📱" },
    ],
  },
];

/* ===== Create page — Microsoft 365 & Google Workspace ===== */
const CREATE_LINKS = [
  {
    category: "Microsoft 365",
    items: [
      { name: "Word", desc: "Docs", url: "https://www.office.com/launch/word", icon: "📘" },
      { name: "Excel", desc: "Sheets", url: "https://www.office.com/launch/excel", icon: "📗" },
      { name: "PowerPoint", desc: "Slides", url: "https://www.office.com/launch/powerpoint", icon: "📙" },
      { name: "OneDrive", desc: "Storage", url: "https://onedrive.live.com", icon: "☁️" },
      { name: "Outlook", desc: "Email", url: "https://outlook.live.com", icon: "📧" },
      { name: "Teams", desc: "Chat", url: "https://teams.microsoft.com", icon: "👥" },
      { name: "OneNote", desc: "Notes", url: "https://www.office.com/launch/onenote", icon: "📓" },
      { name: "Forms", desc: "Surveys", url: "https://forms.office.com", icon: "📋" },
    ],
  },
  {
    category: "Google Workspace",
    items: [
      { name: "Docs", desc: "Docs", url: "https://docs.google.com", icon: "📄" },
      { name: "Sheets", desc: "Sheets", url: "https://sheets.google.com", icon: "📊" },
      { name: "Slides", desc: "Slides", url: "https://slides.google.com", icon: "📽" },
      { name: "Drive", desc: "Storage", url: "https://drive.google.com", icon: "📁" },
      { name: "Gmail", desc: "Email", url: "https://mail.google.com", icon: "✉️" },
      { name: "Calendar", desc: "Schedule", url: "https://calendar.google.com", icon: "📅" },
      { name: "Meet", desc: "Meet", url: "https://meet.google.com", icon: "🎥" },
      { name: "Forms", desc: "Surveys", url: "https://forms.google.com", icon: "📝" },
    ],
  },
];

const RESERVED_SHORTCUTS = {
  y: "YouTube",
  x: "X (Twitter)",
  chat: "ChatGPT",
  in: "Instagram",
  r: "Reddit",
  a: "Apple",
  ca: "Canvas",
};

function getAppLinks() {
  return LINKS.flatMap((g) =>
    g.items.map((item) => ({ ...item, category: g.category, source: "apps" }))
  );
}

function getCreateLinks() {
  return CREATE_LINKS.flatMap((g) =>
    g.items.map((item) => ({ ...item, category: g.category, source: "create" }))
  );
}

function getAllLinks() {
  return [...getAppLinks(), ...getCreateLinks()];
}

function generateKeyCandidates(name) {
  const clean = name.replace(/[^a-zA-Z0-9\s]/g, " ").trim().toLowerCase();
  const words = clean.split(/\s+/).filter(Boolean);
  const candidates = [];
  if (words.length === 0) return candidates;
  if (words[0].length <= 4) candidates.push(words[0]);
  if (words.length >= 2) candidates.push(words.map((w) => w[0]).join(""));
  if (words[0].length >= 2) candidates.push(words[0].slice(0, 2));
  if (words[0].length >= 3) candidates.push(words[0].slice(0, 3));
  candidates.push(words[0]);
  if (words.length >= 2) {
    candidates.push(words[0].slice(0, 2) + words[1][0]);
    candidates.push(words[0][0] + words[1].slice(0, 2));
  }
  return [...new Set(candidates)];
}

function buildShortcuts() {
  const all = getAllLinks();
  const usedKeys = new Set(Object.keys(RESERVED_SHORTCUTS));
  const byName = new Map();
  all.forEach((item) => {
    if (!byName.has(item.name)) byName.set(item.name, item);
  });
  const shortcuts = [];

  for (const [key, name] of Object.entries(RESERVED_SHORTCUTS)) {
    const item = byName.get(name);
    if (item) {
      shortcuts.push({
        key,
        name: item.name,
        desc: item.desc,
        url: item.url,
        icon: item.icon,
        source: item.source,
      });
    }
  }

  for (const item of all) {
    if (shortcuts.some((s) => s.url === item.url)) continue;

    const candidates = generateKeyCandidates(item.name);
    if (item.category === "Google Workspace" && item.name === "Forms") {
      candidates.unshift("gf", "gforms");
    }
    if (item.category === "Microsoft 365" && item.name === "Forms") {
      candidates.unshift("mforms", "msforms");
    }
    // Disambiguate Docs/Sheets/Slides between suites
    if (item.category === "Google Workspace") {
      if (item.name === "Docs") candidates.unshift("gd", "gdocs");
      if (item.name === "Sheets") candidates.unshift("gs", "gsheets");
      if (item.name === "Slides") candidates.unshift("gsl", "gslides");
      if (item.name === "Drive") candidates.unshift("gdrive", "drv");
    }

    let chosen = null;
    for (const c of candidates) {
      if (c && !usedKeys.has(c)) {
        chosen = c;
        break;
      }
    }
    if (!chosen) {
      let base = (candidates[0] || item.name.slice(0, 2).toLowerCase() || "app").replace(/\s/g, "");
      let n = 2;
      chosen = base;
      while (usedKeys.has(chosen)) {
        chosen = base + n;
        n += 1;
      }
    }
    usedKeys.add(chosen);
    shortcuts.push({
      key: chosen,
      name: item.name,
      desc: item.desc,
      url: item.url,
      icon: item.icon,
      source: item.source,
    });
  }

  return shortcuts;
}

const SHORTCUTS = buildShortcuts();
const SHORTCUT_BY_KEY = new Map(SHORTCUTS.map((s) => [s.key, s]));

let currentPage = "search";

const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebarCollapse = document.getElementById("sidebarCollapse");
const greetingEl = document.getElementById("greeting");
const centerGroup = document.getElementById("centerGroup");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchPlus = document.getElementById("searchPlus");
const searchClear = document.getElementById("searchClear");
const placeholderAnim = document.getElementById("placeholderAnim");
const liveResults = document.getElementById("liveResults");
const liveList = document.getElementById("liveList");
const categoriesEl = document.getElementById("categories");
const createCategoriesEl = document.getElementById("createCategories");
const noResultsEl = document.getElementById("noResults");
const themeToggle = document.getElementById("themeToggle");
const resultsLayer = document.getElementById("resultsLayer");
const engineToggle = document.getElementById("engineToggle");
const engineBtns = engineToggle ? engineToggle.querySelectorAll(".engine-btn") : [];
const navItems = document.querySelectorAll(".nav-item[data-view]");
const views = {
  search: document.getElementById("view-search"),
  apps: document.getElementById("view-apps"),
  create: document.getElementById("view-create"),
};

let searchEngine = localStorage.getItem("searchEngine") || "google";
let appsRendered = false;
let createRendered = false;

function applyEngine(engine) {
  searchEngine = engine;
  localStorage.setItem("searchEngine", engine);
  engineBtns.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.engine === engine);
  });
}

if (engineToggle) {
  engineBtns.forEach((btn) => {
    btn.addEventListener("click", () => applyEngine(btn.dataset.engine));
  });
}

function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

function getPreferredSidebar() {
  return localStorage.getItem("sidebarCollapsed") === "true";
}

function applySidebarCollapsed(collapsed) {
  if (!sidebar) return;
  sidebar.classList.toggle("collapsed", collapsed);
  localStorage.setItem("sidebarCollapsed", collapsed ? "true" : "false");
  if (sidebarCollapse) {
    sidebarCollapse.title = collapsed ? "Expand sidebar" : "Collapse sidebar";
    sidebarCollapse.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
  }
}

if (sidebarCollapse) {
  sidebarCollapse.addEventListener("click", () => {
    applySidebarCollapsed(!sidebar.classList.contains("collapsed"));
  });
}

function setGreeting() {
  if (!greetingEl) return;
  const hour = new Date().getHours();
  if (hour < 12) greetingEl.textContent = "Good morning";
  else if (hour < 18) greetingEl.textContent = "Good afternoon";
  else greetingEl.textContent = "Good evening";
}

const PLACEHOLDERS = [
  "Ask anything",
  "Open an app, search Google, or ask ChatGPT",
];
let placeholderIndex = 0;
let placeholderTimer = null;

function updatePlaceholderVisibility() {
  if (!searchInput || !placeholderAnim) return;
  const hasValue = searchInput.value.trim().length > 0;
  placeholderAnim.classList.toggle("hidden", hasValue);
  if (searchClear) searchClear.hidden = !hasValue;
}

function cyclePlaceholder() {
  if (!placeholderAnim || !searchInput) return;
  if (searchInput.value.trim().length > 0) return;
  placeholderAnim.classList.add("fade-out");
  setTimeout(() => {
    placeholderIndex = (placeholderIndex + 1) % PLACEHOLDERS.length;
    placeholderAnim.textContent = PLACEHOLDERS[placeholderIndex];
    placeholderAnim.classList.remove("fade-out");
  }, 320);
}

function startPlaceholderCycle() {
  if (!placeholderAnim) return;
  if (placeholderTimer) clearInterval(placeholderTimer);
  placeholderAnim.textContent = PLACEHOLDERS[0];
  placeholderIndex = 0;
  placeholderTimer = setInterval(cyclePlaceholder, 6000);
}

const FREQUENTLY_USED = ["ChatGPT", "Instagram", "YouTube", "X (Twitter)", "Canvas"];

function createAppCard(item, sameTab, showKey) {
  const a = document.createElement("a");
  a.className = "link-card" + (showKey && item.key ? " shortcut-card" : "");
  a.href = item.url;
  a.target = sameTab ? "_self" : "_blank";
  a.rel = "noopener noreferrer";
  const keyHtml =
    showKey && item.key ? '<div class="shortcut-key">' + item.key + "</div>" : "";
  a.innerHTML =
    '<div class="link-icon">' +
    item.icon +
    '</div><div class="link-info"><div class="link-name">' +
    item.name +
    '</div><div class="link-desc">' +
    item.desc +
    "</div></div>" +
    keyHtml;
  return a;
}

function renderApps() {
  if (!categoriesEl) return;
  categoriesEl.innerHTML = "";
  const all = getAppLinks();
  const keyByUrl = new Map(SHORTCUTS.map((s) => [s.url, s.key]));
  const keyFor = (item) => keyByUrl.get(item.url);

  const freqItems = FREQUENTLY_USED.map((name) => {
    const item = all.find((i) => i.name === name);
    if (!item) return null;
    return { ...item, key: keyFor(item) };
  }).filter(Boolean);

  if (freqItems.length) {
    const cat = document.createElement("div");
    cat.className = "category";
    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = "Frequently used";
    cat.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "links-grid";
    freqItems.forEach((item) => grid.appendChild(createAppCard(item, false, true)));
    cat.appendChild(grid);
    categoriesEl.appendChild(cat);
  }

  LINKS.forEach((group) => {
    const cat = document.createElement("div");
    cat.className = "category";
    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = group.category;
    cat.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "links-grid";
    group.items.forEach((item) => {
      grid.appendChild(createAppCard({ ...item, key: keyFor(item) }, false, true));
    });
    cat.appendChild(grid);
    categoriesEl.appendChild(cat);
  });

  if (noResultsEl) noResultsEl.hidden = all.length > 0;
  appsRendered = true;
}

function renderCreate() {
  if (!createCategoriesEl) return;
  const keyByUrl = new Map(SHORTCUTS.map((s) => [s.url, s.key]));
  createCategoriesEl.innerHTML = "";
  CREATE_LINKS.forEach((group) => {
    const cat = document.createElement("div");
    cat.className = "category";
    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = group.category;
    cat.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "links-grid";
    group.items.forEach((item) => {
      grid.appendChild(
        createAppCard({ ...item, key: keyByUrl.get(item.url) }, false, true)
      );
    });
    cat.appendChild(grid);
    createCategoriesEl.appendChild(cat);
  });
  createRendered = true;
}

function updateLiveResults(query) {
  if (!liveResults || !liveList) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    liveResults.hidden = true;
    liveList.innerHTML = "";
    return;
  }

  const shortcutMatch = SHORTCUT_BY_KEY.get(q);
  if (shortcutMatch) {
    liveList.innerHTML = "";
    const a = createAppCard(shortcutMatch, true, true);
    a.style.animationDelay = "0.04s";
    a.classList.add("live-card-anim");
    liveList.appendChild(a);
    liveResults.hidden = false;
    return;
  }

  const matches = getAllLinks().filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    liveResults.hidden = true;
    liveList.innerHTML = "";
    return;
  }

  const keyByUrl = new Map(SHORTCUTS.map((s) => [s.url, s.key]));
  liveList.innerHTML = "";
  matches.slice(0, 8).forEach((item, i) => {
    const a = createAppCard({ ...item, key: keyByUrl.get(item.url) }, true, true);
    a.style.animationDelay = 0.04 * (i + 1) + "s";
    a.classList.add("live-card-anim");
    liveList.appendChild(a);
  });
  liveResults.hidden = false;
}

function looksLikeUrl(str) {
  const s = str.trim();
  if (/^https?:\/\//i.test(s)) return true;
  if (/^[\w-]+(\.[\w-]+)+/.test(s) && !/\s/.test(s)) return true;
  return false;
}

function normalizeUrl(str) {
  const s = str.trim();
  if (/^https?:\/\//i.test(s)) return s;
  return "https://" + s;
}

function goTo(url) {
  window.location.href = url;
}

function handleSearchSubmit(e) {
  e.preventDefault();
  if (!searchInput) return;
  const raw = searchInput.value.trim();
  if (!raw) return;

  const q = raw.toLowerCase();

  const shortcut = SHORTCUT_BY_KEY.get(q);
  if (shortcut) {
    goTo(shortcut.url);
    return;
  }

  const matches = getAllLinks().filter(
    (item) =>
      item.name.toLowerCase() === q ||
      item.name.toLowerCase().includes(q)
  );

  if (matches.length === 1) {
    goTo(matches[0].url);
    return;
  }

  if (looksLikeUrl(raw)) {
    goTo(normalizeUrl(raw));
    return;
  }

  if (searchEngine === "chatgpt") {
    goTo("https://chatgpt.com/?q=" + encodeURIComponent(raw));
  } else {
    goTo("https://www.google.com/search?q=" + encodeURIComponent(raw));
  }
}

function applySearchPosition() {
  if (!centerGroup) return;
  const isBottom = currentPage === "apps" || currentPage === "create";
  centerGroup.classList.toggle("search-bottom", isBottom);
  if (greetingEl) greetingEl.classList.toggle("hidden-greeting", isBottom);
  if (resultsLayer) resultsLayer.classList.toggle("hidden-results", isBottom);
}

function setView(view, pushHash = true) {
  if (!views[view]) view = "search";
  currentPage = view;
  document.body.dataset.page = view;

  Object.keys(views).forEach((key) => {
    if (views[key]) views[key].classList.toggle("active", key === view);
  });

  navItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.view === view);
  });

  if (view === "apps" && !appsRendered) renderApps();
  if (view === "create" && !createRendered) renderCreate();

  applySearchPosition();

  // Clear live results when leaving search
  if (view !== "search" && liveResults) {
    liveResults.hidden = true;
  }

  if (pushHash) {
    const hash = view === "search" ? "" : "#" + view;
    if (location.hash !== hash && (location.hash || hash)) {
      history.pushState({ view }, "", hash || location.pathname + location.search);
    }
  }

  // Close mobile sidebar after nav
  if (sidebar && sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }

  if (view === "search" && searchInput) {
    setTimeout(() => searchInput.focus(), 50);
  }
}

function viewFromHash() {
  const h = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (h === "apps" || h === "create") return h;
  return "search";
}

if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

const mainEl = document.getElementById("main");
if (mainEl && sidebar) {
  mainEl.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) sidebar.classList.remove("open");
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    updateLiveResults(searchInput.value);
    updatePlaceholderVisibility();
  });
}

if (searchForm) {
  searchForm.addEventListener("submit", handleSearchSubmit);
}

if (searchPlus) {
  searchPlus.addEventListener("click", () => goTo("https://chatgpt.com"));
}

if (searchClear) {
  searchClear.addEventListener("click", () => {
    searchInput.value = "";
    updateLiveResults("");
    updatePlaceholderVisibility();
    searchInput.focus();
  });
}

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const view = item.dataset.view;
    if (view) setView(view);
  });
});

window.addEventListener("popstate", () => {
  setView(viewFromHash(), false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput && searchInput) {
    e.preventDefault();
    if (currentPage !== "search") {
      setView("search");
      return;
    }
    searchInput.focus();
  }
  if (e.key === "Escape" && searchInput) {
    searchInput.blur();
    if (liveResults) liveResults.hidden = true;
  }
});

applyTheme(getPreferredTheme());
applySidebarCollapsed(getPreferredSidebar());
applyEngine(searchEngine);
setGreeting();
startPlaceholderCycle();
updatePlaceholderVisibility();

// Initial view from hash (supports deep links like index.html#apps)
setView(viewFromHash(), false);
