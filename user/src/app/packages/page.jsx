"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";
import { useBackendPackages } from "@/lib/packagesApi";

const ALL_PACKAGES = [
  {
    id: "jammu-kashmir-grand-tour",
    title: "J&K Grand Tour",
    duration: "8 Days / 7 Nights",
    dest: "Jammu & Kashmir",
    category: "pan-india",
    rating: "5.0 (New)",
    itinerary: "Katra • Srinagar • Gulmarg • Pahalgam • Sonamarg",
    highlights: ["Gulmarg Gondola", "Dal Lake Shikara", "Thajiwas Glacier"],
    img: "/images/packages/kashmir-dal.jpg",
  },
  {
    id: "manali-shimla-kasol",
    title: "Himalayan Escape",
    duration: "7 Days / 6 Nights",
    dest: "Himachal Pradesh",
    category: "pan-india",
    rating: "5.0 (New)",
    itinerary: "Shimla • Kufri • Kasol • Manikaran • Manali • Solang Valley",
    highlights: ["Solang Valley Snow", "Parvati River", "Hadimba Temple"],
    img: "/images/packages/manali-kasol.jpg",
  },
  {
    id: "vrindavan-braj-dham",
    title: "Braj Dham Spiritual Journey",
    duration: "6 Days / 5 Nights",
    dest: "Uttar Pradesh",
    category: "pan-india",
    rating: "5.0 (New)",
    itinerary: "Vrindavan • Mathura • Barsana • Nandgaon • Govardhan",
    highlights: ["Govardhan Parikrama", "Radha Rani Temple", "Yamuna Aarti"],
    img: "/images/packages/vrindavan.jpg",
  },
  {
    id: "meghalaya-escape",
    title: "Meghalaya Cloud Sanctuary",
    duration: "5 Days / 4 Nights",
    dest: "Meghalaya",
    category: "northeast",
    rating: "4.9 (48 Reviews)",
    itinerary: "Shillong • Cherrapunji • Dawki • Mawlynnong",
    highlights: [
      "Double Decker Root Bridge",
      "Crystal River Boating",
      "Boutique Pine Retreats",
    ],
    img: "/images/india/meghalaya/Meghalaya.jpeg",
  },
  {
    id: "sikkim-grandeur",
    title: "Sikkim & Gangtok Grandeur",
    duration: "6 Days / 5 Nights",
    dest: "Sikkim",
    category: "northeast",
    rating: "5.0 (62 Reviews)",
    itinerary: "Gangtok • Tsomgo Lake • Lachung • Zero Point",
    highlights: [
      "Alpine Glacial Lakes",
      "Snow Pass Excursion",
      "Buddhist Gompas",
    ],
    img: "/images/india/sikkim/Sikkim.jpeg",
  },
  {
    id: "kashmir-odyssey",
    title: "Kashmir Valley Odyssey",
    duration: "7 Days / 6 Nights",
    dest: "Kashmir",
    category: "pan-india",
    rating: "4.9 (56 Reviews)",
    itinerary: "Srinagar • Pahalgam • Gulmarg • Sonmarg • Doodhpathri",
    highlights: [
      "Luxury Houseboat Stay",
      "Gulmarg Gondola Ride",
      "Betaab & Aru Valleys",
    ],
    img: "/images/india/kashmir/Kashmir.jpeg",
  },
  {
    id: "himachal-splendour",
    title: "Himachal & Manali Splendour",
    duration: "7 Days / 6 Nights",
    dest: "Himachal Pradesh",
    category: "pan-india",
    rating: "4.9 (51 Reviews)",
    itinerary: "Delhi • Shimla • Manali • Solang • Atal Tunnel & Sissu",
    highlights: [
      "Atal Tunnel Marvel",
      "Kufri Pine Glades",
      "Solang Valley Snow",
    ],
    img: "/images/india/himachal-pradesh/himachal.jpeg",
  },
  {
    id: "goa-escape",
    title: "Goa Boutique Coastal Retreat",
    duration: "5 Days / 4 Nights",
    dest: "Goa",
    category: "pan-india",
    rating: "4.8 (44 Reviews)",
    itinerary: "Baga • Calangute • Fort Aguada • Old Goa • Mandovi River",
    highlights: [
      "Boutique Beach Resort",
      "Portuguese Forts",
      "Mandovi Sunset Cruise",
    ],
    img: "/images/india/goa/goa.jpeg",
  },
  {
    id: "thailand-gateway",
    title: "Thailand Tropical Escape",
    duration: "5 Days / 4 Nights",
    dest: "Thailand",
    category: "international",
    rating: "4.9 (58 Reviews)",
    itinerary: "Pattaya (2N) • Bangkok (2N) • Coral Island Speedboat",
    highlights: [
      "Coral Island Speedboat",
      "Golden Buddha Temple",
      "Gems Gallery",
    ],
    img: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "aizawl-escape",
    title: "Mizoram Cloud Realm",
    duration: "4 Days / 3 Nights",
    dest: "Mizoram",
    category: "northeast",
    rating: "4.9 (32 Reviews)",
    itinerary: "Aizawl • Thenzawl • Hmuifang • Reiek Tlang Peak",
    highlights: [
      "Reiek Sunrise Trek",
      "Vantawng 750ft Falls",
      "Aizawl Skywalk",
    ],
    img: "/images/india/meghalaya/Meghalaya_1.jpeg",
  },
  {
    id: "darjeeling-escape",
    title: "Darjeeling & Kalimpong Valleys",
    duration: "4 Days / 3 Nights",
    dest: "West Bengal",
    category: "northeast",
    rating: "4.8 (39 Reviews)",
    itinerary: "Darjeeling • Kalimpong • Tiger Hill • Mirik Lake",
    highlights: [
      "Tiger Hill Sunrise",
      "Colonial Tea Estates",
      "Lamahatta Eco Pine Park",
    ],
    img: "/images/india/darjeeling-west-bengal/darjeeling.jpeg",
  },
  {
    id: "grand-bharat-circuit",
    title: "Grand Bharat Sacred Pilgrimage",
    duration: "11 Days / 10 Nights",
    dest: "Pan-India Sacred Trail",
    category: "pan-india",
    rating: "5.0 (73 Reviews)",
    itinerary: "Delhi • Vrindavan • Ayodhya • Varanasi • Deoghar • Gaya",
    highlights: [
      "Kashi Vishwanath Darshan",
      "Ram Mandir Ayodhya",
      "Ganga Aarti Charter",
    ],
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "delhi-heritage",
    title: "Delhi Capital Heritage Weekend",
    duration: "3 Days / 2 Nights",
    dest: "Delhi NCR",
    category: "pan-india",
    rating: "4.8 (35 Reviews)",
    itinerary: "Old Delhi • New Delhi • Akshardham • India Gate",
    highlights: [
      "Qutub Minar & Red Fort",
      "Akshardham Laser Show",
      "Private AC Vehicle",
    ],
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=700&auto=format&fit=crop",
  },
  {
    id: "andaman-azure",
    title: "Andaman Azure Haven & Reefs",
    duration: "6 Days / 5 Nights",
    dest: "Andaman Islands",
    category: "pan-india",
    rating: "4.9 (52 Reviews)",
    itinerary: "Port Blair • Havelock • Neil • Radhanagar Beach",
    highlights: [
      "High-Speed Catamaran",
      "Coral Snorkeling",
      "Asia's Best Beach",
    ],
    img: "/images/india/andaman-islands/andaman.jpg",
  },
  {
    id: "rajasthan-splendour",
    title: "Royal Rajasthan & Desert Camps",
    duration: "7 Days / 6 Nights",
    dest: "Rajasthan",
    category: "pan-india",
    rating: "4.9 (65 Reviews)",
    itinerary: "Jaipur • Jodhpur • Jaisalmer Dunes • Udaipur Lakes",
    highlights: [
      "Sam Dunes Desert Camp",
      "Lake Pichola Cruise",
      "Golden Living Fort",
    ],
    img: "/images/india/rajasthan/rajasthan.jpeg",
  },
  {
    id: "tripura-heritage",
    title: "Tripura Royal Palaces & Unakoti",
    duration: "4 Days / 3 Nights",
    dest: "Tripura",
    category: "northeast",
    rating: "5.0 (41 Reviews)",
    itinerary: "Agartala • Neermahal Palace • Unakoti Rock Bas-Relief",
    highlights: [
      "Floating Water Palace",
      "Colossal Rock Carvings",
      "Royal Banquet Dinner",
    ],
    img: "/images/india/tripura/Tripura.jpeg",
  },
];

