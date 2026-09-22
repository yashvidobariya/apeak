import Link from "next/link";

export const metadata = {
  title: "About Us — Our Story, Quality Standards & Editorial Mission",
  description:
    "Learn about Apeak's story, our 3-tier product inspection protocol, non-toxic material standards, and our editorial mission to bring mindful utility to everyday living.",
  keywords: [
    "About Apeak",
    "Apeak store story",
    "quality curated products",
    "press-on nails quality standards",
    "borosilicate glass drinkware",
    "apeak mission"
  ],
};

export default function AboutPage() {
  return (
    <div className="policy-page-wrapper">
      <section className="policy-hero">
        <div className="container">
          <span className="eyebrow-pill">Our Heritage & Standards</span>
          <h1>About Apeak™</h1>
          <p className="policy-subtitle">
            Crafting and curating objects for quiet daily satisfaction, backed by non-toxic materials, rigorous hand inspections, and honest editorial guidance.
          </p>
        </div>
      </section>

      <div className="container policy-body-container">
        <div className="policy-card">
          {/* Section 1: Brand Story */}
          <section className="policy-section">
            <h2>1. The Apeak Story: Mindful Curation Over Mass Clutter</h2>
            <p>
              Apeak was founded with a singular, resolute conviction: <strong>the everyday objects you surround yourself with shape the quality of your daily life</strong>. In an era dominated by disposable mass production and cheap plastic novelties that break after two uses, we sought to build an antidote.
            </p>
            <p>
              We believe that an artificial press-on manicure shouldn’t ruin your natural nail beds with harsh chemicals or require three hours in a salon. We believe that your daily hydration vessel shouldn’t leach microplastics or impart a stale metallic aftertaste. And we believe that your kitchen counter shouldn’t feel like an overwhelming chore to organize.
            </p>
            <p>
              At Apeak, every single product—from salon-grade press-on nails and thermal-shock resistant borosilicate water bottles to modular serving platters—is chosen with deep intentionality. We bridge the gap between aesthetic beauty and practical, durable utility.
            </p>
          </section>

          {/* Section 2: Quality Protocol */}
          <section className="policy-section">
            <h2>2. Our 3-Tier Quality & Safety Inspection Protocol</h2>
            <p>
              We reject the industry norm of blind drop-shipping and automated warehouse fulfillment. Before any product reaches our catalog or your doorstep, it must successfully pass through our proprietary three-tier inspection framework:
            </p>
            <ul>
              <li>
                <strong>Tier 1: Material Chemistry & Biological Safety:</strong> We strictly avoid cheap, brittle polystyrene plastics. Our artificial nails are molded exclusively from premium virgin ABS polymers that flex naturally with your nail bed without snapping. All drinkware is forged from food-grade, lab-tested borosilicate glass that is 100% BPA-free, lead-free, and phthalate-free.
              </li>
              <li>
                <strong>Tier 2: Real-World Ergonomics & Longevity Testing:</strong> Our product team stress-tests prototypes across real daily routines. We verify that bottle lids withstand repeated dishwasher cycles without warping, that suction canisters hold weight securely on glass and tile surfaces, and that nail designs resist chipping during extensive typing and household chores.
              </li>
              <li>
                <strong>Tier 3: Individual Pre-Dispatch Quality Check:</strong> Every single box is hand-inspected by our trained fulfillment staff prior to packing. We check for structural integrity, flawless surface finishes, secure seals, and complete accessory kits.
              </li>
            </ul>
          </section>

          {/* Section 3: Editorial Standards */}
          <section className="policy-section">
            <h2>3. Our Editorial Journal & Knowledge Sharing</h2>
            <p>
              We view our role as more than a retailer; we are educators and conscious lifestyle advocates. Our newly expanded <Link href="/blog">Editorial Guides & Journal Hub</Link> publishes research-backed, practical advice designed to empower consumers:
            </p>
            <ul>
              <li>Comprehensive step-by-step tutorials on nail bed prep and damage-free removal methods.</li>
              <li>Material science comparisons between borosilicate, soda-lime, and stainless steel drinkware.</li>
              <li>Pediatric-aligned safety guides on infant nail grooming and non-toxic dress-up tips.</li>
              <li>Spatial organization hacks to maximize functional space in compact urban kitchens.</li>
            </ul>
            <p>
              Every article is authored by category specialists, fact-checked against practical benchmarks, and updated periodically to ensure real-world utility.
            </p>
          </section>

          {/* Section 4: Sustainability */}
          <section className="policy-section">
            <h2>4. Sustainability & Thoughtful Consumption</h2>
            <p>
              The most eco-friendly product is the one you do not have to throw away next week. By designing reusable press-on nails that can be applied, safely removed, and worn again, we significantly reduce cosmetic packaging waste. By promoting reusable thermal glass bottles and durable stainless canisters, we help our community eliminate hundreds of single-use plastic bottles and grocery containers each year.
            </p>
          </section>

          {/* Section 5: Trust & Credentials */}
          <section className="policy-section">
            <h2>5. Our 14-Day Customer Guarantee & Support</h2>
            <p>
              We stand firmly behind the craftsmanship of every item in our store. In the unlikely event that an order arrives damaged, defective, or misaligned with its description, our dedicated customer experience team provides swift replacements or resolutions under our comprehensive 14-day policy.
            </p>
            <div style={{
              background: "var(--surface-alt)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: "24px",
              marginTop: "20px"
            }}>
              <h3 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "12px", color: "var(--ink)" }}>
                Direct Communication & Official Channels
              </h3>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px" }}>
                <li><strong>Customer Support Email:</strong> <a href="mailto:apeak1901@gmail.com" style={{ color: "var(--accent-gold)", fontWeight: "600" }}>apeak1901@gmail.com</a></li>
                <li><strong>Official Amazon Store:</strong> <a href="https://www.amazon.in/s?k=apeak" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)", fontWeight: "600" }}>Amazon India Storefront ↗</a></li>
                <li><strong>Instagram Community:</strong> <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-gold)", fontWeight: "600" }}>@apeak.in ↗</a></li>
                <li><strong>Interactive Support:</strong> <Link href="/contact" style={{ color: "var(--accent-gold)", fontWeight: "600" }}>Submit a Direct Query via Contact Page</Link></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
