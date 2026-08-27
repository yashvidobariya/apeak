import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions — Apeak",
  description:
    "Read the Terms and Conditions for using the Apeak website, browsing products, and completing transactions.",
};

export default function TermsPage() {
  return (
    <div className="policy-page-wrapper">
      <section className="policy-hero">
        <div className="container">
          <span className="eyebrow-pill">Legal & Governance</span>
          <h1>Terms & Conditions</h1>
          <p className="policy-subtitle">
             Please read these terms carefully before browsing, ordering, or interacting with Apeak services.
          </p>
        </div>
      </section>

      <div className="container policy-body-container">
        <div className="policy-card">
          <section className="policy-section">
            <h2>1. Introduction & Acceptance</h2>
            <p>
              Welcome to <strong>Apeak</strong> By accessing our website, purchasing our products, or interacting with our brand touchpoints (including our official Amazon store and social media channels), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any portion of these terms, please refrain from using our website.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Product Catalog & Curation</h2>
            <p>
              Apeak specializes in high-quality lifestyle goods including press-on artificial nails, drinkware, home accessories, and curated everyday essentials. We accurately depict colors, finishes, and dimensions using real product photography. However, please note that minor color variations may occur depending on your screen settings and display configuration.
            </p>
          </section>

          <section className="policy-section">
            <h2>3. Orders, Pricing & Availability</h2>
            <ul>
              <li><strong>Availability:</strong> All items are subject to stock availability. We reserve the right to modify or discontinue any product line without prior notice.</li>
              <li><strong>Pricing:</strong> Prices are displayed in local currency (INR) inclusive of applicable taxes unless stated otherwise.</li>
              <li><strong>Order Cancellations:</strong> We reserve the right to refuse or cancel orders in cases of suspicious or fraudulent transactions, pricing errors, or stock limitations.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Shipping, Dispatch & Delivery</h2>
            <p>
              Every order undergoes strict quality checks prior to packing. Estimated delivery timelines provided during checkout are based on courier partner benchmarks. While we endeavor to dispatch orders promptly, Apeak is not liable for minor carrier delays caused by extreme weather, regional disruptions, or incorrect delivery addresses provided by the buyer.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. 14-Day Guarantee & Replacement Policy</h2>
            <p>
              Your satisfaction is our priority. If your product arrives damaged, defective, or noticeably different from the item description, please contact our support team at <a href="mailto:apeak1901@gmail.com">apeak1901@gmail.com</a> within 14 days of delivery. Kindly include your order details and clear photos of the issue for a fast replacement or issue resolution.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All materials on this website—including brand graphics, product names, logos, text, imagery, layouts, software, and source code—are the exclusive intellectual property of Apeak and protected by relevant copyright and trademark laws. Unauthorized copying, reproduction, or redistribution is strictly prohibited.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. External Marketplaces & Links</h2>
            <p>
              Our website links directly to third-party storefronts such as our official <a href="https://www.amazon.in/s?k=apeak" target="_blank" rel="noopener noreferrer">Amazon India Store</a> and social pages like <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer">Instagram (@apeak.in)</a>. Purchases completed on external marketplace platforms are governed by their respective checkout policies and terms of service.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. User Conduct & Responsible Use</h2>
            <p>
              Users agree not to misuse our website by introducing malicious code, attempting unauthorized server access, scraping site data, or engaging in fraudulent activity. Violation of these terms may result in account termination and legal action where necessary.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Apeak shall not be liable for any indirect, incidental, or consequential damages resulting from product misuse, improper application of press-on nails, or reliance on information presented on this website.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Modifications & Contact Information</h2>
            <p>
              We reserve the right to modify these Terms and Conditions at any time. Continued use of our website following any changes signifies your acceptance of the updated terms. For questions regarding these terms, reach out via our <Link href="/contact">Contact Page</Link> or email <a href="mailto:apeak1901@gmail.com">apeak1901@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

