/**
 * GLOBAL HOLIDAYS TOUR & TRAVELS — MAIN JAVASCRIPT CONTROLLER
 * Location: Agartala, Tripura, India
 * Features: Lenis Smooth Scroll, Custom Cursor, Dynamic Concierge,
 *           Package Detail Modals, Lightbox Gallery, Animated Counters,
 *           WhatsApp Direct Router, Testimonial & Package Sliders
 */

import { PACKAGE_DATA } from "./data/packages.js";

// ========================================================
// 1. DATA REPOSITORIES (PACKAGES & ITINERARIES)
// ========================================================
// Imported from ./data/packages.js

// ========================================================
// 2. NATIVE SMOOTH SCROLLING
// ========================================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || href === "") return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        if (typeof window.closeMobileDrawer === "function") {
          window.closeMobileDrawer();
        }
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// ========================================================
// 3. CUSTOM LUXURY CURSOR (DESKTOP)
// ========================================================
function initCustomCursor() {
  const cursor = document.getElementById("custom-cursor");
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");

  if (!cursor || !dot || !ring) return;

  function bindHover() {
    const interactiveEls = document.querySelectorAll(
      "a, button, input, select, textarea, .destination-card, .gallery-item, .pkg-card, .split-panel",
    );
    interactiveEls.forEach((el) => {
      if (el._cursorHoverAttached) return;
      el._cursorHoverAttached = true;
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("hovering"),
      );
    });
  }

  // Bind interactive hovers for newly rendered elements
  bindHover();

  // If already tracking mouse, do not duplicate listeners or RAF loops
  if (cursor._cursorReady) return;

  // Only enable on desktop pointer devices
  if (window.matchMedia("(pointer: fine)").matches) {
    cursor._cursorReady = true;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    function renderRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      requestAnimationFrame(renderRing);
    }
    requestAnimationFrame(renderRing);
  }
}

// ========================================================
// 4. STICKY HEADER & ACTIVE SECTION TRACKER
// ========================================================
function initHeaderScroll() {
  const header = document.getElementById("site-header");
  const navLinks = document.querySelectorAll(".desktop-nav .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      // Active link highlighting
      let currentSectionId = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSectionId = section.getAttribute("id");
        }
      });

      if (currentSectionId) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          const href = link.getAttribute("href");
          if (
            href === `#${currentSectionId}` ||
            href === `index.html#${currentSectionId}`
          ) {
            link.classList.add("active");
          }
        });
      }
    },
    { passive: true },
  );
}

// Dropdown Navigation handler (Company submenu)
function initDropdownNavigation() {
  const dropdowns = document.querySelectorAll(".nav-dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains("is-open");
      dropdowns.forEach((d) => {
        if (d !== dropdown) {
          d.classList.remove("is-open");
          d.querySelector(".dropdown-toggle")?.setAttribute(
            "aria-expanded",
            "false",
          );
        }
      });

      if (isOpen) {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      } else {
        dropdown.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });

    const items = menu.querySelectorAll(".dropdown-item");
    items.forEach((item) => {
      item.addEventListener("click", () => {
        dropdown.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  });

  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("is-open");
        dropdown
          .querySelector(".dropdown-toggle")
          ?.setAttribute("aria-expanded", "false");
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("is-open");
        dropdown
          .querySelector(".dropdown-toggle")
          ?.setAttribute("aria-expanded", "false");
      });
    }
  });
}

// ========================================================
// 5. MOBILE DRAWER NAVIGATION
// ========================================================
function initMobileDrawer() {
  const toggleBtn = document.getElementById("menu-toggle-btn");
  const closeBtn = document.getElementById("drawer-close-btn");
  const drawer = document.getElementById("mobile-drawer");
  const drawerLinks = document.querySelectorAll(".mobile-nav-link");

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    drawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  window.closeMobileDrawer = closeDrawer;

  toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && drawer.classList.contains("open")) {
      closeDrawer();
    }
  });
}

// ========================================================
// 6. DESTINATION FILTER SYSTEM (HOMEPAGE)
// ========================================================
function initDestinationFilters() {
  if (typeof window !== "undefined" && window.location.pathname !== "/") return;
  const filterTabs = document.querySelectorAll(
    "#destination-filters .filter-tab",
  );
  const destCards = document.querySelectorAll(
    "#destinations-container .destination-card",
  );
  if (!filterTabs.length || !destCards.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filterValue = tab.getAttribute("data-filter");

      destCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filterValue === "all" || category === filterValue) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });
}

