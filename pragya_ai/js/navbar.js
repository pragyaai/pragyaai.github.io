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
          { label: "What is it?", href: "#", icon: "info" },
          { label: "What's the necessity?", href: "#", icon: "insights" },
          { label: "What's the Leap?", href: "#", icon: "rocket_launch" },
        ],
      },
      answers: {
        "What is it?": "World Models for Populous, Crowded, and Chaotic Global South",
        "What's the necessity?":
          "Current “world model” progress is largely validated on clean, structured, low-density Western environments, and it often breaks down for the chaotic Global South scenes—where dense occlusion, mixed traffic, informal right-of-way negotiation, extreme lighting and weather, and long-tail objects and signage dominate.",
        "What's the Leap?":
          "Because current world-model progress is built on clean, low-density settings and often breaks in the DENSEWORLD regime; this demands systematic, large-scale study rather than incremental benchmark gains.",
      },
      featuredCard: {
        title: "DENSEWORLD",
        description: "Real-time crowd dynamics",
        href: `${appRoot}/pages/denseworld.html`,
        image: `${appRoot}/public/denseWorld_new.png`,
      },
    },
    "densewalk.html": {
      title: "DenseWalk",
      columns: {
        apis: [
          { label: "What is it?", href: "#", icon: "info" },
          { label: "What's the necessity?", href: "#", icon: "insights" },
          { label: "What's the Leap?", href: "#", icon: "rocket_launch" },
        ],
      },
      answers: {
        "What is it?":
          "A data-and-benchmark pipeline for short-horizon humanoid navigation in populous, crowded, and chaotic Global South urban environments.",
        "What's the necessity?":
          "Because navigation progress is still under-studied in India-like mixed-agent streets where weak lane structure, persistent occlusion, and shifting right-of-way demand continuous local decisions.",
        "What's the Leap?":
          "From 200 hours of egocentric walk-through video to motion-grounded action-and-language supervision, then benchmarked in dense mixed-agent Isaac Sim scenarios with safety and social-compliance metrics.",
      },
      featuredCard: {
        title: "DENSEWALK",
        description: "Humanoid navigation benchmark",
        href: `${appRoot}/pages/densewalk.html`,
        image: `${appRoot}/public/denseWalk_new.png`,
      },
    },
    "factorjepa.html": {
      title: "FactorJEPA",
      columns: {
        apis: [
          { label: "What is it?", href: "#", icon: "info" },
          { label: "What's the necessity?", href: "#", icon: "insights" },
          { label: "What's the Leap?", href: "#", icon: "rocket_launch" },
        ],
      },
      answers: {
        "What is it?":
          "A factorized Joint-Embedding Predictive Architecture that decomposes predictive embeddings into layout, entities, interactions, and visibility-aware reliability.",
        "What's the necessity?":
          "Because standard JEPA objectives can achieve strong predictive performance while leaving the latent world structure implicitly entangled, especially under dense occlusion, heterogeneous agents, and partial observability.",
        "What's the Leap?":
          "From monolithic embedding prediction to structured, factorized world modeling—where compositionality, interaction structure, and observability are treated as first-class modeling primitives.",
      },
      featuredCard: {
        title: "FactorJEPA",
        description: "Joint-Embedding Predictive Architecture",
        href: `${appRoot}/pages/factorjepa.html`,
        image: `${appRoot}/public/factorjepa_new.png`,
      },
    },
    "pragyavla.html": {
      title: "PragyaVLA",
      columns: {
        apis: [
          { label: "What is it?", href: "#", icon: "info" },
          { label: "What's the necessity?", href: "#", icon: "insights" },
          { label: "What's the Leap?", href: "#", icon: "rocket_launch" },
        ],
      },
      answers: {
        "What is it?":
          "India’s first sovereign VLA model for robot navigation—an instruction-finetuned framework that unifies multilingual grounding, locomotion-aware reasoning, and safety-conditioned control.",
        "What's the necessity?":
          "Because current VLA systems are still optimized largely for manipulation-centric, clean indoor benchmarks, leaving locomotion feasibility, partial observability, terrain uncertainty, and safety-aware abstention under-modeled.",
        "What's the Leap?":
          "From direct instruction-to-action policies to structured embodied deliberation, where traversability, body-feasibility, hidden-state inference, and risk-aware abstention become explicit components of navigation control.",
      },
      featuredCard: {
        title: "PragyaVLA",
        description: "Embodied AI for Robotics",
        href: `${appRoot}/pages/pragyavla.html`,
        image: `${appRoot}/public/pragyaVla_new.png`,
      },
    },
    "kalamprotocol.html": {
      title: "Kalam Protocol",
      columns: {
        apis: [
          { label: "What is it?", href: "#", icon: "info" },
          { label: "What's the necessity?", href: "#", icon: "insights" },
          { label: "What's the Leap?", href: "#", icon: "rocket_launch" },
        ],
      },
      answers: {
        "What is it?": "A safety, alignment, and governance protocol for robots operating in real-world environments.",
        "What's the necessity?":
          "Because deployment in public infrastructure, industry, defense, and high-footfall civilian spaces demands robotic systems that are not only capable, but also safe, interpretable, and protocol-governed.",
        "What's the Leap?":
          "From model-level capability to deployment-ready assurance—where alignment, safety constraints, and operational conduct are built into the robotic stack.",
      },
      featuredCard: {
        title: "KalamProtocol",
        description: "Open communication standard",
        href: `${appRoot}/pages/kalamprotocol.html`,
        image: `${appRoot}/public/kalamProtocol_new.png`,
      },
    },
    "kalarisena.html": {
      title: "KalariSena",
      columns: {
        apis: [
          { label: "What is it?", href: "#", icon: "info" },
          { label: "What's the necessity?", href: "#", icon: "insights" },
          { label: "What's the Leap?", href: "#", icon: "rocket_launch" },
        ],
      },
      answers: {
        "What is it?":
          "A movement-intelligence framework for humanoid robots, inspired by Kalaripayattu and grounded in strategic embodied response.",
        "What's the necessity?":
          "Because India-facing deployment demands humanoids that can move and respond in crowded public spaces, disaster zones, industrial corridors, high-footfall transit hubs, and security-sensitive environments.",
        "What's the Leap?":
          "From generic humanoid control to Kalaripayattu-inspired movement intelligence for strategic, context-aware real-world deployment.",
      },
      featuredCard: {
        title: "KalariSena",
        description: "Strategic response generation",
        href: `${appRoot}/pages/kalarisena.html`,
        image: `${appRoot}/public/kalarisena_new.png`,
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
      label: "DENSEWALK",
      href: `${appRoot}/pages/densewalk.html`,
      key: "densewalk.html",
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
        <div class="hidden md:flex items-center gap-10 font-['Plus_Jakarta_Sans'] font-light tracking-tight text-base">
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
    const hasAnswers = Boolean(config.answers);
    const apisHTML = config.columns.apis
      .map((item) => {
        if (!hasAnswers) {
          return `<div class="submenu-item-wrapper">
            <a href="${item.href}" class="submenu-item">
              <span class="material-symbols-outlined">${item.icon}</span>
              <span class="submenu-item-label">${item.label}</span>
            </a>
          </div>`;
        }

        const answer = config.answers[item.label] || "";
        return `<div class="submenu-item-wrapper submenu-item-wrapper-static">
          <div class="submenu-item submenu-item-static">
            <div class="submenu-item-row">
              <span class="material-symbols-outlined submenu-item-icon">${item.icon}</span>
              <span class="submenu-item-label submenu-item-question">${item.label}</span>
            </div>
            <div class="submenu-item-answer">${answer}</div>
          </div>
        </div>`;
      })
      .join("\n");

    // Featured card
    const featuredCard = config.featuredCard;
    const cardStyle = featuredCard.image
      ? `background-color: black; background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${featuredCard.image}'); background-size: cover; background-position: center; background-repeat: no-repeat;`
      : "background-color: black;";
    const cardHTML = `<a href="${featuredCard.href}" class="submenu-featured-card" style="${cardStyle}">
      <div class="flex items-center gap-2 mt-auto">
        <span class="text-xs font-medium uppercase tracking-widest">Explore</span>
        <span class="material-symbols-outlined">arrow_outward</span>
      </div>
    </a>`;

    submenuContent.innerHTML = `
      <div class="submenu-column">
        <div class="submenu-items-grid">
          ${apisHTML}
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
