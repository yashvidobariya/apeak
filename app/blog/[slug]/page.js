import Link from "next/link";
import { notFound } from "next/navigation";
import SafeImage from "../../../components/SafeImage";
import { getArticleBySlug, getAllArticles } from "../../../data/articles";
import { products } from "../../../data/products";

export async function generateMetadata({ params }) {
  const unwrappedParams = await params;
  const { slug } = unwrappedParams;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found — Apeak",
    };
  }

  return {
    title: `${article.title} — Apeak Guides`,
    description: article.excerpt,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
    },
  };
}

export async function generateStaticParams() {
  const all = getAllArticles();
  return all.map((a) => ({
    slug: a.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const unwrappedParams = await params;
  const { slug } = unwrappedParams;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related articles (same category or others)
  const relatedArticles = getAllArticles()
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  // Relevant category products
  const categoryProducts = products
    .filter((p) => p.category.toLowerCase() === article.category.toLowerCase())
    .slice(0, 2);

  // Schema.org Article Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Apeak",
      logo: {
        "@type": "ImageObject",
        url: "https://apeak.in/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://apeak.in/blog/${article.slug}`,
    },
  };

  return (
    <article className="article-page-wrapper" style={{ paddingTop: "calc(var(--header-h) + 20px)", paddingBottom: "100px" }}>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs */}
      <div className="container" style={{ maxWidth: "860px", marginBottom: "24px" }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: "13px", color: "var(--muted)", display: "flex", gap: "8px", alignItems: "center" }}>
          <Link href="/" style={{ color: "var(--muted)", transition: "color 0.2s" }}>Home</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: "var(--muted)", transition: "color 0.2s" }}>Guides</Link>
          <span>/</span>
          <span style={{ color: "var(--ink)", fontWeight: "500", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {article.category}
          </span>
        </nav>
      </div>

      {/* 2. Article Header */}
      <header className="container" style={{ maxWidth: "860px", marginBottom: "36px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
          <span style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            padding: "4px 12px",
            borderRadius: "var(--radius-full)",
            background: "var(--surface-alt)",
            color: "var(--accent-gold)",
            border: "1px solid var(--border)"
          }}>
            {article.category}
          </span>
          <span style={{ fontSize: "13px", color: "var(--muted)" }}>{article.readTime}</span>
          <span style={{ color: "var(--border)" }}>•</span>
          <span style={{ fontSize: "13px", color: "var(--muted)" }}>
            Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 4.5vw, 42px)",
          lineHeight: "1.25",
          fontWeight: "800",
          color: "var(--ink)",
          marginBottom: "20px"
        }}>
          {article.title}
        </h1>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.65",
          color: "var(--ink-soft)",
          marginBottom: "28px"
        }}>
          {article.excerpt}
        </p>

        {/* Author Bio Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "16px 20px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)"
        }}>
          <span style={{ fontSize: "30px" }}>{article.author.avatar}</span>
          <div>
            <div style={{ fontSize: "14px", fontWeight: "700", color: "var(--ink)" }}>Written by {article.author.name}</div>
            <div style={{ fontSize: "12px", color: "var(--muted)" }}>{article.author.role} • Fact-Checked & Verified</div>
          </div>
        </div>
      </header>

      {/* 3. Featured Image */}
      <div className="container" style={{ maxWidth: "860px", marginBottom: "40px" }}>
        <div style={{
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow-md)",
          background: "var(--surface-alt)"
        }}>
          <SafeImage src={article.featuredImage} alt={article.title} aspectRatio="16 / 9" />
        </div>
      </div>

      {/* 4. Key Takeaways Highlight Box */}
      {article.keyTakeaways && article.keyTakeaways.length > 0 && (
        <div className="container" style={{ maxWidth: "860px", marginBottom: "44px" }}>
          <div style={{
            background: "var(--surface-alt)",
            border: "1px solid var(--border)",
            borderLeft: "4px solid var(--accent-gold)",
            borderRadius: "var(--radius-md)",
            padding: "26px 30px"
          }}>
            <h3 style={{
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1.2px",
              textTransform: "uppercase",
              color: "var(--accent-gold)",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <span>✦</span> Key Editorial Takeaways
            </h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14.5px", lineHeight: "1.55", color: "var(--ink)" }}>
                  <span style={{ color: "var(--accent-gold)", fontWeight: "bold", marginTop: "2px" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 5. Main Article Body */}
      <div className="container" style={{ maxWidth: "860px", marginBottom: "60px" }}>
        <div
          className="article-body-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
          style={{
            fontSize: "16.5px",
            lineHeight: "1.8",
            color: "var(--ink-soft)"
          }}
        />
      </div>

      {/* 6. FAQ Section */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="container" style={{ maxWidth: "860px", marginBottom: "60px" }}>
          <div style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "36px",
            boxShadow: "var(--shadow-sm)"
          }}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: "700",
              marginBottom: "24px",
              color: "var(--ink)"
            }}>
              Frequently Asked Questions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {article.faqs.map((faq, i) => (
                <div key={i} style={{ borderBottom: i < article.faqs.length - 1 ? "1px solid var(--border-light)" : "none", paddingBottom: i < article.faqs.length - 1 ? "20px" : "0" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", color: "var(--ink)", marginBottom: "8px" }}>
                    Q: {faq.q}
                  </h4>
                  <p style={{ fontSize: "15px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Related Recommended Products */}
      {categoryProducts.length > 0 && (
        <section className="container" style={{ maxWidth: "860px", marginBottom: "60px" }}>
          <div style={{
            background: "var(--surface-alt)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "32px"
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--ink)" }}>
                Curated Products Related to this Guide
              </h3>
              <Link href="/shop" style={{ fontSize: "13px", fontWeight: "600", color: "var(--accent-gold)" }}>
                View All Products →
              </Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
              {categoryProducts.map((prod) => (
                <div key={prod.id} style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "16px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "center"
                }}>
                  <div style={{ width: "70px", height: "70px", flexShrink: 0, borderRadius: "var(--radius-sm)", overflow: "hidden" }}>
                    <SafeImage src={prod.images[0]?.src} alt={prod.title} aspectRatio="1 / 1" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "4px", color: "var(--ink)" }}>
                      <Link href={`/product/${prod.id}`}>{prod.title}</Link>
                    </h4>
                    <span style={{ fontSize: "12px", color: "var(--muted)" }}>{prod.category}</span>
                    <div style={{ marginTop: "8px" }}>
                      <Link href={`/product/${prod.id}`} className="btn btn-outline" style={{ padding: "4px 10px", fontSize: "11px" }}>
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. More Articles / Guides Navigation */}
      <section className="container" style={{ maxWidth: "860px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", paddingTop: "20px", borderTop: "1px solid var(--border)" }}>
          <h3 style={{ fontSize: "20px", fontWeight: "700", color: "var(--ink)" }}>Explore More Lifestyle Guides</h3>
          <Link href="/blog" className="btn btn-outline" style={{ fontSize: "13px", padding: "6px 14px" }}>
            All Guides
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {relatedArticles.map((rel) => (
            <div key={rel.id} style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: "20px",
              display: "flex",
              flexDirection: "column"
            }}>
              <span style={{ fontSize: "11px", fontWeight: "700", textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "8px" }}>
                {rel.category}
              </span>
              <h4 style={{ fontSize: "15px", lineHeight: "1.4", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
                <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
              </h4>
              <p style={{ fontSize: "13px", lineHeight: "1.5", color: "var(--muted)", marginBottom: "14px", flexGrow: 1 }}>
                {rel.excerpt.slice(0, 90)}...
              </p>
              <Link href={`/blog/${rel.slug}`} style={{ fontSize: "12px", fontWeight: "700", color: "var(--ink)" }}>
                Read Guide →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