// ========================================================
// 7. CURATED PACKAGES CAROUSEL & MODAL INSPECTOR
// ========================================================
export function renderPackageModal(data, modalBody) {
  if (!modalBody) {
    modalBody = document.getElementById("pkg-modal-content");
  }
  if (!modalBody || !data) return;

  const rawItinerary = Array.isArray(data.itinerary)
    ? data.itinerary
    : Array.isArray(data.itineraryList)
      ? data.itineraryList
      : typeof data.itinerary === "string"
        ? [
            {
              day: "Circuit",
              title: data.destination || data.title,
              desc: data.itinerary,
            },
          ]
        : [];

  const itineraryHtml = rawItinerary
    .map(
      (item) => `
    <div style="margin-bottom: 1.5rem; padding-left: 1.25rem; border-left: 2px solid var(--gold-light);">
      <span style="font-size: 0.75rem; font-weight: 700; color: var(--gold-light); text-transform: uppercase; letter-spacing: 0.1em;">${item.day || "Day"}</span>
      <h4 style="font-size: 1.15rem; color: var(--text-primary); margin: 0.2rem 0 0.4rem;">${item.title || ""}</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${item.desc || ""}</p>
    </div>
  `,
    )
    .join("");

  const inclusionsHtml = (data.inclusions || [])
    .map(
      (inc) =>
        `<li style="margin-bottom: 0.4rem; color: var(--text-secondary); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f3c766" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${inc}</span></li>`,
    )
    .join("");
  const exclusionsHtml = (data.exclusions || [])
    .map(
      (exc) =>
        `<li style="margin-bottom: 0.4rem; color: var(--text-muted); font-size: 0.85rem; display: flex; align-items: center; gap: 0.5rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> <span>${exc}</span></li>`,
    )
    .join("");

  const waText = encodeURIComponent(
    `Hello Global Holidays Agartala, I am interested in booking the "${data.title}" (${data.duration}). Please share custom pricing and availability.`,
  );

  modalBody.innerHTML = `
    <div style="position: relative; height: 260px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.75rem; border: 1px solid var(--border-gold);">
      <img src="${data.heroImg}" alt="${data.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; bottom: 1rem; left: 1rem; background: rgba(6,17,16,0.88); padding: 0.45rem 1.1rem; border-radius: var(--radius-pill); font-size: 0.82rem; font-weight: 700; color: #f3c766; border: 1px solid var(--border-gold); text-shadow: 0 1px 4px rgba(0,0,0,0.6); display: flex; align-items: center; gap: 0.5rem;">
        <span>${data.duration}</span>
        <span>•</span>
        <div class="price-reveal-wrap">
          <span class="blurred-price" style="font-size: 0.82rem;">${data.price}</span>
          <span class="revealing-soon-badge" style="font-size: 0.65rem; padding: 0.1rem 0.4rem;">On Request</span>
        </div>
      </div>
    </div>
    <span style="font-size: 0.75rem; color: var(--text-gold); text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">Global Holidays Curated Circuit</span>
    <h2 style="font-size: 2.2rem; font-family: var(--font-serif); margin: 0.3rem 0 0.75rem; line-height: 1.2; color: var(--text-primary);">${data.title}</h2>
    <p style="color: var(--accent-teal); font-size: 0.95rem; font-weight: 600; margin-bottom: 1.25rem;">${data.destination}</p>
    <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 2rem;">${data.overview}</p>

    <h3 style="font-size: 1.4rem; font-family: var(--font-serif); margin-bottom: 1.25rem; color: var(--text-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem;">Detailed Day-by-Day Itinerary</h3>
    <div style="margin-bottom: 2.5rem;">
      ${itineraryHtml}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2.5rem; background: var(--bg-surface-elevated); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
      <div>
        <h4 style="color: var(--text-gold); margin-bottom: 0.75rem; font-size: 1rem; font-weight: 700;">Package Inclusions</h4>
        <ul style="list-style: none; padding: 0;">${inclusionsHtml}</ul>
      </div>
      <div>
        <h4 style="color: var(--text-muted); margin-bottom: 0.75rem; font-size: 1rem; font-weight: 700;">Exclusions</h4>
        <ul style="list-style: none; padding: 0;">${exclusionsHtml}</ul>
      </div>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center; justify-content: space-between; flex-wrap: wrap; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle);">
      <div>
        <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Tariff Plan</span>
        <div class="price-reveal-wrap" style="margin-top: 0.25rem;">
          <div class="blurred-price" style="font-size: 1.25rem; font-weight: 700; color: var(--text-gold);">${data.price}</div>
          <span class="revealing-soon-badge">On Request</span>
        </div>
      </div>
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <a href="https://wa.me/918731010676?text=${waText}" target="_blank" rel="noopener" class="btn btn-gold">
          <span>Inquire on WhatsApp</span>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"/></svg>
        </a>
        <a href="/contact" onclick="document.getElementById('package-modal')?.close()" class="btn btn-outline-glass">
          <span>Direct Inquiry Form</span>
        </a>
      </div>
    </div>
  `;
}

