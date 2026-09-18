"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;
    const dot = cursor.querySelector(".cursor-dot");
    const ring = cursor.querySelector(".cursor-ring");
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animFrame;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const renderRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animFrame = requestAnimationFrame(renderRing);
    };

    window.addEventListener("mousemove", onMouseMove);
    animFrame = requestAnimationFrame(renderRing);

    const onMouseEnter = () => cursor.classList.add("hovering");
    const onMouseLeave = () => cursor.classList.remove("hovering");

    const attachHover = () => {
      const interactiveEls = document.querySelectorAll(
        "a, button, input, select, textarea, .card, .clickable",
      );
      interactiveEls.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
      });
    };

    attachHover();
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrame);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="custom-cursor" id="custom-cursor" aria-hidden="true">
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  );
}
