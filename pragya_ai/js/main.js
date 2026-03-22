/**
 * THE SPATIAL ACADEMIC — Universal JavaScript
 * Shared across all pages: Pragya AI Research Lab
 *
 * Includes:
 *  - Scroll-reveal (IntersectionObserver)
 *  - Navigation scroll behavior
 *  - Stagger reveal for child elements
 */

(function () {
  "use strict";

  /* ─── Reveal on scroll ─────────────────────────────────── */

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // New design system class
          entry.target.classList.add("is-visible");
          // Legacy class compatibility
          entry.target.classList.add("reveal");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  // Observe both new ds-reveal and legacy opacity-0 elements
  document.querySelectorAll(".ds-reveal, .opacity-0").forEach((el) => {
    revealObserver.observe(el);
  });

  /* ─── Navigation: add scrolled state ──────────────────── */

  const nav = document.querySelector("nav, .ds-nav, [data-nav]");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 24) {
        nav.classList.add("is-scrolled");
      } else {
        nav.classList.remove("is-scrolled");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run on load
  }

  /* ─── Smooth anchor scroll ──────────────────────────────── */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ─── Mobile menu toggle ────────────────────────────────── */

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }

})();
