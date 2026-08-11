"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type CSSProperties } from "react";

type WorkPhoto = {
  src: string;
  title: string;
};

type WorkGalleryProps = {
  photos: WorkPhoto[];
};

export function WorkGallery({ photos }: WorkGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  const closeViewer = useCallback(() => setActiveIndex(null), []);
  const showPrevious = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null
          ? current
          : (current - 1 + photos.length) % photos.length,
      ),
    [photos.length],
  );
  const showNext = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? current : (current + 1) % photos.length,
      ),
    [photos.length],
  );

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeViewer, showNext, showPrevious]);

  return (
    <>
      <div className="work-grid">
        {photos.map((photo, index) => (
          <button
            className="work-card reveal"
            key={photo.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            style={{ "--delay": `${index * 55}ms` } as CSSProperties}
            aria-label={`Open ${photo.title} photo`}
          >
            <Image
              src={photo.src}
              alt={photo.title}
              width={720}
              height={900}
              sizes="(max-width: 680px) 100vw, (max-width: 980px) 50vw, 25vw"
            />
            <span className="work-card-caption">{photo.title}</span>
          </button>
        ))}
      </div>

      {activePhoto && activeIndex !== null ? (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePhoto.title} photo viewer`}
        >
          <button
            className="lightbox-backdrop"
            type="button"
            onClick={closeViewer}
            aria-label="Close image viewer"
          />
          <div className="lightbox-panel">
            <div className="lightbox-toolbar">
              <div>
                <p className="lightbox-count">
                  {activeIndex + 1} / {photos.length}
                </p>
                <h3>{activePhoto.title}</h3>
              </div>
              <button
                className="lightbox-close"
                type="button"
                onClick={closeViewer}
                aria-label="Close image viewer"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>

            <div className="lightbox-stage">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                sizes="100vw"
                priority
              />
              <button
                className="lightbox-nav lightbox-prev"
                type="button"
                onClick={showPrevious}
                aria-label="Show previous photo"
              >
                <span aria-hidden="true">{"<"}</span>
              </button>
              <button
                className="lightbox-nav lightbox-next"
                type="button"
                onClick={showNext}
                aria-label="Show next photo"
              >
                <span aria-hidden="true">{">"}</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
