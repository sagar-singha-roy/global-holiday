"use client";

import { FaEarthAsia, FaPlane, FaStar } from "react-icons/fa6";

import Link from "next/link";
import DumboorSlider from "@/components/DumboorSlider";

export default function Page() {
  return (
    <>
      <section className="hero-section" id="hero">
        <div className="hero-carousel-container" id="hero-carousel">
          <div
            className="hero-slide active"
            data-badge="Signature Northeast Circuit"
            data-dest="Meghalaya"
            data-route="Shillong • Cherrapunji • Dawki • Mawlynnong"
            data-slide="0"
            data-thumb="/images/india/meghalaya/Meghalaya.jpeg"
          >
            <img
              alt="Meghalaya Living Root Bridge &amp; Waterfalls"
              className="hero-slide-img"
              fetchPriority="high"
              src="/images/india/meghalaya/Meghalaya.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Paradise On Earth"
            data-dest="Kashmir Valley"
            data-route="Srinagar • Dal Lake • Gulmarg • Pahalgam"
            data-slide="1"
            data-thumb="/images/india/kashmir/Kashmir.jpeg"
          >
            <img
              alt="Kashmir Dal Lake Morning Shikara"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/kashmir/Kashmir.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Sacred Himalayan Pass"
            data-dest="Sikkim &amp; Darjeeling"
            data-route="Gangtok • Gurudongmar • Pelling • Tiger Hill"
            data-slide="2"
            data-thumb="/images/india/sikkim/Sikkim.jpeg"
          >
            <img
              alt="Sikkim Glacial Lake and Mountains"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/sikkim/Sikkim.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Pristine Coral Haven"
            data-dest="Andaman Islands"
            data-route="Port Blair • Havelock • Neil • Radhanagar"
            data-slide="3"
            data-thumb="/images/india/andaman-islands/andaman.jpg"
          >
            <img
              alt="Andaman Turquoise Island Waters"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/andaman-islands/andaman.jpg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Echoes of Royalty"
            data-dest="Royal Rajasthan"
            data-route="Jaipur • Udaipur • Jaisalmer Dunes • Jodhpur"
            data-slide="4"
            data-thumb="/images/india/rajasthan/rajasthan.jpeg"
          >
            <img
              alt="Royal Rajasthan Desert Forts &amp; Lake Palaces"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/rajasthan/rajasthan.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="God's Own Country"
            data-dest="Kerala"
            data-route="Munnar Hills • Alleppey Backwaters • Wayanad • Kochi"
            data-slide="5"
            data-thumb="/images/india/kerala/Kerala.jpeg"
          >
            <img
              alt="Kerala Backwaters &amp; Houseboat Sanctuary"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/kerala/Kerala.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Valley of the Gods"
            data-dest="Himachal Pradesh"
            data-route="Manali • Shimla • Spiti Valley • Dharamshala"
            data-slide="6"
            data-thumb="/images/india/himachal-pradesh/himachal.jpeg"
          >
            <img
              alt="Himachal Snow Passes and Pine Glades"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/himachal-pradesh/himachal.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Boutique Coastal Retreats"
            data-dest="Goa"
            data-route="Candolim • Palolem • Fontainhas • South Goa"
            data-slide="7"
            data-thumb="/images/india/goa/goa.jpeg"
          >
            <img
              alt="Goa Coastal Palm Shores and Sunsets"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/goa/goa.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Sacred Heights &amp; Alpine Valleys"
            data-dest="Uttarakhand"
            data-route="Rishikesh • Mussoorie • Nainital • Auli Slopes"
            data-slide="8"
            data-thumb="/images/india/uttarakhand/Uttarakhand.jpeg"
          >
            <img
              alt="Uttarakhand Himalayan Peaks and Rivers"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/uttarakhand/Uttarakhand.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Land of High Passes"
            data-dest="Ladakh"
            data-route="Leh • Pangong Tso • Nubra Valley • Khardung La"
            data-slide="9"
            data-thumb="/images/india/ladakh/ladakh.jpeg"
          >
            <img
              alt="Ladakh Pangong Lake and Monasteries"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/ladakh/ladakh.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Land of Dawn-Lit Mountains"
            data-dest="Arunachal Pradesh"
            data-route="Tawang • Sela Pass • Bomdila • Ziro Valley"
            data-slide="10"
            data-thumb="/images/india/arunachal-pradesh/arunachal.jpeg"
          >
            <img
              alt="Arunachal Monasteries and Mist-Shrouded Valleys"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/arunachal-pradesh/arunachal.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Royal Water Palace &amp; Antiquity"
            data-dest="Tripura"
            data-route="Agartala • Neermahal • Unakoti • Sepahijala"
            data-slide="11"
            data-thumb="/images/india/tripura/Tripura.jpeg"
          >
            <img
              alt="Tripura Neermahal Water Palace and Heritage"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/tripura/Tripura.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Gateway to the Northeast"
            data-dest="Assam Wildlife"
            data-region="india"
            data-route="Kaziranga Safari • Majuli Island • Brahmaputra Cruise"
            data-slide="12"
            data-thumb="/images/india/assam/assam.jpeg"
          >
            <img
              alt="Assam Kaziranga Wildlife and Tea Estates"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/assam/assam.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Temple Towns &amp; Blue Mountains"
            data-dest="Tamil Nadu"
            data-region="india"
            data-route="Ooty Nilgiris • Kodaikanal • Rameshwaram • Madurai"
            data-slide="13"
            data-thumb="/images/india/tamil-nadu/tamilnadu.jpeg"
          >
            <img
              alt="Tamil Nadu Ooty Nilgiri Tea Mountains"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/tamil-nadu/tamilnadu.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Monolithic Wonders &amp; Coffee Hills"
            data-dest="Karnataka Heritage"
            data-region="india"
            data-route="Coorg Coffee Valleys • Kabini Safari • Hampi Ruins"
            data-slide="14"
            data-thumb="/images/india/karnataka/karnatak.jpeg"
          >
            <img
              alt="Karnataka Hampi Ruins and Ancient Temples"
              className="hero-slide-img"
              loading="lazy"
              src="/images/india/karnataka/karnatak.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Tropical Kingdom"
            data-dest="Thailand"
            data-region="intl"
            data-route="Bangkok • Phuket Luxury • Krabi • Phi Phi Islands"
            data-slide="15"
            data-thumb="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="Thailand Emerald Bays and Longtail Boats"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Island of the Gods"
            data-dest="Bali &amp; Indonesia"
            data-region="intl"
            data-route="Ubud Jungle Villas • Nusa Penida • Seminyak • Uluwatu"
            data-slide="16"
            data-thumb="/images/international/bali-indonesia/Bali.jpeg"
          >
            <img
              alt="Bali Tropical Temple and Sacred Forest"
              className="hero-slide-img"
              loading="lazy"
              src="/images/international/bali-indonesia/Bali.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Futuristic Luxury Oasis"
            data-dest="Dubai &amp; UAE"
            data-region="intl"
            data-route="Burj Khalifa • Desert Dunes • Palm Jumeirah • Marina"
            data-slide="17"
            data-thumb="/images/international/dubai-uae/Dubai.jpeg"
          >
            <img
              alt="Dubai Skyline and Burj Khalifa Grandeur"
              className="hero-slide-img"
              loading="lazy"
              src="/images/international/dubai-uae/Dubai.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Alpine Grandeur"
            data-dest="Switzerland"
            data-region="intl"
            data-route="Interlaken • Lucerne • Zermatt • Matterhorn Glacier"
            data-slide="18"
            data-thumb="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="Swiss Alps and Glacier Lakes"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Overwater Paradise"
            data-dest="Maldives"
            data-region="intl"
            data-route="Private Coral Atolls • Water Bungalows • Sunset Cruises"
            data-slide="19"
            data-thumb="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="Maldives Turquoise Waters and Overwater Villas"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="The Silk Road Steppes"
            data-dest="Kazakhstan"
            data-region="intl"
            data-route="Almaty Mountains • Charyn Canyon • Kolsai Lake • Astana"
            data-slide="20"
            data-thumb="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="Kazakhstan Dramatic Alpine Canyons and Lakes"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Where Continents Meet"
            data-dest="Turkey"
            data-region="intl"
            data-route="Istanbul Bosphorus • Cappadocia Balloons • Antalya Coast"
            data-slide="21"
            data-thumb="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="Turkey Cappadocia Sunrise Hot Air Balloons"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1527838832700-5059252407fa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Romance &amp; Riviera"
            data-dest="France &amp; Paris"
            data-region="intl"
            data-route="Paris Eiffel • Nice • Cannes • French Riviera"
            data-slide="22"
            data-thumb="/images/international/france/france.jpeg"
          >
            <img
              alt="Parisian Architecture and Eiffel Vista"
              className="hero-slide-img"
              loading="lazy"
              src="/images/international/france/france.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Bella Italia"
            data-dest="Italy"
            data-region="intl"
            data-route="Rome Colosseum • Venice Canals • Florence • Amalfi Coast"
            data-slide="23"
            data-thumb="/images/international/italy/italy.jpeg"
          >
            <img
              alt="Italy Amalfi Cliffside Villas"
              className="hero-slide-img"
              loading="lazy"
              src="/images/international/italy/italy.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Regal Heritage"
            data-dest="United Kingdom"
            data-region="intl"
            data-route="London • Edinburgh • Cotswolds • Scottish Highlands"
            data-slide="24"
            data-thumb="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="London Westminster and Regal Palaces"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Aegean Odyssey"
            data-dest="Greece"
            data-region="intl"
            data-route="Santorini Domes • Mykonos • Athens Acropolis • Crete"
            data-slide="25"
            data-thumb="/images/international/greece/greece.jpeg"
          >
            <img
              alt="Santorini White Domes and Turquoise Aegean Sea"
              className="hero-slide-img"
              loading="lazy"
              src="/images/international/greece/greece.jpeg"
            />
          </div>

          <div
            className="hero-slide"
            data-badge="Iberian Splendour"
            data-dest="Spain"
            data-region="intl"
            data-route="Barcelona Sagrada • Madrid • Seville • Balearic Isles"
            data-slide="26"
            data-thumb="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&amp;w=200&amp;auto=format&amp;fit=crop"
          >
            <img
              alt="Spain Historic Architecture and Sunny Plazas"
              className="hero-slide-img"
              loading="lazy"
              src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
            />
          </div>
          <div className="hero-gradient-overlay"></div>
          <div className="hero-noise-overlay"></div>
        </div>

        <button
          aria-label="Previous Slide"
          className="hero-carousel-arrow hero-arrow-prev"
          id="hero-arrow-prev"
        >
          <svg
            fill="none"
            height="22"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            width="22"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          aria-label="Next Slide"
          className="hero-carousel-arrow hero-arrow-next"
          id="hero-arrow-next"
        >
          <svg
            fill="none"
            height="22"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            width="22"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div className="hero-content container">
          <h1 className="hero-headline editorial-title split-text-reveal">
            <span className="line-wrap">
              <span className="line-inner hero-brand-title">
                GLOBAL HOLIDAYS
              </span>
            </span>
            <span className="line-wrap">
              <span className="line-inner hero-headline-sub gold-italic">
                Tour and travels
              </span>
            </span>
            <span className="line-wrap">
              <span className="line-inner hero-headline-tagline">
                LUXURY <span className="pulse-dot"></span> COMFORT
                <span className="pulse-dot"></span> TRUST
              </span>
            </span>
          </h1>
          <p className="hero-subtitle fade-reveal delay-2">
            We don’t just plan your journey, we become a part of your story,
            turning every destination into a beautiful memory you’ll carry
            forever.
          </p>
          <div className="hero-cta-group fade-reveal delay-3">
            <Link
              className="btn btn-gold btn-large btn-magnetic"
              href="/destinations"
            >
              <span>Explore Destinations</span>
              <svg
                className="btn-arrow"
                fill="none"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <Link
              className="btn btn-outline-glass btn-large btn-magnetic"
              href="/contact"
            >
              <span>Plan My Trip</span>
            </Link>
          </div>

          <div
            className="hero-floating-card glass-panel fade-reveal delay-4"
            id="hero-floating-card"
            role="button"
            tabIndex={0}
            aria-label="View package details for current destination"
          >
            <div className="floating-badge-thumb">
              <img
                alt="Current Featured Destination"
                id="floating-thumb-img"
                src="/images/india/meghalaya/Meghalaya.jpeg"
              />
            </div>
            <div className="floating-badge-text">
              <span className="floating-tag" id="floating-badge-tag">
                Signature Northeast Circuit
              </span>
              <strong className="floating-title" id="floating-badge-title">
                Meghalaya
              </strong>
              <span className="floating-sub" id="floating-badge-sub">
                Shillong • Cherrapunji • Dawki • Mawlynnong
              </span>
            </div>
            <div
              aria-label="View signature packages"
              className="floating-arrow"
            >
              →
            </div>
          </div>

          <div
            aria-label="Destination region selector"
            className="hero-region-tabs"
            id="hero-region-tabs"
            role="tablist"
          >
            <button
              aria-selected="true"
              className="region-tab active"
              data-region="india"
              id="tab-india"
              role="tab"
            >
              <span className="region-tab-icon">
                <FaEarthAsia />
              </span>
              <span className="region-tab-text">Indian Escapes</span>
            </button>
            <button
              aria-selected="false"
              className="region-tab"
              data-region="intl"
              id="tab-intl"
              role="tab"
            >
              <span className="region-tab-icon">
                <FaPlane />
              </span>
              <span className="region-tab-text">International</span>
            </button>
          </div>

          <div
            aria-label="Featured destinations"
            className="hero-indicators-row"
            id="hero-indicators"
            role="tablist"
          >
            <button
              aria-label="Meghalaya slide"
              className="hero-indicator active"
              data-index="0"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Meghalaya</span>
            </button>
            <button
              aria-label="Kashmir slide"
              className="hero-indicator"
              data-index="1"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Kashmir</span>
            </button>
            <button
              aria-label="Sikkim slide"
              className="hero-indicator"
              data-index="2"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Sikkim</span>
            </button>
            <button
              aria-label="Andaman slide"
              className="hero-indicator"
              data-index="3"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Andaman</span>
            </button>
            <button
              aria-label="Rajasthan slide"
              className="hero-indicator"
              data-index="4"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Rajasthan</span>
            </button>
            <button
              aria-label="Kerala slide"
              className="hero-indicator"
              data-index="5"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Kerala</span>
            </button>
            <button
              aria-label="Himachal slide"
              className="hero-indicator"
              data-index="6"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Himachal</span>
            </button>
            <button
              aria-label="Goa slide"
              className="hero-indicator"
              data-index="7"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Goa</span>
            </button>
            <button
              aria-label="Uttarakhand slide"
              className="hero-indicator"
              data-index="8"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Uttarakhand</span>
            </button>
            <button
              aria-label="Ladakh slide"
              className="hero-indicator"
              data-index="9"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Ladakh</span>
            </button>
            <button
              aria-label="Arunachal slide"
              className="hero-indicator"
              data-index="10"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Arunachal</span>
            </button>
            <button
              aria-label="Tripura slide"
              className="hero-indicator"
              data-index="11"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Tripura</span>
            </button>
            <button
              aria-label="Assam slide"
              className="hero-indicator"
              data-index="12"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Assam</span>
            </button>
            <button
              aria-label="Tamil Nadu slide"
              className="hero-indicator"
              data-index="13"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Tamil Nadu</span>
            </button>
            <button
              aria-label="Karnataka slide"
              className="hero-indicator"
              data-index="14"
              data-region="india"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Karnataka</span>
            </button>

            <button
              aria-label="Thailand slide"
              className="hero-indicator hidden-region"
              data-index="15"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Thailand</span>
            </button>
            <button
              aria-label="Indonesia &amp; Bali slide"
              className="hero-indicator hidden-region"
              data-index="16"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Bali &amp; Indonesia</span>
            </button>
            <button
              aria-label="Dubai slide"
              className="hero-indicator hidden-region"
              data-index="17"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Dubai</span>
            </button>
            <button
              aria-label="Switzerland slide"
              className="hero-indicator hidden-region"
              data-index="18"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Switzerland</span>
            </button>
            <button
              aria-label="Maldives slide"
              className="hero-indicator hidden-region"
              data-index="19"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Maldives</span>
            </button>
            <button
              aria-label="Kazakhstan slide"
              className="hero-indicator hidden-region"
              data-index="20"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Kazakhstan</span>
            </button>
            <button
              aria-label="Turkey slide"
              className="hero-indicator hidden-region"
              data-index="21"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Turkey</span>
            </button>
            <button
              aria-label="France slide"
              className="hero-indicator hidden-region"
              data-index="22"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">France</span>
            </button>
            <button
              aria-label="Italy slide"
              className="hero-indicator hidden-region"
              data-index="23"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Italy</span>
            </button>
            <button
              aria-label="United Kingdom slide"
              className="hero-indicator hidden-region"
              data-index="24"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">UK</span>
            </button>
            <button
              aria-label="Greece slide"
              className="hero-indicator hidden-region"
              data-index="25"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Greece</span>
            </button>
            <button
              aria-label="Spain slide"
              className="hero-indicator hidden-region"
              data-index="26"
              data-region="intl"
            >
              <span className="ind-progress"></span>
              <span className="ind-label">Spain</span>
            </button>
          </div>
        </div>

        <a
          aria-label="Scroll to experience section"
          className="hero-scroll-indicator"
          href="#experience"
        >
          <span className="scroll-mouse">
            <span className="scroll-wheel"></span>
          </span>
          <span className="scroll-label">Scroll to Explore</span>
        </a>
      </section>
      {/* ── DUMBOOR DIARIES – Last Visited Trip Slider ───────────── */}
      <DumboorSlider />

      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-text-col">
              <span className="section-eyebrow gold-text">
                THE GLOBAL HOLIDAYS EXPERIENCE
              </span>
              <h2 className="section-heading editorial-quote">
                “Travel isn't just about where you go.
                <br />
                <span className="serif-italic">
                  It's about how you experience it.”
                </span>
              </h2>
              <div className="editorial-body">
                <p className="lead-text">
                  At Global Holidays Tour &amp; Travels, we believe genuine
                  luxury lies in the effortless harmony of meticulous planning,
                  genuine local warmth, and unfiltered discovery.
                </p>
                <p>
                  From the misty rainforest passes of Meghalaya and sacred
                  high-altitude lakes of Sikkim, to the royal palaces of
                  Rajasthan and tranquil houseboats of Kashmir, we sculpt
                  private journeys tailored specifically to your rhythm. Every
                  itinerary is paired with handpicked boutique stays, private
                  verified chauffeurs, and 24/7 personalized concierge care from
                  our Agartala headquarters.
                </p>
                <div className="experience-pillars">
                  <div className="pillar-item">
                    <span className="pillar-num">01</span>
                    <div>
                      <h4>Hand-Crafted Itineraries</h4>
                      <p>
                        Zero cookie-cutter tours. Every day is tailored to your
                        preferences.
                      </p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <span className="pillar-num">02</span>
                    <div>
                      <h4>Boutique &amp; Heritage Stays</h4>
                      <p>
                        Exclusive resorts, colonial tea bungalows, and luxury
                        retreats.
                      </p>
                    </div>
                  </div>
                  <div className="pillar-item">
                    <span className="pillar-num">03</span>
                    <div>
                      <h4>End-to-End Concierge</h4>
                      <p>
                        Dedicated travel manager from flight takeoff to safe
                        homecoming.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="editorial-media-col">
              <div className="asymmetric-image-stack">
                <div className="image-frame main-frame parallax-img">
                  <img
                    alt="High Altitude Himalayan Valley Experience"
                    loading="lazy"
                    src="/images/india/sikkim/Sikkim_1.jpeg"
                  />
                  <div className="frame-caption">
                    <span>Eastern Himalayas • Sacred Monasteries</span>
                  </div>
                </div>
                <div className="image-frame secondary-frame glass-border">
                  <img
                    alt="Luxury Coastal Sunset Villa"
                    loading="lazy"
                    src="/images/india/goa/goa_1.jpeg"
                  />
                  <div className="secondary-badge">
                    <span className="stars">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </span>
                    <span>Curated Stays</span>
                  </div>
                </div>
                <div className="decorative-accent-stamp">
                  <svg className="rotating-text-svg" viewBox="0 0 100 100">
                    <path
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                      id="textPath"
                    ></path>
                    <text>
                      <textPath href="#textPath" startOffset="0%">
                        • GLOBAL HOLIDAYS • TOUR &amp; TRAVELS •
                      </textPath>
                    </text>
                  </svg>
                  <div
                    className="stamp-icon"
                    title="GLOBAL HOLIDAYS TOUR &amp; TRAVELS"
                  >
                    <img
                      alt="Global Holidays Tour &amp; Travels"
                      className="stamp-logo-img"
                      height="44"
                      src="/images/logo-icon.png"
                      width="44"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section destinations-section" id="destinations">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">
                EXPLORE SANCTUARIES &amp; WONDERS
              </span>
              <h2 className="section-heading">Where will you go next?</h2>
              <p className="section-desc">
                Handpicked destinations spanning pristine Northeast hills,
                snow-crested northern passes, royal heritage kingdoms, and
                tropical island shores.
              </p>
            </div>
            <div
              className="filter-tabs"
              id="destination-filters"
              role="tablist"
            >
              <button className="filter-tab active" data-filter="all">
                All Destinations
              </button>
              <button className="filter-tab" data-filter="northeast">
                Northeast India
              </button>
              <button className="filter-tab" data-filter="pan-india">
                Pan-India
              </button>
              <button className="filter-tab" data-filter="international">
                International
              </button>
            </div>
          </div>
          <div className="destinations-grid" id="destinations-container">
            <article
              className="destination-card large-card"
              data-category="pan-india"
            >
              <div className="dest-media-wrapper">
                <img
                  alt="Kashmir Dal Lake Shikara and Mountains"
                  loading="lazy"
                  src="/images/india/kashmir/Kashmir.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Paradise on Earth</span>
                <h3 className="dest-name">Kashmir</h3>
                <p className="dest-desc">
                  Opulent carved houseboats on Dal Lake, alpine meadow gondolas
                  in Gulmarg, and saffron gardens of Pahalgam.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="Kashmir"
                >
                  <span>Explore Kashmir</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="northeast">
              <div className="dest-media-wrapper">
                <img
                  alt="Meghalaya Living Root Bridge &amp; Waterfalls"
                  loading="lazy"
                  src="/images/india/meghalaya/Meghalaya.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Northeast Jewel</span>
                <h3 className="dest-name">Meghalaya</h3>
                <p className="dest-desc">
                  Abode of clouds, living root bridges, mystical caves, and the
                  glass-like waters of Dawki's Umngot River.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="Meghalaya"
                >
                  <span>Explore Meghalaya</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="northeast">
              <div className="dest-media-wrapper">
                <img
                  alt="Sikkim High Altitude Mountain Passes"
                  loading="lazy"
                  src="/images/india/sikkim/Sikkim.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Himalayan Sanctuary</span>
                <h3 className="dest-name">Sikkim</h3>
                <p className="dest-desc">
                  Glacial lakes at 17,000 ft, sacred gompas, blooming
                  rhododendrons, and Mt. Kanchenjunga vistas.
                </p>
                <button className="dest-btn open-pkg-filter" data-dest="Sikkim">
                  <span>Explore Sikkim</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="northeast">
              <div className="dest-media-wrapper">
                <img
                  alt="Darjeeling Emerald Tea Gardens"
                  loading="lazy"
                  src="/images/india/darjeeling-west-bengal/darjeeling.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Heritage Hillstation</span>
                <h3 className="dest-name">Darjeeling</h3>
                <p className="dest-desc">
                  Tiger Hill sunrises over snow peaks, heritage Himalayan toy
                  train rides, and colonial tea estate stays.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="Darjeeling"
                >
                  <span>Explore Darjeeling</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="pan-india">
              <div className="dest-media-wrapper">
                <img
                  alt="Andaman Pristine Turquoise Waters"
                  loading="lazy"
                  src="/images/india/andaman-islands/andaman.jpg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Tropical Escape</span>
                <h3 className="dest-name">Andaman Islands</h3>
                <p className="dest-desc">
                  White powdery beaches at Havelock, private scuba excursions,
                  and secluded luxury island resorts.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="Andaman"
                >
                  <span>Explore Andaman</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="pan-india">
              <div className="dest-media-wrapper">
                <img
                  alt="Rajasthan Royal Palace Architecture"
                  loading="lazy"
                  src="/images/india/rajasthan/rajasthan.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Royal Heritage</span>
                <h3 className="dest-name">Rajasthan</h3>
                <p className="dest-desc">
                  Grand palaces of Udaipur, golden desert dunes under
                  star-studded skies in Jaisalmer, and majestic Jaipur forts.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="Rajasthan"
                >
                  <span>Explore Rajasthan</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="pan-india">
              <div className="dest-media-wrapper">
                <img
                  alt="Himachal Mountain Passes and Cedar Forests"
                  loading="lazy"
                  src="/images/india/himachal-pradesh/himachal.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Alpine Solitude</span>
                <h3 className="dest-name">Himachal Pradesh</h3>
                <p className="dest-desc">
                  Chalet retreats in Manali, surreal Moon Valley landscapes of
                  Spiti, and cedar-scented trails of Shimla.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="Himachal"
                >
                  <span>Explore Himachal</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article className="destination-card" data-category="pan-india">
              <div className="dest-media-wrapper">
                <img
                  alt="Goa Luxury Coastal Resort"
                  loading="lazy"
                  src="/images/india/goa/goa.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">Coastal Sophistication</span>
                <h3 className="dest-name">Goa (South &amp; Heritage)</h3>
                <p className="dest-desc">
                  Private beach cabanas, 400-year-old Portuguese mansions, river
                  catamaran sunsets, and fine dining.
                </p>
                <button className="dest-btn open-pkg-filter" data-dest="Goa">
                  <span>Explore Goa</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>

            <article
              className="destination-card large-card"
              data-category="international"
            >
              <div className="dest-media-wrapper">
                <img
                  alt="Bali Luxury Tropical Forest Villa"
                  loading="lazy"
                  src="/images/international/bali-indonesia/Bali.jpeg"
                />
                <div className="dest-overlay"></div>
              </div>
              <div className="dest-content">
                <span className="dest-tag">International Haven</span>
                <h3 className="dest-name">Bali &amp; Southeast Asia</h3>
                <p className="dest-desc">
                  Private pool jungle villas in Ubud, cliffside temples
                  overlooking the Indian Ocean, and tailored island hopping.
                </p>
                <button
                  className="dest-btn open-pkg-filter"
                  data-dest="International"
                >
                  <span>Explore Bali</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section packages-section" id="packages">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">
                CURATED JOURNEYS
              </span>
              <h2 className="section-heading">Journeys Worth Remembering</h2>
              <p className="section-desc">
                Handcrafted itineraries including verified boutique stays,
                private luxury transport, and personalized excursions.
              </p>
            </div>
            <div className="carousel-nav-controls">
              <button
                aria-label="Previous Package"
                className="slider-arrow"
                id="pkg-prev-btn"
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <line x1="19" x2="5" y1="12" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                aria-label="Next Package"
                className="slider-arrow"
                id="pkg-next-btn"
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="packages-carousel-wrapper">
            <div className="packages-track" id="packages-track">
              <div className="pkg-card" data-pkg-id="jammu-kashmir-grand-tour">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Jammu Kashmir Grand Tour"
                    loading="lazy"
                    src="/images/packages/kashmir-dal.jpg"
                  />
                  <span className="pkg-duration-badge">7 Nights / 8 Days</span>
                  <span className="pkg-dest-badge">Kashmir Grand Tour</span>
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
                    <span className="rating-num">5.0 (New)</span>
                  </div>
                  <h3 className="pkg-title">J&amp;K Grand Tour</h3>
                  <p className="pkg-itinerary-line">
                    Katra • Srinagar • Gulmarg • Pahalgam • Sonamarg
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Gulmarg Gondola</span>
                    <span>Dal Lake Shikara</span>
                    <span>Thajiwas Glacier</span>
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
                      data-pkg="jammu-kashmir-grand-tour"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="manali-shimla-kasol">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Manali Shimla Kasol Himalayan Escape"
                    loading="lazy"
                    src="/images/packages/manali-kasol.jpg"
                  />
                  <span className="pkg-duration-badge">6 Nights / 7 Days</span>
                  <span className="pkg-dest-badge">
                    Manali • Shimla • Kasol
                  </span>
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
                    <span className="rating-num">5.0 (New)</span>
                  </div>
                  <h3 className="pkg-title">Himalayan Escape</h3>
                  <p className="pkg-itinerary-line">
                    Shimla • Kufri • Kasol • Manikaran • Manali • Solang Valley
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Solang Valley Snow</span>
                    <span>Parvati River</span>
                    <span>Hadimba Temple</span>
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
                      data-pkg="manali-shimla-kasol"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="vrindavan-braj-dham">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Vrindavan Mathura Braj Dham Spiritual Journey"
                    loading="lazy"
                    src="/images/packages/vrindavan.jpg"
                  />
                  <span className="pkg-duration-badge">5 Nights / 6 Days</span>
                  <span className="pkg-dest-badge">Vrindavan • Mathura</span>
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
                    <span className="rating-num">5.0 (New)</span>
                  </div>
                  <h3 className="pkg-title">Braj Dham Spiritual Journey</h3>
                  <p className="pkg-itinerary-line">
                    Vrindavan • Mathura • Barsana • Nandgaon • Govardhan
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Govardhan Parikrama</span>
                    <span>Radha Rani Temple</span>
                    <span>Yamuna Aarti</span>
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
                      data-pkg="vrindavan-braj-dham"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="meghalaya-escape">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Meghalaya Escape Tour"
                    loading="lazy"
                    src="/images/india/meghalaya/Meghalaya.jpeg"
                  />
                  <span className="pkg-duration-badge">5 Days / 4 Nights</span>
                  <span className="pkg-dest-badge">Meghalaya</span>
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
                      data-pkg="meghalaya-escape"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="sikkim-grandeur">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Sikkim &amp; Darjeeling Tour"
                    loading="lazy"
                    src="/images/india/sikkim/Sikkim.jpeg"
                  />
                  <span className="pkg-duration-badge">7 Days / 6 Nights</span>
                  <span className="pkg-dest-badge">
                    Sikkim &amp; Darjeeling
                  </span>
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
                    <span className="rating-num">5.0 (62 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">
                    Sikkim &amp; Darjeeling Grandeur
                  </h3>
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
                      data-pkg="sikkim-grandeur"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="kashmir-paradise">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Enchanted Kashmir Odyssey"
                    loading="lazy"
                    src="/images/india/kashmir/Kashmir.jpeg"
                  />
                  <span className="pkg-duration-badge">6 Days / 5 Nights</span>
                  <span className="pkg-dest-badge">Kashmir</span>
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
                      data-pkg="kashmir-paradise"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="andaman-luxury">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Andaman Tropical Luxury"
                    loading="lazy"
                    src="/images/india/andaman-islands/andaman.jpg"
                  />
                  <span className="pkg-duration-badge">6 Days / 5 Nights</span>
                  <span className="pkg-dest-badge">Andaman</span>
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
                      data-pkg="andaman-luxury"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="rajasthan-royal">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Royal Rajasthan Splendour"
                    loading="lazy"
                    src="/images/india/rajasthan/rajasthan.jpeg"
                  />
                  <span className="pkg-duration-badge">7 Days / 6 Nights</span>
                  <span className="pkg-dest-badge">Rajasthan</span>
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
                      data-pkg="rajasthan-royal"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="tripura-heritage">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Tripura Heritage and Royal Palaces"
                    loading="lazy"
                    src="/images/india/tripura/Tripura.jpeg"
                  />
                  <span className="pkg-duration-badge">4 Days / 3 Nights</span>
                  <span className="pkg-dest-badge">Tripura Exclusive</span>
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
                    <span className="rating-num">5.0 (31 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">
                    Tripura Royal Palaces &amp; Unakoti
                  </h3>
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
                      data-pkg="tripura-heritage"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="himachal-splendour">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Himachal &amp; Manali Splendour"
                    loading="lazy"
                    src="/images/india/himachal-pradesh/himachal.jpeg"
                  />
                  <span className="pkg-duration-badge">7 Days / 6 Nights</span>
                  <span className="pkg-dest-badge">Himachal Pradesh</span>
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
                    <span className="rating-num">4.9 (51 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">Himachal &amp; Manali Splendour</h3>
                  <p className="pkg-itinerary-line">
                    Delhi • Shimla • Manali • Solang • Atal Tunnel &amp; Sissu
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Atal Tunnel Marvel</span>
                    <span>Kufri Pine Glades</span>
                    <span>Solang Valley Snow</span>
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
                      data-pkg="himachal-splendour"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="goa-escape">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Goa Coastal Retreat"
                    loading="lazy"
                    src="/images/india/goa/goa.jpeg"
                  />
                  <span className="pkg-duration-badge">5 Days / 4 Nights</span>
                  <span className="pkg-dest-badge">Goa</span>
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
                    <span className="rating-num">4.8 (44 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">Goa Boutique Coastal Retreat</h3>
                  <p className="pkg-itinerary-line">
                    Baga • Calangute • Fort Aguada • Old Goa • Mandovi River
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Boutique Beach Resort</span>
                    <span>Portuguese Forts</span>
                    <span>Mandovi Sunset Cruise</span>
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
                      data-pkg="goa-escape"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="thailand-gateway">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Thailand Tropical Escape"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&amp;w=700&amp;auto=format&amp;fit=crop"
                  />
                  <span className="pkg-duration-badge">5 Days / 4 Nights</span>
                  <span className="pkg-dest-badge">Thailand</span>
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
                    <span className="rating-num">4.9 (58 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">Thailand Tropical Escape</h3>
                  <p className="pkg-itinerary-line">
                    Pattaya (2N) • Bangkok (2N) • Coral Island Speedboat
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Coral Island Speedboat</span>
                    <span>Golden Buddha Temple</span>
                    <span>Gems Gallery</span>
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
                      data-pkg="thailand-gateway"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="aizawl-escape">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Mizoram Cloud Realm"
                    loading="lazy"
                    src="/images/india/meghalaya/Meghalaya_1.jpeg"
                  />
                  <span className="pkg-duration-badge">4 Days / 3 Nights</span>
                  <span className="pkg-dest-badge">Mizoram</span>
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
                    <span className="rating-num">4.9 (32 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">Mizoram Cloud Realm</h3>
                  <p className="pkg-itinerary-line">
                    Aizawl • Thenzawl • Hmuifang • Reiek Tlang Peak
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Reiek Sunrise Trek</span>
                    <span>Vantawng 750ft Falls</span>
                    <span>Aizawl Skywalk</span>
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
                      data-pkg="aizawl-escape"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="darjeeling-escape">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Darjeeling &amp; Kalimpong Valleys"
                    loading="lazy"
                    src="/images/india/darjeeling-west-bengal/darjeeling.jpeg"
                  />
                  <span className="pkg-duration-badge">4 Days / 3 Nights</span>
                  <span className="pkg-dest-badge">West Bengal</span>
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
                    <span className="rating-num">4.8 (39 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">
                    Darjeeling &amp; Kalimpong Valleys
                  </h3>
                  <p className="pkg-itinerary-line">
                    Darjeeling • Kalimpong • Tiger Hill • Mirik Lake
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Tiger Hill Sunrise</span>
                    <span>Colonial Tea Estates</span>
                    <span>Lamahatta Eco Pine Park</span>
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
                      data-pkg="darjeeling-escape"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pkg-card" data-pkg-id="grand-bharat-circuit">
                <div className="pkg-image-wrapper">
                  <img
                    alt="Grand Bharat Sacred Pilgrimage"
                    loading="lazy"
                    src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&amp;w=700&amp;auto=format&amp;fit=crop"
                  />
                  <span className="pkg-duration-badge">
                    11 Days / 10 Nights
                  </span>
                  <span className="pkg-dest-badge">Pan-India Sacred Trail</span>
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
                    <span className="rating-num">5.0 (73 Reviews)</span>
                  </div>
                  <h3 className="pkg-title">Grand Bharat Sacred Pilgrimage</h3>
                  <p className="pkg-itinerary-line">
                    Delhi • Vrindavan • Ayodhya • Varanasi • Deoghar • Gaya
                  </p>
                  <div className="pkg-highlights-pills">
                    <span>Kashi Vishwanath Darshan</span>
                    <span>Ram Mandir Ayodhya</span>
                    <span>Ganga Aarti Charter</span>
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
                      data-pkg="grand-bharat-circuit"
                    >
                      <span>View Package</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section hotels-section" id="hotels">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">
                ACCREDITED BOUTIQUE HOSPITALITY
              </span>
              <h2 className="section-heading">
                Handpicked Luxury Stays &amp; Heritage Retreats
              </h2>
              <p className="section-desc">
                From colonial tea garden suites to cliff-edge mountain chalets,
                indulge in exceptional Northeast Indian hospitality vetted for
                comfort, safety, and bespoke culinary mastery.
              </p>
            </div>
            <Link className="btn btn-outline-glass" href="/hotels">
              <span>View All Hotels</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="hotels-grid">
            <div className="hotel-card">
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
                  src="/images/hotels/mayfair-tea-resort/image.webp"
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
                  Vintage Tudor architecture surrounded by emerald tea gardens.
                  Features ornate wood fireplaces, temperature-controlled indoor
                  pool, and private garden pavilions.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Private Balcony</span>
                  <span className="hotel-amenity-chip">Tea Sommelier</span>
                  <span className="hotel-amenity-chip">Heated Pool</span>
                  <span className="hotel-amenity-chip">Spa &amp; Wellness</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        Custom Tariff
                      </span>
                      <span className="revealing-soon-badge">On Request</span>
                    </div>
                  </div>
                  <Link
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Mayfair+Tea+Resort"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hotel-card">
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
                  src="/images/hotels/ri-kynjai-meghalaya/image.webp"
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
                <h3 className="hotel-title">Ri Kynjai – Serenity by Lake</h3>
                <p className="hotel-desc">
                  Inspired by indigenous Khasi thatch architecture. Waterfront
                  chalets with sweeping pine hills, authentic herbal massage
                  therapies, and private lake cruise docks.
                </p>
                <div className="hotel-amenities">
                  <span className="hotel-amenity-chip">Lakefront Cottages</span>
                  <span className="hotel-amenity-chip">Ayurvedic Spa</span>
                  <span className="hotel-amenity-chip">Private Speedboat</span>
                  <span className="hotel-amenity-chip">Organic Kitchen</span>
                </div>
                <div className="hotel-footer">
                  <div className="hotel-price">
                    <span className="hotel-price-label">Starting Rate</span>
                    <div className="price-reveal-wrap">
                      <span className="hotel-price-val blurred-price">
                        Custom Tariff
                      </span>
                      <span className="revealing-soon-badge">On Request</span>
                    </div>
                  </div>
                  <Link
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Ri+Kynjai"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hotel-card">
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
                  src="/images/hotels/the-elgin-nor-khill-sikkim/image.jpg"
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
                  Originally built by the King of Sikkim as royal guest
                  quarters. Displays Tibetan dragon frescos, antique brass
                  fireplaces, and panoramic Kanchenjunga mountain views.
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
                        Custom Tariff
                      </span>
                      <span className="revealing-soon-badge">On Request</span>
                    </div>
                  </div>
                  <Link
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Elgin+NorKhill"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="hotel-card">
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
                  src="/images/hotels/polo-orchid-cherrapunji/image.webp"
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
                  Dramatically suspended over the Seven Sisters Waterfall
                  canyon. Boasts infinity decks, private open-air jacuzzis, and
                  panoramic glass villas above the clouds.
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
                        Custom Tariff
                      </span>
                      <span className="revealing-soon-badge">On Request</span>
                    </div>
                  </div>
                  <Link
                    className="btn btn-sm btn-outline-gold"
                    href="/contact?subject=Hotel+Booking+Polo+Orchid"
                  >
                    <span>Reserve Stay</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section deals-section" id="deals">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">
                LIMITED-TIME PRIVILEGES
              </span>
              <h2 className="section-heading">
                Exclusive Seasonal Escapes &amp; Curated Offers
              </h2>
              <p className="section-desc">
                Take advantage of time-limited promotions, early-bird expedition
                rates, and complimentary VIP upgrades secured directly through
                our verified travel network.
              </p>
            </div>
            <Link className="btn btn-outline-glass" href="/deals">
              <span>Explore All Deals</span>
              <span className="btn-arrow">→</span>
            </Link>
          </div>
          <div className="deals-grid">
            <div className="deal-card">
              <span className="deal-badge-ribbon">25% OFF EARLY BIRD</span>
              <span className="deal-validity-badge">
                Valid until April 30, 2026
              </span>
              <div className="deal-image-wrapper">
                <img
                  alt="Spring Himalayan Valley Trail"
                  height="210"
                  loading="lazy"
                  src="/images/india/sikkim/Sikkim_2.jpeg"
                  width="400"
                />
              </div>
              <div className="deal-body">
                <span className="deal-tagline">SIKKIM &amp; NORTH BENGAL</span>
                <h3 className="deal-title">
                  Spring Himalayan Rhododendron Trail
                </h3>
                <p className="deal-desc">
                  7 Days / 6 Nights premium circuit across Gangtok, Lachen, and
                  Yumthang Valley during peak wildflower blooming season.
                </p>
                <ul className="deal-inclusions">
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Complimentary Suite Upgrade to Mountain View</span>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Private 4x4 Luxury SUV with Veteran Mountain Chauffeur
                    </span>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Protected Area Permits &amp; Monastic Passes Pre-Cleared
                    </span>
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
                  <Link
                    className="btn btn-sm btn-gold"
                    href="/contact?subject=Claim+Deal+Spring+Himalayan"
                  >
                    <span>Claim Deal</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="deal-card">
              <span className="deal-badge-ribbon">
                COMPLIMENTARY SPA &amp; CRUISE
              </span>
              <span className="deal-validity-badge">
                Limited Seasonal Slots
              </span>
              <div className="deal-image-wrapper">
                <img
                  alt="Cloud Realm &amp; Crystal Waters"
                  height="210"
                  loading="lazy"
                  src="/images/india/meghalaya/Meghalaya_2.jpeg"
                  width="400"
                />
              </div>
              <div className="deal-body">
                <span className="deal-tagline">SHILLONG • SOHRA • DAWKI</span>
                <h3 className="deal-title">
                  Cloud Realm &amp; Crystal Waters Escapade
                </h3>
                <p className="deal-desc">
                  6 Days / 5 Nights luxury retreat covering living root bridges,
                  secret canyon waterfalls, and glass-bottom boating in Dawki.
                </p>
                <ul className="deal-inclusions">
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Daily Gourmet Breakfast &amp; Multi-Course Chef Dinners
                    </span>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Private Transparent Boating Session on Umngot River
                    </span>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Dedicated Meghalaya Tourism Certified Local Escort
                    </span>
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
                  <Link
                    className="btn btn-sm btn-gold"
                    href="/contact?subject=Claim+Deal+Cloud+Realm"
                  >
                    <span>Claim Deal</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="deal-card">
              <span className="deal-badge-ribbon">ROYAL CONCIERGE SPECIAL</span>
              <span className="deal-validity-badge">Year-Round Exclusive</span>
              <div className="deal-image-wrapper">
                <img
                  alt="Tripura Royal Kingdoms &amp; Heritage"
                  height="210"
                  loading="lazy"
                  src="/images/india/tripura/Tripura_2.jpeg"
                  width="400"
                />
              </div>
              <div className="deal-body">
                <span className="deal-tagline">
                  AGARTALA • UDAIPUR • UNAKOTI
                </span>
                <h3 className="deal-title">
                  Tripura Royal Kingdoms &amp; Heritage Trail
                </h3>
                <p className="deal-desc">
                  4 Days / 3 Nights bespoke exploration of Ujjayanta Palace,
                  twilight boat cruise to Neermahal, and ancient Unakoti
                  colossal carvings.
                </p>
                <ul className="deal-inclusions">
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      VIP Museum Pass to Ujjayanta Palace Royal State Gallery
                    </span>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Sunset Private Motorboat to Lake Rudrasagar Water Palace
                    </span>
                  </li>
                  <li>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Complimentary Agartala Airport VIP Chauffeur Transfer
                    </span>
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
                  <Link
                    className="btn btn-sm btn-gold"
                    href="/contact?subject=Claim+Deal+Royal+Tripura"
                  >
                    <span>Claim Deal</span>
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section planner-section" id="planner">
        <div className="container">
          <div className="planner-card glass-panel">
            <div className="planner-header text-center">
              <span className="section-eyebrow gold-text">
                INTERACTIVE TRAVEL CONCIERGE
              </span>
              <h2 className="section-heading">
                Your Dream Trip, Designed Around You.
              </h2>
              <p className="section-desc">
                Tell us what you imagine. We'll turn your vision into an
                effortless, personalized itinerary.
              </p>
            </div>
            <form
              className="planner-form"
              id="trip-planner-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="planner-step-group">
                <label className="step-label">
                  <span className="step-num">1</span> Select Travel Style
                </label>
                <div className="vibe-selectors" id="vibe-selector-group">
                  <button
                    className="vibe-btn active"
                    data-vibe="Honeymoon"
                    type="button"
                  >
                    <span className="vibe-icon">
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
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                    </span>
                    <span>Honeymoon</span>
                  </button>
                  <button className="vibe-btn" data-vibe="Family" type="button">
                    <span className="vibe-icon">
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
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </span>
                    <span>Family</span>
                  </button>
                  <button
                    className="vibe-btn"
                    data-vibe="Friends"
                    type="button"
                  >
                    <span className="vibe-icon">
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
                        <path d="M8 22h8"></path>
                        <path d="M12 15v7"></path>
                        <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"></path>
                      </svg>
                    </span>
                    <span>Friends</span>
                  </button>
                  <button className="vibe-btn" data-vibe="Solo" type="button">
                    <span className="vibe-icon">
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                      </svg>
                    </span>
                    <span>Solo</span>
                  </button>
                  <button
                    className="vibe-btn"
                    data-vibe="Adventure"
                    type="button"
                  >
                    <span className="vibe-icon">
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
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                      </svg>
                    </span>
                    <span>Adventure</span>
                  </button>
                  <button
                    className="vibe-btn"
                    data-vibe="Corporate"
                    type="button"
                  >
                    <span className="vibe-icon">
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
                        <rect
                          height="14"
                          rx="2"
                          ry="2"
                          width="20"
                          x="2"
                          y="7"
                        ></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      </svg>
                    </span>
                    <span>Corporate</span>
                  </button>
                </div>
              </div>

              <div className="planner-step-group">
                <label className="step-label">
                  <span className="step-num">2</span> Journey Parameters
                </label>
                <div className="planner-inputs-grid">
                  <div className="form-field">
                    <label htmlFor="plan-destination">
                      Desired Destination
                    </label>
                    <select defaultValue="" id="plan-destination" required="">
                      <option disabled="" value="">
                        Choose destination
                      </option>
                      <option value="Meghalaya &amp; Shillong">
                        Meghalaya &amp; Shillong
                      </option>
                      <option value="Sikkim &amp; Darjeeling">
                        Sikkim &amp; Darjeeling
                      </option>
                      <option value="Kashmir (Gulmarg &amp; Pahalgam)">
                        Kashmir (Gulmarg &amp; Pahalgam)
                      </option>
                      <option value="Andaman &amp; Nicobar Islands">
                        Andaman &amp; Nicobar Islands
                      </option>
                      <option value="Goa Coastal &amp; Heritage">
                        Goa Coastal &amp; Heritage
                      </option>
                      <option value="Himachal &amp; Spiti">
                        Himachal &amp; Spiti
                      </option>
                      <option value="Rajasthan Royal Palaces">
                        Rajasthan Royal Palaces
                      </option>
                      <option value="Tripura Heritage Exclusive">
                        Tripura Heritage Exclusive
                      </option>
                      <option value="Bali &amp; Southeast Asia">
                        Bali &amp; Southeast Asia
                      </option>
                      <option value="Other / Custom Circuit">
                        Other / Custom Circuit
                      </option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-date">Approximate Travel Date</label>
                    <input
                      id="plan-date"
                      min="2026-08-22"
                      required=""
                      type="date"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-travelers">Number of Travellers</label>
                    <select id="plan-travelers" required="">
                      <option value="2 Adults (Couple)">
                        2 Adults (Couple)
                      </option>
                      <option value="Family (3-4 Persons)">
                        Family (3-4 Persons)
                      </option>
                      <option value="Small Group (5-8 Persons)">
                        Small Group (5-8 Persons)
                      </option>
                      <option value="Solo Explorer (1 Person)">
                        Solo Explorer (1 Person)
                      </option>
                      <option value="Large Group / Corporate (9+)">
                        Large Group / Corporate (9+)
                      </option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-budget">Preferred Comfort Tier</label>
                    <select id="plan-budget" required="">
                      <option value="Luxury Boutique (4-Star - 5-Star Handpicked)">
                        Luxury Boutique (4-Star - 5-Star Handpicked)
                      </option>
                      <option value="Premium Comfort (Deluxe 3-Star - 4-Star)">
                        Premium Comfort (Deluxe 3-Star - 4-Star)
                      </option>
                      <option value="Ultra-Luxury &amp; Villa Retreats">
                        Ultra-Luxury &amp; Villa Retreats
                      </option>
                      <option value="Flexible / Discuss with Concierge">
                        Flexible / Discuss with Concierge
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="planner-step-group">
                <label className="step-label">
                  <span className="step-num">3</span> Your Contact Info
                </label>
                <div className="planner-inputs-grid-3">
                  <div className="form-field">
                    <label htmlFor="plan-name">Your Full Name</label>
                    <input
                      id="plan-name"
                      placeholder="e.g. Debabrata Roy"
                      required=""
                      type="text"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-phone">Phone / WhatsApp Number</label>
                    <input
                      id="plan-phone"
                      placeholder="e.g. +91 87310 10676"
                      required=""
                      type="tel"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-email">Email Address</label>
                    <input
                      id="plan-email"
                      placeholder="e.g. name@example.com"
                      required=""
                      type="email"
                    />
                  </div>
                </div>
              </div>

              <div className="planner-actions">
                <div className="planner-live-summary" id="planner-live-summary">
                  <span>
                    Trip Vibe:
                    <strong id="summary-vibe">Honeymoon</strong>
                  </span>
                  <span>•</span>
                  <span>
                    Destination:
                    <strong id="summary-dest">Select above</strong>
                  </span>
                </div>
                <div className="planner-btn-duo">
                  <button
                    className="btn btn-gold btn-large"
                    id="submit-custom-plan-btn"
                    type="submit"
                  >
                    <span>Design My Trip</span>
                    <svg
                      className="btn-arrow"
                      fill="none"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-outline-glass btn-large"
                    id="whatsapp-plan-btn"
                    type="button"
                  >
                    <span>Send to WhatsApp</span>
                    <svg
                      fill="currentColor"
                      height="18"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="section about-section" id="about">
        <div className="container">
          <div className="editorial-grid">
            <div className="editorial-media-col">
              <div className="about-image-composition">
                <div className="about-main-img">
                  <img
                    alt="Travellers exploring mountain peaks"
                    loading="lazy"
                    src="/images/india/tripura/Tripura_1.jpeg"
                  />
                </div>
                <div className="about-overlay-badge glass-panel">
                  <span className="gold-text uppercase letter-spacing">
                    Headquartered in
                  </span>
                  <strong>Agartala, Tripura</strong>
                  <p>
                    Curating memorable journeys across the globe since
                    inception.
                  </p>
                </div>
              </div>
            </div>
            <div className="editorial-text-col">
              <span className="section-eyebrow gold-text">
                OUR STORY &amp; HERITAGE
              </span>
              <h2 className="section-heading">
                Travel with people who care about the journey.
              </h2>
              <div className="editorial-body">
                <p className="lead-text">
                  Born in the royal city of Agartala, Tripura,
                  <strong>Global Holidays Tour &amp; Travels</strong> was
                  founded with a singular conviction: travel should be soulful,
                  seamless, and completely bespoke.
                </p>
                <p>
                  Too often, travel agencies offer rigid itineraries and crowded
                  group buses. We chose a different path — acting as your
                  trusted personal travel atelier. Whether orchestrating a
                  serene family holiday in Shillong, a high-altitude expedition
                  across Sikkim, or an international luxury getaway, our team
                  meticulously handles every flight, hotel check-in, permit, and
                  local excursion with flawless attention to detail.
                </p>

                <div className="stats-counters-grid" id="stats-container">
                  <div className="stat-box">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-target="500">
                        0
                      </span>
                      <span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Happy Travellers</span>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-target="100">
                        0
                      </span>
                      <span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Journeys Planned</span>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-target="50">
                        0
                      </span>
                      <span className="stat-plus">+</span>
                    </div>
                    <span className="stat-label">Destinations Covered</span>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number-wrap">
                      <span className="stat-number" data-target="100">
                        0
                      </span>
                      <span className="stat-plus">%</span>
                    </div>
                    <span className="stat-label">Dedicated Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section mission-vision-section" id="mission-vision">
        <div className="container">
          <div className="text-center mb-5">
            <span className="section-eyebrow gold-text">
              OUR GUIDING PRINCIPLES
            </span>
            <h2 className="section-heading">Purpose Driven Exploration</h2>
          </div>
          <div className="split-panels-container">
            <div className="split-panel mission-panel" id="panel-mission">
              <div className="panel-bg-overlay"></div>
              <div className="panel-content">
                <div className="panel-tag gold-text">01 • OUR MISSION</div>
                <h3 className="panel-title">
                  “To create seamless, meaningful and memorable travel
                  experiences tailored around every traveller.”
                </h3>
                <p className="panel-desc">
                  We empower individuals, couples, and families to discover the
                  world with total peace of mind, transforming every journey
                  into an unforgettable life chapter through thoughtful curation
                  and attentive service.
                </p>
                <div className="panel-pill">
                  Personalized • Immersive • Flawless
                </div>
              </div>
            </div>

            <div className="split-panel vision-panel" id="panel-vision">
              <div className="panel-bg-overlay"></div>
              <div className="panel-content">
                <div className="panel-tag gold-text">02 • OUR VISION</div>
                <h3 className="panel-title">
                  “To become a trusted travel partner known for exceptional
                  experiences, personalized service and responsible
                  exploration.”
                </h3>
                <p className="panel-desc">
                  To stand as the most reliable, respected boutique travel brand
                  in Northeast India and beyond, inspiring people to travel
                  deeper while supporting local communities and preserving
                  natural heritage.
                </p>
                <div className="panel-pill">
                  Trustworthy • Boutique • Responsible
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section why-us-section" id="why-us">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">
                THE BOUTIQUE ADVANTAGE
              </span>
              <h2 className="section-heading">Travel with confidence.</h2>
            </div>
            <p className="section-desc">
              Why discerning travellers in Agartala, Tripura, and across India
              entrust their holiday dreams to Global Holidays.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card glass-panel">
              <div className="feature-icon-box">
                <svg
                  fill="none"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="28"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Personalized Planning</h3>
              <p className="feature-text">
                Every single journey is designed around you — tailored pace,
                boutique stays, and customized meal preferences.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon-box">
                <svg
                  fill="none"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="28"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="feature-title">Complete Travel Assistance</h3>
              <p className="feature-text">
                From first consultation to safe homecoming, your dedicated
                concierge is available on WhatsApp and call around the clock.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon-box">
                <svg
                  fill="none"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="28"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <h3 className="feature-title">Curated Experiences</h3>
              <p className="feature-text">
                Access secluded viewpoints, private tea estate walks, shikara
                sunset rides, and insider regional gems.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon-box">
                <svg
                  fill="none"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="28"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="feature-title">Local Expertise</h3>
              <p className="feature-text">
                Rooted in Agartala with authentic regional connections across
                Northeast India and premier pan-India travel circles.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon-box">
                <svg
                  fill="none"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="28"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Transparent Service</h3>
              <p className="feature-text">
                Zero hidden fees, clear hotel voucher confirmations, reliable
                vetted drivers, and genuine upfront pricing.
              </p>
            </div>
            <div className="feature-card glass-panel">
              <div className="feature-icon-box">
                <svg
                  fill="none"
                  height="28"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="28"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">Handpicked Stays</h3>
              <p className="feature-text">
                Boutique heritage homestays, scenic cliffside resorts, luxury
                Dal Lake houseboats, and mountain chalets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section gallery-section" id="gallery">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">VISUAL MEMORIES</span>
              <h2 className="section-heading">Moments from the Journey</h2>
              <p className="section-desc">
                Snapshots of misty peaks, serene coastal sunsets, and
                unforgettable explorations.
              </p>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <Link className="btn btn-gold" href="/gallery">
                <span>View Full Gallery</span>
                <span className="btn-arrow">→</span>
              </Link>
              <a
                className="btn btn-outline-glass"
                href="https://www.facebook.com/profile.php?id=61587740006818"
                rel="noopener"
                target="_blank"
              >
                <span>Facebook</span>
              </a>
              <a
                className="btn btn-outline-glass"
                href="https://www.instagram.com/globalholidaysagt/"
                rel="noopener"
                target="_blank"
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>
          <div className="masonry-gallery" id="masonry-gallery">
            <div
              className="gallery-item"
              data-author="Global Holidays Guest"
              data-caption="Ancient Living Root Bridge • Meghalaya"
              data-img="/images/india/meghalaya/Meghalaya_3.jpeg"
            >
              <img
                alt="Meghalaya Living Root Bridge"
                loading="lazy"
                src="/images/india/meghalaya/Meghalaya_3.jpeg"
              />
              <div className="gallery-caption-overlay">
                <span className="cap-tag">Meghalaya</span>
                <h4>Living Root Bridge</h4>
                <span className="cap-hint">Click to enlarge ⤢</span>
              </div>
            </div>
            <div
              className="gallery-item item-tall"
              data-author="Global Holidays Guest"
              data-caption="Dal Lake Shikara Morning • Srinagar, Kashmir"
              data-img="/images/india/kashmir/Kashmir_2.jpeg"
            >
              <img
                alt="Kashmir Shikara"
                loading="lazy"
                src="/images/india/kashmir/Kashmir_2.jpeg"
              />
              <div className="gallery-caption-overlay">
                <span className="cap-tag">Kashmir</span>
                <h4>Dal Lake Morning Mist</h4>
                <span className="cap-hint">Click to enlarge ⤢</span>
              </div>
            </div>
            <div
              className="gallery-item"
              data-author="Global Holidays Guest"
              data-caption="Gurudongmar High Altitude Lake • North Sikkim"
              data-img="/images/india/sikkim/Sikkim_3.jpeg"
            >
              <img
                alt="North Sikkim Lake"
                loading="lazy"
                src="/images/india/sikkim/Sikkim_3.jpeg"
              />
              <div className="gallery-caption-overlay">
                <span className="cap-tag">Sikkim</span>
                <h4>Gurudongmar 17,800 ft</h4>
                <span className="cap-hint">Click to enlarge ⤢</span>
              </div>
            </div>
            <div
              className="gallery-item item-tall"
              data-author="Global Holidays Guest"
              data-caption="Radhanagar Beach Sunset • Havelock Island, Andaman"
              data-img="/images/india/andaman-islands/andaman_2.jpeg"
            >
              <img
                alt="Andaman Radhanagar Beach"
                loading="lazy"
                src="/images/india/andaman-islands/andaman_2.jpeg"
              />
              <div className="gallery-caption-overlay">
                <span className="cap-tag">Andaman</span>
                <h4>Radhanagar Beach Glow</h4>
                <span className="cap-hint">Click to enlarge ⤢</span>
              </div>
            </div>
            <div
              className="gallery-item"
              data-author="Global Holidays Guest"
              data-caption="Udaipur City Palace • Rajasthan"
              data-img="/images/india/rajasthan/rajasthan_2.jpeg"
            >
              <img
                alt="Rajasthan Udaipur"
                loading="lazy"
                src="/images/india/rajasthan/rajasthan_2.jpeg"
              />
              <div className="gallery-caption-overlay">
                <span className="cap-tag">Rajasthan</span>
                <h4>City Palace Grandeur</h4>
                <span className="cap-hint">Click to enlarge ⤢</span>
              </div>
            </div>
            <div
              className="gallery-item"
              data-author="Global Holidays Guest"
              data-caption="Darjeeling Heritage Tea Valley Vista"
              data-img="/images/india/darjeeling-west-bengal/darjeeling_2.jpeg"
            >
              <img
                alt="Darjeeling Tea Valley"
                loading="lazy"
                src="/images/india/darjeeling-west-bengal/darjeeling_2.jpeg"
              />
              <div className="gallery-caption-overlay">
                <span className="cap-tag">Darjeeling</span>
                <h4>Misty Tea Slopes</h4>
                <span className="cap-hint">Click to enlarge ⤢</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow gold-text">
                AUTHENTIC EXPERIENCES
              </span>
              <h2 className="section-heading">Stories from our travellers.</h2>
            </div>
            <div className="carousel-nav-controls">
              <button
                aria-label="Previous Testimonial"
                className="slider-arrow"
                id="test-prev-btn"
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <line x1="19" x2="5" y1="12" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>
              <button
                aria-label="Next Testimonial"
                className="slider-arrow"
                id="test-next-btn"
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="testimonials-track-container">
            <div className="testimonials-track" id="testimonials-track">
              <div className="testimonial-card glass-panel">
                <div className="test-quote-icon">“</div>
                <div className="stars-gold mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
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
                    <h4 className="author-name">
                      Subrata &amp; Piyali Chakraborty
                    </h4>
                    <span className="author-location">
                      Agartala → Meghalaya Holiday
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card glass-panel">
                <div className="test-quote-icon">“</div>
                <div className="stars-gold mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
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
                    <span className="author-location">
                      Agartala → Kashmir Honeymoon
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card glass-panel">
                <div className="test-quote-icon">“</div>
                <div className="stars-gold mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
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
                    <span className="author-location">
                      Agartala → North Sikkim Expedition
                    </span>
                  </div>
                </div>
              </div>

              <div className="testimonial-card glass-panel">
                <div className="test-quote-icon">“</div>
                <div className="stars-gold mb-3">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="test-quote">
                  “Our family trip to the Andaman Islands was magical. The
                  beachfront villa at Havelock and the private scuba
                  arrangements were top tier. Very honest and transparent
                  pricing with prompt WhatsApp support throughout the trip.”
                </p>
                <div className="test-author-info">
                  <div className="author-avatar">TD</div>
                  <div>
                    <h4 className="author-name">Tanmay &amp; Sanchita Das</h4>
                    <span className="author-location">
                      Agartala → Andaman Islands Family Tour
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section faq-section" id="faq">
        <div className="container faq-container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <span className="section-eyebrow gold-text">
              COMMON QUESTIONS &amp; CLARITY
            </span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p
              className="section-desc"
              style={{ margin: "0.5rem auto 0", maxWidth: "680px" }}
            >
              Everything you need to know about booking, bespoke customizations,
              safe private transfers, payments, and our transparent travel
              guarantees.
            </p>
          </div>
          <div className="faq-accordion-list">
            <details className="faq-item" open="">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">01</span>
                  <span className="faq-question-text">
                    How can I book a package?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  Booking a journey with us is seamless and personalized. You
                  can start by connecting directly with our travel designers via
                  <strong>WhatsApp (+91 87310 10676)</strong>, calling our
                  concierge desk, filling out the
                  <strong>online trip planner</strong> on our website, or
                  visiting our boutique office near Hornbill Restaurant, Colonel
                  Chowmuhani Road, Agartala.
                </p>
                <p>
                  Once you share your desired destination, travel dates, and
                  group size, we prepare a customized day-by-day itinerary
                  proposal with transparent pricing. Once you approve, the
                  reservation is confirmed upon a nominal advance deposit, after
                  which we issue all official vouchers and GST tax invoices.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">02</span>
                  <span className="faq-question-text">
                    Can you customize packages?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  <strong>
                    Yes, 100% of our tour packages are fully customizable.
                  </strong>
                  We do not enforce rigid group schedules. You have total
                  freedom to adjust the number of days, swap sightseeing spots,
                  upgrade hotel categories (such as boutique tea estate
                  bungalows or luxury 5-star mountain resorts), and choose your
                  preferred daily pacing.
                </p>
                <p>
                  We also cater to special requests including pure vegetarian /
                  Jain meals, senior citizen-friendly relaxed transit schedules,
                  and romantic anniversary setups.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">03</span>
                  <span className="faq-question-text">
                    Do you provide transportation?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  <strong>
                    Yes, comprehensive private transportation is included with
                    every itinerary.
                  </strong>
                  We provide premium, sanitized, air-conditioned private
                  vehicles tailored to your group size — including Innova
                  Crysta, Maruti Ertiga, Scorpio, Swift Dzire, and luxury Tempo
                  Travellers.
                </p>
                <p>
                  All our chauffeurs are polite, experienced in hill driving,
                  and background-verified. All fuel expenses, interstate
                  permits, hill road tolls, and driver allowances are included
                  with zero surprise surcharges. We also handle flight and train
                  ticketing connecting from MBB Airport Agartala, Kolkata, and
                  Guwahati.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">04</span>
                  <span className="faq-question-text">
                    Can I book hotels separately?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  <strong>
                    Yes, we provide standalone hotel and resort booking services
                  </strong>
                  across India and international destinations. Thanks to our
                  direct contracted rates with luxury boutique hotels, heritage
                  palaces, mountain view chalets, and premium beachfront villas,
                  you benefit from verified properties at competitive rates.
                </p>
                <p>
                  Every separate hotel booking comes with an official
                  confirmation voucher and full check-in coordination support.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">05</span>
                  <span className="faq-question-text">Can I pay online?</span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  <strong>
                    Yes, we offer multiple secure digital and online payment
                    channels.
                  </strong>
                  You can pay easily via:
                </p>
                <ul
                  style={{
                    margin: "0.5rem 0 0.75rem 1.25rem",
                    lineHeight: "1.8",
                  }}
                >
                  <li>
                    <strong>Instant UPI:</strong> Google Pay, PhonePe, Paytm,
                    BHIM
                  </li>
                  <li>
                    <strong>Direct Bank Transfer:</strong> IMPS / NEFT / RTGS to
                    our official business current bank account
                  </li>
                  <li>
                    <strong>Credit &amp; Debit Cards</strong>
                  </li>
                </ul>
                <p>
                  As an empanelled and GST-registered agency (
                  <strong>GSTIN: 16DTDPS0586Q2ZU</strong>), every transaction
                  receives an immediate digital payment receipt followed by a
                  formal tax invoice suitable for personal, corporate, or
                  government LTC reimbursement claims.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">06</span>
                  <span className="faq-question-text">
                    What is your cancellation policy?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  We maintain a fair, transparent, and traveler-friendly
                  cancellation policy. In case of unexpected medical
                  emergencies, travel restrictions, or severe mountain weather
                  disruptions, our primary approach is
                  <strong>flexible date rescheduling</strong> with minimal or
                  zero amendment fees from our side.
                </p>
                <p>
                  If cancellation is unavoidable, refunds are processed promptly
                  according to the standard cancellation timeline (after
                  deducting non-refundable airline / high-season hotel supplier
                  fees). The complete day-count cancellation breakdown is always
                  provided in writing before your booking is finalized.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">07</span>
                  <span className="faq-question-text">
                    Do you organize group tours?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  <strong>
                    Yes, we have extensive experience managing custom group
                    departures
                  </strong>
                  for large extended families, corporate annual retreats,
                  college and university study trips, social clubs, and official
                  government delegations.
                </p>
                <p>
                  For group departures, we deploy dedicated on-ground tour
                  managers, arrange private luxury Volvo/Tempo coaches,
                  coordinate buffet dining and gala dinners, and offer
                  attractive tiered group volume discounts.
                </p>
              </div>
            </details>

            <details className="faq-item">
              <summary className="faq-summary">
                <div className="faq-summary-left">
                  <span className="faq-num-pill">08</span>
                  <span className="faq-question-text">
                    Do you provide honeymoon packages?
                  </span>
                </div>
                <div aria-hidden="true" className="faq-icon-toggle">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </summary>
              <div className="faq-answer">
                <p>
                  <strong>
                    Yes, bespoke romantic honeymoons are one of our signature
                    specialties.
                  </strong>
                  We craft private honeymoon itineraries to dream destinations
                  like
                  <em>
                    Kashmir (Pahalgam &amp; Gulmarg), Meghalaya (Cherrapunji
                    &amp; Dawki glamping), Sikkim &amp; Darjeeling, Andaman
                    Islands (Havelock beach villas), Kerala Backwaters,
                    Rajasthan Palaces, Bali, Thailand, and the Maldives
                  </em>
                  .
                </p>
                <p>
                  Our honeymoon packages include intimate romantic inclusions
                  such as private candlelight dinners, traditional flower bed
                  decorations, complimentary honeymoon cakes, morning shikara
                  cruises, and secluded luxury boutique resort stays.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section className="section contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-col">
              <span className="section-eyebrow gold-text">
                TRAVEL CONCIERGE &amp; BOOKINGS
              </span>
              <h2 className="section-heading">Let's plan your next escape.</h2>
              <p className="section-desc">
                Have a destination in mind? Speak with our travel designers or
                visit our boutique office in Agartala.
              </p>
              <div className="contact-methods">
                <a
                  className="contact-method-card glass-panel"
                  href="tel:+918731010676"
                >
                  <div className="cm-icon">
                    <svg
                      fill="none"
                      height="22"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="22"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="cm-label">Call Our Concierge</span>
                    <strong className="cm-value">
                      +91 87310 10676 / +91 88370 70817
                    </strong>
                    <span className="cm-note">
                      Mon – Sat, 9:30 AM to 8:30 PM IST
                    </span>
                  </div>
                </a>
                <a
                  className="contact-method-card glass-panel wa-card"
                  href="https://wa.me/918731010676?text=Hello%20Global%20Holidays%20Tour%20%26%20Travels,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20holiday%20package."
                  rel="noopener"
                  target="_blank"
                >
                  <div className="cm-icon wa-icon">
                    <svg
                      fill="currentColor"
                      height="22"
                      viewBox="0 0 24 24"
                      width="22"
                    >
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="cm-label">Instant WhatsApp Chat</span>
                    <strong className="cm-value">+91 87310 10676</strong>
                    <span className="cm-note">
                      Live response within minutes
                    </span>
                  </div>
                </a>
                <a
                  className="contact-method-card glass-panel"
                  href="mailto:globalholidaysagt@gmail.com"
                >
                  <div className="cm-icon">
                    <svg
                      fill="none"
                      height="22"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="22"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="cm-label">Email Our Team</span>
                    <strong className="cm-value">
                      globalholidaysagt@gmail.com
                    </strong>
                    <span className="cm-note">
                      Detailed custom proposals &amp; itineraries
                    </span>
                  </div>
                </a>
                <div className="contact-method-card glass-panel">
                  <div className="cm-icon">
                    <svg
                      fill="none"
                      height="22"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="22"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <span className="cm-label">Visit Our Boutique Desk</span>
                    <strong className="cm-value">
                      near hornbill restaurant, Banerjee Para, Krishna Nagar,
                      Agartala, Tripura - 799003
                    </strong>
                    <span className="cm-note">
                      In-person holiday consultation &amp; coffee
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="contact-form-wrapper glass-panel">
                <h3 className="form-title">Send a Direct Enquiry</h3>
                <p className="form-subtitle">
                  Receive a tailored itinerary proposal and transparent quote
                  within 24 hours.
                </p>
                <form className="enquiry-form" id="direct-enquiry-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        placeholder="Debabrata Roy"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-phone">Phone / WhatsApp *</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        placeholder="+91 87310 10676"
                        required=""
                        type="tel"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="contact-email">Email Address *</label>
                      <input
                        id="contact-email"
                        name="email"
                        placeholder="debabrata@example.com"
                        required=""
                        type="email"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-dest">
                        Preferred Destination *
                      </label>
                      <input
                        id="contact-dest"
                        name="destination"
                        placeholder="e.g. Meghalaya / Kashmir / Sikkim"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="contact-date">Travel Month / Date</label>
                      <input
                        id="contact-date"
                        min="2026-08-22"
                        name="travel_date"
                        type="date"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="contact-travelers">
                        Number of Travellers
                      </label>
                      <input
                        id="contact-travelers"
                        max="50"
                        min="1"
                        name="travelers"
                        placeholder="2"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="contact-msg">
                      Special Requests / Preferences
                    </label>
                    <textarea
                      id="contact-msg"
                      name="message"
                      placeholder="Tell us about preferred stays, activities, dietary preferences, or specific places you want to visit..."
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-gold btn-large w-100"
                    id="send-enquiry-btn"
                    type="submit"
                  >
                    <span>Start Planning</span>
                    <svg
                      className="btn-arrow"
                      fill="none"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="18"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section final-cta-section" id="final-cta">
        <div className="final-cta-bg">
          <img
            alt="Luxury Travel Horizon Vista"
            loading="lazy"
            src="/images/india/kashmir/Kashmir_3.jpeg"
          />
          <div className="final-cta-overlay"></div>
        </div>
        <div className="container text-center relative-z">
          <span className="section-eyebrow gold-text letter-spacing">
            YOUR NEXT ADVENTURE AWAITS
          </span>
          <h2 className="final-cta-title editorial-title">
            “The world is waiting.”
          </h2>
          <p className="final-cta-subtitle">
            Where will your next story take you? Let Global Holidays craft an
            unforgettable chapter.
          </p>
          <div className="final-cta-buttons">
            <a className="btn btn-gold btn-large btn-magnetic" href="#planner">
              <span>Plan My Journey</span>
              <svg
                className="btn-arrow"
                fill="none"
                height="18"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <a
              className="btn btn-outline-glass btn-large btn-magnetic"
              href="https://wa.me/918731010676"
              rel="noopener"
              target="_blank"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