export function openPackageDetails(pkgId, destName) {
  let targetKey = pkgId;
  let packageData = null;

  if (targetKey && PACKAGE_DATA[targetKey]) {
    packageData = PACKAGE_DATA[targetKey];
  } else if (destName) {
    const d = destName.toLowerCase();
    if (d.includes("meghalaya")) targetKey = "meghalaya-escape";
    else if (d.includes("himachal")) targetKey = "himachal-splendour";
    else if (d.includes("goa")) targetKey = "goa-escape";
    else if (d.includes("thailand")) targetKey = "thailand-gateway";
    else if (d.includes("aizawl") || d.includes("mizoram"))
      targetKey = "aizawl-escape";
    else if (d.includes("darjeeling")) targetKey = "darjeeling-escape";
    else if (d.includes("bharat") || d.includes("varanasi"))
      targetKey = "grand-bharat-circuit";
    else if (d.includes("delhi")) targetKey = "delhi-heritage";
    else if (d.includes("sikkim")) targetKey = "sikkim-grandeur";
    else if (d.includes("kashmir")) targetKey = "kashmir-paradise";
    else if (d.includes("andaman")) targetKey = "andaman-luxury";
    else if (d.includes("rajasthan")) targetKey = "rajasthan-royal";
    else if (d.includes("tripura")) targetKey = "tripura-heritage";

    if (targetKey && PACKAGE_DATA[targetKey]) {
      packageData = PACKAGE_DATA[targetKey];
    } else {
      const slide = document.querySelector(
        `#hero-carousel .hero-slide[data-dest*="${destName}"]`,
      );
      const heroImg =
        slide?.getAttribute("data-thumb") ||
        slide?.querySelector("img")?.src ||
        "/images/india/meghalaya/Meghalaya.jpeg";
      const routeDesc =
        slide?.getAttribute("data-route") ||
        "Premium Boutique Resorts • Scenic Transfers • Private Guided Tours";

      packageData = {
        title: `${destName} Luxury Curated Circuit`,
        duration: "6 Days / 5 Nights",
        destination: `${destName} (${routeDesc})`,
        price: "Tariff on Request",
        rating: "5.0 ★★★★★ (Signature Circuit)",
        heroImg: heroImg,
        overview: `Experience the finest boutique accommodations, private chauffeur escorts, and authentic cultural expeditions in majestic ${destName}, curated exclusively by Global Holidays Agartala.`,
        itinerary: [
          {
            day: "Day 01",
            title: `Arrival & VIP Reception in ${destName}`,
            desc: "Private chauffeur transfer from airport/station to luxury boutique resort. Evening welcome dinner and itinerary briefing with your dedicated travel designer.",
          },
          {
            day: "Day 02",
            title: "Historic Landmarks & Cultural Highlights",
            desc: "Private guided tour of renowned regional landmarks, cultural heritage sights, and panoramic sunset viewpoints.",
          },
          {
            day: "Day 03",
            title: "Scenic Excursions & Heritage Trails",
            desc: "Full-day curated expedition through signature valleys, heritage trails, local craft centers, and gourmet regional tastings.",
          },
          {
            day: "Day 04",
            title: "Bespoke Countryside Leisure Tour",
            desc: "Exclusive excursion to pristine surrounding natural attractions and viewpoints with dedicated vehicle and local guide.",
          },
          {
            day: "Day 05",
            title: "Artisanal Souvenir Walks & Farewell Banquet",
            desc: "Leisurely morning, artisanal shopping for authentic regional specialties, and evening celebratory dinner overlooking scenic vistas.",
          },
          {
            day: "Day 06",
            title: "Farewell Transfer with Everlasting Memories",
            desc: "Breakfast at resort and private executive transfer to airport/station for onward flight.",
          },
        ],
        inclusions: [
          "Dedicated private luxury vehicle throughout the tour",
          "5 Nights accommodation in handpicked 4/5-star boutique resorts",
          "Daily curated breakfast & gourmet dinner",
          "All state entry permits, toll fees, parking, and driver allowances",
          "Dedicated 24x7 Global Holidays tour concierge coordinator",
        ],
        exclusions: [
          "Airfare / Train tickets",
          "Personal expenses and optional adventure sports",
          "Anything not explicitly stated in package inclusions",
        ],
      };
    }
  } else {
    targetKey = "meghalaya-escape";
    packageData = PACKAGE_DATA[targetKey];
  }

  const modal = document.getElementById("package-modal");
  const modalBody = document.getElementById("pkg-modal-content");

  if (packageData && modalBody) {
    renderPackageModal(packageData, modalBody);
    if (modal) {
      if (typeof modal.showModal === "function") {
        if (!modal.open) modal.showModal();
      } else {
        modal.setAttribute("open", "true");
      }
    }
  }
}

