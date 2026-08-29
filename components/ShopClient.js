"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products, getProductsByCategory, categories } from "../data/products";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") || "All";

  const [query, setQuery] = useState("");
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function handleCategoryChange(cat) {
    if (cat === "All") {
      router.push("/shop");
    } else {
      router.push(`/shop?category=${encodeURIComponent(cat)}`);
    }
  }

  // Filter pipeline
  let filtered = activeCategory === "All" ? products : getProductsByCategory(activeCategory);

  if (showFeaturedOnly) {
    filtered = filtered.filter((p) => p.featured);
  }

  if (query.trim()) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  return (
    <div className="shop-page-wrapper">
      {/* Shop Hero Header Banner */}
      <section className="shop-banner">
        <div className="container shop-banner-inner">
          <span className="eyebrow-pill">Apeak Store Catalog</span>
          <h1>Thoughtfully Curated Collection</h1>
          <p>
            Explore artificial press-on nails, stylish drinkware, and functional home organizers — built for daily durability.
          </p>

          {/* Quick Horizontal Category Pills for Instant Access */}
          <div className="top-category-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`top-cat-chip ${activeCategory === cat ? "active" : ""}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="container shop-main-container">
        {/* Mobile Filter Trigger Bar */}
        <div className="mobile-filter-bar">
          <button
            className="btn btn-outline filter-trigger-btn"
            onClick={() => setSidebarOpen(true)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14" />
              <line x1="4" y1="10" x2="4" y2="3" />
              <line x1="12" y1="21" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12" y2="3" />
              <line x1="20" y1="21" x2="20" y2="16" />
              <line x1="20" y1="12" x2="20" y2="3" />
              <line x1="1" y1="14" x2="7" y2="14" />
              <line x1="9" y1="8" x2="15" y2="8" />
              <line x1="17" y1="16" x2="23" y2="16" />
            </svg>
            <span>Filter Catalog</span>
          </button>
          <span className="mobile-result-count">
            <strong>{filtered.length}</strong> items
          </span>
        </div>

        {/* 2-Column Layout */}
        <div className="shop-grid-layout">
          {/* Filter Sidebar */}
          <Sidebar
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            query={query}
            onQueryChange={setQuery}
            showFeaturedOnly={showFeaturedOnly}
            onToggleFeatured={setShowFeaturedOnly}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          {/* Main Products Grid */}
          <main className="shop-catalog-main">
            {/* Active Filters Toolbar */}
            <div className="catalog-toolbar">
              <div className="toolbar-info">
                <span>Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? "product" : "products"}</span>
                {activeCategory !== "All" && <span className="toolbar-active-tag">in {activeCategory}</span>}
                {showFeaturedOnly && <span className="toolbar-active-tag">Featured</span>}
              </div>

              {(query || activeCategory !== "All" || showFeaturedOnly) && (
                <button
                  className="clear-filters-link"
                  onClick={() => {
                    handleCategoryChange("All");
                    setQuery("");
                    setShowFeaturedOnly(false);
                  }}
                >
                  Clear all filters ✕
                </button>
              )}
            </div>

            {/* Empty State */}
            {filtered.length === 0 ? (
              <motion.div
                className="no-results-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="empty-icon">🔍</div>
                <h3>No items match your filters</h3>
                <p>Try searching for a different keyword or switching categories.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handleCategoryChange("All");
                    setQuery("");
                    setShowFeaturedOnly(false);
                  }}
                >
                  Reset Catalog Filters
                </button>
              </motion.div>
            ) : (
              <div className="product-grid">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

    </div>
  );
}
