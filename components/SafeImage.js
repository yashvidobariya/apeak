"use client";

import { useState } from "react";

export default function SafeImage({
  src,
  alt,
  className = "",
  style = {},
  priority = false,
  aspectRatio,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Support both direct string paths/URLs and imported image objects from next/image static imports
  const resolvedSrc = typeof src === "object" && src !== null ? src.src || "" : src;

  return (
    <div
      className={`safe-image-container ${loaded ? "is-loaded" : "is-loading"} ${
        error ? "is-error" : ""
      }`}
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f5f4f0",
        aspectRatio: aspectRatio || "auto",
        ...style,
      }}
    >
      {/* Skeleton shimmer while loading */}
      {!loaded && !error && <div className="safe-image-skeleton" />}

      {/* Fallback UI if image fails to load */}
      {error ? (
        <div className="safe-image-fallback">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <span>{alt || "Apeak Collection Item"}</span>
        </div>
      ) : (
        <img
          src={resolvedSrc}
          alt={alt || "Product image"}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`safe-image ${className}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: style.objectFit || "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          {...props}
        />
      )}
    </div>
  );
}
