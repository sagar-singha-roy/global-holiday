import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div className="footer-col brand-col">
            <div className="brand-logo footer-logo">
              <img
                alt="Global Holidays Logo"
                className="footer-logo-img"
                height="52"
                src="/images/logo.png"
                width="52"
              />
              <div className="logo-text">
                <span className="brand-name">GLOBAL HOLIDAYS</span>
                <span className="brand-sub">TOUR &amp; TRAVELS</span>
              </div>
            </div>
            <p className="footer-brand-desc">
              A boutique luxury tour and travel company based in Agartala,
              Tripura. Dedicated to bespoke journeys, private explorations, and
              unforgettable experiences across India and global destinations.
            </p>
            <div className="footer-location-badge">
              <svg
                fill="none"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>Agartala, Tripura, India</span>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/destinations">Destinations</a>
              </li>
              <li>
                <a href="/packages">Curated Packages</a>
              </li>
              <li>
                <a href="/about">About &amp; Heritage</a>
              </li>
              <li>
                <a href="/about#mission-vision">Mission &amp; Vision</a>
              </li>
              <li>
                <a href="/stories">Travel Stories</a>
              </li>
              <li>
                <a href="/#faq">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="/legal">Legal &amp; Accreditations</a>
              </li>
              <li>
                <a href="/contact">Contact Concierge</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Signature Circuits</h4>
            <ul className="footer-links">
              <li>
                <a
                  className="open-pkg-filter"
                  data-dest="Meghalaya"
                  href="/packages"
                >
                  Meghalaya &amp; Dawki Escape
                </a>
              </li>
              <li>
                <a
                  className="open-pkg-filter"
                  data-dest="Sikkim"
                  href="/packages"
                >
                  Sikkim &amp; Darjeeling Grandeur
                </a>
              </li>
              <li>
                <a
                  className="open-pkg-filter"
                  data-dest="Kashmir"
                  href="/packages"
                >
                  Kashmir Valley Odyssey
                </a>
              </li>
              <li>
                <a
                  className="open-pkg-filter"
                  data-dest="Andaman"
                  href="/packages"
                >
                  Andaman Azure Haven
                </a>
              </li>
              <li>
                <a
                  className="open-pkg-filter"
                  data-dest="Rajasthan"
                  href="/packages"
                >
                  Royal Rajasthan Palaces
                </a>
              </li>
              <li>
                <a
                  className="open-pkg-filter"
                  data-dest="Tripura"
                  href="/packages"
                >
                  Tripura Heritage &amp; Palaces
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Agartala Office</h4>
            <p className="footer-address">
              near hornbill restaurant, Banerjee Para, Krishna Nagar,
              <br />
              Agartala, Tripura - 799003, India
            </p>
            <p className="footer-phone">
              <a href="tel:+918731010676">+91 87310 10676</a> /
              <a href="tel:+918837070817">+91 88370 70817</a>
            </p>
            <p className="footer-email">
              <a href="mailto:globalholidaysagt@gmail.com">
                globalholidaysagt@gmail.com
              </a>
            </p>
            <div className="footer-social-row">
              <a
                aria-label="Instagram"
                className="social-circle"
                href="https://instagram.com"
                rel="noopener"
                target="_blank"
              >
                <svg
                  fill="none"
                  height="18"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                aria-label="Facebook"
                className="social-circle"
                href="https://facebook.com"
                rel="noopener"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                aria-label="WhatsApp"
                className="social-circle wa-social"
                href="https://wa.me/918731010676"
                rel="noopener"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  height="18"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 18.15c-1.49 0-2.95-.4-4.22-1.15l-.3-.18-3.13.82.83-3.05-.2-.31a8.196 8.196 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.19 8.19 0 012.42 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.08 0 1.23.89 2.42 1.02 2.59.12.17 1.76 2.69 4.26 3.77.6.26 1.06.41 1.42.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.12-.23-.19-.48-.31z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom-row">
          <p className="copyright-text">
            © 2026 Global Holidays Tour &amp; Travels. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="/legal">Government Registrations &amp; GST</a>
            <span>•</span>
            <a href="/contact">Privacy Policy</a>
            <span>•</span>
            <a href="/contact">Terms of Service</a>
          </div>
          <p className="footer-powered-by">
            Powered by{" "}
            <a
              className="powered-by-link"
              href="https://www.novaedges.in"
              rel="noopener noreferrer"
              target="_blank"
            >
              NOVAEDGES PRIVATE LIMITED
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
