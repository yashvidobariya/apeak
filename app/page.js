"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getFeaturedProducts, products } from "../data/products";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SafeImage from "../components/SafeImage";

// Import local images from public directory
import nailsImage from "@/public/images/products/3d-alphabet-press-on-nails-main.png";
import drinkwareImage from "@/public/images/products/daisy-flower-water-bottle-main.png";
import kitchenImage from "@/public/images/products/candy-snack-serving-tray-main.png";
import motiMugImage from "@/public/images/products/moti-pearl-textured-ceramic-mug-main.png";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const [activeFaq, setActiveFaq] = useState(null);

  // High-end Editorial Collections Data with rich photography & badges
  const categoryHighlights = [
    {
      title: "Artificial Press-On Nails",
      subtitle: "3D Art & Classic Shapes",
      count: "6 Unique Sets",
      desc: "Salon-grade 3D alphabet, flamingo, & unicorn motifs. Damage-free press-on application designed for instant elegance.",
      image: nailsImage,
      category: "Artificial Nails",
      tag: "Salon Grade",
    },
    {
      title: "Drinkware & Hydration",
      subtitle: "BPA-Free Daily Vessels",
      count: "6 Sleek Designs",
      desc: "Daisy floral bottles, rabbit water bottles, stout wide-body vessels, and tactile pearl-textured ceramic Moti mugs.",
      image: drinkwareImage,
      category: "Drinkware",
      tag: "Everyday Essential",
    },
    {
      title: "Home & Kitchen Accents",
      subtitle: "Smart Storage & Organizers",
      count: "Multi-Compartment Trays",
      desc: "Divided glass-style candy trays for entertaining & space-saving suction window canisters for sleek countertops.",
      image: kitchenImage,
      category: "Home & Kitchen",
      tag: "Countertop Style",
    },
  ];

  // Genuine FAQ content for SEO & AdSense readiness
  const faqs = [
    {
      question: "How long do Apeak press-on artificial nails last?",
      answer: "When applied with proper nail bed preparation (buffing and cleaning with alcohol), our press-on nails typically last 7 to 14 days using nail glue, or 3 to 5 days using temporary adhesive tabs for special occasions.",
    },
    {
      question: "Are your water bottles safe for hot and cold beverages?",
      answer: "Yes, our drinkware collection features food-grade materials that are BPA-free. Specific models like the Moti Mug are crafted for hot coffee and tea, while our wide-body and floral bottles are optimized for daily cold hydration.",
    },
    {
      question: "How are products selected for the Apeak catalog?",
      answer: "We focus exclusively on items that blend everyday functionality with distinctive visual character. Before a product is listed, it undergoes real-world testing for durability, ergonomics, and material safety.",
    },
    {
      question: "What is your shipping?",
      answer: "We inspect every order before dispatch to ensure it meets our quality standards. If your item arrives damaged or does not match the description, please contact our support team within 14 days.",
    },
  ];

  return (
    <div className="homepage-wrapper">
      {/* 1. Immersive Fullscreen Hero */}
      <Hero featuredProduct={featured[0]} />

      {/* 2. Marquee Ticker Strip */}
      <div className="brand-ticker-strip">
        <div className="ticker-track">
          <span>✦ 100% Quality Inspected</span>
          <span>✦ Salon-Grade Press-On Nails</span>
          <span>✦ Food-Grade BPA-Free Drinkware</span>
          <span>✦ Real Customer Support</span>
          <span>✦ Curated Everyday Objects</span>
          <span>✦ 100% Quality Inspected</span>
          <span>✦ Salon-Grade Press-On Nails</span>
          <span>✦ Food-Grade BPA-Free Drinkware</span>
        </div>
      </div>

      {/* 3. Luxury Philosophy Banner */}
      <section className="section section-intro">
        <div className="container">
          <motion.div
            className="intro-split-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="intro-card-text">
              <span className="eyebrow-pill">The Apeak Philosophy</span>
              <h2>Objects crafted for quiet daily satisfaction</h2>
              <p>
                Practical products made for your everyday needs. From cooking and serving to organizing your space, find simple, useful essentials designed to make daily life easier and more convenient.
              </p>

              <div className="intro-metrics-row">
                <div className="metric-box">
                  <span className="metric-number">100%</span>
                  <span className="metric-label">Hand Checked</span>
                </div>
                <div className="metric-divider" />
                <div className="metric-box">
                  <span className="metric-number">0</span>
                  <span className="metric-label">Generic Placeholders</span>
                </div>
                <div className="metric-divider" />
                <div className="metric-box">
                  <span className="metric-number">1+ Year</span>
                  <span className="metric-label">Experience</span>
                </div>
              </div>
            </div>

            <div className="intro-card-media">
              <SafeImage
                src={motiMugImage}
                alt="Moti Pearl Mug Design Detail"
                aspectRatio="4 / 5"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. RE-DESIGNED High-End Category Showcases */}
      <section className="section section-categories bg-surface-alt">
        <div className="container">
          <div className="section-header center-header">
            <span className="eyebrow-pill">Explore Our Collection</span>
            <h2>Designed for modern lifestyles</h2>
            <p className="header-lead">
         Thoughtfully selected products made to add beauty, convenience, and practical value to everyday life.
            </p>
          </div>

          <div className="luxury-category-grid">
            {categoryHighlights.map((cat, idx) => (
              <motion.div
                key={cat.title}
                className="luxury-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Image Stage */}
                <div className="cat-card-stage">
                  <SafeImage src={cat.image} alt={cat.title} aspectRatio="4 / 3" />
                  <div className="cat-stage-overlay" />
                  
                  <div className="cat-card-badges">
                    <span className="cat-badge-tag">{cat.tag}</span>
                    <span className="cat-badge-count">{cat.count}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="cat-card-content">
                  <span className="cat-subtitle">{cat.subtitle}</span>
                  <h3 className="cat-title">{cat.title}</h3>
                  <p className="cat-desc">{cat.desc}</p>

                  <Link
                    href={`/shop?category=${encodeURIComponent(cat.category)}`}
                    className="cat-action-link"
                  >
                    <span>Browse Collection</span>
                    <div className="link-arrow-circle">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Products Showcase */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header flex-header">
            <div>
              <span className="eyebrow-pill">Curated Highlights</span>
              <h2>Featured Products</h2>
            </div>
            <Link href="/shop" className="btn btn-outline">
              View Complete Catalog ({products.length} Items) →
            </Link>
          </div>

          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Apeak (Dark Trust Section) */}
      <section className="section section-why bg-dark">
        <div className="container">
          <div className="section-header center-header dark-header">
            <span className="eyebrow-pill dark-pill">The Apeak Standard</span>
            <h2>Everyday quality without compromise</h2>
          </div>

          <div className="why-grid-v2">
            <div className="why-card-v2">
              <div className="why-icon-v2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Rigorous Inspection</h3>
              <p>
                Every press-on set, drinkware lid, and kitchen organizer is checked for smooth edges, secure seals, and color consistency.
              </p>
            </div>

            <div className="why-card-v2">
              <div className="why-icon-v2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3>Safe Cushion Packaging</h3>
              <p>
                We package delicate items using protective cushioning so your bottles and acrylic nails arrive in flawless condition.
              </p>
            </div>

            <div className="why-card-v2">
              <div className="why-icon-v2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3>Human Customer Support</h3>
              <p>
                Need sizing advice or have questions about a product? Send us a message and receive clear, helpful answers from our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Real FAQ Section */}
      <section className="section section-faq">
        <div className="container">
          <div className="faq-wrapper">
            <div className="faq-header">
              <span className="eyebrow-pill">Frequently Asked Questions</span>
              <h2>Everything you need to know</h2>
              <p>Direct answers about our catalog, materials, and application.</p>
            </div>

            <div className="faq-accordion">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className={`faq-item ${isOpen ? "is-open" : ""}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Conversion CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner">
          <h2>Elevate your daily space & style</h2>
          <p>
            Explore our curated catalog of 3D artificial nails, water bottles, and organizing accents today.
          </p>
          <div className="cta-actions">
            <Link href="/shop" className="btn btn-cta-primary">
              Browse Full Shop
            </Link>
            <Link href="/contact" className="btn btn-cta-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
