"use client";

import { useState, useEffect } from "react";

let toastTrigger = null;

export function showToast(title, desc) {
  if (toastTrigger) {
    toastTrigger(title, desc);
  }
}

export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    toastTrigger = (title, desc) => {
      setToast({ title, desc });
      setTimeout(() => {
        setToast(null);
      }, 4500);
    };
    return () => {
      toastTrigger = null;
    };
  }, []);

  if (!toast) return null;

  return (
    <div className="toast-notification show" id="toast-notification">
      <div className="toast-icon">
        <FaWandMagicSparkles />
      </div>
      <div className="toast-content">
        <h4 className="toast-title">{toast.title}</h4>
        <p className="toast-desc">{toast.desc}</p>
      </div>
      <button className="toast-close" onClick={() => setToast(null)}>
        &times;
      </button>
    </div>
  );
}
