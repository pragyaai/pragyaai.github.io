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

  const links = [
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
      label: "KalariSena",
      href: `${appRoot}/pages/kalarisena.html`,
      key: "kalarisena.html",
    },
    {
      label: "Kalam Protocol",
      href: `${appRoot}/pages/kalamprotocol.html`,
      key: "kalamprotocol.html",
    },
  ];

  const activeClass = "text-on-surface font-medium border-b border-outline-variant/20";
  const inactiveClass = "text-on-surface-variant hover:text-on-surface transition-opacity duration-300";

  const navLinks = links
    .map((link) => {
      const isActive = lowerPath.endsWith(link.key);
      const classes = isActive ? activeClass : inactiveClass;
      return `<a class="${classes}" href="${link.href}">${link.label}</a>`;
    })
    .join("\n");

  mountPoint.innerHTML = `
    <nav class="fixed top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-md" data-nav>
      <div class="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <a class="text-xl font-light tracking-tighter text-on-surface" href="${homeHref}">pragya ai</a>
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
  `;
})();
