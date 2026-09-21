"use client";

import { useState, useEffect } from "react";
import { FaCheck, FaXmark, FaPaperPlane } from "react-icons/fa6";

import confetti from "canvas-confetti";

let modalTrigger = null;

export function showSuccessModal(title, message, details) {
  if (modalTrigger) {
    modalTrigger({ title, message, details });
  } else if (typeof window !== "undefined" && window._showSuccessModal) {
    window._showSuccessModal({ title, message, details });
  }
}

export default function SuccessModal() {
  const [data, setData] = useState(null);
  const [confettiPieces, setConfettiPieces] = useState([]);

  const fireCanvasConfetti = () => {
    try {
      // Center burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.55 },
        colors: ["#d8a846", "#f3c766", "#3cd0bd", "#1e8b7d", "#ffffff", "#ff6b6b"],
        zIndex: 10002,
      });

      // Left & right cannons
      setTimeout(() => {
        confetti({
          particleCount: 45,
          angle: 60,
          spread: 55,
          origin: { x: 0.1, y: 0.65 },
          colors: ["#d8a846", "#f3c766", "#3cd0bd"],
          zIndex: 10002,
        });
        confetti({
          particleCount: 45,
          angle: 120,
          spread: 55,
          origin: { x: 0.9, y: 0.65 },
          colors: ["#d8a846", "#f3c766", "#3cd0bd"],
          zIndex: 10002,
        });
      }, 200);
    } catch (e) {
      console.warn("Canvas confetti error:", e);
    }
  };

  const triggerConfetti = () => {
    fireCanvasConfetti();
    const pieces = Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animDuration: 1.8 + Math.random() * 1.5,
      delay: Math.random() * 0.4,
      bg: [
        "#d8a846",
        "#f3c766",
        "#3cd0bd",
        "#1e8b7d",
        "#ff6b6b",
        "#4ecdc4",
        "#ffe66d",
      ][Math.floor(Math.random() * 7)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));
    setConfettiPieces(pieces);
  };

  useEffect(() => {
    const handleOpen = (payload) => {
      setData(payload);
      triggerConfetti();
    };

    modalTrigger = handleOpen;
    if (typeof window !== "undefined") {
      window._showSuccessModal = handleOpen;
    }

    return () => {
      modalTrigger = null;
      if (typeof window !== "undefined") {
        delete window._showSuccessModal;
      }
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setData(null);
      }
    };
    if (data) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [data]);

  if (!data) return null;

  return (
    <div
      className="success-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) setData(null);
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-heading"
    >
      {/* Falling Confetti Layer */}
      <div className="confetti-container" aria-hidden="true">
        {confettiPieces.map((p) => (
          <span
            key={p.id}
            className="confetti-piece"
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.animDuration}s`,
              animationDelay: `${p.delay}s`,
              backgroundColor: p.bg,
              width: `${p.size}px`,
              height: `${p.size * 1.4}px`,
              transform: `rotate(${p.rotation}deg)`,
            }}
          />
        ))}
      </div>

      <div className="success-modal-card glass-panel">
        <button
          type="button"
          className="success-modal-close"
          onClick={() => setData(null)}
          aria-label="Close dialog"
        >
          <FaXmark size={18} />
        </button>

        <div className="success-modal-icon-wrap">
          <div className="success-modal-icon-glow"></div>
          <div className="success-modal-icon">
            <FaCheck size={28} />
          </div>
        </div>

        <h3 id="success-modal-heading" className="success-modal-title">
          {data.title || "Inquiry Received!"}
        </h3>

        <p className="success-modal-desc">
          {data.message ||
            "Your travel preferences have been registered into our CRM. Our Agartala concierge desk will connect with you within 24 hours."}
        </p>

        {data.details && (
          <div className="success-modal-details">
            {data.details.destination && (
              <div className="detail-item">
                <span className="detail-label">Destination:</span>
                <span className="detail-value">{data.details.destination}</span>
              </div>
            )}
            {data.details.phone && (
              <div className="detail-item">
                <span className="detail-label">Contact:</span>
                <span className="detail-value">{data.details.phone}</span>
              </div>
            )}
          </div>
        )}

        <div className="success-modal-actions">
          <button
            type="button"
            className="btn btn-gold w-100"
            onClick={() => setData(null)}
          >
            <span>Wonderful, Thank You!</span>
          </button>
        </div>
      </div>
    </div>
  );
}
