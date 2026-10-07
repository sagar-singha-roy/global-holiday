"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaLocationDot,
  FaXmark,
} from "react-icons/fa6";

const JAMPUI_SLIDES = [
  {
    id: 1,
    src: "/images/jampui/jampui_1.jpg",
    title: "Meet a Stranger Tribe & Coach",
    subtitle: "Expedition Departure • Hill Resort Gathering",
    badge: "The Journey Begins",
    location: "Eden Tourist Lodge, Jampui Hills",
    desc: "The entire tribe assembled alongside our traveller coach before heading out to explore the misty heights of Jampui.",
  },
  {
    id: 2,
    src: "/images/jampui/jampui_2.jpg",
    title: "Smiles in the Hilltop Sunshine",
    subtitle: "Morning Walk • Fresh Mountain Breeze",
    badge: "Tribe United",
    location: "Vanghmun Ridge, Jampui Hills",
    desc: "Strangers on day one, bonded travel family on day two. Sharing laughs, sunshine, and candid moments amidst scenic nature.",
  },
  {
    id: 3,
    src: "/images/jampui/jampui_3.jpg",
    title: "Deck Hangout Under Canopy Lights",
    subtitle: "Evening Banter • Warm Pergola Glow",
    badge: "Hilltop Evenings",
    location: "Lounge Deck, Jampui Hills",
    desc: "As the mountain breeze rolled in, everyone gathered around the wooden deck for endless conversations, snacks, and laughter.",
  },
  {
    id: 4,
    src: "/images/jampui/jampui_4.png",
    title: "Night Chai & Storytelling Circle",
    subtitle: "Unfiltered Connections • Acoustic Banter",
    badge: "Night Stories",
    location: "Scenic Night Deck, Jampui",
    desc: "Steaming cups of tea, heartfelt stories, and laughter echoing under the starlit canopy of Tripura's highest range.",
  },
  {
    id: 5,
    src: "/images/jampui/jampui_5.jpg",
    title: "Rooftop Bonding & Lifelong Memories",
    subtitle: "High-Angle Perspective • Authentic Vibe",
    badge: "Pure Camaraderie",
    location: "Mountain View Terrace, Jampui",
    desc: "Capturing the true essence of the Meet A Stranger movement — breaking barriers and creating memories that last forever.",
  },
  {
    id: 6,
    src: "/images/jampui/jampui_6.jpg",
    title: "Terrace Railing Night Chill",
    subtitle: "Night View Walkway • Comrades in the Clouds",
    badge: "Hilltop Brotherhood",
    location: "Eden Lodge Walkway, Jampui",
    desc: "Late-night laughter and easy conversations overlooking the quiet valleys, soaking in the cool mountain breeze.",
  },
];

