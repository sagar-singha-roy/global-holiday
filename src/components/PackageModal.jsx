"use client";

import { useModal } from "@/context/ModalContext";

export default function PackageModal() {
  const { activePackage: data, closePackage } = useModal();

  if (!data) return null;

  const waText = encodeURIComponent(
    `Hello Global Holidays Agartala, I am interested in booking the "${data.title}" (${data.duration}). Please share custom pricing and availability.`,
  );

  return (
    <div className="pkg-modal-backdrop" onClick={closePackage}>
      <dialog
        id="package-modal"
        className="luxury-modal"
        open
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-pkg-modal"
          className="modal-close-btn"
          aria-label="Close Itinerary Details"
          onClick={closePackage}
        >
          &times;
        </button>
        <div id="pkg-modal-content" className="modal-body-scroll">
          {/* Hero Banner */}
          <div
            style={{
              position: "relative",
              height: "260px",
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              marginBottom: "1.75rem",
              border: "1px solid var(--border-gold)",
            }}
          >
            <img
              src={data.heroImg}
              alt={data.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                background: "rgba(6,17,16,0.88)",
                padding: "0.45rem 1.1rem",
                borderRadius: "var(--radius-pill)",
                fontSize: "0.82rem",
                fontWeight: "700",
                color: "#f3c766",
                border: "1px solid var(--border-gold)",
                textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span>{data.duration}</span>
              <span>•</span>
              <div className="price-reveal-wrap">
                <span className="blurred-price" style={{ fontSize: "0.82rem" }}>
                  {data.price} / person
                </span>
                <span
                  className="revealing-soon-badge"
                  style={{ fontSize: "0.65rem", padding: "0.1rem 0.4rem" }}
                >
                  Revealing Soon
                </span>
              </div>
            </div>
          </div>

          <span
            style={{
              fontSize: "0.75rem",
              color: "var(--text-gold)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: "700",
            }}
          >
            Global Holidays Curated Circuit
          </span>
          <h2
            style={{
              fontSize: "2.2rem",
              fontFamily: "var(--font-serif)",
              margin: "0.3rem 0 0.75rem",
              lineHeight: "1.2",
              color: "var(--text-primary)",
            }}
          >
            {data.title}
          </h2>
          <p
            style={{
              color: "var(--accent-teal)",
              fontSize: "0.95rem",
              fontWeight: "600",
              marginBottom: "1.25rem",
            }}
          >
            {data.destination}
          </p>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: "1.7",
              marginBottom: "2rem",
            }}
          >
            {data.overview}
          </p>

          <h3
            style={{
              fontSize: "1.4rem",
              fontFamily: "var(--font-serif)",
              marginBottom: "1.25rem",
              color: "var(--text-primary)",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "0.5rem",
            }}
          >
            Detailed Day-by-Day Itinerary
          </h3>
          <div style={{ marginBottom: "2.5rem" }}>
            {data.itinerary.map((item, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: "1.5rem",
                  paddingLeft: "1.25rem",
                  borderLeft: "2px solid var(--gold-light)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    color: "var(--gold-light)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.day}
                </span>
                <h4
                  style={{
                    fontSize: "1.15rem",
                    color: "var(--text-primary)",
                    margin: "0.2rem 0 0.4rem",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Inclusions & Exclusions */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem",
              background: "var(--bg-surface-elevated)",
              padding: "1.5rem",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <h4
                style={{
                  color: "var(--text-gold)",
                  marginBottom: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Package Inclusions
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.inclusions.map((inc, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "0.4rem",
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                    }}
                  >
                    <FaCheck
                      style={{
                        marginRight: "6px",
                        color: "var(--accent-gold)",
                      }}
                    />{" "}
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4
                style={{
                  color: "var(--text-muted)",
                  marginBottom: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                Exclusions
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.exclusions.map((exc, i) => (
                  <li
                    key={i}
                    style={{
                      marginBottom: "0.4rem",
                      color: "var(--text-muted)",
                      fontSize: "0.85rem",
                    }}
                  >
                    <FaXmark
                      style={{ marginRight: "6px", color: "var(--text-muted)" }}
                    />{" "}
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Actions */}
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  fontWeight: "600",
                }}
              >
                Starting Price
              </span>
              <div
                className="price-reveal-wrap"
                style={{ marginTop: "0.25rem" }}
              >
                <div
                  className="blurred-price"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "700",
                    color: "var(--text-gold)",
                  }}
                >
                  {data.price}{" "}
                  <small
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "400",
                      color: "var(--text-muted)",
                    }}
                  >
                    / person
                  </small>
                </div>
                <span className="revealing-soon-badge">Revealing Soon</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/918731010676?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <span>Inquire on WhatsApp</span>
              </a>
              <button onClick={closePackage} className="btn btn-outline-glass">
                Close Itinerary
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