if (typeof window !== "undefined") {
  window.renderPackageModal = renderPackageModal;
  window.openPackageDetails = openPackageDetails;
  if (!window._pkgDelegationAttached) {
    window._pkgDelegationAttached = true;
    document.addEventListener("click", (e) => {
      const btn = e.target.closest(".view-pkg-details, .open-pkg-filter");
      if (!btn) return;
      e.preventDefault();
      const pkgId = btn.getAttribute("data-pkg");
      const destName = btn.getAttribute("data-dest");
      openPackageDetails(pkgId, destName);
    });
  }
}

function initPackageFeatures() {
  const track = document.getElementById("packages-track");
  const prevBtn = document.getElementById("pkg-prev-btn");
  const nextBtn = document.getElementById("pkg-next-btn");
  const modal = document.getElementById("package-modal");
  const closeModalBtn = document.getElementById("close-pkg-modal");

  // Carousel Next/Prev Controls
  if (track && prevBtn && nextBtn) {
    const scrollAmount = 400;
    if (!prevBtn._carouselBound) {
      prevBtn._carouselBound = true;
      prevBtn.addEventListener("click", () => {
        track.parentElement.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      });
    }
    if (!nextBtn._carouselBound) {
      nextBtn._carouselBound = true;
      nextBtn.addEventListener("click", () => {
        track.parentElement.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      });
    }
  }

  if (closeModalBtn && modal && !closeModalBtn._closeBound) {
    closeModalBtn._closeBound = true;
    closeModalBtn.addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }
}

