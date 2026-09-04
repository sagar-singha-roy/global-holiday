'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <>

 Page Hero Banner 
<section className="section text-center" style={{'paddingBottom': '2rem'}}>
<div className="container">
<span className="section-eyebrow gold-text">A VISUAL ODYSSEY THROUGH WONDER</span>
<h1 className="editorial-title" style={{'margin': '0.5rem 0 1.25rem'}}>
            Moments Captured in Wonder
          </h1>
<p className="section-desc" style={{'margin': '0 auto 2.5rem', 'maxWidth': '740px'}}>
            Glimpse authentic travel moments, crystal clear rivers, living root architectures, snow-kissed Himalayan summits, and royal water palaces photographed during Global Holidays expeditions.
          </p>

<div className="filter-tabs" id="gallery-filters" role="tablist" style={{'justifyContent': 'center'}}>
<button className="filter-tab active" data-filter="all">
              All Moments
            </button>
<button className="filter-tab" data-filter="meghalaya">
              Meghalaya &amp; Waterfalls
            </button>
<button className="filter-tab" data-filter="sikkim">
              Sikkim &amp; Snow Peaks
            </button>
<button className="filter-tab" data-filter="tripura">
              Tripura Royal Heritage
            </button>
<button className="filter-tab" data-filter="hotels">
              Boutique Stays &amp; Luxury
            </button>
<button className="filter-tab" data-filter="coastal">
              Coastal &amp; Islands
            </button>
</div>
</div>
</section>
 Masonry Gallery Section 
<section className="section gallery-section" style={{'paddingTop': '0'}}>
<div className="container">
<div className="masonry-gallery" id="masonry-gallery">

<div className="gallery-item" data-author="Global Holidays Expedition" data-caption="Ancient Living Root Bridge • Nongriat, Meghalaya" data-category="meghalaya" data-img="/images/meghalaya.jpg">
<img alt="Meghalaya Living Root Bridge" height="400" loading="lazy" src="/images/meghalaya.jpg" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Meghalaya</span>
<h4>Living Root Bridge</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Global Holidays Traveler" data-caption="Gurudongmar High Altitude Sacred Lake (17,800 ft) • North Sikkim" data-category="sikkim" data-img="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Gurudongmar Lake Sikkim" height="800" loading="lazy" src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Sikkim</span>
<h4>Gurudongmar Glacial Lake</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Archive" data-caption="Neermahal Water Palace Sunset Reflection • Lake Rudrasagar, Tripura" data-category="tripura" data-img="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Tripura Neermahal Water Palace" height="400" loading="lazy" src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Tripura</span>
<h4>Neermahal Water Palace</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Curated Hospitality Partner" data-caption="Mayfair Heritage Estate &amp; Tea Gardens Salon • Darjeeling Foothills" data-category="hotels" data-img="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Mayfair Tea Estate Hotel" height="800" loading="lazy" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Boutique Stay</span>
<h4>Tea Estate Colonial Suite</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Crystal Umngot River Boating • Dawki, Meghalaya" data-category="meghalaya" data-img="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Crystal Dawki River" height="400" loading="lazy" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Meghalaya</span>
<h4>Dawki Glass Waters</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Traveler" data-caption="Radhanagar Sunset &amp; Turquoise Surf • Havelock Island, Andaman" data-category="coastal" data-img="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Radhanagar Beach Andaman" height="400" loading="lazy" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Andaman</span>
<h4>Radhanagar Beach Horizon</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Global Holidays Traveler" data-caption="Golden Dawn over Floating Shikaras • Dal Lake, Kashmir" data-category="sikkim" data-img="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Kashmir Dal Lake" height="800" loading="lazy" src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Kashmir Valley</span>
<h4>Dal Lake Morning Glow</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Curated Hospitality Partner" data-caption="Ri Kynjai Lake View Chalets • Umiam Lake, Meghalaya" data-category="hotels" data-img="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Ri Kynjai Lake Chalet" height="400" loading="lazy" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Luxury Resort</span>
<h4>Ri Kynjai Lakefront Balcony</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Archive" data-caption="Ujjayanta Palace Mughal Gardens &amp; Domes • Agartala, Tripura" data-category="tripura" data-img="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Ujjayanta Palace Agartala" height="400" loading="lazy" src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Tripura</span>
<h4>Ujjayanta Royal Palace</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Global Holidays Expedition" data-caption="Nohkalikai Falls Plunge Pool (1,115 ft) • Cherrapunji, Meghalaya" data-category="meghalaya" data-img="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Nohkalikai Falls Cherrapunji" height="800" loading="lazy" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Meghalaya</span>
<h4>Nohkalikai Plunge Gorge</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Traveler" data-caption="Mount Kanchenjunga Sunrise from Tiger Hill • Sikkim &amp; Darjeeling" data-category="sikkim" data-img="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Kanchenjunga Golden Sunrise" height="400" loading="lazy" src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Sikkim</span>
<h4>Kanchenjunga Golden Crest</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Elephant Beach Coral Reef Dive • Havelock, Andaman" data-category="coastal" data-img="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Andaman Coral Reef Exploration" height="400" loading="lazy" src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&amp;w=600&amp;auto=format&amp;fit=crop" width="600"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Coastal</span>
<h4>Elephant Beach Coral Reef</h4>
<span className="cap-hint">Click to view in 4K ⤢</span>
</div>
</div>
</div>
</div>
</section>
 Instagram / Community Banner 
<section className="section" style={{'paddingTop': '1rem'}}>
<div className="container">
<div className="cta-card glass-panel text-center" style={{'padding': '3.5rem 2rem', 'borderRadius': 'var(--radius-lg)', 'border': '1px solid var(--border-gold)'}}>
<span className="section-eyebrow gold-text">SHARE YOUR ODYSSEY</span>
<h2 className="section-heading" style={{'margin': '0.5rem auto 1rem', 'maxWidth': '680px'}}>
              Traveled with Global Holidays?
            </h2>
<p className="section-desc" style={{'maxWidth': '600px', 'margin': '0 auto 2rem'}}>
              Tag your journeys with <strong style={{'color': 'var(--gold-light)'}}>#GlobalHolidaysTravel</strong> on Instagram or send high-resolution shots to our concierge team for inclusion in our official guest gallery.
            </p>
<div style={{'display': 'flex', 'gap': '1rem', 'justifyContent': 'center', 'flexWrap': 'wrap'}}>
<a className="btn btn-gold btn-large" href="https://instagram.com" rel="noopener" target="_blank">
<span>Follow on Instagram</span>
<span className="btn-arrow">→</span>
</a>
<a className="btn btn-outline-glass btn-large" href="/contact">
<span>Plan Your Next Journey</span>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
