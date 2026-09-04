'use client';

import { FaStar } from 'react-icons/fa6';

import Link from 'next/link';

export default function Page() {
  return (
    <>
<section className="section text-center" style={{'paddingBottom': '2rem'}}>
<div className="container">
<span className="section-eyebrow gold-text">HANDCRAFTED LUXURY ITINERARIES</span>
<h1 className="editorial-title" style={{'margin': '0.5rem 0 1.25rem'}}>
            Journeys Worth Remembering
          </h1>
<p className="section-desc" style={{'margin': '0 auto', 'maxWidth': '760px'}}>
            Every package is completely private and customizable. Enjoy verified
            boutique accommodations, dedicated private SUVs, and 24/7 on-trip
            concierge assistance.
          </p>
</div>
</section>
<section className="section" style={{'paddingTop': '1rem'}}>
<div className="container">
<div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(350px, 1fr))', 'gap': '2rem'}}>

<div className="pkg-card" style={{'width': '100%'}}>
<div className="pkg-image-wrapper">
<img alt="Meghalaya Tour" loading="lazy" src="/images/meghalaya.jpg"/>
<span className="pkg-duration-badge">5 Days / 4 Nights</span>
<span className="pkg-dest-badge">Meghalaya</span>
</div>
<div className="pkg-body">
<div className="pkg-rating-row">
<div className="stars-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<span className="rating-num">4.9 (48 Reviews)</span>
</div>
<h3 className="pkg-title">Meghalaya Cloud Sanctuary</h3>
<p className="pkg-itinerary-line">
                  Shillong • Cherrapunji • Dawki • Mawlynnong
                </p>
<div className="pkg-highlights-pills">
<span>Double Decker Root Bridge</span>
<span>Crystal River Boating</span>
<span>Boutique Pine Retreats</span>
</div>
<div className="pkg-footer">
<div className="pkg-price-block">
<span className="price-label">Starting From</span>
<div className="price-reveal-wrap">
<span className="price-amount blurred-price">₹18,500 <small>/ person</small></span>
<span className="revealing-soon-badge">Revealing Soon</span>
</div>
</div>
<button className="btn btn-outline-gold view-pkg-details" data-pkg="meghalaya-escape">
<span>View Package</span>
<span className="btn-arrow">→</span>
</button>
</div>
</div>
</div>

<div className="pkg-card" style={{'width': '100%'}}>
<div className="pkg-image-wrapper">
<img alt="Sikkim Grandeur" loading="lazy" src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&amp;w=700&amp;auto=format&amp;fit=crop"/>
<span className="pkg-duration-badge">7 Days / 6 Nights</span>
<span className="pkg-dest-badge">Sikkim &amp; Darjeeling</span>
</div>
<div className="pkg-body">
<div className="pkg-rating-row">
<div className="stars-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<span className="rating-num">5.0 (62 Reviews)</span>
</div>
<h3 className="pkg-title">Sikkim &amp; Darjeeling Grandeur</h3>
<p className="pkg-itinerary-line">
                  Gangtok • Tsomgo Lake • Pelling • Tiger Hill
                </p>
<div className="pkg-highlights-pills">
<span>High Altitude Sacred Lake</span>
<span>Kanchenjunga Sunrise</span>
<span>Heritage Tea Bungalow</span>
</div>
<div className="pkg-footer">
<div className="pkg-price-block">
<span className="price-label">Starting From</span>
<div className="price-reveal-wrap">
<span className="price-amount blurred-price">₹26,500 <small>/ person</small></span>
<span className="revealing-soon-badge">Revealing Soon</span>
</div>
</div>
<button className="btn btn-outline-gold view-pkg-details" data-pkg="sikkim-grandeur">
<span>View Package</span>
<span className="btn-arrow">→</span>
</button>
</div>
</div>
</div>

<div className="pkg-card" style={{'width': '100%'}}>
<div className="pkg-image-wrapper">
<img alt="Kashmir Odyssey" loading="lazy" src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&amp;w=700&amp;auto=format&amp;fit=crop"/>
<span className="pkg-duration-badge">6 Days / 5 Nights</span>
<span className="pkg-dest-badge">Kashmir</span>
</div>
<div className="pkg-body">
<div className="pkg-rating-row">
<div className="stars-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<span className="rating-num">4.9 (54 Reviews)</span>
</div>
<h3 className="pkg-title">Enchanted Kashmir Odyssey</h3>
<p className="pkg-itinerary-line">
                  Srinagar • Gulmarg • Pahalgam • Sonmarg
                </p>
<div className="pkg-highlights-pills">
<span>Luxury Dal Lake Houseboat</span>
<span>Gulmarg Gondola Phase 2</span>
<span>Private Saffron Valley Tour</span>
</div>
<div className="pkg-footer">
<div className="pkg-price-block">
<span className="price-label">Starting From</span>
<div className="price-reveal-wrap">
<span className="price-amount blurred-price">₹32,000 <small>/ person</small></span>
<span className="revealing-soon-badge">Revealing Soon</span>
</div>
</div>
<button className="btn btn-outline-gold view-pkg-details" data-pkg="kashmir-paradise">
<span>View Package</span>
<span className="btn-arrow">→</span>
</button>
</div>
</div>
</div>

<div className="pkg-card" style={{'width': '100%'}}>
<div className="pkg-image-wrapper">
<img alt="Andaman Haven" loading="lazy" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=700&amp;auto=format&amp;fit=crop"/>
<span className="pkg-duration-badge">6 Days / 5 Nights</span>
<span className="pkg-dest-badge">Andaman</span>
</div>
<div className="pkg-body">
<div className="pkg-rating-row">
<div className="stars-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<span className="rating-num">5.0 (39 Reviews)</span>
</div>
<h3 className="pkg-title">Andaman Azure Haven</h3>
<p className="pkg-itinerary-line">
                  Port Blair • Havelock • Neil Island • Radhanagar
                </p>
<div className="pkg-highlights-pills">
<span>Catamaran Cruise Transfers</span>
<span>Private Reef Scuba Guide</span>
<span>Beachfront Luxury Villa</span>
</div>
<div className="pkg-footer">
<div className="pkg-price-block">
<span className="price-label">Starting From</span>
<div className="price-reveal-wrap">
<span className="price-amount blurred-price">₹38,500 <small>/ person</small></span>
<span className="revealing-soon-badge">Revealing Soon</span>
</div>
</div>
<button className="btn btn-outline-gold view-pkg-details" data-pkg="andaman-luxury">
<span>View Package</span>
<span className="btn-arrow">→</span>
</button>
</div>
</div>
</div>

<div className="pkg-card" style={{'width': '100%'}}>
<div className="pkg-image-wrapper">
<img alt="Rajasthan Splendour" loading="lazy" src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&amp;w=700&amp;auto=format&amp;fit=crop"/>
<span className="pkg-duration-badge">7 Days / 6 Nights</span>
<span className="pkg-dest-badge">Rajasthan</span>
</div>
<div className="pkg-body">
<div className="pkg-rating-row">
<div className="stars-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<span className="rating-num">4.8 (41 Reviews)</span>
</div>
<h3 className="pkg-title">Royal Rajasthan Splendour</h3>
<p className="pkg-itinerary-line">
                  Jaipur • Jodhpur • Udaipur • Jaisalmer Dunes
                </p>
<div className="pkg-highlights-pills">
<span>Heritage Palace Stays</span>
<span>Private Desert Camp &amp; Stargazing</span>
<span>Lake Pichola Boat Charter</span>
</div>
<div className="pkg-footer">
<div className="pkg-price-block">
<span className="price-label">Starting From</span>
<div className="price-reveal-wrap">
<span className="price-amount blurred-price">₹34,000 <small>/ person</small></span>
<span className="revealing-soon-badge">Revealing Soon</span>
</div>
</div>
<button className="btn btn-outline-gold view-pkg-details" data-pkg="rajasthan-royal">
<span>View Package</span>
<span className="btn-arrow">→</span>
</button>
</div>
</div>
</div>

<div className="pkg-card" style={{'width': '100%'}}>
<div className="pkg-image-wrapper">
<img alt="Tripura Heritage" loading="lazy" src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="pkg-duration-badge">4 Days / 3 Nights</span>
<span className="pkg-dest-badge">Tripura Exclusive</span>
</div>
<div className="pkg-body">
<div className="pkg-rating-row">
<div className="stars-gold"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<span className="rating-num">5.0 (31 Reviews)</span>
</div>
<h3 className="pkg-title">Tripura Royal Palaces &amp; Unakoti</h3>
<p className="pkg-itinerary-line">
                  Agartala • Neermahal • Sepahijala • Unakoti
                </p>
<div className="pkg-highlights-pills">
<span>Water Palace Boat Excursion</span>
<span>Ancient Rock Carvings</span>
<span>Tripuri Cultural Banquet</span>
</div>
<div className="pkg-footer">
<div className="pkg-price-block">
<span className="price-label">Starting From</span>
<div className="price-reveal-wrap">
<span className="price-amount blurred-price">₹14,500 <small>/ person</small></span>
<span className="revealing-soon-badge">Revealing Soon</span>
</div>
</div>
<button className="btn btn-outline-gold view-pkg-details" data-pkg="tripura-heritage">
<span>View Package</span>
<span className="btn-arrow">→</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section" style={{'background': 'var(--bg-surface)'}}>
<div className="container">
<div className="text-center mb-5">
<span className="section-eyebrow gold-text">THE BOUTIQUE STANDARD</span>
<h2 className="section-heading">Why Choose Our Curated Packages?</h2>
<p className="section-desc" style={{'margin': '0 auto'}}>
              See how our bespoke travel planning differs from mass-market
              commercial tour operators.
            </p>
</div>
<div className="glass-panel" style={{'overflowX': 'auto', 'padding': '2rem'}}>
<table style={{'width': '100%', 'borderCollapse': 'collapse', 'minWidth': '600px', 'textAlign': 'left'}}>
<thead>
<tr style={{'borderBottom': '1px solid var(--border-gold)'}}>
<th style={{'padding': '1.25rem 1rem', 'color': 'var(--text-primary)', 'fontSize': '1.1rem', 'fontFamily': 'var(--font-serif)'}}>
                    Travel Feature
                  </th>
<th style={{'padding': '1.25rem 1rem', 'color': 'var(--text-muted)', 'fontSize': '0.95rem'}}>
                    Typical Mass Tour Operators
                  </th>
<th style={{'padding': '1.25rem 1rem', 'color': 'var(--gold-light)', 'fontSize': '1.1rem', 'fontFamily': 'var(--font-serif)'}}>
                    Global Holidays (Agartala)
                  </th>
</tr>
</thead>
<tbody>
<tr style={{'borderBottom': '1px solid var(--border-subtle)'}}>
<td style={{'padding': '1rem', 'fontWeight': '600', 'color': 'var(--text-primary)'}}>
                    Group Size &amp; Privacy
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--text-muted)'}}>
                    Crowded 30-50 person bus tours with rigid fixed timings
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--gold-light)', 'fontWeight': '600'}}>
                    100% Private, flexible departures &amp; custom itinerary pace
                  </td>