// ========================================================
// 8. INTERACTIVE CUSTOM TRIP PLANNER
// ========================================================
function initTripPlanner() {
  const form = document.getElementById("trip-planner-form");
  const vibeBtns = document.querySelectorAll("#vibe-selector-group .vibe-btn");
  const summaryVibe = document.getElementById("summary-vibe");
  const summaryDest = document.getElementById("summary-dest");
  const destSelect = document.getElementById("plan-destination");
  const dateInput = document.getElementById("plan-date");
  const travelersSelect = document.getElementById("plan-travelers");
  const budgetSelect = document.getElementById("plan-budget");
  const nameInput = document.getElementById("plan-name");
  const phoneInput = document.getElementById("plan-phone");
  const emailInput = document.getElementById("plan-email");
  const whatsappBtn = document.getElementById("whatsapp-plan-btn");

  let selectedVibe = "Honeymoon";

  // Travel style vibe toggles
  vibeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      vibeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedVibe = btn.getAttribute("data-vibe");
      if (summaryVibe) summaryVibe.textContent = selectedVibe;
    });
  });

  // Destination update
  if (destSelect) {
    destSelect.addEventListener("change", () => {
      if (summaryDest)
        summaryDest.textContent = destSelect.value || "Select above";
    });
  }

  // Generate formatted WhatsApp message URL
  function buildWhatsAppUrl() {
    const dest = destSelect ? destSelect.value || "Not selected yet" : "";
    const date = dateInput ? dateInput.value || "Flexible" : "";
    const travelers = travelersSelect ? travelersSelect.value : "2 Persons";
    const budget = budgetSelect ? budgetSelect.value : "Luxury Boutique";
    const name = nameInput ? nameInput.value || "Guest" : "Guest";
    const phone = phoneInput ? phoneInput.value || "N/A" : "N/A";

    const message =
      `✨ *Custom Luxury Trip Request — Global Holidays Agartala* ✨\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🌴 *Travel Style:* ${selectedVibe}\n` +
      `📍 *Destination:* ${dest}\n` +
      `📅 *Date of Travel:* ${date}\n` +
      `👥 *Travellers:* ${travelers}\n` +
      `🏨 *Comfort Tier:* ${budget}\n\n` +
      `Please provide a bespoke itinerary & quote. Thank you!`;

    return `https://wa.me/918731010676?text=${encodeURIComponent(message)}`;
  }

  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", () => {
      window.open(buildWhatsAppUrl(), "_blank");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(
        "Custom Trip Request Received!",
        "Our Agartala travel designer will contact you within 2 hours with a bespoke proposal.",
      );
      form.reset();
      if (summaryDest) summaryDest.textContent = "Select above";
      if (summaryVibe) summaryVibe.textContent = "Honeymoon";
    });
  }
}

// ========================================================
// 9. ANIMATED STATS COUNTERS
// ========================================================
function initStatsCounters() {
  const statsSection = document.getElementById("stats-container");
  const statNumbers = document.querySelectorAll(".stat-number");

  if (!statsSection || statNumbers.length === 0) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          statNumbers.forEach((counter) => {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const duration = 2000;
            const stepTime = 20;
            const totalSteps = duration / stepTime;
            const increment = target / totalSteps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
              } else {
                counter.textContent = Math.floor(current);
              }
            }, stepTime);
          });
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(statsSection);
}

// ========================================================
// 10. FULLSCREEN GALLERY LIGHTBOX
// ========================================================
let currentLightboxIndex = 0;

export function openLightboxIndex(index) {
  const allClickableItems = Array.from(
    document.querySelectorAll(
      ".gallery-item, .legal-preview-container, .legal-btn-view",
    ),
  );
  if (allClickableItems.length === 0) return;

  const itemsData = allClickableItems.map((item) => ({
    img: item.getAttribute("data-img"),
    caption: item.getAttribute("data-caption"),
    author: item.getAttribute("data-author"),
  }));

  if (index < 0) index = itemsData.length - 1;
  if (index >= itemsData.length) index = 0;
  currentLightboxIndex = index;

  const data = itemsData[currentLightboxIndex];
  if (!data) return;

  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxSub = document.getElementById("lightbox-sub");

  if (!lightbox) return;

  if (lightboxImg && data.img) lightboxImg.src = data.img;
  if (lightboxTitle && data.caption) lightboxTitle.textContent = data.caption;
  if (lightboxSub)
    lightboxSub.textContent = data.author || "Global Holidays Verification";

  if (!lightbox.open) {
    if (typeof lightbox.showModal === "function") {
      lightbox.showModal();
    } else {
      lightbox.setAttribute("open", "true");
    }
  }
}

export function stepLightbox(delta) {
  openLightboxIndex(currentLightboxIndex + delta);
}

if (typeof window !== "undefined") {
  window.openLightboxIndex = openLightboxIndex;
  window.stepLightbox = stepLightbox;

  if (!window._lightboxDelegationAttached) {
    window._lightboxDelegationAttached = true;
    document.addEventListener("click", (e) => {
      const item = e.target.closest(
        ".gallery-item, .legal-preview-container, .legal-btn-view",
      );
      if (!item) return;

      const allClickableItems = Array.from(
        document.querySelectorAll(
          ".gallery-item, .legal-preview-container, .legal-btn-view",
        ),
      );
      const idx = allClickableItems.indexOf(item);
      if (idx !== -1) {
        e.preventDefault();
        openLightboxIndex(idx);
      }
    });

    window.addEventListener("keydown", (e) => {
      const lightbox = document.getElementById("lightbox-modal");
      if (lightbox && lightbox.open) {
        if (e.key === "ArrowLeft") stepLightbox(-1);
        if (e.key === "ArrowRight") stepLightbox(1);
        if (e.key === "Escape") lightbox.close();
      }
    });
  }
}

