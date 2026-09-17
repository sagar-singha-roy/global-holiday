'use client';

import { useState } from 'react';
import Link from 'next/link';

const GALLERY_ITEMS = [
  // Northeast
  {
    id: 'meg-1',
    category: 'northeast',
    title: 'Meghalaya Living Root Bridge',
    tag: 'Meghalaya',
    caption: 'Ancient Bio-Engineering Wonder • Nongriat, Meghalaya',
    author: 'Global Holidays Guest',
    img: '/images/india/meghalaya/Meghalaya.jpeg',
    tall: false,
  },
  {
    id: 'sik-1',
    category: 'northeast',
    title: 'Gurudongmar Glacial Lake',
    tag: 'Sikkim',
    caption: 'Sacred High Altitude Lake (17,800 ft) • North Sikkim',
    author: 'Global Holidays Traveler',
    img: '/images/india/sikkim/Sikkim.jpeg',
    tall: true,
  },
  {
    id: 'tri-1',
    category: 'northeast',
    title: 'Neermahal Water Palace',
    tag: 'Tripura',
    caption: 'Rudrasagar Lake Floating Palace • Melaghar, Tripura',
    author: 'Global Holidays Archive',
    img: '/images/india/tripura/Tripura.jpeg',
    tall: false,
  },
  {
    id: 'dar-1',
    category: 'northeast',
    title: 'Darjeeling Tea Valleys',
    tag: 'Darjeeling',
    caption: 'Emerald Mist Rolling Over Colonial Tea Slopes • Darjeeling',
    author: 'Global Holidays Guest',
    img: '/images/india/darjeeling-west-bengal/darjeeling.jpeg',
    tall: true,
  },
  {
    id: 'aru-1',
    category: 'northeast',
    title: 'Tawang Monastic Heights',
    tag: 'Arunachal',
    caption: 'High Himalayan Monastery & Mountain Passes • Arunachal Pradesh',
    author: 'Global Holidays Explorer',
    img: '/images/india/arunachal-pradesh/arunachal.jpeg',
    tall: false,
  },
  {
    id: 'ass-1',
    category: 'northeast',
    title: 'Kaziranga Wilderness & River',
    tag: 'Assam',
    caption: 'Brahmaputra Floodplains & Rhinoceros Trails • Assam',
    author: 'Global Holidays Safari',
    img: '/images/india/assam/assam.jpeg',
    tall: false,
  },

  // Himalayan & Mountain
  {
    id: 'kas-1',
    category: 'himalayan',
    title: 'Dal Lake Morning Mist',
    tag: 'Kashmir',
    caption: 'Cedar Shikaras Gliding on Mirror Waters • Srinagar, Kashmir',
    author: 'Global Holidays Guest',
    img: '/images/india/kashmir/Kashmir.jpeg',
    tall: true,
  },
  {
    id: 'lad-1',
    category: 'himalayan',
    title: 'Pangong Tso Turquoise Waters',
    tag: 'Ladakh',
    caption: 'Crystal Blue Glacial Reflections • Ladakh (14,270 ft)',
    author: 'Global Holidays Traveler',
    img: '/images/india/ladakh/ladakh.jpeg',
    tall: false,
  },
  {
    id: 'him-1',
    category: 'himalayan',
    title: 'Himachal Pine Glades & Peaks',
    tag: 'Himachal',
    caption: 'Snow Slopes & High Cedar Forests • Solang & Manali',
    author: 'Global Holidays Explorer',
    img: '/images/india/himachal-pradesh/himachal.jpeg',
    tall: true,
  },
  {
    id: 'utt-1',
    category: 'himalayan',
    title: 'Uttarakhand Holy Valleys',
    tag: 'Uttarakhand',
    caption: 'Alpine Meadows & Ganga River Valleys • Rishikesh & Mussoorie',
    author: 'Global Holidays Guest',
    img: '/images/india/uttarakhand/Uttarakhand.jpeg',
    tall: false,
  },

  // Coastal & Islands
  {
    id: 'and-1',
    category: 'coastal',
    title: 'Radhanagar Beach Horizon',
    tag: 'Andaman',
    caption: 'Turquoise Waves & Coral Sands • Havelock Island, Andaman',
    author: 'Global Holidays Traveler',
    img: '/images/india/andaman-islands/andaman.jpg',
    tall: true,
  },
  {
    id: 'goa-1',
    category: 'coastal',
    title: 'Goa Coastal Villa Solitude',
    tag: 'Goa',
    caption: 'Portuguese Palm Estates & Golden Sunsets • South Goa',
    author: 'Global Holidays Guest',
    img: '/images/india/goa/goa.jpeg',
    tall: false,
  },
  {
    id: 'ker-1',
    category: 'coastal',
    title: 'Alleppey Backwaters Houseboat',
    tag: 'Kerala',
    caption: 'Tranquil Canal Palm Trails • Kerala Backwaters',
    author: 'Global Holidays Traveler',
    img: '/images/india/kerala/Kerala.jpeg',
    tall: false,
  },

  // Heritage & Palaces
  {
    id: 'raj-1',
    category: 'heritage',
    title: 'Royal Rajasthan Palaces',
    tag: 'Rajasthan',
    caption: 'Majestic Lake Palaces & Golden Fortresses • Udaipur & Jaipur',
    author: 'Global Holidays Archive',
    img: '/images/india/rajasthan/rajasthan.jpeg',
    tall: true,
  },
  {
    id: 'kar-1',
    category: 'heritage',
    title: 'Hampi Monolithic Ruins',
    tag: 'Karnataka',
    caption: 'Ancient Vijayanagara Architecture & Stone Chariots • Hampi',
    author: 'Global Holidays Traveler',
    img: '/images/india/karnataka/karnatak.jpeg',
    tall: false,
  },
  {
    id: 'tam-1',
    category: 'heritage',
    title: 'Tamil Nadu Sacred Gopurams',
    tag: 'Tamil Nadu',
    caption: 'Dravidian Stone Sculptures & Nilgiri Hills • Tamil Nadu',
    author: 'Global Holidays Guest',
    img: '/images/india/tamil-nadu/tamilnadu.jpeg',
    tall: false,
  },

  // International
  {
    id: 'bal-1',
    category: 'international',
    title: 'Bali Rainforest Sanctuary',
    tag: 'Bali, Indonesia',
    caption: 'Jungle Pool Villas & Sacred Cliff Temples • Ubud & Uluwatu',
    author: 'Global Holidays Traveler',
    img: '/images/international/bali-indonesia/Bali.jpeg',
    tall: true,
  },
  {
    id: 'dub-1',
    category: 'international',
    title: 'Dubai Futuristic Oasis',
    tag: 'Dubai, UAE',
    caption: 'Burj Khalifa & Golden Arabian Dunes • Dubai',
    author: 'Global Holidays Guest',
    img: '/images/international/dubai-uae/Dubai.jpeg',
    tall: false,
  },
  {
    id: 'fra-1',
    category: 'international',
    title: 'Parisian Romance & Riviera',
    tag: 'France',
    caption: 'Eiffel Vistas & French Riviera Azure Waters • France',
    author: 'Global Holidays Explorer',
    img: '/images/international/france/france.jpeg',
    tall: true,
  },
  {
    id: 'gre-1',
    category: 'international',
    title: 'Santorini Blue Domes',
    tag: 'Greece',
    caption: 'Cliffside Whitewashed Caldera & Aegean Sunsets • Greece',
    author: 'Global Holidays Traveler',
    img: '/images/international/greece/greece.jpeg',
    tall: false,
  },
  {
    id: 'ita-1',
    category: 'international',
    title: 'Italian Riviera & Heritage',
    tag: 'Italy',
    caption: 'Venetian Canals & Amalfi Coast Pastel Cliffs • Italy',
    author: 'Global Holidays Explorer',
    img: '/images/international/italy/italy.jpeg',
    tall: false,
  },
];

