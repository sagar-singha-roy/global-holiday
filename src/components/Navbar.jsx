"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="site-header" id="site-header">
        <div className="nav-container">
          <a
            aria-label="Global Holidays Home"
            className="brand-logo"
            href="#hero"
          >
            <img
              alt="Global Holidays Logo"
              className="brand-logo-img"
              height="44"
              src="/images/logo-icon.png"
              width="44"
            />
            <div className="logo-text">
              <span className="brand-name">GLOBAL HOLIDAYS</span>
              <span className="brand-sub">TOUR &amp; TRAVELS</span>
            </div>
          </a>

          <nav aria-label="Main Navigation" className="desktop-nav">
            <ul className="nav-links">
              <li>
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="/destinations">
                  Destinations
                </a>
              </li>
              <li>
                <a className="nav-link" href="/packages">
                  Packages
                </a>
              </li>
              <li>
                <a className="nav-link" href="/hotels">
                  Hotels
                </a>
              </li>
              <li>
                <a className="nav-link" href="/deals">
                  Deals
                </a>
              </li>
              <li>
                <a className="nav-link" href="/stories">
                  Stories
                </a>
              </li>
              <li>
                <a className="nav-link" href="/gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-dropdown">
                <button
                  aria-expanded="false"
                  aria-haspopup="true"
                  className="dropdown-toggle"
                  id="company-dropdown-btn"
                  type="button"
                >
                  <span>Company</span>
                  <svg
                    className="dropdown-chevron"
                    fill="none"
                    height="14"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    width="14"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <ul
                  aria-labelledby="company-dropdown-btn"
                  className="dropdown-menu"
                >
                  <li>
                    <a className="dropdown-item" href="/about">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="16" y2="12"></line>
                        <line x1="12" x2="12.01" y1="8" y2="8"></line>
                      </svg>
                      <span>About &amp; Mission</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/legal">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                      <span>Legal</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/contact">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>Contact</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button
              aria-label="Toggle light and dark mode"
              className="theme-toggle-btn"
              id="theme-toggle-btn"
              title="Switch Theme"
            >
              <span className="theme-icon-sun">
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" x2="12" y1="1" y2="3"></line>
                  <line x1="12" x2="12" y1="21" y2="23"></line>
                  <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
                  <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
                  <line x1="1" x2="3" y1="12" y2="12"></line>
                  <line x1="21" x2="23" y1="12" y2="12"></line>
                  <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
                  <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
                </svg>
              </span>
              <span className="theme-icon-moon">
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </span>
            </button>
            <a
              className="btn btn-gold btn-magnetic"
              href="/contact"
              id="nav-cta-btn"
            >
              <span>Plan My Trip</span>
              <svg
                className="btn-arrow"
                fill="none"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button
              aria-expanded="false"
              aria-label="Toggle navigation menu"
              className="menu-toggle"
              id="menu-toggle-btn"
            >
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </button>
          </div>
        </div>
      </header>
      <div aria-hidden="true" className="mobile-drawer" id="mobile-drawer">
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <a className="brand-logo" href="/">
              <img
                alt="Global Holidays Logo"
                className="brand-logo-img"
                height="38"
                src="/images/logo.png"
                width="38"
              />
              <div className="logo-text">
                <span className="brand-name" style={{ fontSize: "1.05rem" }}>
                  GLOBAL HOLIDAYS
                </span>
                <span className="brand-sub" style={{ fontSize: "0.6rem" }}>
                  TOUR &amp; TRAVELS
                </span>
              </div>
            </a>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}
            >
              <button
                aria-label="Toggle light and dark mode"
                className="theme-toggle-btn mobile-theme-btn"
                title="Switch Theme"
              >
                <span className="theme-icon-sun">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" x2="12" y1="1" y2="3"></line>
                    <line x1="12" x2="12" y1="21" y2="23"></line>
                    <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"></line>
                    <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"></line>
                    <line x1="1" x2="3" y1="12" y2="12"></line>
                    <line x1="21" x2="23" y1="12" y2="12"></line>
                    <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"></line>
                    <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"></line>
                  </svg>
                </span>
                <span className="theme-icon-moon">
                  <svg
                    fill="none"
                    height="18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </span>
              </button>
              <button
                aria-label="Close menu"
                className="drawer-close-btn"
                id="drawer-close-btn"
              >
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
                  <line x1="18" x2="6" y1="6" y2="18"></line>
                  <line x1="6" x2="18" y1="6" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <ul className="mobile-nav-links">
            <li>
              <a className="mobile-nav-link active" href="/">
                <span className="nav-label">Home</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link" href="/destinations">
                <span className="nav-label">Destinations</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link" href="/packages">
                <span className="nav-label">Curated Packages</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link" href="/hotels">
                <span className="nav-label">Luxury Hotels</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link" href="/deals">
                <span className="nav-label">Exclusive Deals</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link" href="/stories">
                <span className="nav-label">Travel Stories</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link" href="/gallery">
                <span className="nav-label">Gallery</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li className="mobile-nav-divider">
              <span className="mobile-nav-divider-label">
                COMPANY &amp; CONCIERGE
              </span>
            </li>
            <li>
              <a className="mobile-nav-link mobile-sub-link" href="/about">
                <span className="nav-label">About &amp; Mission</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link mobile-sub-link" href="/legal">
                <span className="nav-label">Legal &amp; Accreditations</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
            <li>
              <a className="mobile-nav-link mobile-sub-link" href="/contact">
                <span className="nav-label">Contact Concierge</span>
                <span className="nav-arrow">→</span>
              </a>
            </li>
          </ul>
          <div className="mobile-drawer-footer">
            <span className="drawer-contact-title">
              Direct Agartala Concierge
            </span>
            <div className="drawer-phone-group">
              <a className="drawer-phone-chip" href="tel:+918731010676">
                <svg
                  fill="none"
                  height="15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="15"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 87310 10676</span>
              </a>
              <a className="drawer-phone-chip" href="tel:+918837070817">
                <svg
                  fill="none"
                  height="15"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="15"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 88370 70817</span>
              </a>
            </div>
            <div className="drawer-quick-actions">
              <a
                className="drawer-action-btn drawer-wa-btn"
                href="https://wa.me/918731010676"
                rel="noopener"
                target="_blank"
              >
                <span>WhatsApp</span>
              </a>
              <a
                className="drawer-action-btn"
                href="mailto:globalholidaysagt@gmail.com"
              >
                <span>Email</span>
              </a>
              <a className="drawer-action-btn" href="#contact">
                <span>Visit Office</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
