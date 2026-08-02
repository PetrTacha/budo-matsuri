"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import styles from "./PhotoGridModal.module.scss";

/**
 * @param {{ images?: Array<{ id: string; src: string; alt: string }> }} props
 */
export default function PhotoGridModal({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const normalizedImages = useMemo(
    () =>
      images.filter(
        (item) => item && typeof item.src === "string" && typeof item.alt === "string",
      ),
    [images],
  );

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [selectedImage]);

  return (
    <section className={styles.wrapper} aria-label="Fotogalerie">
      {normalizedImages.length === 0 ? (
        <p className={styles.empty}>Galerie je připravená. Doplňte fotografie do datového souboru.</p>
      ) : (
        <div className={styles.grid}>
          {normalizedImages.map((image) => (
            <button
              type="button"
              key={image.id}
              className={styles.tileButton}
              onClick={() => setSelectedImage(image)}
              aria-label={`Otevřít fotografii: ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={450}
                className={styles.thumbnail}
              />
            </button>
          ))}
        </div>
      )}

      {selectedImage && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
              aria-label="Zavřít náhled"
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1600}
              height={1200}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
