'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <>
<section className="section text-center" style={{'paddingBottom': '2rem'}}>
<div className="container">
<span className="section-eyebrow gold-text">EXPLORE THE WORLD WITH GLOBAL HOLIDAYS</span>
<h1 className="editorial-title" style={{'margin': '0.5rem 0 1.25rem'}}>
            Destinations of Wonder
          </h1>
<p className="section-desc" style={{'margin': '0 auto 2.5rem', 'maxWidth': '740px'}}>
            From the cloud-draped living bridges of Meghalaya and high-altitude
            Buddhist passes of Sikkim, to royal desert palaces, azure tropical
            islands, and international retreats.
          </p>

<div className="filter-tabs" id="destination-filters" role="tablist" style={{'justifyContent': 'center'}}>
<button className="filter-tab active" data-filter="all">
              All Destinations
            </button>
<button className="filter-tab" data-filter="northeast">
              Northeast India
            </button>
<button className="filter-tab" data-filter="pan-india">
              Pan-India Heritage
            </button>
<button className="filter-tab" data-filter="islands">
              Tropical &amp; Coastal
            </button>
<button className="filter-tab" data-filter="international">
              International
            </button>
</div>
</div>
</section>
<section className="section" style={{'paddingTop': '1rem'}}>
<div className="container">
<div className="destinations-grid" id="destinations-container">

<article className="destination-card large-card" data-category="northeast">
<div className="dest-media-wrapper">
<img alt="Meghalaya Living Root Bridge &amp; Waterfalls" loading="lazy" src="/images/meghalaya.jpg"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Northeast India • Meghalaya</span>
<h3 className="dest-name">Meghalaya &amp; Shillong</h3>
<p className="dest-desc">
                  Abode of clouds, Nohkalikai plunge waterfalls, crystal-clear
                  Umngot river boating at Dawki, and sacred pine groves.
                </p>
<a className="dest-btn" href="/packages">
<span>View Meghalaya Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card" data-category="northeast">
<div className="dest-media-wrapper">
<img alt="Sikkim High Altitude Mountain Passes" loading="lazy" src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Northeast India • Sikkim</span>
<h3 className="dest-name">Sikkim &amp; Gurudongmar</h3>
<p className="dest-desc">
                  Glacial alpine lakes at 17,800 ft, sacred gompas, Yumthang
                  Valley of Flowers, and Kanchenjunga panoramas.
                </p>
<a className="dest-btn" href="/packages">
<span>View Sikkim Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card" data-category="northeast">
<div className="dest-media-wrapper">
<img alt="Darjeeling Emerald Tea Gardens" loading="lazy" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Eastern Himalayas • West Bengal</span>
<h3 className="dest-name">Darjeeling Tea Hills</h3>
<p className="dest-desc">
                  Tiger Hill sunrises, colonial tea estate heritage bungalows,
                  Glenary’s bakery walks, and UNESCO toy train.
                </p>
<a className="dest-btn" href="/packages">
<span>View Darjeeling Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card large-card" data-category="northeast">
<div className="dest-media-wrapper">
<img alt="Tripura Neermahal and Royal Heritage" loading="lazy" src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Our Home Turf • Tripura</span>
<h3 className="dest-name">Tripura &amp; Unakoti</h3>
<p className="dest-desc">
                  Neermahal water palace on Rudrasagar lake, royal Ujjayanta
                  Palace museum in Agartala, and 7th-century rock carvings of
                  Unakoti.
                </p>
<a className="dest-btn" href="/packages">
<span>View Tripura Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card large-card" data-category="pan-india">
<div className="dest-media-wrapper">
<img alt="Kashmir Dal Lake Shikara" loading="lazy" src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Paradise on Earth • Kashmir</span>
<h3 className="dest-name">Kashmir Valley</h3>
<p className="dest-desc">
                  Intricately carved luxury cedar houseboats on Dal Lake,
                  Gulmarg Gondola snow passes, and Lidder riverbanks in
                  Pahalgam.
                </p>
