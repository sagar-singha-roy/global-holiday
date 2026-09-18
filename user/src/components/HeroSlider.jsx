"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { HERO_SLIDES } from "@/data/heroSlides";

export default function HeroSlider() {
  const [currentRegion, setCurrentRegion] = useState("india");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const regionRanges = {
    india: { min: 0, max: 14 },
    intl: { min: 15, max: 26 },
  };

  const activeSlide = HERO_SLIDES[currentIndex] || HERO_SLIDES[0];

  // Switch region
  const handleRegionChange = (region) => {
    setCurrentRegion(region);
    setCurrentIndex(regionRanges[region].min);
  };

  // Next slide
  const nextSlide = () => {
    const range = regionRanges[currentRegion];
    setCurrentIndex((prev) => (prev >= range.max ? range.min : prev + 1));
  };

  // Prev slide
  const prevSlide = () => {
    const range = regionRanges[currentRegion];
    setCurrentIndex((prev) => (prev <= range.min ? range.max : prev - 1));
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIndex, currentRegion, isPaused]);

  // Touch swipe
  const touchStartX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // Visible indicators for current region
  const visibleSlides = HERO_SLIDES.filter((s) => s.region === currentRegion);

  return (
    <section
      className="hero-section"
      id="hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background Carousel Slides */}
      <div className="hero-carousel-track" id="hero-carousel">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-slide ${idx === currentIndex ? "active" : ""}`}
            aria-hidden={idx !== currentIndex}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero-slide-img"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="hero-slide-overlay"></div>
          </div>
        ))}
      </div>

      {/* Hero Content Container */}
      <div className="container hero-content-container">
        <div className="hero-text-block">
          {/* Empanelled Badge */}
          <div className="hero-eyebrow-badge">
            <span className="badge-shield">
              <FaShieldHalved />
            </span>
            <span>Tripura Tourism Empanelled Premier Agency</span>
          </div>

          <h1 className="hero-main-title">
            Artisans of <br />
            <span className="gold-shimmer-text">Extraordinary</span> Travel
          </h1>

          <p className="hero-lead-text">
            From the mystical living root bridges of Meghalaya to sacred
            Himalayan peaks and royal havens, we design tailor-made journeys
            with unmatched local expertise.
          </p>

          <div className="hero-cta-group">
            <Link href="/packages" className="btn btn-gold btn-lg">
              <span>Explore Signature Circuits</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <a
              href="https://wa.me/918731010676?text=Hello%20Global%20Holidays%2C%20I%20would%20like%20to%20plan%20a%20bespoke%20journey."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-glass btn-lg"
            >
              <span>Speak to Concierge</span>
            </a>
          </div>
        </div>

        {/* Floating Active Destination Card */}
        <div className="hero-floating-card">
          <div className="floating-badge-thumb">
            <img
              id="floating-thumb-img"
              src={activeSlide.thumb || activeSlide.src}
              alt="Current Destination"
            />
          </div>
          <div className="floating-badge-info">
            <span className="floating-badge-tag" id="floating-badge-tag">
              {activeSlide.badge}
            </span>
            <h3 className="floating-badge-title" id="floating-badge-title">
              {activeSlide.dest}
            </h3>
            <p className="floating-badge-sub" id="floating-badge-sub">
              {activeSlide.route}
            </p>
          </div>
        </div>
      </div>

      {/* Hero Bottom Navigation Bar */}
      <div className="hero-bottom-bar">
        <div className="container hero-bar-container">
          {/* Region Tabs */}
          <div
            className="hero-region-tabs"
            id="hero-region-tabs"
            role="tablist"
          >
            <button
              className={`region-tab ${currentRegion === "india" ? "active" : ""}`}
              onClick={() => handleRegionChange("india")}
              role="tab"
              aria-selected={currentRegion === "india"}
            >
              Northeast &amp; India (15)
            </button>
            <button
              className={`region-tab ${currentRegion === "intl" ? "active" : ""}`}
              onClick={() => handleRegionChange("intl")}
              role="tab"
              aria-selected={currentRegion === "intl"}
            >
              Worldwide Luxury (12)
            </button>
          </div>

          {/* Indicators List */}
          <div className="hero-indicators-wrapper">
            <div className="hero-indicators" id="hero-indicators">
              {visibleSlides.map((slide) => {
                const isSelected = slide.id === currentIndex;
                return (
                  <button
                    key={slide.id}
                    className={`hero-indicator ${isSelected ? "active" : ""}`}
                    onClick={() => setCurrentIndex(slide.id)}
                    aria-label={`Go to ${slide.dest}`}
                  >
                    <span className="indicator-label">{slide.dest}</span>
                    <span className="indicator-progress"></span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Arrow Controls */}
          <div className="hero-arrows">
            <button
              id="hero-arrow-prev"
              className="hero-arrow-btn"
              onClick={prevSlide}
              aria-label="Previous destination"
            >
              &#8249;
            </button>
            <button
              id="hero-arrow-next"
              className="hero-arrow-btn"
              onClick={nextSlide}
              aria-label="Next destination"
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
