"use client";

import { useModal } from "@/context/ModalContext";

export default function LightboxModal() {
  const { lightboxData, closeLightbox, openLightbox } = useModal();

  if (!lightboxData) return null;

  const { src, alt, title, subtitle, items, index } = lightboxData;

  const hasNext = items && items.length > 1;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (!items || items.length <= 1) return;
    const newIdx = (index - 1 + items.length) % items.length;
    const item = items[newIdx];
    openLightbox({
      src: item.src || item.imageSrc,
      alt: item.alt || item.title,
      title: item.title,
      subtitle: item.location || item.authority,
      items,
      index: newIdx,
    });
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (!items || items.length <= 1) return;
    const newIdx = (index + 1) % items.length;
    const item = items[newIdx];
    openLightbox({
      src: item.src || item.imageSrc,
      alt: item.alt || item.title,
      title: item.title,
      subtitle: item.location || item.authority,
      items,
      index: newIdx,
    });
  };

  return (
    <div className="lightbox-backdrop" onClick={closeLightbox}>
      <dialog
        id="gallery-lightbox"
        className="luxury-lightbox"
        open
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="close-lightbox"
          className="lightbox-close-btn"
          aria-label="Close Preview"
          onClick={closeLightbox}
        >
          &times;
        </button>

        {hasNext && (
          <button
            id="lightbox-prev"
            className="lightbox-nav-btn prev-btn"
            aria-label="Previous image"
            onClick={handlePrev}
          >
            &#8249;
          </button>
        )}

        <figure className="lightbox-figure">
          <img
            id="lightbox-img"
            src={src}
            alt={alt || title || "Fullscreen preview"}
          />
          {(title || subtitle) && (
            <figcaption className="lightbox-caption">
              {title && <h3 id="lightbox-title">{title}</h3>}
              {subtitle && <p id="lightbox-sub">{subtitle}</p>}
            </figcaption>
          )}
        </figure>

        {hasNext && (
          <button
            id="lightbox-next"
            className="lightbox-nav-btn next-btn"
            aria-label="Next image"
            onClick={handleNext}
          >
            &#8250;
          </button>
        )}
      </dialog>
    </div>
  );
}