function PackagesContent() {
  const { packages: allPackages } = useBackendPackages(ALL_PACKAGES);
  const [filter, setFilter] = useState("all");
  const searchParams = useSearchParams();
  const destParam = searchParams.get("dest");
  const pkgParam = searchParams.get("package");

  useEffect(() => {
    if (destParam || pkgParam) {
      if (destParam) {
        const d = destParam.toLowerCase();
        const matched = allPackages.find(
          (p) =>
            p.dest.toLowerCase().includes(d) ||
            d.includes(p.dest.toLowerCase()) ||
            p.id.includes(d),
        );
        if (matched) {
          setFilter(matched.category);
        }
      }
      const timer = setTimeout(() => {
        if (typeof window !== "undefined" && window.openPackageDetails) {
          window.openPackageDetails(pkgParam, destParam);
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [destParam, pkgParam, allPackages]);

  const filteredPackages =
    filter === "all"
      ? allPackages
      : allPackages.filter((p) => p.category === filter);

  return (
    <>
      <section
        className="section text-center"
        style={{ paddingBottom: "1.5rem" }}
      >
        <div className="container">
          <span className="section-eyebrow gold-text">
            HANDCRAFTED LUXURY ITINERARIES
          </span>
          <h1
            className="editorial-title"
            style={{ margin: "0.5rem 0 1.25rem" }}
          >
            Journeys Worth Remembering
          </h1>
          <p
            className="section-desc"
            style={{ margin: "0 auto 1.75rem", maxWidth: "760px" }}
          >
            Every package is completely private and customizable. Enjoy verified
            boutique accommodations, dedicated private SUVs, and 24/7 on-trip
            concierge assistance.
          </p>

          <div
            className="filter-tabs"
            style={{ justifyContent: "center", marginBottom: "0.5rem" }}
            role="tablist"
          >
            <button
              className={`filter-tab ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Packages ({ALL_PACKAGES.length})
            </button>
            <button
              className={`filter-tab ${filter === "northeast" ? "active" : ""}`}
              onClick={() => setFilter("northeast")}
            >
              Northeast Escapes
            </button>
            <button
              className={`filter-tab ${filter === "pan-india" ? "active" : ""}`}
              onClick={() => setFilter("pan-india")}
            >
              Pan-India Circuits
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

      <section className="section" style={{ paddingTop: "0.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="pkg-card"
                style={{ width: "100%" }}
                data-pkg-id={pkg.id}
              >
                <div className="pkg-image-wrapper">
                  <img alt={pkg.title} loading="lazy" src={pkg.img} />
                  <span className="pkg-duration-badge">{pkg.duration}</span>
                  <span className="pkg-dest-badge">{pkg.dest}</span>
                </div>
                <div className="pkg-body">
                  <div className="pkg-rating-row">
                    <div className="stars-gold">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <span className="rating-num">{pkg.rating}</span>
                  </div>
                  <h3 className="pkg-title">{pkg.title}</h3>
                  <p className="pkg-itinerary-line">
                    {typeof pkg.itinerary === "string"
                      ? pkg.itinerary
                      : Array.isArray(pkg.itinerary)
                        ? pkg.itinerary
                            .map((i) =>
                              typeof i === "string"
                                ? i
                                : i?.title
                                  ? i.title.split("—")[0].split("→")[0].trim()
                                  : i?.day || "",
                            )
                            .filter(Boolean)
                            .slice(0, 4)
                            .join(" • ")
                        : pkg.dest || pkg.destination || ""}
                  </p>
                  <div className="pkg-highlights-pills">
                    {(pkg.highlights || []).map((h, i) => (
                      <span key={i}>
                        {typeof h === "string" ? h : h?.title || ""}
                      </span>
                    ))}
                  </div>

                  <div className="pkg-footer">
                    <div className="pkg-price-block">
                      <span className="price-label">Tariff Plan</span>
                      <div className="price-reveal-wrap">
                        <span className="price-amount blurred-price">
                          Custom Tariff
                        </span>
                        <span className="revealing-soon-badge">On Request</span>
                      </div>
                    </div>
                    <button
                      className="btn btn-outline-gold view-pkg-details"
                      data-pkg={pkg.id}
                      type="button"
                      onClick={() => {
                        if (
                          typeof window !== "undefined" &&
                          window.openPackageDetails
                        ) {
                          window.openPackageDetails(pkg.id);
                        }
                      }}
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-surface)" }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow gold-text">
              THE BOUTIQUE STANDARD
            </span>
            <h2 className="section-heading">
              Why Choose Our Curated Packages?
            </h2>
            <p className="section-desc" style={{ margin: "0 auto" }}>
              See how our bespoke travel planning differs from mass-market
              commercial tour operators.
            </p>
          </div>
          <div
            className="glass-panel"
            style={{ overflowX: "auto", padding: "2rem" }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "600px",
                textAlign: "left",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-gold)" }}>
                  <th
                    style={{
                      padding: "1.25rem 1rem",
                      color: "var(--text-primary)",
                      fontSize: "1.1rem",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    Travel Feature
                  </th>
                  <th
                    style={{
                      padding: "1.25rem 1rem",
                      color: "var(--text-muted)",
                      fontSize: "0.95rem",
                    }}
                  >
                    Typical Mass Tour Operators
                  </th>
                  <th
                    style={{
                      padding: "1.25rem 1rem",
                      color: "var(--gold-light)",
                      fontSize: "1.1rem",
                      fontFamily: "var(--font-serif)",
                    }}
                  >
                    Global Holidays Tour &amp; Travels
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Group Size &amp; Privacy
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>
                    Crowded 30-50 person bus tours with rigid fixed timings
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--gold-light)",
                      fontWeight: "600",
                    }}
                  >
                    100% Private, flexible departures &amp; custom itinerary
                    pace
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Accommodations
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>
                    Generic highway hotels far from sights
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--gold-light)",
                      fontWeight: "600",
                    }}
                  >
                    Handpicked luxury boutique resorts, villas &amp; heritage
                    havelis
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Transportation
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>
                    Shared taxis or crowded vans
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--gold-light)",
                      fontWeight: "600",
                    }}
                  >
                    Dedicated premium SUV (Crysta/Innova) with verified polite
                    drivers
                  </td>
                </tr>
                <tr style={{ borderBottom: "1px solid var(--border-subtle)" }}>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    On-Trip Support
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>
                    Automated call centers &amp; generic email tickets
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--gold-light)",
                      fontWeight: "600",
                    }}
                  >
                    Direct 24/7 dedicated travel designer on WhatsApp &amp;
                    phone
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "1rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    Pricing Transparency
                  </td>
                  <td style={{ padding: "1rem", color: "var(--text-muted)" }}>
                    Hidden permit charges &amp; surprise shopping stops
                  </td>
                  <td
                    style={{
                      padding: "1rem",
                      color: "var(--gold-light)",
                      fontWeight: "600",
                    }}
                  >
                    Zero hidden costs, verified vouchers, clear itemized billing
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{ minHeight: "60vh" }}></div>}>
      <PackagesContent />
    </Suspense>
  );
}