<a className="dest-btn" href="/packages">
<span>View Kashmir Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card" data-category="islands">
<div className="dest-media-wrapper">
<img alt="Andaman Islands Azure Water" loading="lazy" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Tropical Haven • Andaman</span>
<h3 className="dest-name">Andaman Islands</h3>
<p className="dest-desc">
                  Radhanagar beach sunsets, private catamaran inter-island
                  voyages, and exclusive coral reef scuba sessions.
                </p>
<a className="dest-btn" href="/packages">
<span>View Andaman Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card" data-category="pan-india">
<div className="dest-media-wrapper">
<img alt="Rajasthan Royal Palace" loading="lazy" src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Royal Kingdoms • Rajasthan</span>
<h3 className="dest-name">Rajasthan Palaces</h3>
<p className="dest-desc">
                  Udaipur Lake Pichola charters, Jodhpur Mehrangarh fort vistas,
                  and stargazing in luxury desert tents in Jaisalmer.
                </p>
<a className="dest-btn" href="/packages">
<span>View Rajasthan Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card" data-category="pan-india">
<div className="dest-media-wrapper">
<img alt="Himachal Mountain Valley" loading="lazy" src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Alpine Solitude • Himachal</span>
<h3 className="dest-name">Himachal &amp; Spiti</h3>
<p className="dest-desc">
                  Cedar chalets in Manali, surreal lunar landscapes of Spiti
                  Valley, and heritage colonial walking trails of Shimla.
                </p>
<a className="dest-btn" href="/packages">
<span>View Himachal Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card" data-category="islands">
<div className="dest-media-wrapper">
<img alt="Goa Luxury Resort" loading="lazy" src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">Coastal Sophistication • Goa</span>
<h3 className="dest-name">Goa Heritage Villas</h3>
<p className="dest-desc">
                  Private beach cabanas in South Goa, 400-year-old Portuguese
                  estates, sunset river catamarans, and fine dining.
                </p>
<a className="dest-btn" href="/packages">
<span>View Goa Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>

<article className="destination-card large-card" data-category="international">
<div className="dest-media-wrapper">
<img alt="Bali Luxury Tropical Villa" loading="lazy" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="dest-overlay"></div>
</div>
<div className="dest-content">
<span className="dest-tag">International Escape • Bali &amp; SE Asia</span>
<h3 className="dest-name">Bali &amp; Tropical Asia</h3>
<p className="dest-desc">
                  Private pool jungle villas in Ubud, cliffside temples
                  overlooking the Indian Ocean, and tailored island hopping.
                </p>
<a className="dest-btn" href="/packages">
<span>View International Packages</span>
<span className="arrow-icon">→</span>
</a>
</div>
</article>
</div>
</div>
</section>
<section className="section" style={{'background': 'var(--bg-surface)'}}>
<div className="container">
<div className="text-center mb-5">
<span className="section-eyebrow gold-text">PLAN BY SEASON</span>
<h2 className="section-heading">When is the Best Time to Travel?</h2>
<p className="section-desc" style={{'margin': '0 auto'}}>
              Our travel designers match destinations to their most magical,
              weather-perfect seasons.
            </p>
</div>
<div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(280px, 1fr))', 'gap': '1.5rem'}}>
<div className="glass-panel" style={{'padding': '2rem'}}>
<div className="gold-text mb-3" style={{'fontSize': '1.35rem', 'fontFamily': 'var(--font-serif)', 'display': 'flex', 'alignItems': 'center', 'gap': '0.5rem'}}>
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
<path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<circle cx="12" cy="12" r="2"></circle>
<path d="M12 22v-4"></path>
</svg>
<span>Spring (Mar – May)</span>
</div>
<h4 style={{'fontSize': '1.15rem', 'marginBottom': '0.5rem'}}>
                Sikkim, Kashmir &amp; Darjeeling
              </h4>
<p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'lineHeight': '1.6'}}>
                Rhododendron blooms in Yumthang, tulip gardens in Srinagar,
                clear panoramic mountain views, and pleasant hill station
                breezes.
              </p>