export default function Page() {
  const [filter, setFilter] = useState('all');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredItems =
    filter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <>
      <section className="section text-center" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <span className="section-eyebrow gold-text">
            A VISUAL ODYSSEY THROUGH WONDER
          </span>
          <h1 className="editorial-title" style={{ margin: '0.5rem 0 1.25rem' }}>
            Moments Captured in Wonder
          </h1>
          <p className="section-desc" style={{ margin: '0 auto 2.5rem', maxWidth: '740px' }}>
            Authentic travel moments photographed during Global Holidays
            expeditions across the Indian subcontinent and international havens.
          </p>

          <div
            className="filter-tabs"
            id="gallery-filters"
            role="tablist"
            style={{ justifyContent: 'center' }}
          >
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Moments ({GALLERY_ITEMS.length})
            </button>
            <button
              className={`filter-tab ${filter === 'northeast' ? 'active' : ''}`}
              onClick={() => setFilter('northeast')}
            >
              Northeast Escapes
            </button>
            <button
              className={`filter-tab ${filter === 'himalayan' ? 'active' : ''}`}
              onClick={() => setFilter('himalayan')}
            >
              Himalayan Peaks
            </button>
            <button
              className={`filter-tab ${filter === 'coastal' ? 'active' : ''}`}
              onClick={() => setFilter('coastal')}
            >
              Coastal &amp; Islands
            </button>
            <button
              className={`filter-tab ${filter === 'heritage' ? 'active' : ''}`}
              onClick={() => setFilter('heritage')}
            >
              Royal Heritage
            </button>
            <button
              className={`filter-tab ${filter === 'international' ? 'active' : ''}`}
              onClick={() => setFilter('international')}
            >
              International
            </button>
          </div>
        </div>
      </section>

      <section className="section gallery-section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="masonry-gallery" id="masonry-gallery">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`gallery-item ${item.tall ? 'item-tall' : ''}`}
                data-category={item.category}
                style={{ cursor: 'pointer' }}
                onClick={() => setActiveLightbox(item)}
              >
                <img
                  alt={item.title}
                  loading="lazy"
                  src={item.img}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="gallery-caption-overlay">
                  <span className="cap-tag">{item.tag}</span>
                  <h4>{item.title}</h4>
                  <span className="cap-hint">Click to enlarge ⤢</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5, 12, 11, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
          onClick={() => setActiveLightbox(null)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '900px',
              width: '100%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid var(--border-gold)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.7)',
                color: '#fff',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                fontSize: '1.2rem',
                cursor: 'pointer',
                zIndex: 10,
              }}
              onClick={() => setActiveLightbox(null)}
            >
              &times;
            </button>
            <img
              src={activeLightbox.img}
              alt={activeLightbox.title}
              style={{ width: '100%', maxHeight: '75vh', objectFit: 'contain', background: '#000' }}
            />
            <div
              style={{
                padding: '1.25rem',
                background: 'var(--bg-surface)',
                borderTop: '1px solid var(--border-gold)',
              }}
            >
              <span className="section-eyebrow gold-text" style={{ fontSize: '0.75rem' }}>
                {activeLightbox.tag}
              </span>
              <h3 style={{ margin: '0.25rem 0', color: 'var(--text-primary)' }}>
                {activeLightbox.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div
            className="cta-card glass-panel text-center"
            style={{
              padding: '3.5rem 2rem',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border-gold)',
            }}
          >
            <span className="section-eyebrow gold-text">SHARE YOUR ODYSSEY</span>
            <h2
              className="section-heading"
              style={{ margin: '0.5rem auto 1rem', maxWidth: '680px' }}
            >
              Traveled with Global Holidays?
            </h2>
            <p
              className="section-desc"
              style={{ margin: '0 auto 2rem', maxWidth: '600px' }}
            >
              We'd love to feature your favorite memories, high altitude views,
              or serene beach moments in our guest spotlight archive.
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Link className="btn btn-gold" href="/stories">
                <span>Read Traveller Stories</span>
                <span className="btn-arrow">→</span>
              </Link>
              <Link className="btn btn-outline-glass" href="/contact">
                <span>Submit Your Photos</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
