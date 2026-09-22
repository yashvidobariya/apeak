import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo">
              Apeak<sup className="footer-tm">™</sup><span>.</span>
            </Link>
            <p className="footer-tagline">
              A thoughtfully selected range of everyday products, from press-on nails and drinkware to useful kitchen essentials. Each piece is chosen for its practical use, simple design, and the little details that make everyday moments feel better.
            </p>

            {/* Official External Brand Links */}
            <div className="footer-social-links">
              <a
                href="https://www.amazon.in/s?k=apeak"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn amazon-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.93 17.09c-2.73 2.01-6.73 3.08-10.15 3.08-4.79 0-9.1-1.78-12.35-4.74-.25-.23-.03-.55.27-.37 3.48 2.03 7.73 3.25 12.08 3.25 3.04 0 6.42-.74 9.44-2.29.46-.24.87.35.4.67zM17.13 15.65c-.34-.44-2.22-.21-3.07-.1-.26.03-.3-.19-.07-.35 1.54-1.09 3.96-.78 4.25-.42.3.36-.08 2.8-1.55 4.02-.23.19-.44.09-.34-.16.32-.82.97-2.67.78-2.99z" />
                </svg>
                <span>Shop on Amazon</span>
              </a>

              <a
                href="https://www.instagram.com/apeak.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn instagram-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@apeak.in</span>
              </a>
            </div>

            <div className="footer-guarantee">
              <span className="dot" /> 100% Verified Product Curation
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="footer-links-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
            <div className="footer-col">
              <h4>Navigation</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/shop">Shop Catalog</Link></li>
                <li><Link href="/blog">Guides & Journal</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Lifestyle Guides</h4>
              <ul>
                <li><Link href="/blog/the-ultimate-press-on-nails-guide">Press-On Nails Guide</Link></li>
                <li><Link href="/blog/press-on-nails-vs-acrylic-vs-gel">Press-On vs Acrylics</Link></li>
                <li><Link href="/blog/borosilicate-glass-vs-regular-glass-drinkware">Borosilicate Glass Care</Link></li>
                <li><Link href="/blog/small-kitchen-organization-and-countertop-hacks">Kitchen Organizing</Link></li>
                <li><Link href="/blog">View All Guides →</Link></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Customer Care & Stores</h4>
              <ul>
                <li>
                  <a href="https://www.amazon.in/s?k=apeak" target="_blank" rel="noopener noreferrer">
                    Amazon Store ↗
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer">
                    Instagram (@apeak.in) ↗
                  </a>
                </li>
                <li><Link href="/shipping">Shipping Policy</Link></li>
                <li><Link href="/terms">Terms & Conditions</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Apeak™ Store. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link href="/terms">Terms & Conditions</Link>
            <span className="sep">•</span>
            <Link href="/privacy">Privacy Policy</Link>
            {/* <span className="sep">•</span>
            <a href="https://www.amazon.in/s?k=apeak" target="_blank" rel="noopener noreferrer">Amazon</a>
            <span className="sep">•</span>
            <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <span className="sep">•</span>
            <Link href="/contact">Support</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
