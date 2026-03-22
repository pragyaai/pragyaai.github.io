(function () {
  "use strict";

  const mountPoint = document.getElementById("site-footer");
  if (!mountPoint) {
    return;
  }

  mountPoint.innerHTML = `
    <footer class="w-full border-t border-outline-variant/30 bg-surface-container-low">
      <div class="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 max-w-screen-2xl mx-auto">
        <div class="font-['Inter'] text-[11px] uppercase tracking-widest text-outline">
          © 2024 Pragya AI Research Lab. All rights reserved.
        </div>
        <div class="flex space-x-12 font-['Inter'] text-[11px] uppercase tracking-widest">
          <a class="text-outline hover:text-primary transition-colors" href="#">Publications</a>
          <a class="text-outline hover:text-primary transition-colors" href="#">Ethics</a>
          <a class="text-outline hover:text-primary transition-colors" href="#">Team</a>
          <a class="text-outline hover:text-primary transition-colors" href="#">Contact</a>
        </div>
      </div>
    </footer>
  `;
})();
