/* ===== App data ===== */
const LINKS = [
  {
    category: "Productivity",
    items: [
      { name: "Notion", desc: "All-in-one workspace", url: "https://notion.so", icon: "📝" },
      { name: "Microsoft 365", desc: "Office apps & cloud", url: "https://www.office.com", icon: "📊" },
      { name: "Google Drive", desc: "Cloud storage & docs", url: "https://drive.google.com", icon: "📁" },
      { name: "Google Calendar", desc: "Schedule & events", url: "https://calendar.google.com", icon: "📅" },
      { name: "Trello", desc: "Boards & task lists", url: "https://trello.com", icon: "📋" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "GitHub", desc: "Code hosting & collab", url: "https://github.com", icon: "🐙" },
      { name: "VS Code", desc: "Code editor in the browser", url: "https://vscode.dev", icon: "💻" },
      { name: "Stack Overflow", desc: "Q&A for developers", url: "https://stackoverflow.com", icon: "💬" },
      { name: "MDN", desc: "Web docs & references", url: "https://developer.mozilla.org", icon: "📖" },
      { name: "CodePen", desc: "Front-end playground", url: "https://codepen.io", icon: "🖊️" },
      { name: "Squarespace", desc: "Website builder", url: "https://www.squarespace.com", icon: "⬛" },
    ],
  },
  {
    category: "AI",
    items: [
      { name: "ChatGPT", desc: "Conversational AI", url: "https://chatgpt.com", icon: "🤖" },
      { name: "Claude", desc: "AI assistant by Anthropic", url: "https://claude.ai", icon: "✨" },
      { name: "Grok", desc: "AI by xAI", url: "https://grok.x.ai", icon: "⚡" },
    ],
  },
  {
    category: "Creative",
    items: [
      { name: "Canva", desc: "Design made simple", url: "https://canva.com", icon: "🎨" },
      { name: "Figma", desc: "Collaborative design", url: "https://figma.com", icon: "✏️" },
      { name: "Excalidraw", desc: "Sketch & whiteboard", url: "https://excalidraw.com", icon: "🖌️" },
      { name: "Remove.bg", desc: "Background remover", url: "https://remove.bg", icon: "✂️" },
    ],
  },
  {
    category: "Education",
    items: [
      { name: "Khan Academy", desc: "Free education for all", url: "https://khanacademy.org", icon: "🎓" },
      { name: "Wikipedia", desc: "The free encyclopedia", url: "https://wikipedia.org", icon: "🌐" },
    ],
  },
  {
    category: "Social Media",
    items: [
      { name: "Discord", desc: "Chat & communities", url: "https://discord.com", icon: "🎮" },
      { name: "WhatsApp", desc: "Messaging", url: "https://web.whatsapp.com", icon: "💚" },
      { name: "Facebook", desc: "Social network", url: "https://facebook.com", icon: "📘" },
      { name: "Instagram", desc: "Photos & stories", url: "https://instagram.com", icon: "📷" },
      { name: "Snapchat", desc: "Snaps & stories", url: "https://web.snapchat.com", icon: "👻" },
      { name: "Pinterest", desc: "Ideas & inspiration", url: "https://pinterest.com", icon: "📌" },
      { name: "LinkedIn", desc: "Professional network", url: "https://linkedin.com", icon: "💼" },
      { name: "Reddit", desc: "Communities & discussion", url: "https://reddit.com", icon: "🟠" },
      { name: "X (Twitter)", desc: "Real-time conversation", url: "https://x.com", icon: "𝕏" },
    ],
  },
  {
    category: "Music & Entertainment",
    items: [
      { name: "Spotify", desc: "Music & podcasts", url: "https://open.spotify.com", icon: "🎵" },
      { name: "YouTube", desc: "Videos & streams", url: "https://youtube.com", icon: "▶️" },
      { name: "Twitch", desc: "Live streaming", url: "https://twitch.tv", icon: "🟣" },
    ],
  },
  {
    category: "Shopping",
    items: [
      { name: "Amazon", desc: "Online shopping", url: "https://amazon.com", icon: "📦" },
    ],
  },
  {
    category: "Services",
    items: [
      { name: "Apple", desc: "Apple products", url: "https://apple.com", icon: "🍎" },
      { name: "Samsung", desc: "Samsung products", url: "https://samsung.com", icon: "📱" },
    ],
  },
];

