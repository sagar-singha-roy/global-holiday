"use client";

import { useState, useEffect } from "react";
import { FaXmark, FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_URL =
  "https://wa.me/918731010676?text=Hello%20Global%20Holidays%20Tour%20%26%20Travels,%20I%20would%20like%20to%20book%20the%20Jampui%20Hills%20Tripura%20tour%20package%20(1%20Night%202%20Days)%20with%20the%20website%20exclusive%2010%25%20discount.";

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
      aria-label="Exclusive Tour Offer Popup"
    >
      <div className="promo-popup-card">
        {/* Top Right Close Button */}
        <button
          type="button"
          className="promo-popup-close"
          onClick={() => setIsOpen(false)}
          aria-label="Close offer popup"
        >
          <FaXmark />
        </button>

        {/* Clickable Image linking to WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="promo-popup-img-wrap"
          title="Click to book Jampui Hills tour on WhatsApp"
        >
          <img
            src="/images/jampui-hills-offer.jpg"
            alt="Meet a stranger trip - Jampui Hills Tripura 1 Night 2 Days Website Exclusive Extra 10% Off"
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
            id="popup-whatsapp-book-btn"
          >
            <FaWhatsapp className="promo-wa-icon" />
            <span>Book Now on WhatsApp</span>
          </a>
          <span className="promo-popup-subtext">
            Special 10% Website Discount • Limited Seats Available
          </span>
        </div>
      </div>
    </div>
  );
}
