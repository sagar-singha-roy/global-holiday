/**
 * GLOBAL HOLIDAYS TOUR & TRAVELS — MAIN JAVASCRIPT CONTROLLER
 * Location: Agartala, Tripura, India
 * Features: Lenis Smooth Scroll, Custom Cursor, Dynamic Concierge,
 *           Package Detail Modals, Lightbox Gallery, Animated Counters,
 *           WhatsApp Direct Router, Testimonial & Package Sliders
 */

import Lenis from "lenis";

// ========================================================
// 1. DATA REPOSITORIES (PACKAGES & ITINERARIES)
// ========================================================
const PACKAGE_DATA = {
  "meghalaya-escape": {
    title: "Meghalaya Cloud Sanctuary Escape",
    duration: "5 Days / 4 Nights",
    destination: "Meghalaya (Shillong • Cherrapunji • Dawki • Mawlynnong)",
    price: "₹18,500",
    rating: "4.9 ★★★★★ (48 Verified Reviews)",
    heroImg: "/images/meghalaya.jpg",
    overview:
      "Immerse yourself in the world's wettest paradise. Experience mist-laden waterfalls, ancient living root bridges, the glass-clear waters of Umngot River in Dawki, and charming boutique pine forest stays.",
    itinerary: [
      {
        day: "Day 01",
        title:
          "Arrival Guwahati → Scenic Drive to Shillong (Scotland of the East)",
        desc: "Private chauffeur pickup from Guwahati Airport/Station. Scenic drive through Umiam Lake (Barapani) with sunset photo stop. Check-in to luxury pine resort in Shillong. Evening leisurely walk along Police Bazar.",
      },
      {
        day: "Day 02",
        title: "Shillong Sightseeing → Journey to Cherrapunji (Sohra)",
        desc: "Visit Elephant Falls, Shillong Peak, and Don Bosco Museum. Traverse the dramatic gorge roads to Cherrapunji. Visit Nohkalikai Falls (India’s tallest plunge waterfall) and Mawsmai Cave. Night stay in cliffside luxury cottage.",
      },
      {
        day: "Day 03",
        title: "Trek to Double Decker Living Root Bridge & Rainbow Falls",
        desc: "Guided trek through Nongriat rainforest to witness the centuries-old bio-engineering marvel of Double Decker Living Root Bridges. Refreshing dip in natural turquoise spring pools.",
      },
      {
        day: "Day 04",
        title: "Dawki Crystal Umngot River → Mawlynnong Cleanest Village",
        desc: "Private boat excursion on the iconic transparent waters of Umngot River along the Indo-Bangladesh border. Explore Mawlynnong flower trails, balancing rock, and single root bridge. Return to Shillong.",
      },
      {
        day: "Day 05",
        title: "Shillong → Guwahati Airport Drop with Fond Memories",
        desc: "Leisurely breakfast overlooking pine valleys, souvenir shopping for Khasi organic honey and handlooms, transfer to Guwahati airport for onward flight.",
      },
    ],
    inclusions: [
      "Dedicated private luxury SUV (Innova / Crysta) for entire tour",
      "4 Nights accommodation in handpicked luxury boutique resorts",
      "Daily curated breakfast & gourmet dinner",
      "Dawki private boat excursion & life jackets",
      "Experienced local certified Khasi English/Hindi speaking guide for root bridge trek",
      "All toll taxes, state permits, parking fees, and driver allowances",
    ],
    exclusions: [
      "Airfare / Train tickets to Guwahati",
      "Personal expenses & adventure sports like ziplining",
      "Anything not mentioned in inclusions",
    ],
  },
  "sikkim-grandeur": {
    title: "Sikkim & Darjeeling Himalayan Grandeur",
    duration: "7 Days / 6 Nights",
    destination:
      "Sikkim & West Bengal (Gangtok • Tsomgo • Pelling • Darjeeling)",
    price: "₹26,500",
    rating: "5.0 ★★★★★ (62 Verified Reviews)",
    heroImg:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop",
    overview:
      "A majestic journey across sacred high-altitude glacial lakes, ancient Buddhist monasteries, tea garden valleys, and jaw-dropping sunrises over Mt. Kanchenjunga.",
    itinerary: [
      {
        day: "Day 01",
        title: "Bagdogra / NJP Arrival → Gangtok (Capital of Sikkim)",
        desc: "Chauffeur pickup with traditional Khata welcome. Drive along the gushing Teesta River. Check-in at luxury heritage hotel in Gangtok. Evening stroll on MG Marg.",
      },
      {
        day: "Day 02",
        title: "Sacred Tsomgo Lake & Baba Mandir (12,400 ft)",
        desc: "Excursion to the pristine oval-shaped Tsomgo Glacial Lake, surrounded by snow peaks and prayer flags. Visit Baba Harbhajan Singh Memorial Shrine. Optional Nathula Pass permit.",
      },
      {
        day: "Day 03",
        title: "Gangtok Monastery Circuit → Transfer to Pelling (West Sikkim)",
        desc: "Visit Rumtek Monastery, Do Drul Chorten, and Namgyal Institute of Tibetology. Scenic drive through cardamom plantations to Pelling with direct views of Mt. Kanchenjunga.",
      },
      {
        day: "Day 04",
        title: "Pelling Heritage & Skywalk Excursion",
        desc: "Visit Pemayangtse Monastery, Rabdentse Palace ruins, and India’s first Glass Skywalk overlooking the Chenrezig statue. Sunset over Himalayan range.",
      },
      {
        day: "Day 05",
        title: "Pelling → Darjeeling Queen of the Hills",
        desc: "Drive through lush pine ridges to Darjeeling. Check-in to colonial heritage tea retreat. Evening visit to Glenary’s bakery and Darjeeling Mall.",
      },
      {
        day: "Day 06",
        title: "Tiger Hill Sunrise & Himalayan Toy Train Ride",
        desc: "Early morning 4:00 AM drive to Tiger Hill for the world-famous golden sunrise illuminating Kanchenjunga & Everest. Visit Ghoom Monastery and Batasia Loop. Joyride on UNESCO heritage DHR steam toy train.",
      },
      {
        day: "Day 07",
        title: "Tea Tasting & Departure to Bagdogra / NJP",
        desc: "Private tea tasting session at an emerald Darjeeling estate. Drive back down to Bagdogra airport for departure.",
      },
    ],
    inclusions: [
      "Private 4x4 / Luxury SUV with expert mountain chauffeur",
      "6 Nights accommodation in premium 4-star & heritage heritage resorts",
      "Daily breakfast & dinner buffet",
      "Sikkim special inner line permits & entry tickets",
      "Guided monastery and tea estate cultural tour",
    ],
    exclusions: [
      "Airfare",
      "Nathula Pass optional permit fees (subject to weather)",
      "Personal tips",
    ],
  },
  "kashmir-paradise": {
    title: "Enchanted Kashmir Odyssey",
    duration: "6 Days / 5 Nights",
    destination: "Kashmir (Srinagar • Gulmarg • Pahalgam • Sonmarg)",
    price: "₹32,000",
    rating: "4.9 ★★★★★ (54 Verified Reviews)",
    heroImg:
      "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Experience the crown of India. Sleep aboard hand-carved cedar houseboats on Dal Lake, ride the world-renowned Gulmarg Gondola over snow fields, and wander through pine meadows in Pahalgam.",
    itinerary: [
      {
        day: "Day 01",
        title: "Srinagar Arrival & Dal Lake Luxury Houseboat Check-in",
        desc: "Warm Kashmiri Kahwa welcome on private luxury houseboat. Evening sunset Shikara ride across floating lotus gardens and Char Chinar.",
      },
      {
        day: "Day 02",
        title: "Mughal Gardens Tour & Srinagar Heritage",
        desc: "Visit Nishat Bagh (Garden of Bliss), Shalimar Bagh, and Shankaracharya Temple perched atop the hill with panoramic views of Srinagar city.",
      },
      {
        day: "Day 03",
        title: "Gulmarg Meadow of Flowers & Gondola Ride",
        desc: "Day trip to Gulmarg. Pre-arranged Phase 1 & Phase 2 Gondola ride up to Apharwat Peak (13,780 ft) for snow activities and alpine skiing vistas.",
      },
      {
        day: "Day 04",
        title: "Srinagar → Pahalgam (Valley of Shepherds)",
        desc: "Drive through saffron fields of Pampore and walnut orchards. Check-in to riverside luxury resort in Pahalgam. Walk along the Lidder River.",
      },
      {
        day: "Day 05",
        title: "Betaab Valley, Aru Valley & Chandanwari",
        desc: "Explore Betaab Valley named after the iconic movie, pristine Aru alpine village, and Chandanwari snow point in local private cabs.",
      },
      {
        day: "Day 06",
        title: "Pahalgam → Srinagar Airport Drop",
        desc: "Final morning Kashmiri breakfast, dry fruit & pashmina shopping assistance, transfer to Srinagar airport.",
      },
    ],
    inclusions: [
      "1 Night Luxury Carved Cedar Houseboat on Dal Lake",
      "4 Nights in 4-Star & 5-Star Boutique Hotels (Srinagar & Pahalgam)",
      "1 Hour complimentary private Shikara ride",
      "All intercity transfers in private AC vehicle",
      "Daily breakfast and chef-prepared Wazwan dinners",
    ],
    exclusions: [
      "Airfare to Srinagar",
      "Gulmarg Gondola tickets (booked on request)",
      "Horse/Pony rides",
    ],
  },
  "andaman-luxury": {
    title: "Andaman Azure Haven & Coral Reefs",
    duration: "6 Days / 5 Nights",
    destination: "Andaman Islands (Port Blair • Havelock • Neil Island)",
    price: "₹38,500",
    rating: "5.0 ★★★★★ (39 Verified Reviews)",
    heroImg:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Immerse in turquoise waters, powdery white sand beaches, luxury catamaran cruises, private scuba diving sessions, and candle-lit beachfront dinners.",
    itinerary: [
      {
        day: "Day 01",
        title: "Port Blair Arrival & Cellular Jail Light & Sound Show",
        desc: "Private transfer to luxury hotel. Afternoon visit to historic Cellular Jail with evening moving Sound & Light show.",
      },
      {
        day: "Day 02",
        title: "High-Speed Luxury Catamaran (Makruzz) to Havelock Island",
        desc: "Cruise across the deep blue Andaman Sea. Check-in to private beachfront villa. Afternoon sunset at Radhanagar Beach (Asia’s top beach).",
      },
      {
        day: "Day 03",
        title: "Elephant Beach Coral Snorkeling & Scuba Discovery",
        desc: "Speedboat to Elephant Beach for guided private snorkeling amongst vibrant corals and exotic marine life.",
      },
      {
        day: "Day 04",
        title: "Havelock → Neil Island (Shaheed Dweep)",
        desc: "Catamaran to serene Neil Island. Visit Bharatpur Beach, Laxmanpur Beach sunset, and the Natural Coral Bridge rock formation.",
      },
      {
        day: "Day 05",
        title: "Neil Island → Port Blair Return & Chidiya Tapu Sunset",
        desc: "Return catamaran to Port Blair. Evening drive to Chidiya Tapu (Bird Island) for spectacular horizon sunset.",
      },
      {
        day: "Day 06",
        title: "Port Blair Departure",
        desc: "Breakfast, souvenir pearl shopping, drop-off at Veer Savarkar International Airport.",
      },
    ],
    inclusions: [
      "5 Nights in Luxury Beachfront Resorts & Villas",
      "Premium Catamaran (Makruzz / Nautika) tickets between islands",
      "Complimentary Snorkeling session with underwater photography",
      "Daily breakfast and candlelit seaside dinners",
      "Private air-conditioned transfers on all islands",
    ],
    exclusions: [
      "Airfare to Port Blair",
      "Optional Scuba Diving / Sea Walk packages",
      "Personal expenses",
    ],
  },
  "rajasthan-royal": {
    title: "Royal Rajasthan Splendour & Desert Camps",
    duration: "7 Days / 6 Nights",
    destination: "Rajasthan (Jaipur • Jodhpur • Udaipur • Jaisalmer)",
    price: "₹34,000",
    rating: "4.8 ★★★★★ (41 Reviews)",
    heroImg:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Live like royalty. Stay in majestic heritage havelis and palaces, sail across Lake Pichola in Udaipur, explore Amber Fort, and stargaze on the golden desert dunes of Thar.",
    itinerary: [
      {
        day: "Day 01",
        title: "Jaipur Pink City Arrival & Heritage Walk",
        desc: "Pickup and check-in to heritage boutique palace. Evening visit to Albert Hall Museum illuminated at night.",
      },
      {
        day: "Day 02",
        title: "Jaipur Forts, Hawa Mahal & City Palace",
        desc: "Guided tour of Amber Fort with elephant/jeep ascent. Visit Hawa Mahal facade, Jantar Mantar observatory, and royal City Palace.",
      },
      {
        day: "Day 03",
        title: "Jaipur → Jodhpur Blue City via Ajmer/Pushkar",
        desc: "Drive to Jodhpur. Visit the majestic Mehrangarh Fort towering above the blue-painted old city and Jaswant Thada marble cenotaph.",
      },
      {
        day: "Day 04",
        title: "Jodhpur → Jaisalmer Golden City & Sam Sand Dunes",
        desc: "Drive to Jaisalmer desert. Check-in to luxury Swiss desert camp. Camel safari across dunes, folk Kalbelia dance, and Rajasthani buffet under starlight.",
      },
      {
        day: "Day 05",
        title: "Jaisalmer Fort → Drive to Udaipur City of Lakes",
        desc: "Explore the living Jaisalmer Fort (Sonar Qila) and Patwon Ki Haveli. Scenic drive to romantic Udaipur.",
      },
      {
        day: "Day 06",
        title: "Udaipur City Palace & Lake Pichola Private Boat Charter",
        desc: "Tour the grand Udaipur City Palace complex, Saheliyon Ki Bari, and enjoy a sunset boat charter on Lake Pichola overlooking Jag Mandir.",
      },
      {
        day: "Day 07",
        title: "Udaipur Departure",
        desc: "Breakfast, shopping for royal miniature paintings and handicrafts, drop at Udaipur Airport.",
      },
    ],
    inclusions: [
      "6 Nights in Luxury Heritage Havelis & Luxury Swiss Desert Camp",
      "Daily royal breakfast and multi-course dinners",
      "Private air-conditioned luxury sedan / SUV throughout",
      "Private boat ride on Lake Pichola & Desert Camel Safari",
      "Licensed English/Hindi speaking monument guides",
    ],
    exclusions: [
      "Airfare / Train tickets",
      "Monument entry tickets",
      "Personal expenses",
    ],
  },
  "tripura-heritage": {
    title: "Tripura Royal Palaces & Unakoti Discovery",
    duration: "4 Days / 3 Nights",
    destination:
      "Tripura Exclusive (Agartala • Neermahal • Sepahijala • Unakoti)",
    price: "₹14,500",
    rating: "5.0 ★★★★★ (31 Reviews)",
    heroImg:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200&auto=format&fit=crop",
    overview:
      "Discover the royal heritage of Tripura with Agartala’s premier travel designers. Explore Ujjayanta Palace, the floating water palace Neermahal on Rudrasagar Lake, and the colossal rock carvings of Unakoti.",
    itinerary: [
      {
        day: "Day 01",
        title: "Agartala Arrival & Ujjayanta Palace & Heritage Walk",
        desc: "Warm reception at MBB Airport Agartala by Global Holidays team. Check-in to premium Agartala hotel. Visit Ujjayanta Palace museum and heritage temples.",
      },
      {
        day: "Day 02",
        title: "Neermahal Floating Water Palace & Sepahijala Sanctuary",
        desc: "Excursion to Melaghar to witness the iconic Neermahal palace situated in the middle of Rudrasagar Lake via royal motorboat. Visit Sepahijala Wildlife Sanctuary and cloud leopard conservation center.",
      },
      {
        day: "Day 03",
        title: "Unakoti Rock Carvings (Angkor Wat of the Northeast)",
        desc: "Scenic journey to Kailashahar to explore the mysterious 7th-9th century bas-relief colossal rock carvings and waterfalls of Unakoti.",
      },
      {
        day: "Day 04",
        title: "Local Handicraft Emporium & Airport Drop",
        desc: "Visit Purbasha bamboo & cane handicraft hub, sample authentic Tripuri sweets (Peda) and transfer to Agartala airport.",
      },
    ],
    inclusions: [
      "3 Nights in Premium Agartala Luxury Hotels",
      "Dedicated AC vehicle for all transfers and excursions",
      "Neermahal boat tickets & Unakoti entry permits",
      "Daily breakfast & authentic Tripuri royal banquet dinner",
      "Local expert cultural guide",
    ],
    exclusions: ["Airfare", "Personal items", "Tips"],
  },
};

