"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { products, categories, searchProducts } from "../data/products";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setShopDropdownOpen(false);
  }, [pathname]);

  // Scroll detection for dynamic morphing
  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 25);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu or search modal is open
  useEffect(() => {
    if (menuOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, searchOpen]);

  // Focus search input when search modal opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Keyboard shortcut (⌘K or Ctrl+K / Escape)
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchResults = searchQuery.trim() ? searchProducts(searchQuery).slice(0, 5) : [];

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setShopDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShopDropdownOpen(false);
    }, 200);
  };

  return (
    <>
      {/* Top Floating Glass Header */}
      <header className={`unique-floating-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="header-capsule-wrapper">
          <div className="header-capsule-inner">
            
            {/* 1. Brand Logo & Atelier Monogram with TM */}
            <Link href="/" className="unique-brand-anchor">
            
              <div className="brand-text-block">
                <span className="brand-name">APEAK<sup className="brand-tm">™</sup></span>
              </div>
            </Link>

            {/* 2. Desktop Navigation Hub */}
            <nav className="desktop-nav-hub" aria-label="Main Navigation">
              <ul className="nav-capsule-list">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    className={`nav-capsule-link ${pathname === "/" ? "active" : ""}`}
                  >
                    <span>Home</span>
                    {pathname === "/" && (
                      <motion.div
                        layoutId="activePillNav"
                        className="nav-active-bubble"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>

                {/* Shop with Interactive Dropdown */}
                <li
                  className="nav-item-dropdown"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href="/shop"
                    className={`nav-capsule-link ${pathname === "/shop" ? "active" : ""}`}
                  >
                    <span>Shop</span>
                    <span className="nav-count-badge">14</span>
                    <Icon
                      icon="lucide:chevron-down"
                      className={`dropdown-chevron ${shopDropdownOpen ? "open" : ""}`}
                      width={12}
                      height={12}
                    />
                    {pathname === "/shop" && (
                      <motion.div
                        layoutId="activePillNav"
                        className="nav-active-bubble"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>

                  {/* Mega Collection Preview Flyout */}
                  <AnimatePresence>
                    {shopDropdownOpen && (
                      <motion.div
                        className="collection-flyout-card"
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <div className="flyout-header">
                          <span className="flyout-eyebrow">Explore Product Lines</span>
                          <Link href="/shop" className="flyout-view-all">
                            View All Catalog ({products.length}) →
                          </Link>
                        </div>
                        <div className="flyout-grid">
                          <Link
                            href="/shop?category=Artificial%20Nails"
                            className="flyout-item"
                          >
                            <div className="flyout-icon">
                              <Icon icon="noto:nail-polish" width={20} height={20} />
                            </div>
                            <div className="flyout-item-text">
                              <strong>Artificial Press-On Nails</strong>
                              <span>3D Alphabet, Flamingos, Unicorns</span>
                            </div>
                          </Link>
                          <Link
                            href="/shop?category=Drinkware"
                            className="flyout-item"
                          >
                            <div className="flyout-icon">
                              <Icon icon="noto:hot-beverage" width={20} height={20} />
                            </div>
                            <div className="flyout-item-text">
                              <strong>Drinkware & Bottles</strong>
                              <span>Daisy Flasks, Stout Vessels, Moti Mugs</span>
                            </div>
                          </Link>
                          <Link
                            href="/shop?category=Home%20%26%20Kitchen"
                            className="flyout-item"
                          >
                            <div className="flyout-icon">
                              <Icon icon="noto:sparkles" width={20} height={20} />
                            </div>
                            <div className="flyout-item-text">
                              <strong>Home & Kitchen Accents</strong>
                              <span>Divided Candy Trays, Canisters</span>
                            </div>
                          </Link>
                        </div>
                        <div className="flyout-footer">
                          <span>✦ 100% Quality Inspected • 14-Day Guarantee</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Contact Us */}
                <li>
                  <Link
                    href="/contact"
                    className={`nav-capsule-link ${pathname === "/contact" ? "active" : ""}`}
                  >
                    <span>Contact</span>
                    {pathname === "/contact" && (
                      <motion.div
                        layoutId="activePillNav"
                        className="nav-active-bubble"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                  </Link>
                </li>
              </ul>
            </nav>

            {/* 3. Right Action Tools (Search, Theme Toggle, CTA, Mobile Toggle) */}
            <div className="header-action-group">
              {/* Quick Search Button */}
              <button
                className="capsule-search-trigger"
                onClick={() => setSearchOpen(true)}
                aria-label="Search catalog"
              >
                <Icon icon="lucide:search" width={15} height={15} />
                <span className="search-trigger-text">Search items...</span>
                <kbd className="search-kbd-pill">⌘K</kbd>
              </button>

              {/* Theme Switcher Button */}
              <button
                className="capsule-theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    {theme === "dark" ? (
                      <Icon icon="lucide:sun" width={16} height={16} />
                    ) : (
                      <Icon icon="lucide:moon" width={15} height={15} />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>

              {/* Browse Catalog CTA */}
              <Link href="/shop" className="capsule-cta-btn">
                <span>Browse Store</span>
                <div className="cta-icon-bubble">
                  <Icon icon="lucide:arrow-right" width={13} height={13} />
                </div>
              </Link>

              {/* Mobile Hamburger Toggle Button */}
              <button
                className={`capsule-mobile-toggle ${menuOpen ? "is-open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                <span className="toggle-line line-top" />
                <span className="toggle-line line-middle" />
                <span className="toggle-line line-bottom" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 4. Live Instant Search Overlay Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className="search-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              className="search-modal-card"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="search-modal-top">
                <div className="search-field-inner">
                  <Icon icon="lucide:search" width={18} height={18} />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search by nail art, bottle, tray, or category..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="modal-search-input"
                  />
                  {searchQuery && (
                    <button
                      className="search-clear-cross"
                      onClick={() => setSearchQuery("")}
                    >
                      <Icon icon="lucide:x" width={14} height={14} />
                    </button>
                  )}
                </div>
                <button
                  className="search-close-pill"
                  onClick={() => setSearchOpen(false)}
                >
                  ESC
                </button>
              </div>

              {/* Quick Categories Bar */}
              <div className="search-quick-tags">
                <span className="quick-tags-label">Quick Jump:</span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className="quick-cat-btn"
                    onClick={() => {
                      router.push(cat === "All" ? "/shop" : `/shop?category=${encodeURIComponent(cat)}`);
                      setSearchOpen(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Results Display */}
              <div className="search-results-area">
                {searchQuery.trim() === "" ? (
                  <div className="search-empty-state">
                    <p>Type keywords like <strong>"press on"</strong>, <strong>"mug"</strong>, <strong>"pink"</strong>, or <strong>"tray"</strong></p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="search-results-list">
                    {searchResults.map((item) => (
                      <Link
                        key={item.id}
                        href={`/shop?category=${encodeURIComponent(item.category)}`}
                        className="search-result-row"
                        onClick={() => setSearchOpen(false)}
                      >
                        <div className="result-img-box">
                          <img src={item.images[0]?.src} alt={item.title} />
                        </div>
                        <div className="result-info">
                          <span className="result-category">{item.category}</span>
                          <strong className="result-title">{item.title}</strong>
                        </div>
                        <div className="result-arrow">
                          <Icon icon="lucide:arrow-right" width={14} height={14} />
                        </div>
                      </Link>
                    ))}
                    <Link
                      href={`/shop`}
                      className="search-see-all-btn"
                      onClick={() => setSearchOpen(false)}
                    >
                      View All in Catalog →
                    </Link>
                  </div>
                ) : (
                  <div className="search-empty-state">
                    <p>No products found matching "<em>{searchQuery}</em>".</p>
                    <Link
                      href="/shop"
                      className="search-see-all-btn"
                      style={{ marginTop: 12, display: "inline-block" }}
                      onClick={() => setSearchOpen(false)}
                    >
                      Browse full catalog ({products.length} products)
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Luxury Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="unique-mobile-drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="unique-mobile-drawer-card"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header */}
              <div className="drawer-top-bar">
                <Link href="/" className="unique-brand-anchor" onClick={() => setMenuOpen(false)}>
                  <div className="brand-emblem">
                    <span className="emblem-spark">✦</span>
                  </div>
                  <div className="brand-text-block">
                    <span className="brand-name">APEAK<sup className="brand-tm">™</sup></span>
                    <span className="brand-tag">ATELIER</span>
                  </div>
                </Link>
                <button
                  className="drawer-close-circle"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <Icon icon="lucide:x" width={16} height={16} />
                </button>
              </div>

              {/* Drawer Search Trigger */}
              <button
                className="drawer-search-bar"
                onClick={() => {
                  setMenuOpen(false);
                  setTimeout(() => setSearchOpen(true), 200);
                }}
              >
                <Icon icon="lucide:search" width={16} height={16} />
                <span>Search {products.length} products...</span>
              </button>

              {/* Drawer Theme Switcher Row */}
              <div className="drawer-theme-box">
                <button className="drawer-theme-toggle-row" onClick={toggleTheme}>
                  <div className="theme-row-label">
                    <span className="theme-row-title">
                      {theme === "dark" ? (
                        <><Icon icon="lucide:moon" width={14} style={{ marginRight: 6, verticalAlign: "middle" }} /> Dark Mode</>
                      ) : (
                        <><Icon icon="lucide:sun" width={14} style={{ marginRight: 6, verticalAlign: "middle" }} /> Light Mode</>
                      )}
                    </span>
                    <span className="theme-subtext">Click to switch theme</span>
                  </div>
                  <div className={`theme-switch-indicator ${theme === "dark" ? "is-dark" : ""}`}>
                    <span className="switch-knob" />
                  </div>
                </button>
              </div>

              {/* Drawer Nav Links */}
              <div className="drawer-nav-section">
                <span className="drawer-section-heading">Navigation</span>
                <nav className="drawer-links-stack">
                  <Link
                    href="/"
                    className={`drawer-link-item ${pathname === "/" ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Home</span>
                    <Icon icon="lucide:chevron-right" width={14} height={14} />
                  </Link>
                  <Link
                    href="/shop"
                    className={`drawer-link-item ${pathname === "/shop" ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Shop</span>
                    <span className="drawer-badge-count">{products.length} Items</span>
                  </Link>
                  <Link
                    href="/contact"
                    className={`drawer-link-item ${pathname === "/contact" ? "active" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>Contact Us</span>
                    <Icon icon="lucide:chevron-right" width={14} height={14} />
                  </Link>
                </nav>
              </div>

              {/* Drawer Categories Jump */}
              <div className="drawer-categories-section">
                <span className="drawer-section-heading">Featured Categories</span>
                <div className="drawer-category-cards">
                  <Link
                    href="/shop?category=Artificial%20Nails"
                    className="drawer-cat-mini-card"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mini-icon">
                      <Icon icon="noto:nail-polish" width={20} height={20} />
                    </span>
                    <div>
                      <strong>Press-On Nails</strong>
                      <span>3D & Acrylic Sets</span>
                    </div>
                  </Link>
                  <Link
                    href="/shop?category=Drinkware"
                    className="drawer-cat-mini-card"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mini-icon">
                      <Icon icon="noto:hot-beverage" width={20} height={20} />
                    </span>
                    <div>
                      <strong>Drinkware & Bottles</strong>
                      <span>Daisy, Stout & Mugs</span>
                    </div>
                  </Link>
                  <Link
                    href="/shop?category=Home%20%26%20Kitchen"
                    className="drawer-cat-mini-card"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mini-icon">
                      <Icon icon="noto:sparkles" width={20} height={20} />
                    </span>
                    <div>
                      <strong>Home & Kitchen</strong>
                      <span>Organizers & Trays</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Drawer Footer info & CTA */}
              <div className="drawer-bottom-cta">
                <Link
                  href="/shop"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Explore Complete Store
                </Link>
                <div className="drawer-social-strip">
                  <a
                    href="https://www.instagram.com/apeak.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="mdi:instagram" width={14} style={{ marginRight: 4, verticalAlign: "middle" }} />
                    Instagram
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.amazon.in/s?k=apeak"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon="mdi:amazon" width={14} style={{ marginRight: 4, verticalAlign: "middle" }} />
                    Amazon Store
                  </a>
                  <span>•</span>
                  <a href="mailto:apeak1901@gmail.com">
                    <Icon icon="lucide:mail" width={14} style={{ marginRight: 4, verticalAlign: "middle" }} />
                    apeak1901@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
