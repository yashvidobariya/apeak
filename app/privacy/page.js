import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Apeak",
  description:
    "Learn how Apeak protects your privacy, handles personal data, and complies with Google AdSense, DoubleClick cookie, and advertising standards.",
  keywords: [
    "Apeak privacy policy",
    "Apeak data security",
    "AdSense privacy compliance",
    "cookie policy",
    "Apeak terms"
  ],
};

export default function PrivacyPage() {
  return (
    <div className="policy-page-wrapper">
      <section className="policy-hero">
        <div className="container">
          <span className="eyebrow-pill">Legal & Governance</span>
          <h1>Privacy Policy</h1>
          <p className="policy-subtitle">
            At Apeak, we value your trust. We keep our privacy practices transparent, straightforward, and compliant with global standards, including Google AdSense publisher policies.
          </p>
        </div>
      </section>

      <div className="container policy-body-container">
        <div className="policy-card">
          <section className="policy-section">
            <h2>1. Our Commitment to Your Privacy</h2>
            <p>
              Welcome to <strong>Apeak</strong> (referred to as "we", "us", or "our"). We design and curate lifestyle goods—including salon-grade press-on nails, aesthetic borosilicate drinkware, and functional home storage accents—and publish educational lifestyle guides. This Privacy Policy outlines what information we collect, how it is processed, and your rights regarding your personal information when you visit <a href="https://apeak.in">apeak.in</a>.
            </p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>
              We collect information to provide better services, fulfill inquiries, and enhance user experience:
            </p>
            <ul>
              <li><strong>Contact & Inquiry Details:</strong> Your name, email address, phone number, and message contents when you submit inquiries through our <Link href="/contact">Contact Page</Link>.</li>
              <li><strong>Technical & Browsing Data:</strong> Standard server logs, IP addresses, browser types, operating systems, referring URLs, and page visit duration to maintain network security and diagnose site bugs.</li>
              <li><strong>Analytics Information:</strong> Aggregated, non-personally identifiable usage statistics collected via Google Analytics (Measurement ID: G-PLZNPXWVX5) to understand popular product collections and reader engagement on our lifestyle guides.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>3. Google AdSense & DoubleClick DART Cookie Policy</h2>
            <p>
              We participate in the <strong>Google AdSense</strong> advertising program to display relevant commercial advertisements across our website. Google, as a third-party vendor, uses cookies to serve ads on our site:
            </p>
            <ul>
              <li>
                <strong>DoubleClick DART Cookie:</strong> Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visits to our site and/or other sites across the Internet.
              </li>
              <li>
                <strong>Personalized vs. Non-Personalized Ads:</strong> Depending on your consent settings and browser configuration, advertisements may be customized to your browsing history or contextually matched to the webpage content.
              </li>
              <li>
                <strong>User Opt-Out:</strong> You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a> or <a href="https://youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">Your Online Choices</a>.
              </li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>4. Cookies & Web Beacons</h2>
            <p>
              Like most professional websites, Apeak uses essential cookies to remember user preferences (such as light/dark mode theme selection). Third-party advertising partners and analytics providers may also place and read cookies on your browser, or use web beacons to collect information as a result of ad serving on our website.
            </p>
            <p>
              You can choose to disable or selectively turn off our cookies or third-party cookies in your browser settings. However, this may affect how you are able to interact with our site and other websites.
            </p>
          </section>

          <section className="policy-section">
            <h2>5. How We Use Your Information</h2>
            <p>We use collected data strictly for legitimate operational purposes:</p>
            <ul>
              <li>Fulfilling product inquiries, support requests, and catalog recommendations.</li>
              <li>Delivering relevant, high-quality editorial guides and measuring reader interest.</li>
              <li>Preventing fraudulent activity, spam inquiries, and unauthorized automated bot traffic.</li>
              <li>Ensuring compliance with our legal obligations and publishing partner agreements.</li>
            </ul>
          </section>

          <section className="policy-section">
            <h2>6. External Storefronts & Social Links</h2>
            <p>
              Our website contains links to our official storefront on <a href="https://www.amazon.in/s?k=apeak" target="_blank" rel="noopener noreferrer">Amazon India</a> and official social channels on <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer">Instagram (@apeak.in)</a>. Please be aware that when you click external links to third-party platforms, their independent privacy terms and data practices apply. We encourage you to review their respective privacy policies.
            </p>
          </section>

          <section className="policy-section">
            <h2>7. Data Security & Storage</h2>
            <p>
              We implement industry-standard security protocols, including end-to-end SSL/TLS (HTTPS) encryption, to protect information transmitted between your browser and our servers. We never store unencrypted sensitive personal details, and we do not sell, rent, or trade your personal information to third-party brokers under any circumstances.
            </p>
          </section>

          <section className="policy-section">
            <h2>8. Your Rights & Data Controls</h2>
            <p>
              Under applicable privacy regulations, you have the right to request access to any personal data we hold about you, request corrections to inaccurate records, or request deletion of your information from our direct support databases. To exercise any of these rights, please contact our privacy compliance team via our <Link href="/contact">Contact Page</Link>.
            </p>
          </section>

          <section className="policy-section">
            <h2>9. Policy Revisions</h2>
            <p>
              We may update this Privacy Policy periodically to reflect new features, changing regulatory guidelines, or updates to our advertising arrangements. Any modifications will be posted here with an updated revision date.
            </p>
            <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "8px" }}>
              Last Updated: September 2026
            </p>
          </section>

          <section className="policy-section">
            <h2>10. Contacting Our Data Officer</h2>
            <p>
              If you have any questions, suggestions, or concerns regarding this policy, please reach out directly:
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:apeak1901@gmail.com">apeak1901@gmail.com</a></li>
              <li><strong>Website:</strong> <Link href="/contact">apeak.in/contact</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
