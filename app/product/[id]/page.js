"use client";

import { useState, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "../../../data/products";
import SafeImage from "../../../components/SafeImage";

export default function ProductPage({ params }) {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  
  const product = products.find((p) => p.id === id);

  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  if (!product) {
    return (
      <div className="container" style={{ paddingTop: "120px", paddingBottom: "100px", textAlign: "center" }}>
        <h1>Product Not Found</h1>
        <p>The product you are looking for does not exist or has been removed.</p>
        <Link href="/shop" className="btn btn-primary" style={{ marginTop: "24px" }}>Back to Shop</Link>
      </div>
    );
  }

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
    <div className="product-page-wrapper" style={{ paddingTop: "calc(var(--header-h) + 40px)", paddingBottom: "80px" }}>
      <div className="container">
        <div className="product-details-grid" style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          boxShadow: "var(--shadow-sm)"
        }}>
          {/* Left Column: Interactive Image Gallery */}
          <div className="modal-gallery-column" style={{ padding: "40px", borderRight: "1px solid var(--border)", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div className="modal-main-stage" style={{ position: "relative", width: "100%", aspectRatio: "1/1", borderRadius: "var(--radius-md)", overflow: "hidden", background: "#f5f4f0" }}>
              {currentImg && (
                <SafeImage
                  src={currentImg.src}
                  alt={currentImg.alt || product.title}
                  aspectRatio="1 / 1"
                />
              )}
              <div className="stage-badge" style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)", padding: "4px 10px", borderRadius: "var(--radius-full)", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", color: "#111" }}>{product.category}</div>
              {product.featured && <div className="stage-featured-tag" style={{ position: "absolute", bottom: "16px", right: "16px", background: "#111", color: "#fff", padding: "4px 10px", borderRadius: "var(--radius-full)", fontSize: "10px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>✦ Featured Choice</div>}
            </div>

            {/* Thumbnails Strip */}
            {images.length > 1 && (
              <div className="modal-thumbnails-strip" style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "4px" }}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`thumb-card ${idx === safeActiveIndex ? "is-active" : ""}`}
                    onClick={() => setActiveImage(idx)}
                    aria-label={`View photo ${idx + 1}`}
                    style={{
                      width: "80px",
                      height: "80px",
                      flexShrink: 0,
                      borderRadius: "var(--radius-sm)",
                      overflow: "hidden",
                      border: idx === safeActiveIndex ? "2px solid var(--ink)" : "1px solid var(--border)",
                      transition: "all 0.2s"
                    }}
                  >
                    <SafeImage src={img.src} alt={img.alt || `${product.title} view ${idx + 1}`} aspectRatio="1 / 1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Full Detail Inspector */}
          <div className="modal-info-column" style={{ padding: "40px" }}>
            {/* Header Badges */}
            <div className="modal-info-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <span className="category-pill-badge" style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--accent-gold)" }}>{product.category}</span>
              <span className="sku-code" style={{ fontSize: "11px", fontWeight: "600", color: "var(--muted)" }}>REF: {product.id}</span>
            </div>

            <h1 className="modal-product-title" style={{ fontSize: "32px", marginBottom: "24px", color: "var(--ink)" }}>{product.title}</h1>

            {/* Navigation Tabs */}
            <div className="modal-detail-tabs" style={{ display: "flex", gap: "8px", marginBottom: "24px", borderBottom: "1px solid var(--border-light)" }}>
              <button
                className={`modal-tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
                style={{ padding: "12px 16px", fontSize: "13.5px", fontWeight: "600", borderBottom: activeTab === "overview" ? "2px solid var(--ink)" : "2px solid transparent", color: activeTab === "overview" ? "var(--ink)" : "var(--muted)" }}
              >
                Overview
              </button>
              <button
                className={`modal-tab-btn ${activeTab === "specs" ? "active" : ""}`}
                onClick={() => setActiveTab("specs")}
                style={{ padding: "12px 16px", fontSize: "13.5px", fontWeight: "600", borderBottom: activeTab === "specs" ? "2px solid var(--ink)" : "2px solid transparent", color: activeTab === "specs" ? "var(--ink)" : "var(--muted)" }}
              >
                Specs
              </button>
              <button
                className={`modal-tab-btn ${activeTab === "care" ? "active" : ""}`}
                onClick={() => setActiveTab("care")}
                style={{ padding: "12px 16px", fontSize: "13.5px", fontWeight: "600", borderBottom: activeTab === "care" ? "2px solid var(--ink)" : "2px solid transparent", color: activeTab === "care" ? "var(--ink)" : "var(--muted)" }}
              >
                Care
              </button>
            </div>

            <AnimatePresence mode="wait">
              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  className="tab-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="modal-description" style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-soft)", marginBottom: "24px" }}>{product.description}</p>

                  {product.features && product.features.length > 0 && (
                    <div className="modal-features-box" style={{ background: "var(--surface-alt)", padding: "20px", borderRadius: "var(--radius-md)" }}>
                      <h4 style={{ fontSize: "13.5px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px", color: "var(--ink)" }}>Highlights & Key Features</h4>
                      <ul className="features-checklist" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {product.features.map((feat, i) => (
                          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--ink-soft)", lineHeight: "1.5" }}>
                            <span className="check-icon" style={{ color: "var(--accent-gold)", fontWeight: "bold" }}>✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Tab 2: Specs */}
              {activeTab === "specs" && (
                <motion.div
                  key="specs"
                  className="tab-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="specs-table-wrapper" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                    <table className="modal-specs-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {detailEntries.map(([key, val]) => (
                          <tr key={key} style={{ borderBottom: "1px solid var(--border-light)", background: "var(--paper)" }}>
                            <td className="spec-name" style={{ padding: "16px 20px", fontSize: "13.5px", fontWeight: "600", color: "var(--ink)", width: "35%", borderRight: "1px solid var(--border-light)" }}>
                              {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1")}
                            </td>
                            <td className="spec-value" style={{ padding: "16px 20px", fontSize: "14px", color: "var(--ink-soft)" }}>{val}</td>
                          </tr>
                        ))}
                        <tr style={{ borderBottom: "1px solid var(--border-light)", background: "var(--paper)" }}>
                          <td className="spec-name" style={{ padding: "16px 20px", fontSize: "13.5px", fontWeight: "600", color: "var(--ink)", borderRight: "1px solid var(--border-light)" }}>Inspection Status</td>
                          <td className="spec-value" style={{ padding: "16px 20px", fontSize: "14px", color: "var(--ink-soft)" }}>100% Quality Checked Prior to Packing</td>
                        </tr>
                        <tr style={{ background: "var(--paper)" }}>
                          <td className="spec-name" style={{ padding: "16px 20px", fontSize: "13.5px", fontWeight: "600", color: "var(--ink)", borderRight: "1px solid var(--border-light)" }}>Material Standard</td>
                          <td className="spec-value" style={{ padding: "16px 20px", fontSize: "14px", color: "var(--ink-soft)" }}>Food-grade / Non-toxic acrylic & ceramic</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {/* Tab 3: Care */}
              {activeTab === "care" && (
                <motion.div
                  key="care"
                  className="tab-content"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="care-info-cards" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div className="care-card" style={{ display: "flex", gap: "16px", padding: "20px", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>
                      <div className="care-icon" style={{ fontSize: "24px" }}>🛡️</div>
                      <div>
                        <strong style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "var(--ink)" }}>Apeak Product Guarantee</strong>
                        <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--ink-soft)" }}>Every item is carefully checked before shipment to ensure it meets our quality standards. We focus on delivering products that are reliable, well-finished, and ready for everyday use.</p>
                      </div>
                    </div>
                    <div className="care-card" style={{ display: "flex", gap: "16px", padding: "20px", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>
                      <div className="care-icon" style={{ fontSize: "24px" }}>✨</div>
                      <div>
                        <strong style={{ display: "block", fontSize: "14px", marginBottom: "6px", color: "var(--ink)" }}>Maintenance & Handling</strong>
                        <p style={{ fontSize: "13.5px", lineHeight: "1.6", color: "var(--ink-soft)" }}>To keep your products looking their best, we recommend gentle care. Use a soft, damp cloth for cleaning and avoid abrasive materials that could scratch the surface. Store items in a dry place when not in use to preserve their finish and quality.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Action Footer Bar */}
            <div className="modal-action-bar" style={{ display: "flex", gap: "12px", marginTop: "40px", paddingTop: "24px", borderTop: "1px solid var(--border-light)" }}>
              <Link
                href="/contact"
                className="btn btn-primary modal-inquire-btn"
                style={{ flexGrow: 1 }}
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
      </div>
      
      {/* Responsive Styles block specifically for this grid if needed, though we can inline a media query using a style tag */}
      <style jsx>{`
        @media (max-width: 900px) {
          .product-details-grid {
            grid-template-columns: 1fr !important;
          }
          .modal-gallery-column {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
        }
        @media (max-width: 600px) {
          .modal-gallery-column, .modal-info-column {
            padding: 24px !important;
          }
          .modal-product-title {
            font-size: 24px !important;
          }
          .modal-action-bar {
            flex-direction: column !important;
          }
        }
      `}</style>
    </div>
  );
}