</tr>
<tr style={{'borderBottom': '1px solid var(--border-subtle)'}}>
<td style={{'padding': '1rem', 'fontWeight': '600', 'color': 'var(--text-primary)'}}>
                    Accommodations
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--text-muted)'}}>
                    Generic highway hotels far from sights
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--gold-light)', 'fontWeight': '600'}}>
                    Handpicked luxury boutique resorts, villas &amp; heritage
                    havelis
                  </td>
</tr>
<tr style={{'borderBottom': '1px solid var(--border-subtle)'}}>
<td style={{'padding': '1rem', 'fontWeight': '600', 'color': 'var(--text-primary)'}}>
                    Transportation
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--text-muted)'}}>
                    Shared taxis or crowded vans
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--gold-light)', 'fontWeight': '600'}}>
                    Dedicated premium SUV (Crysta/Innova) with verified polite
                    drivers
                  </td>
</tr>
<tr style={{'borderBottom': '1px solid var(--border-subtle)'}}>
<td style={{'padding': '1rem', 'fontWeight': '600', 'color': 'var(--text-primary)'}}>
                    On-Trip Support
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--text-muted)'}}>
                    Automated call centers &amp; generic email tickets
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--gold-light)', 'fontWeight': '600'}}>
                    Direct 24/7 dedicated travel designer on WhatsApp &amp; phone
                  </td>
</tr>
<tr>
<td style={{'padding': '1rem', 'fontWeight': '600', 'color': 'var(--text-primary)'}}>
                    Pricing Transparency
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--text-muted)'}}>
                    Hidden permit charges &amp; surprise shopping stops
                  </td>
<td style={{'padding': '1rem', 'color': 'var(--gold-light)', 'fontWeight': '600'}}>
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
