"use client";

import { useState } from "react";
import Link from "next/link";

const DESTINATIONS = [
  // Kashmir Valley (1st in All Destinations)
  {
    id: "kashmir",
    category: "pan-india",
    tag: "Paradise on Earth • Kashmir",
    name: "Kashmir Valley",
    desc: "Intricately carved luxury cedar houseboats on Dal Lake, Gulmarg Gondola snow passes, and Lidder riverbanks in Pahalgam.",
    img: "/images/india/kashmir/Kashmir.jpeg",
    pkgFilter: "Kashmir",
    large: true,
  },

  // Northeast India
  {
    id: "meghalaya",
    category: "northeast",
    tag: "Northeast India • Meghalaya",
    name: "Meghalaya & Shillong",
    desc: "Abode of clouds, Nohkalikai plunge waterfalls, crystal-clear Umngot river boating at Dawki, and sacred pine groves.",
    img: "/images/india/meghalaya/Meghalaya.jpeg",
    pkgFilter: "Meghalaya",
    large: false,
  },
  {
    id: "sikkim",
    category: "northeast",
    tag: "Northeast India • Sikkim",
    name: "Sikkim & Gurudongmar",
    desc: "Glacial alpine lakes at 17,800 ft, sacred gompas, Yumthang Valley of Flowers, and Kanchenjunga panoramas.",
    img: "/images/india/sikkim/Sikkim.jpeg",
    pkgFilter: "Sikkim",
  },
  {
    id: "darjeeling",
    category: "northeast",
    tag: "Eastern Himalayas • West Bengal",
    name: "Darjeeling Tea Hills",
    desc: "Tiger Hill sunrises, colonial tea estate heritage bungalows, Glenary’s bakery walks, and UNESCO toy train.",
    img: "/images/india/darjeeling-west-bengal/darjeeling.jpeg",
    pkgFilter: "Darjeeling",
  },
  {
    id: "tripura",
    category: "northeast",
    tag: "Our Home Turf • Tripura",
    name: "Tripura & Unakoti",
    desc: "Neermahal water palace on Rudrasagar lake, royal Ujjayanta Palace museum in Agartala, and 7th-century rock carvings of Unakoti.",
    img: "/images/india/tripura/Tripura.jpeg",
    pkgFilter: "Tripura",
    large: true,
  },
  {
    id: "arunachal",
    category: "northeast",
    tag: "Northeast India • Arunachal",
    name: "Arunachal & Tawang",
    desc: "Sela Pass at 13,700 ft, ancient 400-year-old Tawang Monastery, Sangetsar Lake, and lush Ziro pine valleys.",
    img: "/images/india/arunachal-pradesh/arunachal.jpeg",
    pkgFilter: "Arunachal",
  },
  {
    id: "assam",
    category: "northeast",
    tag: "Gateway to Northeast • Assam",
    name: "Assam & Kaziranga",
    desc: "UNESCO Kaziranga one-horned rhino jeep safaris, Brahmaputra luxury river cruises, and heritage tea gardens.",
    img: "/images/india/assam/assam.jpeg",
    pkgFilter: "Assam",
  },

  // Pan-India Heritage & Mountains
  {
    id: "ladakh",
    category: "pan-india",
    tag: "Land of High Passes • Ladakh",
    name: "Ladakh & Pangong",
    desc: "Surreal high-altitude blue waters of Pangong Tso, sand dunes of Nubra Valley, Khardung La pass, and ancient cliffside gompas.",
    img: "/images/india/ladakh/ladakh.jpeg",
    pkgFilter: "Ladakh",
  },
  {
    id: "rajasthan",
    category: "pan-india",
    tag: "Royal Kingdoms • Rajasthan",
    name: "Rajasthan Palaces",
    desc: "Udaipur Lake Pichola charters, Jodhpur Mehrangarh fort vistas, and stargazing in luxury desert tents in Jaisalmer.",
    img: "/images/india/rajasthan/rajasthan.jpeg",
    pkgFilter: "Rajasthan",
  },
  {
    id: "himachal",
    category: "pan-india",
    tag: "Alpine Solitude • Himachal",
    name: "Himachal & Spiti",
    desc: "Cedar chalets in Manali, Solang snow meadows, Atal Tunnel engineering marvel, and heritage colonial trails of Shimla.",
    img: "/images/india/himachal-pradesh/himachal.jpeg",
    pkgFilter: "Himachal",
  },
  {
    id: "uttarakhand",
    category: "pan-india",
    tag: "Devbhoomi • Uttarakhand",
    name: "Uttarakhand & Rishikesh",
    desc: "Holy Ganga Aarti at Rishikesh, misty colonial ridges in Mussoorie, serene Nainital lake, and alpine ski meadows in Auli.",
    img: "/images/india/uttarakhand/Uttarakhand.jpeg",
    pkgFilter: "Uttarakhand",
  },
  {
    id: "karnataka",
    category: "pan-india",
    tag: "Southern Heritage • Karnataka",
    name: "Karnataka & Coorg",
    desc: "Ancient boulder ruins and Virupaksha temple of Hampi, aromatic Coorg coffee plantations, and royal Mysore palaces.",
    img: "/images/india/karnataka/karnatak.jpeg",
    pkgFilter: "Karnataka",
  },
  {
    id: "tamil-nadu",
    category: "pan-india",
    tag: "Dravidian Heritage • Tamil Nadu",
    name: "Tamil Nadu & Nilgiris",
    desc: "Towering Meenakshi temple gopurams in Madurai, toy train curves in Ooty Nilgiris, and sacred Rameshwaram shores.",
    img: "/images/india/tamil-nadu/tamilnadu.jpeg",
    pkgFilter: "Tamil Nadu",
  },

  // Tropical & Coastal
  {
    id: "andaman",
    category: "islands",
    tag: "Tropical Haven • Andaman",
    name: "Andaman Islands",
    desc: "Radhanagar beach sunsets, private catamaran inter-island voyages, and exclusive coral reef scuba sessions.",
    img: "/images/india/andaman-islands/andaman.jpg",
    pkgFilter: "Andaman",
    large: true,
  },
  {
    id: "goa",
    category: "islands",
    tag: "Coastal Sophistication • Goa",
    name: "Goa Heritage Villas",
    desc: "Private beach cabanas in South Goa, 400-year-old Portuguese estates, sunset river catamarans, and fine dining.",
    img: "/images/india/goa/goa.jpeg",
    pkgFilter: "Goa",
  },
  {
    id: "kerala",
    category: "islands",
    tag: "God's Own Country • Kerala",
    name: "Kerala Backwaters",
    desc: "Private thatched houseboat cruises in Alleppey backwaters, emerald mist tea slopes of Munnar, and Arabian sea beaches.",
    img: "/images/india/kerala/Kerala.jpeg",
    pkgFilter: "Kerala",
  },

  // International
  {
    id: "bali",
    category: "international",
    tag: "Island of Gods • Indonesia",
    name: "Bali & Tropical Asia",
    desc: "Private pool jungle villas in Ubud, cliffside temples overlooking the Indian Ocean, and tailored island hopping.",
    img: "/images/international/bali-indonesia/Bali.jpeg",
    pkgFilter: "International",
    large: true,
  },
  {
    id: "dubai",
    category: "international",
    tag: "Futuristic Oasis • UAE",
    name: "Dubai & Emirates",
    desc: "Burj Khalifa skyline panoramas, private luxury desert dunes safari with starlight banquet, Palm Jumeirah, and yacht charters.",
    img: "/images/international/dubai-uae/Dubai.jpeg",
    pkgFilter: "International",
  },
  {
    id: "france",
    category: "international",
    tag: "Romance & Riviera • France",
    name: "France & Paris",
    desc: "Iconic Eiffel Tower vistas, world-renowned Louvre art, picturesque lavender hills in Provence, and glamorous French Riviera shores.",
    img: "/images/international/france/france.jpeg",
    pkgFilter: "International",
  },
  {
    id: "greece",
    category: "international",
    tag: "Aegean Odyssey • Greece",
    name: "Greece & Santorini",
    desc: "Iconic blue-domed cliffside villages of Santorini, Aegean catamaran cruises, and ancient classical history in Athens.",
    img: "/images/international/greece/greece.jpeg",
    pkgFilter: "International",
  },
  {
    id: "italy",
    category: "international",
    tag: "Bella Italia • Italy",
    name: "Italy & Amalfi Coast",
    desc: "Colosseum of Rome, private gondolas along Venice canals, Renaissance Florence, and pastel cliff villas of Amalfi.",
    img: "/images/international/italy/italy.jpeg",
    pkgFilter: "International",
  },
];

