"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("gh_theme") || "dark";
      document.documentElement.setAttribute("data-theme", savedTheme);
    } catch (_) {}

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCompanyOpen(false);
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleDocClick = (e) => {
      if (!e.target.closest(".nav-dropdown")) {
        setCompanyOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setCompanyOpen(false);
        setDrawerOpen(false);
      }
    };
    document.addEventListener("click", handleDocClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleDocClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [drawerOpen]);

  const toggleTheme = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("gh_theme", next);
    } catch (_) {}
  };

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const isCompanyActive = ["/about", "/legal", "/contact"].some((p) =>
    pathname.startsWith(p),
  );

  return (
    <>
      <header
        className={`site-header ${scrolled ? "scrolled" : ""}`}
        id="site-header"
      >
        <div className="nav-container">
          <Link
            aria-label="Global Holidays Home"
            className="brand-logo"
            href="/"
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
          </Link>

          <nav aria-label="Main Navigation" className="desktop-nav">
            <ul className="nav-links">
              <li>
                <Link
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${isActive("/destinations") ? "active" : ""}`}
                  href="/destinations"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${isActive("/packages") ? "active" : ""}`}
                  href="/packages"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${isActive("/hotels") ? "active" : ""}`}
                  href="/hotels"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${isActive("/deals") ? "active" : ""}`}
                  href="/deals"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${isActive("/stories") ? "active" : ""}`}
                  href="/stories"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${isActive("/gallery") ? "active" : ""}`}
                  href="/gallery"
                >
                  Gallery
                </Link>
              </li>
              <li className={`nav-dropdown ${companyOpen ? "is-open" : ""}`}>
                <button
                  aria-expanded={companyOpen}
                  aria-haspopup="true"
                  className={`dropdown-toggle ${isCompanyActive ? "active" : ""}`}
                  id="company-dropdown-btn"
                  type="button"
                  onClick={() => setCompanyOpen((prev) => !prev)}
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
                    <Link
                      className={`dropdown-item ${isActive("/about") ? "active" : ""}`}
                      href="/about"
                      onClick={() => setCompanyOpen(false)}
                    >
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
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${isActive("/legal") ? "active" : ""}`}
                      href="/legal"
                      onClick={() => setCompanyOpen(false)}
                    >
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
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`dropdown-item ${isActive("/contact") ? "active" : ""}`}
                      href="/contact"
                      onClick={() => setCompanyOpen(false)}
                    >
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
                    </Link>
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
              onClick={toggleTheme}
              title="Switch Theme"
              type="button"
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
              aria-expanded={drawerOpen}
              aria-label="Toggle navigation menu"
              className={`menu-toggle ${drawerOpen ? "active" : ""}`}
              id="menu-toggle-btn"
              type="button"
              onClick={() => setDrawerOpen((prev) => !prev)}
            >
              <span className="bar bar-1"></span>
              <span className="bar bar-2"></span>
              <span className="bar bar-3"></span>
            </button>
          </div>
        </div>
      </header>
      <div
        aria-hidden={!drawerOpen}
        className={`mobile-drawer ${drawerOpen ? "open" : ""}`}
        id="mobile-drawer"
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-header">
            <Link
              className="brand-logo"
              href="/"
              onClick={() => setDrawerOpen(false)}
            >
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
            </Link>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}
            >
              <button
                aria-label="Toggle light and dark mode"
                className="theme-toggle-btn mobile-theme-btn"
                onClick={toggleTheme}
                title="Switch Theme"
                type="button"
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
                type="button"
                onClick={() => setDrawerOpen(false)}
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
              <Link
                className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}
                href="/"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Home</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link ${isActive("/destinations") ? "active" : ""}`}
                href="/destinations"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Destinations</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link ${isActive("/packages") ? "active" : ""}`}
                href="/packages"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Curated Packages</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link ${isActive("/hotels") ? "active" : ""}`}
                href="/hotels"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Luxury Hotels</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link ${isActive("/deals") ? "active" : ""}`}
                href="/deals"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Exclusive Deals</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link ${isActive("/stories") ? "active" : ""}`}
                href="/stories"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Travel Stories</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link ${isActive("/gallery") ? "active" : ""}`}
                href="/gallery"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Gallery</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li className="mobile-nav-divider">
              <span className="mobile-nav-divider-label">
                COMPANY &amp; CONCIERGE
              </span>
            </li>
            <li>
              <Link
                className={`mobile-nav-link mobile-sub-link ${isActive("/about") ? "active" : ""}`}
                href="/about"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">About &amp; Mission</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link mobile-sub-link ${isActive("/legal") ? "active" : ""}`}
                href="/legal"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Legal &amp; Accreditations</span>
                <span className="nav-arrow">→</span>
              </Link>
            </li>
            <li>
              <Link
                className={`mobile-nav-link mobile-sub-link ${isActive("/contact") ? "active" : ""}`}
                href="/contact"
                onClick={() => setDrawerOpen(false)}
              >
                <span className="nav-label">Contact Concierge</span>
                <span className="nav-arrow">→</span>
              </Link>
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
              <Link
                className="drawer-action-btn"
                href="/contact"
                onClick={() => setDrawerOpen(false)}
              >
                <span>Visit Office</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
