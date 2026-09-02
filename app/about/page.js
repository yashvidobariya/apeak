import Link from "next/link";

export const metadata = {
  title: "About Us — Apeak",
  description:
    "Apeak is an e-commerce platform that sells daily use and fashion products.",
  keywords: [
    "Apeak", "Apeak store", "buy aesthetic products online india", "press-on nails india",
    "aesthetic glass water bottle", "home organization products", "viral products india"
  ],
};

export default function AboutPage() {
  return (
    <div className="policy-page-wrapper">
      <section className="policy-hero">
        <div className="container">
          <span className="eyebrow-pill">Our Story</span>
          <h1>About Us</h1>
          <p className="policy-subtitle">
            Discover who we are and what drives us at Apeak.
          </p>
        </div>
      </section>

      <div className="container policy-body-container">
        <div className="policy-card">
          <section className="policy-section">
            <h2>Welcome to Apeak</h2>
            <p>
              Apeak is an e-commerce platform that sells daily use and fashion products. We are dedicated to providing high-quality items that fit perfectly into your everyday life and elevate your personal style.
            </p>
          </section>
          
          <section className="policy-section">
            <h2>Our Mission</h2>
            <p>
              Our mission is to bring you the best in daily essentials and fashion trends, ensuring a seamless and enjoyable shopping experience from start to finish. We believe in quality, affordability, and exceptional customer service.
            </p>
          </section>

          <section className="policy-section">
            <h2>Contact Information</h2>
            <p>
              We'd love to hear from you! If you have any questions, feedback, or inquiries, please feel free to reach out to us.
            </p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:apeak1901@gmail.com">apeak1901@gmail.com</a></li>
              <li><strong>Instagram:</strong> <a href="https://www.instagram.com/apeak.in/" target="_blank" rel="noopener noreferrer">@apeak.in</a></li>
              <li><strong>Support:</strong> <Link href="/contact">Visit our Contact Page</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