/* ===== DOM ===== */
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const sidebarCollapse = document.getElementById("sidebarCollapse");
const navItems = document.querySelectorAll(".nav-item");
const viewSearch = document.getElementById("view-search");
const viewApps = document.getElementById("view-apps");
const greetingEl = document.getElementById("greeting");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const searchPlus = document.getElementById("searchPlus");
const searchClear = document.getElementById("searchClear");
const placeholderAnim = document.getElementById("placeholderAnim");
const liveResults = document.getElementById("liveResults");
const liveList = document.getElementById("liveList");
const categoriesEl = document.getElementById("categories");
const noResultsEl = document.getElementById("noResults");
const themeToggle = document.getElementById("themeToggle");

/* ===== Theme ===== */
function getPreferredTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return "dark";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ===== Sidebar collapse ===== */
function getPreferredSidebar() {
  const saved = localStorage.getItem("sidebarCollapsed");
  return saved === "true";
}

function applySidebarCollapsed(collapsed) {
  sidebar.classList.toggle("collapsed", collapsed);
  localStorage.setItem("sidebarCollapsed", collapsed ? "true" : "false");
  sidebarCollapse.title = collapsed ? "Expand sidebar" : "Collapse sidebar";
  sidebarCollapse.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
}

sidebarCollapse.addEventListener("click", () => {
  const isCollapsed = sidebar.classList.contains("collapsed");
  applySidebarCollapsed(!isCollapsed);
});

/* ===== Greeting ===== */
function setGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) greetingEl.textContent = "Good morning";
  else if (hour < 18) greetingEl.textContent = "Good afternoon";
  else greetingEl.textContent = "Good evening";
}

/* ===== Animated placeholder ===== */
const PLACEHOLDERS = [
  "Ask anything",
  "Open an app, search Google, or ask ChatGPT",
];
let placeholderIndex = 0;
let placeholderTimer = null;

function updatePlaceholderVisibility() {
  const hasValue = searchInput.value.trim().length > 0;
  placeholderAnim.classList.toggle("hidden", hasValue);
  searchClear.hidden = !hasValue;
}

function cyclePlaceholder() {
  if (searchInput.value.trim().length > 0) return;

  placeholderAnim.classList.add("fade-out");
  setTimeout(() => {
    placeholderIndex = (placeholderIndex + 1) % PLACEHOLDERS.length;
    placeholderAnim.textContent = PLACEHOLDERS[placeholderIndex];
    placeholderAnim.classList.remove("fade-out");
  }, 320);
}

function startPlaceholderCycle() {
  if (placeholderTimer) clearInterval(placeholderTimer);
  placeholderAnim.textContent = PLACEHOLDERS[0];
  placeholderIndex = 0;
  placeholderTimer = setInterval(cyclePlaceholder, 6000);
}

/* ===== Flatten links ===== */
function getAllLinks() {
  return LINKS.flatMap((g) =>
    g.items.map((item) => ({ ...item, category: g.category }))
  );
}

const FREQUENTLY_USED = ["ChatGPT", "Instagram", "YouTube", "X (Twitter)"];

function createAppCard(item, sameTab) {
  const a = document.createElement("a");
  a.className = "link-card";
  a.href = item.url;
  a.target = sameTab ? "_self" : "_blank";
  a.rel = "noopener noreferrer";
  a.innerHTML = `
    <div class="link-icon">${item.icon}</div>
    <div class="link-info">
      <div class="link-name">${item.name}</div>
      <div class="link-desc">${item.desc}</div>
    </div>
  `;
  return a;
}

