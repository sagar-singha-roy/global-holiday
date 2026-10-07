"use client";

import { useState, useEffect } from "react";
import { FaXmark, FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL =
  "https://wa.me/918731010676?text=" +
  encodeURIComponent(
    "Hello Global Holidays Tour & Travels, I would like to get more info about the Night Gala Party."
  );

export default function OfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup shortly after website opens
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="promo-popup-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Night Gala Party Event Details"
    >
      <div className="promo-popup-card">
        {/* Top Right Close Button */}
        <button
          type="button"
          className="promo-popup-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
        >
          <FaXmark />
        </button>

        <div className="promo-popup-inner">
          {/* Clickable Image linking to WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-popup-img-wrap"
            title="Click for more info on WhatsApp"
          >
            <img
              src="/images/night-gala-party.jpg"
              alt="Global Holidays Tour & Travels - Night Gala Party"
              className="promo-popup-img"
            />
          </a>

          {/* Action button */}
          <div className="promo-popup-footer">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="promo-popup-cta"
              id="popup-more-info-btn"
              title="More Info on WhatsApp"
            >
              <FaWhatsapp className="promo-wa-icon" />
              <span>More Info</span>
            </a>
            <span className="promo-popup-subtext">
              Luxury • Comfort • Trust • Live Music & Dining
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
