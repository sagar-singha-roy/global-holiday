"use client";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <section
        className="section text-center"
        style={{ paddingBottom: "2rem" }}
      >
        <div className="container">
          <span className="section-eyebrow gold-text">
            ACCREDITED BOUTIQUE HOSPITALITY
          </span>
          <h1
            className="editorial-title"
            style={{ margin: "0.5rem 0 1.25rem" }}
          >
            Handpicked Luxury Stays &amp; Heritage Retreats
          </h1>
          <p
            className="section-desc"
            style={{ margin: "0 auto 2.5rem", maxWidth: "740px" }}
          >
            From colonial tea garden suites and mountain view chalets to royal
            lakeside retreats, explore verified boutique properties contracted
            for flawless comfort, safety, and personalized culinary excellence.
          </p>

          <div
            className="filter-tabs"
            id="hotel-filters"
            role="tablist"
            style={{ justifyContent: "center" }}
          >
            <button className="filter-tab active" data-filter="all">
              All Properties
            </button>
            <button className="filter-tab" data-filter="heritage">
              Heritage &amp; Tea Estates
            </button>
            <button className="filter-tab" data-filter="eco">
              Eco &amp; Lake Retreats
            </button>
            <button className="filter-tab" data-filter="mountain">
              Mountain Chalets
            </button>
            <button className="filter-tab" data-filter="luxury">
              5-Star Luxury Suites
            </button>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="hotels-grid" id="hotels-container">
            <div className="hotel-card" data-category="heritage luxury">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">5-Star Heritage Luxury</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.9</span>
                </span>
                <img
                  alt="Mayfair Tea Resort &amp; Spa"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Darjeeling &amp; Foothills</span>
                </div>
                <h3 className="hotel-title">Mayfair Tea Resort &amp; Spa</h3>
                <p className="hotel-desc">
                  Vintage Tudor estate surrounded by miles of emerald tea
                  bushes. Features private fireplaces, temperature-controlled
                  indoor pool, and artisanal tea tasting salons.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Private Balcony</span>
                  <span className="hotel-amenity-chip">Tea Sommelier</span>
                  <span className="hotel-amenity-chip">Heated Pool</span>
                  <span className="hotel-amenity-chip">Ayurvedic Spa</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹14,500 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Mayfair+Tea+Resort"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="eco luxury">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">Eco Luxury Retreat</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.9</span>
                </span>
                <img
                  alt="Ri Kynjai Lake Resort"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Umiam Lake, Meghalaya</span>
                </div>
                <h3 className="hotel-title">
                  Ri Kynjai – Serenity by the Lake
                </h3>
                <p className="hotel-desc">
                  Inspired by Khasi indigenous architecture. Waterfront chalets
                  with sweeping pine hills, authentic herbal massage therapies,
                  and private lake cruise docks.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Lakefront Cottages</span>
                  <span className="hotel-amenity-chip">Ayurvedic Spa</span>
                  <span className="hotel-amenity-chip">Speedboat Access</span>
                  <span className="hotel-amenity-chip">Organic Kitchen</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹12,800 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Ri+Kynjai"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="heritage mountain">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">Royal Himalayan Heritage</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.8</span>
                </span>
                <img
                  alt="The Elgin Nor-Khill Gangtok"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Gangtok, Sikkim</span>
                </div>
                <h3 className="hotel-title">
                  The Elgin Nor-Khill Heritage Villa
                </h3>
                <p className="hotel-desc">
                  Former guesthouse of the King of Sikkim. Displays Tibetan
                  dragon frescos, antique brass fireplaces, and breathtaking
                  morning views of Mt. Kanchenjunga.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Mountain Panoramas</span>
                  <span className="hotel-amenity-chip">Royal Lounge</span>
                  <span className="hotel-amenity-chip">Personal Butler</span>
                  <span className="hotel-amenity-chip">Fireplace Suites</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹16,200 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Elgin+NorKhill"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="eco mountain">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">Cliff Edge Sanctuary</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.9</span>
                </span>
                <img
                  alt="Polo Orchid Cliff Haven"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Cherrapunji, Meghalaya</span>
                </div>
                <h3 className="hotel-title">Polo Orchid Cliff Haven</h3>
                <p className="hotel-desc">
                  Perched dramatically on the rim of the Seven Sisters canyon.
                  Features infinity decks, private open-air jacuzzis, and glass
                  villas above the swirling clouds.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Infinity Pool Deck</span>
                  <span className="hotel-amenity-chip">Private Jacuzzi</span>
                  <span className="hotel-amenity-chip">Waterfall Views</span>
                  <span className="hotel-amenity-chip">Sky Lounge</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹15,000 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Polo+Orchid"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="luxury">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">5-Star Urban Luxury</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.9</span>
                </span>
                <img
                  alt="Vivanta Meghalaya Shillong"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Shillong, Meghalaya</span>
                </div>
                <h3 className="hotel-title">Vivanta Meghalaya, Shillong</h3>
                <p className="hotel-desc">
                  Contemporary luxury situated in the heart of Shillong.
                  Contemporary Nordic-Khasi decor, state-of-the-art wellness
                  club, and signature Pan-Asian fine dining.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">City Center Access</span>
                  <span className="hotel-amenity-chip">Fine Dining</span>
                  <span className="hotel-amenity-chip">Executive Lounge</span>
                  <span className="hotel-amenity-chip">Valet Concierge</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹13,500 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Vivanta+Shillong"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="mountain luxury">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">Mountain Summit Haven</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.8</span>
                </span>
                <img
                  alt="Denzong Regency Mountain Resort"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Gangtok, Sikkim</span>
                </div>
                <h3 className="hotel-title">Denzong Regency Mountain Luxury</h3>
                <p className="hotel-desc">
                  Nestled against a lush hillside sanctuary. The only mountain
                  retreat in Gangtok with individual suite balconies facing the
                  sacred Mt. Kanchenjunga crest.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Private Balconies</span>
                  <span className="hotel-amenity-chip">Ayurvedic Spa</span>
                  <span className="hotel-amenity-chip">Heated Flooring</span>
                  <span className="hotel-amenity-chip">Helipad Transfer</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹14,000 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Denzong+Regency"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="heritage">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">Royal Summer Retreat</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.9</span>
                </span>
                <img
                  alt="Heritage Club Tripura Castle"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Cleve Colony, Shillong</span>
                </div>
                <h3 className="hotel-title">Heritage Club – Tripura Castle</h3>
                <p className="hotel-desc">
                  Built in the 1920s by the Maharaja of Tripura as a royal
                  summer palace. Set in nine acres of emerald pine forests with
                  priceless family antiques and art.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">
                    Historic Royal Palace
                  </span>
                  <span className="hotel-amenity-chip">Pine Forest Trails</span>
                  <span className="hotel-amenity-chip">Heritage Bar</span>
                  <span className="hotel-amenity-chip">Fireplace Suites</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹11,500 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Tripura+Castle"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hotel-card" data-category="luxury">
              <div className="hotel-image-wrapper">
                <span className="hotel-badge">5-Star Premier Luxury</span>
                <span className="hotel-rating-badge">
                  <svg viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                  <span>4.9</span>
                </span>
                <img
                  alt="Hotel Polo Towers Agartala"
                  height="220"
                  loading="lazy"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=800&amp;auto=format&amp;fit=crop"
                  width="400"
                />
              </div>
              <div className="hotel-body">
                <div className="hotel-location">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Agartala, Tripura</span>
                </div>
                <h3 className="hotel-title">Hotel Polo Towers Agartala</h3>
                <p className="hotel-desc">
                  Tripura's premier 5-star landmark luxury hotel in Agartala.
                  Featuring opulent executive suites, rooftop infinity pool,
                  grand banquet halls, fine-dining restaurants, and signature
                  hospitality.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">5-Star Luxury</span>
                  <span className="hotel-amenity-chip">Rooftop Pool</span>
                  <span className="hotel-amenity-chip">Fine Dining</span>
                  <span className="hotel-amenity-chip">Spa &amp; Wellness</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        ₹7,500 <small>/ night</small>
                      </span>
                      <span className="revealing-soon-badge">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                  <a
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Hotel+Polo+Towers+Agartala"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div
            className="cta-card glass-panel text-center"
            style={{
              padding: "3.5rem 2rem",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--border-gold)",
            }}
          >
            <span className="section-eyebrow gold-text">
              BESPOKE CONCIERGE PRIVILEGES
            </span>
            <h2
              className="section-heading"
              style={{ margin: "0.5rem auto 1rem", maxWidth: "700px" }}
            >
              Need Direct Contracting or Group Villa Booking?
            </h2>
            <p
              className="section-desc"
              style={{ maxWidth: "620px", margin: "0 auto 2rem" }}
            >
              Our Agartala concierge team manages private wedding buyouts,
              corporate executive retreats, and exclusive suite upgrades with
              direct hotel management agreements.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a className="btn btn-gold btn-large" href="tel:+918731010676">
                <span>Call Concierge: +91 87310 10676</span>
                <span className="btn-arrow">→</span>
              </a>
              <a
                className="btn btn-outline-glass btn-large"
                href="https://wa.me/918731010676?text=Hello%20Global%20Holidays,%20I%20am%20interested%20in%20booking%20luxury%20hotels."
                rel="noopener"
                target="_blank"
              >
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