/* ===== Render Apps ===== */
function renderApps() {
  categoriesEl.innerHTML = "";
  let total = 0;
  const all = getAllLinks();

  // Frequently used section
  const freqItems = FREQUENTLY_USED.map((name) =>
    all.find((item) => item.name === name)
  ).filter(Boolean);

  if (freqItems.length) {
    const cat = document.createElement("div");
    cat.className = "category";
    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = "Frequently used";
    cat.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "links-grid";
    freqItems.forEach((item) => grid.appendChild(createAppCard(item, false)));
    cat.appendChild(grid);
    categoriesEl.appendChild(cat);
  }

  LINKS.forEach((group) => {
    total += group.items.length;
    const cat = document.createElement("div");
    cat.className = "category";

    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = group.category;
    cat.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "links-grid";

    group.items.forEach((item) => {
      grid.appendChild(createAppCard(item, false));
    });

    cat.appendChild(grid);
    categoriesEl.appendChild(cat);
  });

  noResultsEl.hidden = total > 0;
}

/* ===== Live results (animated) ===== */
function updateLiveResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    liveResults.hidden = true;
    liveList.innerHTML = "";
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

  liveList.innerHTML = "";
  matches.slice(0, 8).forEach((item, i) => {
    const a = createAppCard(item, true);
    a.style.animationDelay = `${0.04 * (i + 1)}s`;
    a.classList.add("live-card-anim");
    liveList.appendChild(a);
  });
  liveResults.hidden = false;
}

/* ===== URL helpers ===== */
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

/** 6 words or less → Google; more → ChatGPT */
function isLongerQuery(str) {
  const words = str.trim().split(/\s+/).filter(Boolean);
  return words.length > 6;
}

/* ===== Navigate in same tab ===== */
function goTo(url) {
  window.location.href = url;
}

/* ===== Submit: match → URL → ChatGPT (long) / Google (short) ===== */
function handleSearchSubmit(e) {
  e.preventDefault();
  const raw = searchInput.value.trim();
  if (!raw) return;

  const q = raw.toLowerCase();
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

  if (isLongerQuery(raw)) {
    goTo("https://chatgpt.com/?q=" + encodeURIComponent(raw));
    return;
  }

  goTo("https://www.google.com/search?q=" + encodeURIComponent(raw));
}

/* ===== Navigation ===== */
function setView(viewName) {
  if (viewName === "library") {
    goTo("https://drive.google.com");
    return;
  }

  if (viewName === "create") {
    goTo("https://m365.cloud.microsoft/apps");
    return;
  }

  navItems.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  viewSearch.classList.toggle("active", viewName === "search");
  viewApps.classList.toggle("active", viewName === "apps");
  sidebar.classList.remove("open");

  if (viewName === "search") {
    setTimeout(() => searchInput.focus(), 50);
  }
}

navItems.forEach((btn) => {
  btn.addEventListener("click", () => setView(btn.dataset.view));
});

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

document.getElementById("main").addEventListener("click", () => {
  if (sidebar.classList.contains("open")) {
    sidebar.classList.remove("open");
  }
});

/* ===== Search interactions ===== */
searchInput.addEventListener("input", () => {
  updateLiveResults(searchInput.value);
  updatePlaceholderVisibility();
});

searchForm.addEventListener("submit", handleSearchSubmit);

searchPlus.addEventListener("click", () => {
  goTo("https://chatgpt.com");
});

searchClear.addEventListener("click", () => {
  searchInput.value = "";
  updateLiveResults("");
  updatePlaceholderVisibility();
  searchInput.focus();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    setView("search");
    searchInput.focus();
  }
  if (e.key === "Escape") {
    searchInput.blur();
    liveResults.hidden = true;
  }
});

/* Init */
applyTheme(getPreferredTheme());
applySidebarCollapsed(getPreferredSidebar());
setGreeting();
renderApps();
setView("search");
startPlaceholderCycle();
updatePlaceholderVisibility();
