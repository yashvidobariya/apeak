"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SafeImage from "./SafeImage";

export default function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const [prevProduct, setPrevProduct] = useState(product);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Reset active state when product changes
  if (prevProduct !== product) {
    setPrevProduct(product);
    setActiveImage(0);
    setActiveTab("overview");
  }

  // Handle escape key and scroll locking
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!product) return null;

  const images = product.images || [];
  const safeActiveIndex = activeImage >= images.length ? 0 : activeImage;
  const currentImg = images[safeActiveIndex];
  const details = product.details || {};
  const detailEntries = Object.entries(details).filter(([, v]) => v);

  function handleShare() {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <AnimatePresence>
      <div className="product-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
        {/* Backdrop overlay blur */}
        <motion.div
          className="modal-backdrop-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal Window Container */}
        <motion.div
          className="product-modal-window"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          {/* Floating Close Button */}
          <button className="modal-close-floating" onClick={onClose} aria-label="Close product view">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="modal-content-grid">
            {/* Left Column: Interactive Image Gallery */}
            <div className="modal-gallery-column">
              <div className="modal-main-stage">
                {currentImg && (
                  <SafeImage
                    src={currentImg.src}
                    alt={currentImg.alt || product.title}
                    aspectRatio="1 / 1"
                  />
                )}
                <div className="stage-badge">{product.category}</div>
                {product.featured && <div className="stage-featured-tag">✦ Featured Choice</div>}
              </div>

              {/* Thumbnails Strip */}
              {images.length > 1 && (
                <div className="modal-thumbnails-strip">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      className={`thumb-card ${idx === safeActiveIndex ? "is-active" : ""}`}
                      onClick={() => setActiveImage(idx)}
                      aria-label={`View photo ${idx + 1}`}
                    >
                      <SafeImage src={img.src} alt={img.alt || `${product.title} view ${idx + 1}`} aspectRatio="1 / 1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Full Detail Inspector */}
            <div className="modal-info-column">
              {/* Header Badges */}
              <div className="modal-info-header">
                <span className="category-pill-badge">{product.category}</span>
                <span className="sku-code">REF: {product.id}</span>
              </div>

              <h2 className="modal-product-title">{product.title}</h2>

              {/* Navigation Tabs (Overview, Specifications, Care) */}
              <div className="modal-detail-tabs">
                <button
                  className={`modal-tab-btn ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview & Features
                </button>
                <button
                  className={`modal-tab-btn ${activeTab === "specs" ? "active" : ""}`}
                  onClick={() => setActiveTab("specs")}
                >
                  Technical Specs
                </button>
                <button
                  className={`modal-tab-btn ${activeTab === "care" ? "active" : ""}`}
                  onClick={() => setActiveTab("care")}
                >
                  Guarantee & Care
                </button>
              </div>

              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <motion.div
                  className="tab-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="modal-description">{product.description}</p>

                  {product.features && product.features.length > 0 && (
                    <div className="modal-features-box">
                      <h4>Highlights & Key Features</h4>
                      <ul className="features-checklist">
                        {product.features.map((feat, i) => (
                          <li key={i}>
                            <span className="check-icon">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab 2: Technical Specifications Table */}
              {activeTab === "specs" && (
                <motion.div
                  className="tab-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="specs-table-wrapper">
                    <table className="modal-specs-table">
                      <tbody>
                        {detailEntries.map(([key, val]) => (
                          <tr key={key}>
                            <td className="spec-name">
                              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                            </td>
                            <td className="spec-value">{val}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="spec-name">Inspection Status</td>
                          <td className="spec-value">100% Quality Checked Prior to Packing</td>
                        </tr>
                        <tr>
                          <td className="spec-name">Material Standard</td>
                          <td className="spec-value">Food-grade / Non-toxic acrylic & ceramic</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Guarantee & Care */}
              {activeTab === "care" && (
                <motion.div
                  className="tab-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="care-info-cards">
                    <div className="care-card">
                      <div className="care-icon">🛡️</div>
                      <div>
                        <strong>Apeak Product Guarantee</strong>
                        <p>Every item is carefully checked before shipment to ensure it meets our quality standards. We focus on delivering products that are reliable, well-finished, and ready for everyday use.</p>
                      </div>
                    </div>
                    <div className="care-card">
                      <div className="care-icon">✨</div>
                      <div>
                        <strong>Maintenance & Handling</strong>
                        <p>To keep your products looking their best, we recommend gentle care. Use a soft, damp cloth for cleaning and avoid abrasive materials that could scratch the surface. Store items in a dry place when not in use to preserve their finish and quality.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Bottom Action Footer Bar */}
              <div className="modal-action-bar">
                <Link
                  href="/contact"
                  className="btn btn-primary modal-inquire-btn"
                  onClick={onClose}
                >
                  <span>Inquire / Request Item</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </Link>

                <button className="btn btn-outline modal-share-btn" onClick={handleShare}>
                  {copied ? "Link Copied! ✓" : "Share Item 🔗"}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