// ========================================================
// 2. INITIALIZE LENIS SMOOTH SCROLLING
// ========================================================
let lenisInstance = null;

function initLenis() {
  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smooth anchor navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#" || href === "") return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          // Close mobile drawer if open
          closeMobileDrawer();
          lenisInstance.scrollTo(target, { offset: -70, duration: 1.4 });
        }
      });
    });
  } catch (err) {
    console.warn("Lenis smooth scroll fallback active:", err);
  }
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
      if (el.dataset.cursorHoverAttached) return;
      el.dataset.cursorHoverAttached = "true";
      el.addEventListener("mouseenter", () => cursor.classList.add("hovering"));
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("hovering"),
      );
    });
  }

  // Bind interactive hovers for newly rendered elements
  bindHover();

  // If already tracking mouse, do not duplicate listeners or RAF loops
  if (cursor.dataset.cursorReady === "true") return;

  // Only enable on desktop pointer devices
  if (window.matchMedia("(pointer: fine)").matches) {
    cursor.dataset.cursorReady = "true";

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
// 6. DESTINATION FILTER SYSTEM
// ========================================================
function initDestinationFilters() {
  const filterTabs = document.querySelectorAll(
    "#destination-filters .filter-tab",
  );
  const destCards = document.querySelectorAll(
    "#destinations-container .destination-card",
  );

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
// 6b. HOTEL, DEAL, AND GALLERY FILTER SYSTEMS
// ========================================================
function initHotelFilters() {
  const filterTabs = document.querySelectorAll("#hotel-filters .filter-tab");
  const cards = document.querySelectorAll("#hotels-container .hotel-card");
  if (!filterTabs.length || !cards.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filterValue = tab.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category") || "";
        if (filterValue === "all" || category.includes(filterValue)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 30);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

function initDealFilters() {
  const filterTabs = document.querySelectorAll("#deal-filters .filter-tab");
  const cards = document.querySelectorAll("#deals-container .deal-card");
  if (!filterTabs.length || !cards.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filterValue = tab.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category") || "";
        if (filterValue === "all" || category.includes(filterValue)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1)";
          }, 30);
        } else {
          card.style.opacity = "0";
          card.style.transform = "scale(0.96)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

function initGalleryFilters() {
  const filterTabs = document.querySelectorAll("#gallery-filters .filter-tab");
  const items = document.querySelectorAll("#masonry-gallery .gallery-item");
  if (!filterTabs.length || !items.length) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filterValue = tab.getAttribute("data-filter");

      items.forEach((item) => {
        const category = item.getAttribute("data-category") || "";
        if (filterValue === "all" || category.includes(filterValue)) {
          item.style.display = "block";
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "scale(1)";
          }, 30);
        } else {
          item.style.opacity = "0";
          item.style.transform = "scale(0.96)";
          setTimeout(() => {
            item.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

// ========================================================
// 7. CURATED PACKAGES CAROUSEL & MODAL INSPECTOR
// ========================================================
function initPackageFeatures() {
  const track = document.getElementById("packages-track");
  const prevBtn = document.getElementById("pkg-prev-btn");
  const nextBtn = document.getElementById("pkg-next-btn");
  const modal = document.getElementById("package-modal");
  const modalBody = document.getElementById("pkg-modal-content");
  const closeModalBtn = document.getElementById("close-pkg-modal");

  // Carousel Next/Prev Controls
  if (track && prevBtn && nextBtn) {
    const scrollAmount = 400;
    nextBtn.addEventListener("click", () => {
      track.parentElement.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
    prevBtn.addEventListener("click", () => {
      track.parentElement.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }

  // Open Package Modal Handler
  document
    .querySelectorAll(".view-pkg-details, .open-pkg-filter")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const pkgId = btn.getAttribute("data-pkg");
        const destName = btn.getAttribute("data-dest");

        let targetKey = pkgId;
        if (!targetKey && destName) {
          // Find matching package key
          if (destName.includes("Meghalaya")) targetKey = "meghalaya-escape";
          else if (
            destName.includes("Sikkim") ||
            destName.includes("Darjeeling")
          )
            targetKey = "sikkim-grandeur";
          else if (destName.includes("Kashmir")) targetKey = "kashmir-paradise";
          else if (destName.includes("Andaman")) targetKey = "andaman-luxury";
          else if (destName.includes("Rajasthan"))
            targetKey = "rajasthan-royal";
          else if (destName.includes("Tripura")) targetKey = "tripura-heritage";
          else targetKey = "meghalaya-escape";
        }

        if (targetKey && PACKAGE_DATA[targetKey]) {
          renderPackageModal(PACKAGE_DATA[targetKey]);
          if (modal) modal.showModal();
        }
      });
    });

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => modal.close());
    // Light dismiss on backdrop click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  }

  function renderPackageModal(data) {
    if (!modalBody) return;

    const itineraryHtml = data.itinerary
      .map(
        (item) => `
      <div style="margin-bottom: 1.5rem; padding-left: 1.25rem; border-left: 2px solid var(--gold-light);">
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--gold-light); text-transform: uppercase; letter-spacing: 0.1em;">${item.day}</span>
        <h4 style="font-size: 1.15rem; color: var(--text-primary); margin: 0.2rem 0 0.4rem;">${item.title}</h4>
        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">${item.desc}</p>
      </div>
    `,
      )
      .join("");

    const inclusionsHtml = data.inclusions
      .map(
        (inc) =>
          `<li style="margin-bottom: 0.4rem; color: var(--text-secondary); font-size: 0.9rem; display: flex; align-items: center; gap: 0.5rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f3c766" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${inc}</span></li>`,
      )
      .join("");
    const exclusionsHtml = data.exclusions
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
            <span class="blurred-price" style="font-size: 0.82rem;">${data.price} / person</span>
            <span class="revealing-soon-badge" style="font-size: 0.65rem; padding: 0.1rem 0.4rem;">Revealing Soon</span>
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
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 600;">Starting Price</span>
          <div class="price-reveal-wrap" style="margin-top: 0.25rem;">
            <div class="blurred-price" style="font-size: 1.5rem; font-weight: 700; color: var(--text-gold);">${data.price} <small style="font-size: 0.8rem; font-weight: 400; color: var(--text-muted);">/ person</small></div>
            <span class="revealing-soon-badge">Revealing Soon</span>
          </div>
        </div>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="https://wa.me/918731010676?text=${waText}" target="_blank" rel="noopener" class="btn btn-gold">
            <span>Inquire on WhatsApp</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"/></svg>
          </a>
          <a href="#contact" onclick="document.getElementById('package-modal').close()" class="btn btn-outline-glass">
            <span>Direct Inquiry Form</span>
          </a>
        </div>
      </div>
    `;
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
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxSub = document.getElementById("lightbox-sub");
  const closeBtn = document.getElementById("close-lightbox");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");

  if (!lightbox) return;

  const allClickableItems = document.querySelectorAll(
    ".gallery-item, .legal-preview-container, .legal-btn-view",
  );
  if (allClickableItems.length === 0) return;

  let currentIndex = 0;
  const itemsData = Array.from(allClickableItems).map((item) => ({
    img: item.getAttribute("data-img"),
    caption: item.getAttribute("data-caption"),
    author: item.getAttribute("data-author"),
  }));

  function showLightboxIndex(index) {
    if (index < 0) index = itemsData.length - 1;
    if (index >= itemsData.length) index = 0;
    currentIndex = index;

    const data = itemsData[currentIndex];
    if (lightboxImg && data.img) lightboxImg.src = data.img;
    if (lightboxTitle && data.caption) lightboxTitle.textContent = data.caption;
    if (lightboxSub)
      lightboxSub.textContent = data.author || "Global Holidays Verification";
  }

  allClickableItems.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      showLightboxIndex(idx);
      lightbox.showModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", () => lightbox.close());
  if (prevBtn)
    prevBtn.addEventListener("click", () =>
      showLightboxIndex(currentIndex - 1),
    );
  if (nextBtn)
    nextBtn.addEventListener("click", () =>
      showLightboxIndex(currentIndex + 1),
    );

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.close();
  });

  window.addEventListener("keydown", (e) => {
    if (lightbox.open) {
      if (e.key === "ArrowLeft") showLightboxIndex(currentIndex - 1);
      if (e.key === "ArrowRight") showLightboxIndex(currentIndex + 1);
      if (e.key === "Escape") lightbox.close();
    }
  });
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

  indicators.forEach((ind) => {
    ind.addEventListener("click", () => {
      const idx = parseInt(ind.getAttribute("data-index"), 10);
      const indRegion = ind.getAttribute("data-region");
      if (indRegion && indRegion !== currentRegion) {
        setRegion(indRegion, idx);
      } else {
        goToSlide(idx);
      }
      startAutoPlay();
    });
  });

  const heroSection = document.getElementById("hero");
  if (heroSection) {
    heroSection.addEventListener("mouseenter", stopAutoPlay);
    heroSection.addEventListener("mouseleave", startAutoPlay);

    // Mobile touch swipe gestures
    let touchStartX = 0;
    heroSection.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
      },
      { passive: true },
    );

    heroSection.addEventListener(
      "touchend",
      (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diffX = touchStartX - touchEndX;
        if (Math.abs(diffX) > 40) {
          if (diffX > 0) {
            goToSlide(currentIndex + 1); // Swipe left -> next
          } else {
            goToSlide(currentIndex - 1); // Swipe right -> prev
          }
        }
        startAutoPlay();
      },
      { passive: true },
    );
  }

  // Start initial auto play
  startAutoPlay();
}

// ========================================================
// THEME MANAGER (DARK / MORNING GLORY LIGHT)
// ========================================================
function initThemeManager() {
  const savedTheme = localStorage.getItem("gh_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);

  function toggleTheme() {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("gh_theme", next);
  }

  document
    .querySelectorAll("#theme-toggle-btn, .mobile-theme-btn")
    .forEach((btn) => {
      btn.addEventListener("click", toggleTheme);
    });
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
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

// ========================================================
// 14. EXPORT AND INITIALIZER
// ========================================================
export function initApp() {
  if (typeof window === "undefined") return;
  initThemeManager();
  initLenis();
  initCustomCursor();
  initHeroCarousel();
  initHeaderScroll();
  initDropdownNavigation();
  initMobileDrawer();
  initBackToTop();
  initDestinationFilters();
  initHotelFilters();
  initDealFilters();
  initGalleryFilters();
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