function initGalleryLightbox() {
  const lightbox = document.getElementById("lightbox-modal");
  const closeBtn = document.getElementById("close-lightbox");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");

  if (!lightbox) return;

  if (closeBtn && !closeBtn._bound) {
    closeBtn._bound = true;
    closeBtn.addEventListener("click", () => lightbox.close());
  }
  if (prevBtn && !prevBtn._bound) {
    prevBtn._bound = true;
    prevBtn.addEventListener("click", () => stepLightbox(-1));
  }
  if (nextBtn && !nextBtn._bound) {
    nextBtn._bound = true;
    nextBtn.addEventListener("click", () => stepLightbox(1));
  }

  if (!lightbox._backdropBound) {
    lightbox._backdropBound = true;
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.close();
    });
  }
}

// ========================================================
// 11. TESTIMONIALS SLIDER CONTROLS
// ========================================================
function initTestimonialsSlider() {
  const track = document.getElementById("testimonials-track");
  const prevBtn = document.getElementById("test-prev-btn");
  const nextBtn = document.getElementById("test-next-btn");

  if (!track || !prevBtn || !nextBtn) return;

  const scrollStep = 460;
  nextBtn.addEventListener("click", () => {
    track.parentElement.scrollBy({ left: scrollStep, behavior: "smooth" });
  });
  prevBtn.addEventListener("click", () => {
    track.parentElement.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });
}

// ========================================================
// 12. DIRECT ENQUIRY FORM & TOAST ALERTS
// ========================================================
function initEnquiryForm() {
  const form = document.getElementById("direct-enquiry-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name")?.value || "Guest";
    const destination =
      document.getElementById("contact-dest")?.value || "your destination";

    showToast(
      `Thank You, ${name}!`,
      `Your consultation request for ${destination} is registered. Our Agartala desk will contact you within 24 hours.`,
    );
    form.reset();
  });
}

function showToast(title, desc) {
  const toast = document.getElementById("toast-notify");
  const toastTitle = document.getElementById("toast-title");
  const toastDesc = document.getElementById("toast-desc");

  if (!toast) return;

  if (toastTitle) toastTitle.textContent = title;
  if (toastDesc) toastDesc.textContent = desc;

  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 5000);
}

