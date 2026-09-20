"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaExpand, FaLocationDot, FaXmark } from "react-icons/fa6";

const DUMBOOR_SLIDES = [
  {
    id: 1,
    src: "/images/dumboor/dumboor_1.jpg",
    title: "Group Photo at the Viewpoint",
    subtitle: "Panoramic Overlook • Narkel Kunja Islands",
    badge: "Iconic Moment",
    location: "Dumboor Lake, Gandacherra",
    desc: "Strangers gathered from across Tripura to witness the emerald hills, turquoise waters, and boundless island horizons.",
  },
  {
    id: 2,
    src: "/images/dumboor/dumboor_2.jpg",
    title: "Fun in the Lake Waters",
    subtitle: "Crystal Island Waters • Spontaneous Group Swim",
    badge: "Island Adventure",
    location: "Dumboor Lake, Tripura",
    desc: "Unfiltered joy and pure refreshment as the group took a dive into the peaceful island waters under the afternoon sun.",
  },
  {
    id: 3,
    src: "/images/dumboor/dumboor_3.jpg",
    title: "Evening Bonfire Gathering",
    subtitle: "Campfire Stories • Acoustic Music & Laughter",
    badge: "Under The Stars",
    location: "Night Campsite, Dumboor",
    desc: "Under the starlit sky, stories flowed freely and strangers turned into lifelong travel companions around the crackling fire.",
  },
  {
    id: 4,
    src: "/images/dumboor/dumboor_4.jpg",
    title: "Meet A Stranger Tribe",
    subtitle: "Official Banner Shot • Log Huts & Island Resort",
    badge: "Tribe Assembled",
    location: "Log Huts Resort, Dumboor",
    desc: "A weekend of spontaneous connections, shared meals, and beautiful memories that will be carried for a lifetime.",
  },
];

export default function DumboorSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const total = DUMBOOR_SLIDES.length;

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

  const currentSlide = DUMBOOR_SLIDES[currentIndex];

  return (
    <section className="section dumboor-section" id="dumboor-diaries">
      <div className="container">
        {/* Header with Nav Controls */}
        <div className="section-header-split">
          <div>
            <span className="section-eyebrow gold-text">
              WANDERERS &amp; STRANGERS
            </span>
            <h2 className="section-heading">
              Dumboor Diaries
              <span className="serif-italic"> — Meet a Stranger Trip</span>
            </h2>
            <p className="section-desc">
              A lake, a group of strangers, and memories that last a lifetime.
              Our &quot;Meet a Stranger&quot; trip to Dumboor Lake, Tripura was pure
              magic — laughter, sunsets, and bonds forged in the wild.
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
              {DUMBOOR_SLIDES.map((slide, idx) => (
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
            {DUMBOOR_SLIDES.map((slide, idx) => (
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
            id="dumboor-lightbox"
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
              className="dumboor-lb-close"
              aria-label="Close lightbox"
              onClick={closeLightbox}
              type="button"
            >
              <FaXmark />
            </button>

            {/* Lightbox Prev/Next */}
            <button
              aria-label="Previous photo"
              className="dumboor-lb-arrow prev"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + total) % total);
              }}
              type="button"
            >
              <FaChevronLeft />
            </button>
            <button
              aria-label="Next photo"
              className="dumboor-lb-arrow next"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % total);
              }}
              type="button"
            >
              <FaChevronRight />
            </button>

            <div className="dumboor-lb-inner" onClick={(e) => e.stopPropagation()}>
              <img
                src={DUMBOOR_SLIDES[lightboxIndex].src}
                alt={DUMBOOR_SLIDES[lightboxIndex].title}
                className="dumboor-lb-img"
              />
              <div className="dumboor-lb-meta">
                <span className="dumboor-lb-badge">
                  {DUMBOOR_SLIDES[lightboxIndex].badge} • {lightboxIndex + 1} of {total}
                </span>
                <p className="dumboor-lb-caption">
                  {DUMBOOR_SLIDES[lightboxIndex].title} — {DUMBOOR_SLIDES[lightboxIndex].location}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
