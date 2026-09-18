'use client';

import { FaStar } from 'react-icons/fa6';

import Link from 'next/link';

export default function Page() {
  return (
    <>
<section className="section text-center" style={{'paddingBottom': '2rem'}}>
<div className="container">
<span className="section-eyebrow gold-text">MOMENTS &amp; MEMORIES</span>
<h1 className="editorial-title" style={{'margin': '0.5rem 0 1.25rem'}}>
            Travel Stories &amp; Gallery
          </h1>
<p className="section-desc" style={{'margin': '0 auto 2.5rem', 'maxWidth': '740px'}}>
            Unfiltered moments from our guests across misty mountain passes,
            royal palaces, sacred monasteries, and azure ocean waters.
          </p>
</div>
</section>
<section className="section" style={{'paddingTop': '1rem'}}>
<div className="container">
<div className="masonry-gallery" id="masonry-gallery">

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Ancient Living Root Bridge • Meghalaya" data-img="/images/india/meghalaya/Meghalaya.jpeg">
<img alt="Meghalaya Living Root Bridge" loading="lazy" src="/images/india/meghalaya/Meghalaya.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Meghalaya</span>
<h4>Living Root Bridge</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Global Holidays Guest" data-caption="Dal Lake Shikara Morning • Srinagar, Kashmir" data-img="/images/india/kashmir/Kashmir_1.jpeg">
<img alt="Kashmir Shikara" loading="lazy" src="/images/india/kashmir/Kashmir_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Kashmir</span>
<h4>Dal Lake Morning Mist</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Gurudongmar High Altitude Lake • North Sikkim" data-img="/images/india/sikkim/Sikkim_1.jpeg">
<img alt="North Sikkim Lake" loading="lazy" src="/images/india/sikkim/Sikkim_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Sikkim</span>
<h4>Gurudongmar 17,800 ft</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Global Holidays Guest" data-caption="Radhanagar Beach Sunset • Havelock Island, Andaman" data-img="/images/india/andaman-islands/andaman_1.jpeg">
<img alt="Andaman Radhanagar Beach" loading="lazy" src="/images/india/andaman-islands/andaman_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Andaman</span>
<h4>Radhanagar Beach Glow</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Udaipur City Palace • Rajasthan" data-img="/images/india/rajasthan/rajasthan_1.jpeg">
<img alt="Rajasthan Udaipur" loading="lazy" src="/images/india/rajasthan/rajasthan_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Rajasthan</span>
<h4>City Palace Grandeur</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Darjeeling Heritage Tea Valley Vista" data-img="/images/india/darjeeling-west-bengal/darjeeling_1.jpeg">
<img alt="Darjeeling Tea Valley" loading="lazy" src="/images/india/darjeeling-west-bengal/darjeeling_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Darjeeling</span>
<h4>Misty Tea Slopes</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="Neermahal Water Palace • Melaghar, Tripura" data-img="/images/india/tripura/Tripura_1.jpeg">
<img alt="Tripura Neermahal" loading="lazy" src="/images/india/tripura/Tripura_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Tripura Exclusive</span>
<h4>Neermahal Water Palace</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item item-tall" data-author="Global Holidays Guest" data-caption="Ubud Rainforest Infinity Pool • Bali" data-img="/images/international/bali-indonesia/bali_1.jpeg">
<img alt="Bali Luxury Villa" loading="lazy" src="/images/international/bali-indonesia/bali_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">International Haven</span>
<h4>Bali Jungle Sanctuary</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>

<div className="gallery-item" data-author="Global Holidays Guest" data-caption="South Goa Coastal Villa Sunset" data-img="/images/india/goa/goa_1.jpeg">
<img alt="South Goa Resort" loading="lazy" src="/images/india/goa/goa_1.jpeg"/>
<div className="gallery-caption-overlay">
<span className="cap-tag">Goa</span>
<h4>Secluded Coastal Cabana</h4>
<span className="cap-hint">Click to enlarge ⤢</span>
</div>
</div>
</div>
</div>
</section>
<section className="section" style={{'background': 'var(--bg-surface)'}}>
<div className="container">
<div className="text-center mb-5">
<span className="section-eyebrow gold-text">GENUINE CLIENT VOICES</span>
<h2 className="section-heading">Stories from our travellers.</h2>
<p className="section-desc" style={{'margin': '0 auto'}}>
              Read reflections and reviews from families, honeymooners, and solo
              adventurers.
            </p>
</div>
<div style={{'display': 'grid', 'gridTemplateColumns': 'repeat(auto-fit, minmax(360px, 1fr))', 'gap': '2rem'}}>

<div className="testimonial-card glass-panel" style={{'width': '100%'}}>
<div className="test-quote-icon">“</div>
<div className="stars-gold mb-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<p className="test-quote">
                “Beautifully planned trip, excellent coordination and an
                unforgettable experience. Our 6-day Meghalaya &amp; Shillong
                vacation was flawless. From private airport pickup in Guwahati
                to our boutique cottage in Cherrapunji, Global Holidays took
                care of every tiny detail!”
              </p>
<div className="test-author-info">
<div className="author-avatar">SC</div>
<div>
<h4 className="author-name">Subrata &amp; Piyali Chakraborty</h4>
<span className="author-location">Agartala → Meghalaya Cloud Escape</span>
</div>
</div>
</div>

<div className="testimonial-card glass-panel" style={{'width': '100%'}}>
<div className="test-quote-icon">“</div>
<div className="stars-gold mb-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<p className="test-quote">
                “Booking our Kashmir honeymoon through Global Holidays was the
                best decision. The houseboat on Dal Lake was majestic and the
                private gondola passes in Gulmarg were arranged without any
                queues. Truly high-end boutique hospitality right from
                Agartala.”
              </p>
<div className="test-author-info">
<div className="author-avatar">AD</div>
<div>
<h4 className="author-name">Anirban &amp; Disha Debnath</h4>
<span className="author-location">Agartala → Kashmir Honeymoon</span>
</div>
</div>
</div>

<div className="testimonial-card glass-panel" style={{'width': '100%'}}>
<div className="test-quote-icon">“</div>
<div className="stars-gold mb-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<p className="test-quote">
                “North Sikkim can be challenging with permits and mountain
                roads, but Global Holidays made it feel effortless. Our driver
                was extremely courteous and safe, and the hotels in Lachen and
                Lachung exceeded our expectations. Highly recommended!”
              </p>
<div className="test-author-info">
<div className="author-avatar">RM</div>
<div>
<h4 className="author-name">Dr. Rajesh Majumder</h4>
<span className="author-location">Agartala → North Sikkim Expedition</span>
</div>
</div>
</div>

<div className="testimonial-card glass-panel" style={{'width': '100%'}}>
<div className="test-quote-icon">“</div>
<div className="stars-gold mb-3"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></div>
<p className="test-quote">
                “Our family trip to the Andaman Islands was magical. The
                beachfront villa at Havelock and the private scuba arrangements
                were top tier. Very honest and transparent pricing with prompt
                WhatsApp support throughout the trip.”
              </p>
<div className="test-author-info">
<div className="author-avatar">TD</div>
<div>
<h4 className="author-name">Tanmay &amp; Sanchita Das</h4>
<span className="author-location">Agartala → Andaman Family Tour</span>
</div>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
