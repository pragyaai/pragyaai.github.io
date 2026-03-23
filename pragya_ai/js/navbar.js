(function () {
  "use strict";

  const mountPoint = document.getElementById("site-navbar");
  if (!mountPoint) {
    return;
  }

  const path = window.location.pathname.replace(/\\/g, "/");

  function getAppRoot(pathname) {
    const cleanPath = pathname.split("?")[0].split("#")[0];

    if (cleanPath.includes("/pages/")) {
      return cleanPath.slice(0, cleanPath.indexOf("/pages/"));
    }

    if (cleanPath.endsWith("/index.html")) {
      return cleanPath.slice(0, -"/index.html".length);
    }

    return cleanPath.replace(/\/+$/, "");
  }

  const appRoot = getAppRoot(path);
  const lowerPath = path.toLowerCase();
  const isLandingPage = lowerPath.endsWith("/pages/landing.html");
  const isHomePage = isLandingPage || lowerPath.endsWith("/index.html") || lowerPath.endsWith("/");

  const homeHref = `${appRoot}/pages/landing.html`;
  const contactHref = isHomePage ? "#contact-form" : `${homeHref}#contact-form`;
  const logoSrc = `${appRoot}/public/violate_nobg.png`;

  // ═══════════════════════════════════════════════════════════
  // SUBMENU CONFIGURATION - Define submenu items per page
  // ═══════════════════════════════════════════════════════════
  const submenuConfig = {
    "denseworld.html": {
      title: "Dense World",
      columns: {
        apis: [
          { label: "Scene API", href: "#", icon: "language" },
          { label: "Inference API", href: "#", icon: "api" },
          { label: "Stream API", href: "#", icon: "dataset" },
        ],
        resources: [
          { label: "Documentation", href: "#", icon: "description" },
          { label: "API Pricing", href: "#", icon: "attach_money" },
          { label: "Join Discord", href: "#", icon: "forum" },
        ],
      },
      featuredCard: {
        title: "Urban Simulation",
        description: "Real-time crowd dynamics",
        href: `${appRoot}/pages/denseworld.html`,
      },
    },
    "factorjepa.html": {
      title: "FactorJEPA",
      columns: {
        apis: [
          { label: "Model Architecture", href: "#", icon: "architecture" },
          { label: "Training API", href: "#", icon: "code" },
          { label: "Inference API", href: "#", icon: "api" },
        ],
        resources: [
          { label: "Research Paper", href: "https://kapilw25.github.io/factorjepa/", icon: "description" },
          { label: "Benchmarks", href: "#", icon: "bar_chart" },
          { label: "Join Discord", href: "#", icon: "forum" },
        ],
      },
      featuredCard: {
        title: "JEPA Framework",
        description: "Joint-Embedding Predictive Architecture",
        href: `${appRoot}/pages/factorjepa.html`,
      },
    },
    "pragyavla.html": {
      title: "PragyaVLA",
      columns: {
        apis: [
          { label: "Vision API", href: "#", icon: "camera" },
          { label: "Language API", href: "#", icon: "language" },
          { label: "Control API", href: "#", icon: "settings" },
        ],
        resources: [
          { label: "Technical Specs", href: "#", icon: "description" },
          { label: "Robot Integration", href: "#", icon: "smart_toy" },
          { label: "Training Guide", href: "#", icon: "school" },
        ],
      },
      featuredCard: {
        title: "Vision Language Action",
        description: "Embodied AI for Robotics",
        href: `${appRoot}/pages/pragyavla.html`,
      },
    },
    "kalamprotocol.html": {
      title: "Kalam Protocol",
      columns: {
        apis: [
          { label: "Protocol Spec", href: "#", icon: "description" },
          { label: "Message API", href: "#", icon: "api" },
          { label: "Stream API", href: "#", icon: "dataset" },
        ],
        resources: [
          { label: "Implementation", href: "#", icon: "code" },
          { label: "Examples", href: "#", icon: "preview" },
          { label: "Community", href: "#", icon: "group" },
        ],
      },
      featuredCard: {
        title: "Kalam Protocol",
        description: "Open communication standard",
        href: `${appRoot}/pages/kalamprotocol.html`,
      },
    },
    "kalarisena.html": {
      title: "KalariSena",
      columns: {
        apis: [
          { label: "Combat API", href: "#", icon: "target" },
          { label: "Decision API", href: "#", icon: "psychology" },
          { label: "Action API", href: "#", icon: "bolt" },
        ],
        resources: [
          { label: "Training Data", href: "#", icon: "dataset" },
          { label: "Evaluation", href: "#", icon: "assessment" },
          { label: "Deployment", href: "#", icon: "cloud_upload" },
        ],
      },
      featuredCard: {
        title: "Autonomous Defense",
        description: "Strategic response generation",
        href: `${appRoot}/pages/kalarisena.html`,
      },
    },
  };

  const links = [
    {
      label: "DENSEWORLD",
      href: `${appRoot}/pages/denseworld.html`,
      key: "denseworld.html",
    },
    {
      label: "FactorJEPA",
      href: `${appRoot}/pages/factorjepa.html`,
      key: "factorjepa.html",
    },
    {
      label: "PragyaVLA",
      href: `${appRoot}/pages/pragyavla.html`,
      key: "pragyavla.html",
    },
    {
      label: "KalamProtocol",
      href: `${appRoot}/pages/kalamprotocol.html`,
      key: "kalamprotocol.html",
    },
    {
      label: "KalariSena",
      href: `${appRoot}/pages/kalarisena.html`,
      key: "kalarisena.html",
    },
  ];

  const activeClass = "text-on-surface font-medium border-b border-outline-variant/20";
  const inactiveClass = "text-on-surface-variant hover:text-on-surface transition-opacity duration-300";

  // Build nav links with submenu functionality
  const navLinks = links
    .map((link) => {
      const isActive = lowerPath.endsWith(link.key);
      const classes = isActive ? activeClass : inactiveClass;
      const hasSubmenu = submenuConfig[link.key] ? "cursor-pointer group" : "";
      return `<button class="relative ${hasSubmenu} ${classes}" data-nav-item="${link.key}" data-label="${link.label}">
        ${link.label}
      </button>`;
    })
    .join("\n");

  mountPoint.innerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-md" data-nav>
      <div class="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <a class="inline-flex items-center" href="${homeHref}" aria-label="Pragya AI Home">
          <img class="h-9 md:h-10 w-auto object-contain" src="${logoSrc}" alt="Pragya AI" />
        </a>
        <div class="hidden md:flex items-center gap-10 font-['Plus_Jakarta_Sans'] font-light tracking-tight text-sm">
          ${navLinks}
        </div>
        <div class="flex items-center gap-6">
          <a class="bg-on-surface text-inverse-on-surface px-5 py-2.5 text-[10px] tracking-widest hover:opacity-80 transition-all active:scale-95 duration-200 uppercase font-medium" href="${contactHref}">
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
    
    <!-- SUBMENU CONTAINER -->
    <div id="submenu-backdrop" class="fixed inset-0 z-40 hidden" style="background: transparent;"></div>
    <div id="submenu-container" class="fixed top-24 left-0 right-0 z-40 hidden px-12">
      <div class="max-w-screen-2xl mx-auto bg-surface-container-lowest/90 backdrop-blur-xl rounded-lg border border-surface-container-high shadow-xl">
        <div id="submenu-content" class="grid grid-cols-1 md:grid-cols-5 gap-1">
          <!-- Submenu items will be inserted here -->
        </div>
      </div>
    </div>
  `;

  // ═══════════════════════════════════════════════════════════
  // SUBMENU FUNCTIONALITY
  // ═══════════════════════════════════════════════════════════

  const submenuBackdrop = document.getElementById("submenu-backdrop");
  const submenuContainer = document.getElementById("submenu-container");
  const submenuContent = document.getElementById("submenu-content");
  let activeSubmenu = null;

  function renderSubmenu(pageKey) {
    const config = submenuConfig[pageKey];
    if (!config) return;

    // Build APIS column
    const apisHTML = config.columns.apis
      .map(
        (item) =>
          `<div class="submenu-item-wrapper">
            <a href="${item.href}" class="submenu-item">
              <span class="material-symbols-outlined">${item.icon}</span>
              <span class="submenu-item-label">${item.label}</span>
            </a>
          </div>`
      )
      .join("\n");

    // Build RESOURCES column
    const resourcesHTML = config.columns.resources
      .map(
        (item) =>
          `<div class="submenu-item-wrapper">
            <a href="${item.href}" class="submenu-item">
              <span class="material-symbols-outlined">${item.icon}</span>
              <span class="submenu-item-label">${item.label}</span>
            </a>
          </div>`
      )
      .join("\n");

    // Featured card
    const featuredCard = config.featuredCard;
    const cardHTML = `<a href="${featuredCard.href}" class="submenu-featured-card">
      <h3>${featuredCard.title}</h3>
      <p>${featuredCard.description}</p>
      <div class="flex items-center gap-2 mt-auto">
        <span class="text-xs font-medium uppercase tracking-widest">Explore</span>
        <span class="material-symbols-outlined">arrow_outward</span>
      </div>
    </a>`;

    submenuContent.innerHTML = `
      <div class="submenu-columns">
        <div class="submenu-column">
          <h4 class="submenu-section-title">APIS</h4>
          <div class="submenu-items-grid">
            ${apisHTML}
          </div>
        </div>
        <div class="submenu-column">
          <h4 class="submenu-section-title">RESOURCES</h4>
          <div class="submenu-items-grid">
            ${resourcesHTML}
          </div>
        </div>
      </div>
      <div class="submenu-featured">
        ${cardHTML}
      </div>
    `;
  }

  function openSubmenu(pageKey) {
    if (activeSubmenu === pageKey) {
      closeSubmenu();
      return;
    }

    renderSubmenu(pageKey);
    activeSubmenu = pageKey;

    submenuContainer.classList.remove("hidden");
    submenuBackdrop.classList.remove("hidden");

    // Add animation
    setTimeout(() => {
      submenuContainer.style.opacity = "0";
      submenuContainer.style.transform = "translateY(-10px)";
      requestAnimationFrame(() => {
        submenuContainer.style.transition = "all 300ms ease-out";
        submenuContainer.style.opacity = "1";
        submenuContainer.style.transform = "translateY(0)";
      });
    }, 0);
  }

  function closeSubmenu() {
    if (!activeSubmenu) return;

    submenuContainer.style.transition = "all 300ms ease-out";
    submenuContainer.style.opacity = "0";
    submenuContainer.style.transform = "translateY(-10px)";

    setTimeout(() => {
      submenuContainer.classList.add("hidden");
      submenuBackdrop.classList.add("hidden");
      activeSubmenu = null;
    }, 300);
  }

  // Add event listeners to nav items with submenus
  document.querySelectorAll("[data-nav-item]").forEach((btn) => {
    const pageKey = btn.getAttribute("data-nav-item");
    const hasConfig = submenuConfig[pageKey];

    if (hasConfig) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openSubmenu(pageKey);
      });
      // Prevent default button behavior
      btn.style.cursor = "pointer";
    }
  });

  // Close submenu when clicking backdrop
  submenuBackdrop.addEventListener("click", closeSubmenu);

  // Close submenu when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-nav-item]") && !e.target.closest("#submenu-container") && activeSubmenu) {
      closeSubmenu();
    }
  });

  // Close submenu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeSubmenu) {
      closeSubmenu();
    }
  });
})();
