/* ===== Link data ===== */
const LINKS = [
  {
    category: "Productivity",
    items: [
      { name: "Notion", desc: "All-in-one workspace", url: "https://notion.so", icon: "📝" },
      { name: "Google Drive", desc: "Cloud storage & docs", url: "https://drive.google.com", icon: "📁" },
      { name: "Todoist", desc: "Task management", url: "https://todoist.com", icon: "✅" },
      { name: "Calendar", desc: "Google Calendar", url: "https://calendar.google.com", icon: "📅" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "GitHub", desc: "Code hosting & collab", url: "https://github.com", icon: "🐙" },
      { name: "Stack Overflow", desc: "Q&A for developers", url: "https://stackoverflow.com", icon: "💬" },
      { name: "MDN", desc: "Web docs & references", url: "https://developer.mozilla.org", icon: "📖" },
      { name: "CodePen", desc: "Front-end playground", url: "https://codepen.io", icon: "🖊️" },
    ],
  },
  {
    category: "Social & News",
    items: [
      { name: "X (Twitter)", desc: "Real-time conversation", url: "https://x.com", icon: "𝕏" },
      { name: "Reddit", desc: "Communities & discussion", url: "https://reddit.com", icon: "🟠" },
      { name: "BBC News", desc: "Global news coverage", url: "https://bbc.com/news", icon: "📰" },
      { name: "Hacker News", desc: "Tech & startup news", url: "https://news.ycombinator.com", icon: "🔶" },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "Khan Academy", desc: "Free education for all", url: "https://khanacademy.org", icon: "🎓" },
      { name: "Coursera", desc: "Online courses", url: "https://coursera.org", icon: "📚" },
      { name: "YouTube", desc: "Videos & tutorials", url: "https://youtube.com", icon: "▶️" },
      { name: "Wikipedia", desc: "The free encyclopedia", url: "https://wikipedia.org", icon: "🌐" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Canva", desc: "Design made simple", url: "https://canva.com", icon: "🎨" },
      { name: "Figma", desc: "Collaborative design", url: "https://figma.com", icon: "✏️" },
      { name: "Excalidraw", desc: "Sketch & whiteboard", url: "https://excalidraw.com", icon: "🖌️" },
      { name: "Remove.bg", desc: "Background remover", url: "https://remove.bg", icon: "✂️" },
    ],
  },
];

/* ===== DOM ===== */
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");
const navItems = document.querySelectorAll(".nav-item");
const viewSearch = document.getElementById("view-search");
const viewPages = document.getElementById("view-pages");
const greetingEl = document.getElementById("greeting");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const liveResults = document.getElementById("liveResults");
const liveList = document.getElementById("liveList");
const categoriesEl = document.getElementById("categories");
const pagesCountEl = document.getElementById("pagesCount");
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

/* ===== Greeting ===== */
function setGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) greetingEl.textContent = "Good morning";
  else if (hour < 18) greetingEl.textContent = "Good afternoon";
  else greetingEl.textContent = "Good evening";
}

/* ===== Flatten links ===== */
function getAllLinks() {
  return LINKS.flatMap((g) =>
    g.items.map((item) => ({ ...item, category: g.category }))
  );
}

/* ===== Render Pages ===== */
function renderPages() {
  categoriesEl.innerHTML = "";
  let total = 0;

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
      const a = document.createElement("a");
      a.className = "link-card";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.innerHTML = `
        <div class="link-icon">${item.icon}</div>
        <div class="link-info">
          <div class="link-name">${item.name}</div>
          <div class="link-desc">${item.desc}</div>
        </div>
      `;
      grid.appendChild(a);
    });

    cat.appendChild(grid);
    categoriesEl.appendChild(cat);
  });

  pagesCountEl.textContent = `${total} hosted pages`;
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

  // Rebuild so animation re-triggers
  liveList.innerHTML = "";
  matches.slice(0, 8).forEach((item) => {
    const a = document.createElement("a");
    a.className = "live-item";
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `
      <div class="live-icon">${item.icon}</div>
      <div class="live-info">
        <div class="live-name">${item.name}</div>
        <div class="live-desc">${item.desc}</div>
      </div>
    `;
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

/** Longer query → ChatGPT instead of Google */
function isLongerQuery(str) {
  const s = str.trim();
  const words = s.split(/\s+/).filter(Boolean);
  return words.length >= 3 || s.length >= 24;
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

  // Single strong match → open page
  if (matches.length === 1) {
    window.open(matches[0].url, "_blank", "noopener,noreferrer");
    return;
  }

  // URL → open it
  if (looksLikeUrl(raw)) {
    window.open(normalizeUrl(raw), "_blank", "noopener,noreferrer");
    return;
  }

  // Longer queries → ChatGPT
  if (isLongerQuery(raw)) {
    const chatUrl =
      "https://chatgpt.com/?q=" + encodeURIComponent(raw);
    window.open(chatUrl, "_blank", "noopener,noreferrer");
    return;
  }

  // Short leftover → Google
  const googleUrl =
    "https://www.google.com/search?q=" + encodeURIComponent(raw);
  window.open(googleUrl, "_blank", "noopener,noreferrer");
}

/* ===== Navigation ===== */
function setView(viewName) {
  if (viewName === "library") {
    window.open("https://drive.google.com", "_blank", "noopener,noreferrer");
    return;
  }

  navItems.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });

  viewSearch.classList.toggle("active", viewName === "search");
  viewPages.classList.toggle("active", viewName === "pages");
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

searchInput.addEventListener("input", () => {
  updateLiveResults(searchInput.value);
});

searchForm.addEventListener("submit", handleSearchSubmit);

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
setGreeting();
renderPages();
setView("search");