// ========================================================
// HERO BACKGROUND CAROUSEL (5 IMAGES & DYNAMIC BADGE)
// ========================================================
function initHeroCarousel() {
  const slides = document.querySelectorAll("#hero-carousel .hero-slide");
  const indicators = document.querySelectorAll(
    "#hero-indicators .hero-indicator",
  );
  const prevBtn = document.getElementById("hero-arrow-prev");
  const nextBtn = document.getElementById("hero-arrow-next");
  const thumbImg = document.getElementById("floating-thumb-img");
  const badgeTag = document.getElementById("floating-badge-tag");
  const badgeTitle = document.getElementById("floating-badge-title");
  const badgeSub = document.getElementById("floating-badge-sub");
  const regionTabs = document.querySelectorAll("#hero-region-tabs .region-tab");
  const indicatorsRow = document.getElementById("hero-indicators");

  if (slides.length === 0) return;

  let currentRegion = "india";
  let currentIndex = 0;
  let carouselInterval = null;
  const slideDuration = 5000; // 5 seconds per slide

  // Region boundaries
  const regionRanges = {
    india: { min: 0, max: 14 },
    intl: { min: 15, max: 26 },
  };

  function setRegion(region, targetIndex = null) {
    if (!regionRanges[region]) return;
    currentRegion = region;

    // Update tab UI
    regionTabs.forEach((tab) => {
      const isMatch = tab.getAttribute("data-region") === region;
      tab.classList.toggle("active", isMatch);
      tab.setAttribute("aria-selected", isMatch ? "true" : "false");
    });

    // Update pill visibility
    indicators.forEach((ind) => {
      const indRegion = ind.getAttribute("data-region");
      if (indRegion === region) {
        ind.classList.remove("hidden-region");
      } else {
        ind.classList.add("hidden-region");
      }
    });

    if (indicatorsRow) {
      indicatorsRow.scrollLeft = 0;
    }

    const nextIdx =
      targetIndex !== null ? targetIndex : regionRanges[region].min;
    goToSlide(nextIdx);
  }

  function goToSlide(index) {
    const range = regionRanges[currentRegion] || {
      min: 0,
      max: slides.length - 1,
    };

    // If target slide is outside current region (e.g. from arrow or direct indicator)
    if (index > range.max) {
      index = range.min;
    } else if (index < range.min) {
      index = range.max;
    }

    currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add("active");
        // Update floating destination badge
        const dest = slide.getAttribute("data-dest");
        const badge = slide.getAttribute("data-badge");
        const route = slide.getAttribute("data-route");
        const thumb = slide.getAttribute("data-thumb");

        if (thumbImg && thumb) thumbImg.src = thumb;
        if (badgeTag && badge) badgeTag.textContent = badge;
        if (badgeTitle && dest) badgeTitle.textContent = dest;
        if (badgeSub && route) badgeSub.textContent = route;
      } else {
        slide.classList.remove("active");
      }
    });

    indicators.forEach((ind, i) => {
      if (i === currentIndex) {
        ind.classList.add("active");
      } else {
        ind.classList.remove("active");
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    carouselInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, slideDuration);
  }

  function stopAutoPlay() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      carouselInterval = null;
    }
  }

  // Hook region tabs click
  regionTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selectedRegion = tab.getAttribute("data-region");
      if (selectedRegion !== currentRegion) {
        setRegion(selectedRegion);
        startAutoPlay();
      }
    });
  });

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
      startAutoPlay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
      startAutoPlay();
    });
  }

  const floatingCard = document.getElementById("hero-floating-card");
  if (floatingCard && !floatingCard._bound) {
    floatingCard._bound = true;
    const handleFloatingClick = (e) => {
      e.preventDefault();
      const currentSlide = slides[currentIndex];
      const dest =
        currentSlide?.getAttribute("data-dest") ||
        badgeTitle?.textContent ||
        "Meghalaya";
      window.location.href = `/packages?dest=${encodeURIComponent(dest)}`;
    };
    floatingCard.addEventListener("click", handleFloatingClick);
    floatingCard.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleFloatingClick(e);
      }
    });
  }

  indicators.forEach((ind) => {
    ind.addEventListener("click", () => {
      const idx = parseInt(ind.getAttribute("data-index"), 10);
      const currentSlide = slides[idx];
      const dest =
        currentSlide?.getAttribute("data-dest") ||
        ind.querySelector(".ind-label")?.textContent ||
        ind.textContent.trim();
      window.location.href = `/packages?dest=${encodeURIComponent(dest)}`;
    });
  });

  const heroSection = document.getElementById("hero");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", startAutoPlay);

    // Pause autoplay when hero section is not in viewport to prevent repaints / flickering
    if (typeof IntersectionObserver !== "undefined") {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startAutoPlay();
            } else {
              stopAutoPlay();
            }
          });
        },
        { threshold: 0.1 },
      );
      heroObserver.observe(heroSection);
    }
  }

  // Start initial auto play
  startAutoPlay();
}

// ========================================================
// THEME MANAGER (DARK / MORNING GLORY LIGHT)
// ========================================================
function initThemeManager() {
  try {
    const savedTheme = localStorage.getItem("gh_theme") || "dark";
    if (!document.documentElement.getAttribute("data-theme")) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  } catch (_) {}
}

// ========================================================
// 13. BACK TO TOP BUTTON
// ========================================================
function initBackToTop() {
  const topBtn = document.getElementById("back-to-top-btn");
  if (!topBtn) return;

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 300) {
        topBtn.classList.add("visible");
      } else {
        topBtn.classList.remove("visible");
      }
    },
    { passive: true },
  );

  topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========================================================
// 14. EXPORT AND INITIALIZER
// ========================================================
export function initApp() {
  if (typeof window === "undefined") return;
  initThemeManager();
  initSmoothScroll();
  initCustomCursor();
  initHeroCarousel();
  initHeaderScroll();
  initDropdownNavigation();
  initMobileDrawer();
  initBackToTop();
  initDestinationFilters();
  initPackageFeatures();
  initTripPlanner();
  initStatsCounters();
  initGalleryLightbox();
  initTestimonialsSlider();
  initEnquiryForm();
}

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
}