export default function JampuiSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const total = JAMPUI_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, lightboxOpen]);

  // Touch Swipe
  const touchStartX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") {
          setLightboxIndex((prev) => (prev + 1) % total);
        }
        if (e.key === "ArrowLeft") {
          setLightboxIndex((prev) => (prev - 1 + total) % total);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, total]);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const currentSlide = JAMPUI_SLIDES[currentIndex];

  return (
    <section className="section dumboor-section" id="jampui-diaries">
      <div className="container">
        {/* Header with Eyebrow and Description */}
        <div className="section-header-split">
          <div>
            <span className="section-eyebrow gold-text">
              WANDERERS &amp; STRANGERS • TRIPURA EXPEDITION
            </span>
            <h2 className="section-heading">
              Jampui Diaries
              <span className="serif-italic"> — Meet a Stranger Trip</span>
            </h2>
            <p className="section-desc">
              Misty peaks, orange orchards, and a tribe of strangers turned lifelong
              friends. Relive our unforgettable weekend adventure across the serene
              heights of Jampui Hills, Tripura.
            </p>
          </div>
        </div>

        {/* Carousel Showcase */}
        <div
          className="dumboor-carousel-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Main Slide Card */}
          <div className="dumboor-main-card">
            <div className="dumboor-slide-img-box">
              {JAMPUI_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`dumboor-slide-item ${idx === currentIndex ? "active" : ""}`}
                  aria-hidden={idx !== currentIndex}
                >
                  <img
                    alt={slide.title}
                    className="dumboor-slide-img"
                    loading={idx === 0 ? "eager" : "lazy"}
                    src={slide.src}
                  />
                  <div className="dumboor-slide-gradient" />
                </div>
              ))}

              {/* Floating Expand Button */}
              <button
                aria-label="Enlarge current photo in high definition"
                className="dumboor-expand-btn"
                onClick={() => openLightbox(currentIndex)}
                title="View Full Resolution"
                type="button"
              >
                <FaExpand />
                <span>Full View</span>
              </button>

              {/* Floating Side Prev/Next Click Zones */}
              <button
                aria-label="Previous slide"
                className="dumboor-card-nav-arrow prev"
                onClick={prevSlide}
                type="button"
              >
                <FaChevronLeft />
              </button>
              <button
                aria-label="Next slide"
                className="dumboor-card-nav-arrow next"
                onClick={nextSlide}
                type="button"
              >
                <FaChevronRight />
              </button>
            </div>

            {/* Slide Content Banner */}
            <div className="dumboor-slide-info-bar">
              <div className="dumboor-info-left">
                <div className="dumboor-info-tags">
                  <span className="dumboor-badge-pill">{currentSlide.badge}</span>
                  <span className="dumboor-location-chip">
                    <FaLocationDot />
                    <span>{currentSlide.location}</span>
                  </span>
                </div>
                <h3 className="dumboor-slide-title">{currentSlide.title}</h3>
                <p className="dumboor-slide-desc">{currentSlide.desc}</p>
              </div>
            </div>
          </div>

          {/* Interactive Thumbnails & Progress Bar */}
          <div className="dumboor-thumb-bar">
            {JAMPUI_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                className={`dumboor-thumb-btn ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
                type="button"
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              >
                <div className="dumboor-thumb-img-wrap">
                  <img alt={slide.title} src={slide.src} loading="lazy" />
                  <div className="dumboor-thumb-overlay" />
                </div>
                <div className="dumboor-thumb-meta">
                  <span className="dumboor-thumb-num">0{idx + 1}</span>
                  <span className="dumboor-thumb-title">{slide.title}</span>
                </div>
                {idx === currentIndex && !isPaused && (
                  <div className="dumboor-thumb-progress" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxOpen && (
          <div
            className="dumboor-lightbox active"
            id="jampui-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo lightbox"
            onClick={(e) => {
              if (
                e.target === e.currentTarget ||
                e.target.closest(".dumboor-lb-close")
              ) {
                closeLightbox();
              }
            }}
          >
            <button
              type="button"
              className="dumboor-lb-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <FaXmark />
            </button>

            <button
              type="button"
              className="dumboor-lb-arrow prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + total) % total);
              }}
              aria-label="Previous photo"
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              className="dumboor-lb-arrow next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % total);
              }}
              aria-label="Next photo"
            >
              <FaChevronRight />
            </button>

            <div className="dumboor-lb-inner" onClick={(e) => e.stopPropagation()}>
              <img
                src={JAMPUI_SLIDES[lightboxIndex].src}
                alt={JAMPUI_SLIDES[lightboxIndex].title}
                className="dumboor-lb-img"
              />
              <div className="dumboor-lb-caption">
                <span className="dumboor-lb-counter">
                  {lightboxIndex + 1} / {total}
                </span>
                <h4>{JAMPUI_SLIDES[lightboxIndex].title}</h4>
                <p>
                  {JAMPUI_SLIDES[lightboxIndex].location} •{" "}
                  {JAMPUI_SLIDES[lightboxIndex].subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
