'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const [filter, setFilter] = useState('all');

  const matchesFilter = (category) => {
    if (filter === 'all') return true;
    return category.includes(filter);
  };

  return (
    <>
<section className="section text-center" style={{'paddingBottom': '2rem'}}>
<div className="container">
<span className="section-eyebrow gold-text">LIMITED-TIME PRIVILEGES &amp; EXCLUSIVE OFFERS</span>
<h1 className="editorial-title" style={{'margin': '0.5rem 0 1.25rem'}}>
            Exclusive Travel Deals &amp; Seasonal Privileges
          </h1>
<p className="section-desc" style={{'margin': '0 auto 2.5rem', 'maxWidth': '740px'}}>
            Unlock pre-negotiated promotional rates, early bird departures, and complimentary luxury upgrades across India and beyond. Direct guarantees with zero hidden costs.
          </p>

<div className="filter-tabs" id="deal-filters" role="tablist" style={{'justifyContent': 'center'}}>
<button
  className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
  data-filter="all"
  onClick={() => setFilter('all')}
  type="button"
>
  All Offers
</button>
<button
  className={`filter-tab ${filter === 'early-bird' ? 'active' : ''}`}
  data-filter="early-bird"
  onClick={() => setFilter('early-bird')}
  type="button"
>
  Early Bird Specials
</button>
<button
  className={`filter-tab ${filter === 'seasonal' ? 'active' : ''}`}
  data-filter="seasonal"
  onClick={() => setFilter('seasonal')}
  type="button"
>
  Seasonal Escapes
</button>
<button
  className={`filter-tab ${filter === 'luxury' ? 'active' : ''}`}
  data-filter="luxury"
  onClick={() => setFilter('luxury')}
  type="button"
>
  Luxury Upgrades
</button>
<button
  className={`filter-tab ${filter === 'weekend' ? 'active' : ''}`}
  data-filter="weekend"
  onClick={() => setFilter('weekend')}
  type="button"
>
  Weekend Circuits
</button>
</div>
</div>
</section>
<section className="section" style={{'paddingTop': '0'}}>
<div className="container">
<div className="deals-grid" id="deals-container">

<div className="deal-card" data-category="early-bird seasonal" style={{ display: matchesFilter('early-bird seasonal') ? 'flex' : 'none' }}>
<span className="deal-badge-ribbon">25% OFF EARLY BIRD</span>
<span className="deal-validity-badge">Valid until April 30, 2026</span>
<div className="deal-image-wrapper">
<img alt="Spring Himalayan Valley Trail" height="210" loading="lazy" src="/images/india/sikkim/Sikkim_2.jpeg" width="400"/>
</div>
<div className="deal-body">
<span className="deal-tagline">SIKKIM &amp; NORTH BENGAL</span>
<h3 className="deal-title">Spring Himalayan Rhododendron Trail</h3>
<p className="deal-desc">
                  7 Days / 6 Nights premium circuit across Gangtok, Lachen, and Yumthang Valley during peak wildflower blooming season.
                </p>
<ul className="deal-inclusions">
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Complimentary Suite Upgrade to Mountain View</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Private 4x4 Luxury SUV with Veteran Mountain Chauffeur</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Protected Area Permits &amp; Monastic Passes Pre-Cleared</span>
</li>
</ul>
<div className="deal-footer">
<div className="deal-pricing">
<div className="price-reveal-wrap">
<div className="blurred-price">
<span className="deal-final-price">Custom Tariff</span>
</div>
<span className="revealing-soon-badge">On Request</span>
</div>
</div>
<Link className="btn btn-sm btn-gold" href="/contact?subject=Claim+Deal+Spring+Himalayan">
<span>Claim Deal</span>
<span className="btn-arrow">→</span>
</Link>
</div>
</div>
</div>

<div className="deal-card" data-category="seasonal luxury" style={{ display: matchesFilter('seasonal luxury') ? 'flex' : 'none' }}>
<span className="deal-badge-ribbon">COMPLIMENTARY SPA &amp; CRUISE</span>
<span className="deal-validity-badge">Limited Seasonal Slots</span>
<div className="deal-image-wrapper">
<img alt="Cloud Realm &amp; Crystal Waters" height="210" loading="lazy" src="/images/india/meghalaya/Meghalaya_2.jpeg" width="400"/>
</div>
<div className="deal-body">
<span className="deal-tagline">SHILLONG • SOHRA • DAWKI</span>
<h3 className="deal-title">Cloud Realm &amp; Crystal Waters Escapade</h3>
<p className="deal-desc">
                  6 Days / 5 Nights luxury retreat covering living root bridges, secret canyon waterfalls, and glass-bottom boating in Dawki.
                </p>
<ul className="deal-inclusions">
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Daily Gourmet Breakfast &amp; Multi-Course Chef Dinners</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Private Transparent Boating Session on Umngot River</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Dedicated Meghalaya Tourism Certified Local Escort</span>
</li>
</ul>
<div className="deal-footer">
<div className="deal-pricing">
<div className="price-reveal-wrap">
<div className="blurred-price">
<span className="deal-final-price">Custom Tariff</span>
</div>
<span className="revealing-soon-badge">On Request</span>
</div>
</div>
<Link className="btn btn-sm btn-gold" href="/contact?subject=Claim+Deal+Cloud+Realm">
<span>Claim Deal</span>
<span className="btn-arrow">→</span>
</Link>
</div>
</div>
</div>

<div className="deal-card" data-category="weekend luxury" style={{ display: matchesFilter('weekend luxury') ? 'flex' : 'none' }}>
<span className="deal-badge-ribbon">ROYAL CONCIERGE SPECIAL</span>
<span className="deal-validity-badge">Year-Round Exclusive</span>
<div className="deal-image-wrapper">
<img alt="Tripura Royal Kingdoms &amp; Heritage" height="210" loading="lazy" src="/images/india/tripura/Tripura_2.jpeg" width="400"/>
</div>
<div className="deal-body">
<span className="deal-tagline">AGARTALA • UDAIPUR • UNAKOTI</span>
<h3 className="deal-title">Tripura Royal Kingdoms &amp; Heritage Trail</h3>
<p className="deal-desc">
                  4 Days / 3 Nights bespoke exploration of Ujjayanta Palace, twilight boat cruise to Neermahal, and ancient Unakoti colossal carvings.
                </p>
<ul className="deal-inclusions">
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>VIP Museum Pass to Ujjayanta Palace Royal State Gallery</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Sunset Private Motorboat to Lake Rudrasagar Water Palace</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Complimentary Agartala Airport VIP Chauffeur Transfer</span>
</li>
</ul>
<div className="deal-footer">
<div className="deal-pricing">
<div className="price-reveal-wrap">
<div className="blurred-price">
<span className="deal-final-price">Custom Tariff</span>
</div>
<span className="revealing-soon-badge">On Request</span>
</div>
</div>
<Link className="btn btn-sm btn-gold" href="/contact?subject=Claim+Deal+Royal+Tripura">
<span>Claim Deal</span>
<span className="btn-arrow">→</span>
</Link>
</div>
</div>
</div>

<div className="deal-card" data-category="early-bird seasonal" style={{ display: matchesFilter('early-bird seasonal') ? 'flex' : 'none' }}>
<span className="deal-badge-ribbon">20% OFF HONEYMOON SPECIAL</span>
<span className="deal-validity-badge">Valid for May &amp; June</span>
<div className="deal-image-wrapper">
<img alt="Kashmir Valley of Flowers &amp; Houseboat" height="210" loading="lazy" src="/images/india/kashmir/Kashmir_2.jpeg" width="400"/>
</div>
<div className="deal-body">
<span className="deal-tagline">SRINAGAR • GULMARG • PAHALGAM</span>
<h3 className="deal-title">Kashmir Paradise &amp; Dal Lake Retreat</h3>
<p className="deal-desc">
                  6 Days / 5 Nights romantic escapade with private heritage cedarwood houseboat stay, sunrise shikara rides, and Gulmarg Gondola access.
                </p>
<ul className="deal-inclusions">
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Private Carved Wooden Houseboat on Nagin/Dal Lake</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Gulmarg Phase 1 &amp; 2 Cable Car Tickets Pre-Booked</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Authentic Kashmiri Wazwan Banquet Tasting Experience</span>
</li>
</ul>
<div className="deal-footer">
<div className="deal-pricing">
<div className="price-reveal-wrap">
<div className="blurred-price">
<span className="deal-final-price">Custom Tariff</span>
</div>
<span className="revealing-soon-badge">On Request</span>
</div>
</div>
<Link className="btn btn-sm btn-gold" href="/contact?subject=Claim+Deal+Kashmir+Paradise">
<span>Claim Deal</span>
<span className="btn-arrow">→</span>
</Link>
</div>
</div>
</div>

<div className="deal-card" data-category="luxury seasonal" style={{ display: matchesFilter('luxury seasonal') ? 'flex' : 'none' }}>
<span className="deal-badge-ribbon">FREE SCUBA &amp; GLAMPING</span>
<span className="deal-validity-badge">Limited Island Slots</span>
<div className="deal-image-wrapper">
<img alt="Andaman Azure Islands Escape" height="210" loading="lazy" src="/images/india/andaman-islands/andaman_2.jpeg" width="400"/>
</div>
<div className="deal-body">
<span className="deal-tagline">PORT BLAIR • HAVELOCK • NEIL</span>
<h3 className="deal-title">Andaman Azure Haven &amp; Coral Glamping</h3>
<p className="deal-desc">
                  6 Days / 5 Nights island retreat with beachside pool villas on Radhanagar Beach, private catamaran transfers, and coral reef exploration.
                </p>
<ul className="deal-inclusions">
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Complimentary PADI Certified Discover Scuba Diving Session</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Premium High-Speed Catamaran (Makruzz) Transfers</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Private Candlelit Beachfront Dinner with Seafood Platter</span>
</li>
</ul>
<div className="deal-footer">
<div className="deal-pricing">
<div className="price-reveal-wrap">
<div className="blurred-price">
<span className="deal-final-price">Custom Tariff</span>
</div>
<span className="revealing-soon-badge">On Request</span>
</div>
</div>
<Link className="btn btn-sm btn-gold" href="/contact?subject=Claim+Deal+Andaman+Azure">
<span>Claim Deal</span>
<span className="btn-arrow">→</span>
</Link>
</div>
</div>
</div>

<div className="deal-card" data-category="early-bird weekend" style={{ display: matchesFilter('early-bird weekend') ? 'flex' : 'none' }}>
<span className="deal-badge-ribbon">FREE 4X4 SUV UPGRADE</span>
<span className="deal-validity-badge">Winter &amp; Autumn Early Bird</span>
<div className="deal-image-wrapper">
<img alt="Tawang Monastic &amp; High Altitude Trail" height="210" loading="lazy" src="/images/india/arunachal-pradesh/arunachal.jpeg" width="400"/>
</div>
<div className="deal-body">
<span className="deal-tagline">ARUNACHAL PRADESH</span>
<h3 className="deal-title">Tawang Monastic &amp; Sela Pass Expedition</h3>
<p className="deal-desc">
                  8 Days / 7 Nights thrilling Himalayan journey traversing 13,700 ft Sela Pass, ancient Tawang Monastery, and serene Sangetsar (Madhuri) Lake.
                </p>
<ul className="deal-inclusions">
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Complimentary Upgrade to Dedicated Scorpio 4x4 SUV</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Arunachal Inner Line Permits (ILP) Processed in 24 Hours</span>
</li>
<li>
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span>Premium Heated Mountain Lodge Stays &amp; Thermals Assistance</span>
</li>
</ul>
<div className="deal-footer">
<div className="deal-pricing">
<div className="price-reveal-wrap">
<div className="blurred-price">
<span className="deal-final-price">Custom Tariff</span>
</div>
<span className="revealing-soon-badge">On Request</span>
</div>
</div>
<Link className="btn btn-sm btn-gold" href="/contact?subject=Claim+Deal+Tawang+Monastic">
<span>Claim Deal</span>
<span className="btn-arrow">→</span>
</Link>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section" style={{'paddingTop': '1rem'}}>
<div className="container">
<div className="glass-panel" style={{'padding': '3rem 2rem', 'borderRadius': 'var(--radius-lg)', 'border': '1px solid var(--border-gold)'}}>
<div className="text-center" style={{'marginBottom': '2.5rem'}}>
<span className="section-eyebrow gold-text">TRANSPARENT PRIVILEGES</span>
<h2 className="section-heading" style={{'marginTop': '0.5rem'}}>
                The Global Holidays Value Guarantee
              </h2>
</div>
<div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(240px, 1fr))', 'gap': '1.5rem'}}>
<div style={{'padding': '1.25rem', 'background': 'var(--bg-surface-elevated)', 'borderRadius': 'var(--radius-md)', 'border': '1px solid var(--border-subtle)'}}>
<h4 style={{'fontSize': '1.05rem', 'color': 'var(--gold-light)', 'marginBottom': '0.5rem'}}>Zero Hidden Charges</h4>
<p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'lineHeight': '1.5'}}>Every deal price explicitly includes GST, vehicle toll charges, state permits, and driver allowances.</p>
</div>
<div style={{'padding': '1.25rem', 'background': 'var(--bg-surface-elevated)', 'borderRadius': 'var(--radius-md)', 'border': '1px solid var(--border-subtle)'}}>
<h4 style={{'fontSize': '1.05rem', 'color': 'var(--gold-light)', 'marginBottom': '0.5rem'}}>Verified Stays Only</h4>
<p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'lineHeight': '1.5'}}>No downgraded guest houses. Every promotional deal is tied to verified boutique &amp; luxury accommodations.</p>
</div>
<div style={{'padding': '1.25rem', 'background': 'var(--bg-surface-elevated)', 'borderRadius': 'var(--radius-md)', 'border': '1px solid var(--border-subtle)'}}>
<h4 style={{'fontSize': '1.05rem', 'color': 'var(--gold-light)', 'marginBottom': '0.5rem'}}>Direct Agartala Concierge</h4>
<p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'lineHeight': '1.5'}}>Speak directly to an experienced travel specialist who oversees your complete itinerary from booking to touchdown.</p>
</div>
<div style={{'padding': '1.25rem', 'background': 'var(--bg-surface-elevated)', 'borderRadius': 'var(--radius-md)', 'border': '1px solid var(--border-subtle)'}}>
<h4 style={{'fontSize': '1.05rem', 'color': 'var(--gold-light)', 'marginBottom': '0.5rem'}}>Flexible Rescheduling</h4>
<p style={{'fontSize': '0.85rem', 'color': 'var(--text-secondary)', 'lineHeight': '1.5'}}>Weather-safe trip adjustments and transparent supplier credit roll-overs if Himalayan roads are impacted.</p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
