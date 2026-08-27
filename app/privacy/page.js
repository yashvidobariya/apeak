import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Apeak",
  description:
    "Learn how Apeak protects your privacy, handles personal data, and keeps your online shopping experience safe and secure.",
};

export default function PrivacyPage() {
  return (
    <div className="policy-page-wrapper">
      <section className="policy-hero">
        <div className="container">
          <span className="eyebrow-pill">Legal & Governance</span>
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">
            At Apeak, We value the trust you place in Apeak. We keep our privacy practices transparent, straightforward, and focused on protecting your personal information at every step.
          </p>
        </div>
      </section>

      <div className="container policy-body-container">
        <div className="policy-card">
          <section className="policy-section">
            <h2>1. Our Commitment to Your Privacy</h2>
            <p>
              Welcome to Apeak. We design and curate lifestyle products—from premium press-on artificial nails to drinkware and home accessories—We handle your information responsibly. We treat your personal data with the We take the same approach when handling your personal information. This policy explains what information we collect, why we need it, and how we keep it safe when you browse our catalog or reach out to our team.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>
              We only collect information that is genuinely necessary to fulfill your orders, provide customer support, and make your browsing experience smoother:
            </p>
            <ul>
              <li><strong>Contact Information:</strong> Your name, email address, phone number, and delivery details when you inquire about products or fill out forms on our <Link href="/contact">Contact Page</Link>.</li>
              <li><strong>Order & Transaction Details:</strong> Information related to inquiries or purchases made through our website or authorized marketplace storefronts.</li>
              <li><strong>Device & Browsing Data:</strong> Basic technical info such as IP address, browser type, device details, and pages viewed to help us optimize site performance.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>
              We use your details We use your information only when it is needed to run our services and assist you:
            </p>
            <ul>
              <li>Fulfilling your product requests, inquiries, and customer service messages.</li>
              <li>Improving website performance, navigation, and user experience.</li>
              <li>Sending important service notifications, policy updates, or opted-in product announcements.</li>
              <li>Preventing fraudulent activities and ensuring overall site security.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Cookies & Website Analytics</h2>
            <p>
              We use essential cookies and lightweight analytics tools to store basic user preferences and understand overall website traffic patterns. These cookies help ensure smooth site navigation. You can disable non-essential cookies at any time through your browser settings, though certain site features may perform differently as a result.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. Marketplace & External Links</h2>
            <p>
              Apeak features links to external partner platforms, including our official <a href="https://www.amazon.in/s?k=apeak" target="_blank" rel="noopener noreferrer">Amazon India Store</a> and our official social channels like <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer">Instagram (@apeak.in)</a>. When you leave our site to visit third-party storefronts or social networks, their respective privacy policies and security terms take effect.
            </p>
          </section>

          <section className="policy-section">
            <h2>6. Data Security & Protection</h2>
            <p>
              We store collected data in secure environments and use encrypted connections (HTTPS) across our site. We implement We use reasonable security measures to help protect your information from unauthorized access or misuse to prevent unauthorized access, data loss, or disclosure.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Data Sharing & Third Parties</h2>
            <p>
              We do not sell, rent, or trade your personal information to third-party marketers. We only share necessary data with trusted service partners (such as logistics carriers, payment gateways, and technical hosting services) strictly to complete your transactions and requests.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Your Rights & Control</h2>
            <p>
              You have complete control over your data. You can request access to the personal information we hold about you, request corrections to inaccurate details, or ask us to delete your records. To make any data-related request, simply write to us using our <Link href="/contact">Contact Form</Link>.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Policy Updates</h2>
            <p>
              As our product catalog grows and legal guidelines evolve, we may update this Privacy Policy. Any changes will be published directly on this page with an updated revision notice so you are always aware of how we protect your information.
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or feedback regarding this Privacy Policy, please get in touch with our team via our <Link href="/contact">Contact Page</Link> or email us directly at <a href="mailto:apeak1901@gmail.com">apeak1901@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

