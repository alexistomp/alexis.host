/* ===== Link data ===== */
const LINKS = [
  {
    category: "Productivity",
    items: [
      { name: "Notion", desc: "All-in-one workspace", url: "https://notion.so", icon: "📝", color: "#5b8def" },
      { name: "Google Drive", desc: "Cloud storage & docs", url: "https://drive.google.com", icon: "📁", color: "#34a853" },
      { name: "Todoist", desc: "Task management", url: "https://todoist.com", icon: "✅", color: "#e44332" },
      { name: "Calendar", desc: "Google Calendar", url: "https://calendar.google.com", icon: "📅", color: "#4285f4" },
    ],
  },
  {
    category: "Development",
    items: [
      { name: "GitHub", desc: "Code hosting & collab", url: "https://github.com", icon: "🐙", color: "#f0f6fc" },
      { name: "Stack Overflow", desc: "Q&A for developers", url: "https://stackoverflow.com", icon: "💬", color: "#f48024" },
      { name: "MDN", desc: "Web docs & references", url: "https://developer.mozilla.org", icon: "📖", color: "#83d0f2" },
      { name: "CodePen", desc: "Front-end playground", url: "https://codepen.io", icon: "🖊️", color: "#47cf73" },
    ],
  },
  {
    category: "Social & News",
    items: [
      { name: "X (Twitter)", desc: "Real-time conversation", url: "https://x.com", icon: "𝕏", color: "#e7e9ea" },
      { name: "Reddit", desc: "Communities & discussion", url: "https://reddit.com", icon: "🟠", color: "#ff4500" },
      { name: "BBC News", desc: "Global news coverage", url: "https://bbc.com/news", icon: "📰", color: "#bb1919" },
      { name: "Hacker News", desc: "Tech & startup news", url: "https://news.ycombinator.com", icon: "🔶", color: "#ff6600" },
    ],
  },
  {
    category: "Learning",
    items: [
      { name: "Khan Academy", desc: "Free education for all", url: "https://khanacademy.org", icon: "🎓", color: "#14bf96" },
      { name: "Coursera", desc: "Online courses", url: "https://coursera.org", icon: "📚", color: "#0056d2" },
      { name: "YouTube", desc: "Videos & tutorials", url: "https://youtube.com", icon: "▶️", color: "#ff0000" },
      { name: "Wikipedia", desc: "The free encyclopedia", url: "https://wikipedia.org", icon: "🌐", color: "#eaecf0" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Canva", desc: "Design made simple", url: "https://canva.com", icon: "🎨", color: "#00c4cc" },
      { name: "Figma", desc: "Collaborative design", url: "https://figma.com", icon: "✏️", color: "#a259ff" },
      { name: "Excalidraw", desc: "Sketch & whiteboard", url: "https://excalidraw.com", icon: "🖌️", color: "#6965db" },
      { name: "Remove.bg", desc: "Background remover", url: "https://remove.bg", icon: "✂️", color: "#1a73e8" },
    ],
  },
];

/* ===== DOM refs ===== */
const greetingEl = document.getElementById("greeting");
const searchInput = document.getElementById("searchInput");
const categoriesEl = document.getElementById("categories");
const resultCountEl = document.getElementById("resultCount");
const noResultsEl = document.getElementById("noResults");
const clearSearchBtn = document.getElementById("clearSearch");
const scrollBtn = document.getElementById("scrollBtn");
const linksSection = document.getElementById("links");

/* ===== Greeting based on time ===== */
function setGreeting() {
  const hour = new Date().getHours();
  let text = "Hello";
  if (hour < 12) text = "Good morning";
  else if (hour < 18) text = "Good afternoon";
  else text = "Good evening";
  greetingEl.textContent = text;
}

/* ===== Render links ===== */
function renderLinks(filter = "") {
  const query = filter.trim().toLowerCase();
  categoriesEl.innerHTML = "";
  let totalVisible = 0;

  LINKS.forEach((group) => {
    const matchingItems = group.items.filter((item) => {
      if (!query) return true;
      return (
        item.name.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        group.category.toLowerCase().includes(query)
      );
    });

    if (matchingItems.length === 0) return;

    totalVisible += matchingItems.length;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category";

    const title = document.createElement("h3");
    title.className = "category-title";
    title.textContent = group.category;
    categoryDiv.appendChild(title);

    const grid = document.createElement("div");
    grid.className = "links-grid";

    matchingItems.forEach((item) => {
      const a = document.createElement("a");
      a.className = "link-card";
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.dataset.name = item.name.toLowerCase();
      a.dataset.desc = item.desc.toLowerCase();

      a.innerHTML = `
        <div class="link-icon" style="color: ${item.color}">${item.icon}</div>
        <div class="link-info">
          <div class="link-name">${item.name}</div>
          <div class="link-desc">${item.desc}</div>
        </div>
      `;
      grid.appendChild(a);
    });

    categoryDiv.appendChild(grid);
    categoriesEl.appendChild(categoryDiv);
  });

  // Update UI state
  if (totalVisible === 0) {
    noResultsEl.hidden = false;
    resultCountEl.textContent = "";
  } else {
    noResultsEl.hidden = true;
    resultCountEl.textContent = query
      ? `${totalVisible} result${totalVisible === 1 ? "" : "s"}`
      : `${totalVisible} links`;
  }
}

/* ===== Search handling ===== */
function handleSearch() {
  renderLinks(searchInput.value);
}

searchInput.addEventListener("input", handleSearch);

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  handleSearch();
  searchInput.focus();
});

/* Keyboard shortcut: / to focus search */
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
  if (e.key === "Escape" && document.activeElement === searchInput) {
    searchInput.blur();
  }
});

/* Scroll to links */
scrollBtn.addEventListener("click", () => {
  linksSection.scrollIntoView({ behavior: "smooth" });
});

/* Init */
setGreeting();
renderLinks();
