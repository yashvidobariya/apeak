"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { categories, products } from "../data/products";

export default function Sidebar({
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  showFeaturedOnly,
  onToggleFeatured,
  isOpen,
  onClose,
}) {
  const pathname = usePathname();

  function getCategoryCount(cat) {
    if (cat === "All") return products.length;
    return products.filter((p) => p.category === cat).length;
  }

  const categoryIcons = {
    All: "✦",
    "Artificial Nails": "✨",
    Drinkware: "🥤",
    "Home & Kitchen": "🏠",
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="filter-drawer-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside className={`filter-sidebar ${isOpen ? "is-open" : ""}`}>
        <div className="sidebar-card">
          {/* Header */}
          <div className="sidebar-card-header">
            <div>
              <span className="sidebar-subtitle">Refine Catalog</span>
              <h3 className="sidebar-title">Filters & Categories</h3>
            </div>
            {onClose && (
              <button className="filter-close-btn" onClick={onClose} aria-label="Close filters">
                ✕
              </button>
            )}
          </div>

          {/* Search Box */}
          <div className="sidebar-filter-group">
            <label className="filter-label" htmlFor="catalog-search-input">
              Search Products
            </label>
            <div className="search-input-wrapper">
              <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                id="catalog-search-input"
                type="text"
                className="filter-search-input"
                placeholder="Search press-ons, bottles..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
              />
              {query && (
                <button
                  className="search-clear-btn"
                  onClick={() => onQueryChange("")}
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Categories Pill Buttons */}
          <div className="sidebar-filter-group">
            <label className="filter-label">Category</label>
            <div className="category-pill-list">
              {categories.map((cat) => {
                const count = getCategoryCount(cat);
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    className={`category-pill-btn ${isActive ? "active" : ""}`}
                    onClick={() => {
                      onCategoryChange(cat);
                      if (onClose) onClose();
                    }}
                  >
                    <span className="cat-pill-icon">{categoryIcons[cat] || "•"}</span>
                    <span className="cat-pill-name">{cat}</span>
                    <span className="cat-pill-badge">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filter Toggles */}
          <div className="sidebar-filter-group">
            <label className="filter-label">Quick Filters</label>
            <label className="custom-toggle-card">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => onToggleFeatured(e.target.checked)}
              />
              <span className="toggle-switch" />
              <div className="toggle-label-text">
                <strong>Featured Picks Only</strong>
                <small>Show hand-selected items</small>
              </div>
            </label>
          </div>

          {/* Reset Filters */}
          {(query || activeCategory !== "All" || showFeaturedOnly) && (
            <button
              className="reset-all-filters-btn"
              onClick={() => {
                onCategoryChange("All");
                onQueryChange("");
                onToggleFeatured(false);
              }}
            >
              Reset All Filters ✕
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
