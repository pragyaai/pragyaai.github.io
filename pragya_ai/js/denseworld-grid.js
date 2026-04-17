(function () {
  "use strict";

  // Replace "#" entries with real local files from ../public when videos are ready.
  // City rows use 6 slots each.
  const sixHashSlots = () => ["#", "#", "#", "#", "#", "#"];

  const videoSources = {
    tier1: {
      Kolkata: sixHashSlots(),
      Chennai: sixHashSlots(),
      Bangalore: sixHashSlots(),
      Mumbai: sixHashSlots(),
      Delhi: [
        "../public/videos/denseWorld/delhi/walk_01.mp4",
        "../public/videos/denseWorld/delhi/walk_02.mp4",
        "../public/videos/denseWorld/delhi/walk_03.mp4",
        "../public/videos/denseWorld/delhi/walk_04.mp4",
        "#",
        "#",
      ],
      Hyderabad: sixHashSlots(),
    },
    tier2: {
      Jaipur: sixHashSlots(),
      Varansi: sixHashSlots(),
      Lucknow: sixHashSlots(),
      Ahmedabad: sixHashSlots(),
      Pune: sixHashSlots(),
      Kochi: sixHashSlots(),
      Chandigarh: sixHashSlots(),
      Indore: sixHashSlots(),
      Bhopal: sixHashSlots(),
      Coimbatore: sixHashSlots(),
      Nagpur: sixHashSlots(),
      Visakhapatnam: sixHashSlots(),
      Surat: sixHashSlots(),
      Trivandrum: sixHashSlots(),
      Mysuru: sixHashSlots(),
    },
    taxonomy: {
      "Scene type": {
        Market: "#",
        Residential: "#",
        Commercial: "#",
        Promenade: "#",
        Transit: "#",
        Highway: "#",
        Heritage: "#",
        Junction: "#",
        Flyover: "#",
        Beach: "#",
        Ghat: "#",
        Bazar: "#",
        Skyline: "#",
      },
      "Time of Day": {
        Day: "#",
        Night: "#",
      },
      Weather: {
        Clear: "#",
        Cloud: "#",
        Rain: "#",
        Fog: "#",
        Overcast: "#",
      },
      Crowd: {
        High: "#",
        Medium: "#",
        Low: "#",
      },
      Traffic: {
        High: "#",
        Medium: "#",
        Low: "#",
      },
      "Traffic Mix": {
        "Mixed Motor": "#",
        Padestrian: "#",
        Motorized: "#",
        "Mixed All": "#",
      },
      "Ped-Veh Sep.": {
        Separated: "#",
        Partial: "#",
        "Shared Space": "#",
      },
      "Road Layout": {
        Intersection: "#",
        "Narrow Lane": "#",
        "Wide Road": "#",
        Sidewalk: "#",
        Bridge: "#",
      },
      "Road Surface": {
        Asphalt: "#",
        Paved: "#",
        Wet: "#",
        Dirt: "#",
        Concrete: "#",
        Cobblestone: "#",
        Mixed: "#",
        Unpaved: "#",
      },
      Infrastructure: {
        Good: "#",
        Moderate: "#",
        Poor: "#",
      },
      Encroachment: {
        Clean: "#",
        Partial: "#",
        Heavy: "#",
      },
      Object: {
        "Auto Rickshaw": "#",
        Animal: "#",
        "Steet Vendor": "#",
        Bus: "#",
        "Cycle Rickshaw": "#",
      },
      Greenary: {
        Dense: "#",
        Moderate: "#",
        Sparse: "#",
        None: "#",
      },
      Lighting: {
        Natural: "#",
        Artificial: "#",
        Mixed: "#",
      },
      "Video Quality": {
        Clean: "#",
      },
    },
  };

  const normalizeMediaSrc = (src) => {
    if (!src || src === "#") {
      return src || "";
    }

    const normalized = src.replace(/\\/g, "/").trim();

    if (normalized.startsWith("pragya_ai/")) {
      return `../${normalized.slice("pragya_ai/".length)}`;
    }

    if (normalized.startsWith("public/")) {
      return `../${normalized}`;
    }

    return normalized;
  };

  const getCityVideoSrc = (tierKey, city, frameIndex) => {
    if (!videoSources[tierKey] || !videoSources[tierKey][city]) {
      return "";
    }

    return normalizeMediaSrc(videoSources[tierKey][city][frameIndex] || "");
  };

  const getTaxonomyVideoSrc = (fieldName, value) => {
    if (!videoSources.taxonomy[fieldName]) {
      return "";
    }

    return normalizeMediaSrc(videoSources.taxonomy[fieldName][value] || "");
  };

  const renderCityFrame = (src) => {
    if (!src || src === "#") {
      return '<div class="aspect-video rounded-[2px] border border-outline-variant/20 bg-surface-container-low"></div>';
    }

    return `
      <div class="aspect-video overflow-hidden rounded-[2px] border border-outline-variant/20 bg-surface-container-low">
        <video class="h-full w-full object-cover" src="${src}" autoplay loop muted playsinline preload="auto"></video>
      </div>
    `;
  };

  const renderTaxonomyFrame = (src, value) => {
    const media = src && src !== "#"
      ? `<video class="h-full w-full object-cover" src="${src}" autoplay loop muted playsinline preload="auto"></video>`
      : '<div class="h-full w-full bg-surface-container-low"></div>';

    return `
      <div class="block overflow-hidden rounded-[2px] border border-outline-variant/20 bg-surface-container-lowest">
        <div class="aspect-video overflow-hidden bg-surface-container-low">
          ${media}
        </div>
        <p class="inter px-2 py-2 text-[11px] font-medium text-on-surface-variant">${value}</p>
      </div>
    `;
  };

  const createCityRows = (containerId, cities, tierKey) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = cities
      .map((city) => {
        const frames = Array.from({ length: 6 }, (_, frameIndex) => {
          const src = getCityVideoSrc(tierKey, city, frameIndex);
          return renderCityFrame(src);
        }).join("");

        return `
          <div class="grid grid-cols-1 items-center gap-3 md:grid-cols-[7rem_1fr]">
            <p class="inter text-sm md:text-base font-medium text-on-surface">${city}</p>
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              ${frames}
            </div>
          </div>
        `;
      })
      .join("");
  };

  const createTaxonomyRows = (containerId, taxonomy) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = taxonomy
      .map((field) => {
        const frames = field.values
          .map((value) => {
            const src = getTaxonomyVideoSrc(field.name, value);
            return renderTaxonomyFrame(src, value);
          })
          .join("");

        return `
          <div class="space-y-3 border-t border-outline-variant/10 pt-6 first:border-t-0 first:pt-0">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="inter text-[0.6875rem] font-semibold uppercase tracking-widest text-primary">${field.name}</h3>
              <span class="inter text-xs text-on-surface-variant">${field.count}</span>
            </div>
            <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
              ${frames}
            </div>
          </div>
        `;
      })
      .join("");
  };

  const tier1Cities = ["Kolkata", "Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];

  const tier2Cities = [
    "Jaipur",
    "Varansi",
    "Lucknow",
    "Ahmedabad",
    "Pune",
    "Kochi",
    "Chandigarh",
    "Indore",
    "Bhopal",
    "Coimbatore",
    "Nagpur",
    "Visakhapatnam",
    "Surat",
    "Trivandrum",
    "Mysuru",
  ];

  const taxonomy = [
    {
      name: "Scene type",
      count: "13 values",
      values: [
        "Market",
        "Residential",
        "Commercial",
        "Promenade",
        "Transit",
        "Highway",
        "Heritage",
        "Junction",
        "Flyover",
        "Beach",
        "Ghat",
        "Bazar",
        "Skyline",
      ],
    },
    { name: "Time of Day", count: "2 values", values: ["Day", "Night"] },
    { name: "Weather", count: "5 values", values: ["Clear", "Cloud", "Rain", "Fog", "Overcast"] },
    { name: "Crowd", count: "3 values", values: ["High", "Medium", "Low"] },
    { name: "Traffic", count: "3 values", values: ["High", "Medium", "Low"] },
    { name: "Traffic Mix", count: "4 values", values: ["Mixed Motor", "Padestrian", "Motorized", "Mixed All"] },
    { name: "Ped-Veh Sep.", count: "3 values", values: ["Separated", "Partial", "Shared Space"] },
    { name: "Road Layout", count: "5 values", values: ["Intersection", "Narrow Lane", "Wide Road", "Sidewalk", "Bridge"] },
    {
      name: "Road Surface",
      count: "8 values",
      values: ["Asphalt", "Paved", "Wet", "Dirt", "Concrete", "Cobblestone", "Mixed", "Unpaved"],
    },
    { name: "Infrastructure", count: "3 values", values: ["Good", "Moderate", "Poor"] },
    { name: "Encroachment", count: "3 values", values: ["Clean", "Partial", "Heavy"] },
    { name: "Object", count: "5 values", values: ["Auto Rickshaw", "Animal", "Steet Vendor", "Bus", "Cycle Rickshaw"] },
    { name: "Greenary", count: "4 values", values: ["Dense", "Moderate", "Sparse", "None"] },
    { name: "Lighting", count: "3 values", values: ["Natural", "Artificial", "Mixed"] },
    { name: "Video Quality", count: "3 values", values: ["Clean"] },
  ];

  createCityRows("tier1-city-grid", tier1Cities, "tier1");
  createCityRows("tier2-city-grid", tier2Cities, "tier2");
  createTaxonomyRows("taxonomy-grid", taxonomy);
})();
