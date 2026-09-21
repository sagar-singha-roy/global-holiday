"use client";

import Link from "next/link";

export default function Page() {
  return (
    <>
      <section
        className="section text-center"
        style={{ paddingBottom: "2rem" }}
      >
        <div className="container">
          <span className="section-eyebrow gold-text">
            PERSONAL TRAVEL CONCIERGE
          </span>
          <h1
            className="editorial-title"
            style={{ margin: "0.5rem 0 1.25rem" }}
          >
            Let's Plan Your Next Escape
          </h1>
          <p
            className="section-desc"
            style={{ margin: "0 auto 2.5rem", maxWidth: "740px" }}
          >
            Have a dream journey in mind? Connect directly with our travel
            designers in Agartala, Tripura for transparent quotes, flight
            assistance, and bespoke itineraries.
          </p>
        </div>
      </section>
      <section
        className="section"
        id="planner"
        style={{ paddingTop: "1rem", paddingBottom: "4rem" }}
      >
        <div className="container">
          <div className="planner-card glass-panel">
            <div className="planner-header text-center">
              <span className="section-eyebrow gold-text">
                STEP-BY-STEP CUSTOM PLANNER
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
                      Desired Destination <span className="required-star">*</span>
                    </label>
                    <select defaultValue="" id="plan-destination">
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
                      type="date"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-travelers">Number of Travellers</label>
                    <select id="plan-travelers">
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
                    <select id="plan-budget">
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
                    <label htmlFor="plan-name">
                      Your Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="plan-name"
                      placeholder="e.g. Debabrata Roy"
                      type="text"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-phone">
                      Phone / WhatsApp Number <span className="required-star">*</span>
                    </label>
                    <input
                      id="plan-phone"
                      placeholder="e.g. +91 87310 10676"
                      type="tel"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="plan-email">
                      Email Address <span className="req-subtle">(Optional)</span>
                    </label>
                    <input
                      id="plan-email"
                      placeholder="e.g. name@example.com"
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
                    <span>Submit Inquiry</span>
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
      <section
        className="section"
        id="contact-info"
        style={{ background: "var(--bg-surface)" }}
      >
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-col">
              <span className="section-eyebrow gold-text">
                AGARTALA CONCIERGE DESK
              </span>
              <h2 className="section-heading">Connect With Us Directly</h2>
              <p className="section-desc">
                Our travel advisors are based locally in Agartala and available
                across call, WhatsApp, email, or in-person consultations.
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
                    <span className="cm-label">Call Desk</span>
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
                  href="https://wa.me/918731010676"
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
                      Immediate response from travel designers
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
                      For comprehensive customized proposals
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
                    <span className="cm-label">Visit Our Boutique Office</span>
                    <strong className="cm-value">
                      near hornbill restaurant, Banerjee Para, Krishna Nagar,
                      Agartala, Tripura - 799003
                    </strong>
                    <span className="cm-note">
                      In-person itinerary discussion over tea &amp; coffee
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="contact-form-wrapper glass-panel">
                <h3 className="form-title">Send a Quick Message</h3>
                <p className="form-subtitle">
                  Fill in your travel preferences and our travel designers will
                  contact you within 24 hours.
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
      <section className="section faq-section" id="faq">
        <div className="container faq-container">
          <div className="text-center" style={{ marginBottom: "2.5rem" }}>
            <span className="section-eyebrow gold-text">
              HELP &amp; CLARITY
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
    </>
  );
}