export default function Page() {
  const [filter, setFilter] = useState("all");

  const filteredDestinations =
    filter === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === filter);

  return (
    <>
      <section
        className="section text-center"
        style={{ paddingBottom: "2rem" }}
      >
        <div className="container">
          <span className="section-eyebrow gold-text">
            EXPLORE THE WORLD WITH GLOBAL HOLIDAYS
          </span>
          <h1
            className="editorial-title"
            style={{ margin: "0.5rem 0 1.25rem" }}
          >
            Destinations of Wonder
          </h1>
          <p
            className="section-desc"
            style={{ margin: "0 auto 2.5rem", maxWidth: "740px" }}
          >
            From the cloud-draped living bridges of Meghalaya and high-altitude
            passes of Sikkim, to royal desert palaces, azure tropical islands,
            and international wonders.
          </p>

          <div
            className="filter-tabs"
            id="dest-page-filters"
            role="tablist"
            style={{ justifyContent: "center" }}
          >
            <button
              className={`filter-tab ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Destinations ({DESTINATIONS.length})
            </button>
            <button
              className={`filter-tab ${filter === "northeast" ? "active" : ""}`}
              onClick={() => setFilter("northeast")}
            >
              Northeast India
            </button>
            <button
              className={`filter-tab ${filter === "pan-india" ? "active" : ""}`}
              onClick={() => setFilter("pan-india")}
            >
              Pan-India Heritage
            </button>
            <button
              className={`filter-tab ${filter === "islands" ? "active" : ""}`}
              onClick={() => setFilter("islands")}
            >
              Tropical &amp; Coastal
            </button>
            <button
              className={`filter-tab ${filter === "international" ? "active" : ""}`}
              onClick={() => setFilter("international")}
            >
              International
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "1rem" }}>
        <div className="container">
          <div className="destinations-grid" id="dest-page-grid">
            {filteredDestinations.map((dest) => (
              <article
                key={dest.id}
                className={`destination-card ${dest.large ? "large-card" : ""}`}
                data-category={dest.category}
              >
                <div className="dest-media-wrapper">
                  <img
                    alt={dest.name}
                    loading="lazy"
                    src={dest.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <div className="dest-overlay"></div>
                </div>
                <div className="dest-content">
                  <span className="dest-tag">{dest.tag}</span>
                  <h3 className="dest-name">{dest.name}</h3>
                  <p className="dest-desc">{dest.desc}</p>
                  <Link
                    className="dest-btn"
                    href={`/packages?dest=${encodeURIComponent(dest.pkgFilter || dest.name)}`}
                  >
                    <span>View {dest.name.split(" ")[0]} Packages</span>
                    <span className="arrow-icon">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow gold-text">PLAN BY SEASON</span>
            <h2 className="section-heading">
              When is the Best Time to Travel?
            </h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              Our travel designers match destinations to their most magical,
              weather-perfect seasons.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div
                className="gold-text mb-3"
                style={{
                  fontSize: "1.35rem",
                  fontFamily: "var(--font-serif)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M12 22v-4"></path>
                </svg>
                <span>Spring (Mar – May)</span>
              </div>
              <h4 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                Sikkim, Kashmir &amp; Darjeeling
              </h4>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Rhododendron blooms in Yumthang, tulip gardens in Srinagar,
                clear panoramic mountain views, and pleasant hill station
                breezes.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div
                className="gold-text mb-3"
                style={{
                  fontSize: "1.35rem",
                  fontFamily: "var(--font-serif)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
                  <path d="M16 14v6"></path>
                  <path d="M8 14v6"></path>
                  <path d="M12 16v6"></path>
                </svg>
                <span>Monsoon &amp; Green (Jun – Aug)</span>
              </div>
              <h4 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                Meghalaya &amp; Ladakh
              </h4>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Gushing waterfalls and dramatic mist in Cherrapunji; rain-shadow
                high altitude passes and monasteries in Ladakh.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div
                className="gold-text mb-3"
                style={{
                  fontSize: "1.35rem",
                  fontFamily: "var(--font-serif)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                  <path d="M2 21c0-3 1.85-5.36 5.08-6"></path>
                </svg>
                <span>Autumn (Sep – Nov)</span>
              </div>
              <h4 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                Meghalaya, Sikkim &amp; Rajasthan
              </h4>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Crystal clear waters at Dawki river, golden chinar leaves in
                Kashmir, festive spirit across Tripura and royal Rajasthan
                forts.
              </p>
            </div>
            <div className="glass-panel" style={{ padding: "2rem" }}>
              <div
                className="gold-text mb-3"
                style={{
                  fontSize: "1.35rem",
                  fontFamily: "var(--font-serif)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <line x1="2" x2="22" y1="12" y2="12"></line>
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="m20 16-4-4 4-4"></path>
                  <path d="m4 8 4 4-4 4"></path>
                  <path d="m16 4-4 4-4-4"></path>
                  <path d="m8 20 4-4 4 4"></path>
                </svg>
                <span>Winter &amp; Tropics (Dec – Feb)</span>
              </div>
              <h4 style={{ fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                Andaman, Goa &amp; Gulmarg Snow
              </h4>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: "1.6",
                }}
              >
                Warm turquoise sea diving in Andaman, desert stargazing in
                Jaisalmer, or fresh powder snow skiing in Gulmarg.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <div
            className="planner-card glass-panel"
            style={{ maxWidth: "880px", margin: "0 auto" }}
          >
            <span className="section-eyebrow gold-text">
              HAVE A SPECIFIC PLACE IN MIND?
            </span>
            <h2 className="section-heading" style={{ margin: "0.5rem 0 1rem" }}>
              Let Us Design Your Custom Itinerary
            </h2>
            <p className="section-desc" style={{ margin: "0 auto 2rem" }}>
              Our Agartala travel team will construct a bespoke day-by-day plan
              with vetted chauffeurs and handpicked luxury boutique hotels.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Link className="btn btn-gold btn-large" href="/contact">
                <span>Start Planning Now</span>
                <span className="btn-arrow">→</span>
              </Link>
              <a
                className="btn btn-outline-glass btn-large"
                href="https://wa.me/918731010676?text=Hello%20Global%20Holidays,%20I%20would%20like%20to%20discuss%20a%20custom%20holiday%20destination."
                rel="noopener"
                target="_blank"
              >
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