</div>
<div className="glass-panel" style={{'padding': '2rem'}}>
<div className="gold-text mb-3" style={{'fontSize': '1.35rem', 'fontFamily': 'var(--font-serif)', 'display': 'flex', 'alignItems': 'center', 'gap': '0.5rem'}}>
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
<path d="M16 14v6"></path>
<path d="M8 14v6"></path>
<path d="M12 16v6"></path>
</svg>
<span>Monsoon &amp; Green (Jun – Aug)</span>
</div>
<h4 style={{'fontSize': '1.15rem', 'marginBottom': '0.5rem'}}>
                Meghalaya &amp; Ladakh
              </h4>
<p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'lineHeight': '1.6'}}>
                Gushing waterfalls and dramatic mist in Cherrapunji; rain-shadow
                high altitude passes and monasteries in Ladakh.
              </p>
</div>
<div className="glass-panel" style={{'padding': '2rem'}}>
<div className="gold-text mb-3" style={{'fontSize': '1.35rem', 'fontFamily': 'var(--font-serif)', 'display': 'flex', 'alignItems': 'center', 'gap': '0.5rem'}}>
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
<path d="M2 21c0-3 1.85-5.36 5.08-6"></path>
</svg>
<span>Autumn (Sep – Nov)</span>
</div>
<h4 style={{'fontSize': '1.15rem', 'marginBottom': '0.5rem'}}>
                Meghalaya, Sikkim &amp; Rajasthan
              </h4>
<p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'lineHeight': '1.6'}}>
                Crystal clear waters at Dawki river, golden chinar leaves in
                Kashmir, festive spirit across Tripura and royal Rajasthan
                forts.
              </p>
</div>
<div className="glass-panel" style={{'padding': '2rem'}}>
<div className="gold-text mb-3" style={{'fontSize': '1.35rem', 'fontFamily': 'var(--font-serif)', 'display': 'flex', 'alignItems': 'center', 'gap': '0.5rem'}}>
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="22">
<line x1="2" x2="22" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="2" y2="22"></line>
<path d="m20 16-4-4 4-4"></path>
<path d="m4 8 4 4-4 4"></path>
<path d="m16 4-4 4-4-4"></path>
<path d="m8 20 4-4 4 4"></path>
</svg>
<span>Winter &amp; Tropics (Dec – Feb)</span>
</div>
<h4 style={{'fontSize': '1.15rem', 'marginBottom': '0.5rem'}}>
                Andaman, Goa &amp; Gulmarg Snow
              </h4>
<p style={{'color': 'var(--text-secondary)', 'fontSize': '0.9rem', 'lineHeight': '1.6'}}>
                Warm turquoise sea diving in Andaman, desert stargazing in
                Jaisalmer, or fresh powder snow skiing in Gulmarg.
              </p>
</div>
</div>
</div>
</section>
<section className="section text-center">
<div className="container">
<div className="planner-card glass-panel" style={{'maxWidth': '880px', 'margin': '0 auto'}}>
<span className="section-eyebrow gold-text">HAVE A SPECIFIC PLACE IN MIND?</span>
<h2 className="section-heading" style={{'margin': '0.5rem 0 1rem'}}>
              Let Us Design Your Custom Itinerary
            </h2>
<p className="section-desc" style={{'margin': '0 auto 2rem'}}>
              Our Agartala travel team will construct a bespoke day-by-day plan
              with vetted chauffeurs and handpicked luxury boutique hotels.
            </p>
<div style={{'display': 'flex', 'justifyContent': 'center', 'gap': '1rem', 'flexWrap': 'wrap'}}>
<a className="btn btn-gold btn-large" href="/contact">
<span>Start Planning Now</span>
<span className="btn-arrow">→</span>
</a>
<a className="btn btn-outline-glass btn-large" href="https://wa.me/918731010676?text=Hello%20Global%20Holidays,%20I%20would%20like%20to%20discuss%20a%20custom%20holiday%20destination." rel="noopener" target="_blank">
<span>WhatsApp Direct</span>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
