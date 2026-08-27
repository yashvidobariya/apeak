"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SafeImage from "./SafeImage";
import ThreeDCanvas from "./ThreeDCanvas";

export default function Hero({ featuredProduct }) {
  const heroImageSrc =
    "/images/products/2.jpg";

  return (
    <section className="hero-fullscreen">
      {/* Background Image Layer */}
      <div className="hero-bg-wrapper">
        <SafeImage
          src={heroImageSrc}
          alt="Apeak™ Curated Collection Hero"
          priority={true}
          className="hero-bg-img"
        />
        <div className="hero-overlay" />
      </div>

      {/* Hero Editorial Content Layer */}
      <div className="hero-container container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* <motion.div
            className="hero-eyebrow-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="dot" /> Hand-picked Apeak™ Artifacts
          </motion.div> */}

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Small things,
            <br />
            <span className="serif-italic">beautifully chosen.</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover everyday products that bring a little more style, comfort,
            and convenience to your routine. From personal essentials to useful
            home finds, we carefully select pieces that are practical,
            appealing, and worth having around.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Link href="/shop" className="btn btn-hero-primary">
              Explore Collection
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-hero-secondary">
              Discover Our Story
            </Link>
          </motion.div>

          <motion.div
            className="hero-trust-bar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span>100% Quality Checked</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span>Express Delivery</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-icon">✦</span>
              <span>Real Customer Care</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
