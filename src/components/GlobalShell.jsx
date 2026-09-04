"use client";

import { useState, useEffect } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";

import AppController from "@/components/AppController";

export default function GlobalShell() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <div
          aria-hidden="true"
          className="custom-cursor"
          id="custom-cursor"
          suppressHydrationWarning
        >
          <div
            className="cursor-dot"
            id="cursor-dot"
            suppressHydrationWarning
          ></div>
          <div
            className="cursor-ring"
            id="cursor-ring"
            suppressHydrationWarning
          ></div>
        </div>
      )}
      <a
        aria-label="Chat with Global Holidays Concierge on WhatsApp"
        className="floating-whatsapp-btn"
        href="https://wa.me/918731010676?text=Hello%20Global%20Holidays%20Tour%20%26%20Travels,%20I%20would%20like%20to%20plan%20a%20luxury%20holiday."
        id="floating-whatsapp"
        rel="noopener"
        target="_blank"
      >
        <div className="wa-pulse-ring"></div>
        <div className="wa-btn-inner">
          <svg fill="currentColor" height="28" viewBox="0 0 24 24" width="28">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"></path>
          </svg>
        </div>
        <span className="wa-tooltip">Chat with Concierge</span>
      </a>
      <button
        aria-label="Scroll to top of page"
        className="back-to-top-btn"
        id="back-to-top-btn"
        title="Back to Top"
        type="button"
      >
        <div className="top-btn-inner">
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
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </div>
      </button>
      <div className="mobile-sticky-bar" id="mobile-sticky-bar">
        <a className="mob-bar-btn mob-bar-call" href="tel:+918731010676">
          <svg
            fill="none"
            height="18"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="18"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>Call Desk</span>
        </a>
        <a className="mob-bar-btn mob-bar-plan" href="#planner">
          <span>Plan My Trip →</span>
        </a>
        <a
          aria-label="Chat on WhatsApp"
          className="mob-bar-btn mob-bar-wa"
          href="https://wa.me/918731010676"
          rel="noopener"
          target="_blank"
        >
          <span className="mob-wa-icon-wrap">
            <svg
              className="mob-wa-icon"
              fill="currentColor"
              height="19"
              viewBox="0 0 24 24"
              width="19"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"></path>
            </svg>
            <span className="mob-wa-dot"></span>
          </span>
          <span>WhatsApp</span>
        </a>
      </div>
      <dialog
        className="luxury-modal"
        data-closedby="any"
        data-lenis-prevent=""
        id="package-modal"
      >
        <div className="modal-dialog-content">
          <button
            aria-label="Close dialog"
            className="modal-close-btn"
            id="close-pkg-modal"
          >
            <FaXmark />
          </button>
          <div className="modal-body-scroll" id="pkg-modal-content"></div>
        </div>
      </dialog>
      <dialog
        className="lightbox-dialog"
        data-closedby="any"
        data-lenis-prevent=""
        id="lightbox-modal"
      >
        <div className="lightbox-wrapper">
          <button
            aria-label="Close image viewer"
            className="lightbox-close"
            id="close-lightbox"
          >
            <FaXmark />
          </button>
          <button
            aria-label="Previous image"
            className="lightbox-nav lightbox-prev"
            id="lightbox-prev-btn"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <div className="lightbox-figure">
            <img
              alt="Travel photography fullscreen preview"
              id="lightbox-img"
              src={null}
            />
            <div className="lightbox-caption">
              <h4 id="lightbox-title"></h4>
              <span id="lightbox-sub"></span>
            </div>
          </div>
          <button
            aria-label="Next image"
            className="lightbox-nav lightbox-next"
            id="lightbox-next-btn"
          >
            <svg
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </dialog>
      <div
        aria-live="polite"
        className="toast-notification"
        id="toast-notify"
        role="status"
      >
        <div className="toast-icon">
          <FaCheck />
        </div>
        <div className="toast-body">
          <strong id="toast-title">Request Received</strong>
          <p id="toast-desc">Our travel concierge will contact you shortly.</p>
        </div>
      </div>
      <AppController />
    </>
  );
}
