import Link from "next/link";
import SafeImage from "../../components/SafeImage";
import { articles } from "../../data/articles";

export const metadata = {
  title: "Lifestyle Guides & Journal — Apeak",
  description:
    "Expert guides, tutorials, and care tips on press-on nails, borosilicate drinkware, kitchen organization, and mindful everyday living from the Apeak editorial team.",
  keywords: [
    "press-on nails guide",
    "how to apply press-on nails",
    "borosilicate glass benefits",
    "how to clean water bottles",
    "kitchen organization hacks",
    "aesthetic desk setup",
    "apeak guides",
    "diy manicure tips"
  ],
  openGraph: {
    title: "Lifestyle Guides & Journal — Apeak",
    description: "Expert guides, care routines, and mindful living ideas from Apeak.",
    type: "website",
  },
};

export default async function BlogPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams?.category || "All";

  const categories = ["All", "Artificial Nails", "Drinkware", "Home & Kitchen"];

  const filteredArticles =
    currentCategory === "All"
      ? articles
      : articles.filter(
          (a) => a.category.toLowerCase() === currentCategory.toLowerCase()
        );

  const featured = articles[0];

  return (
    <div className="blog-page-wrapper" style={{ paddingTop: "calc(var(--header-h) + 30px)", paddingBottom: "100px" }}>
      {/* 1. Header Banner */}
      <section className="blog-hero-section" style={{ textAlign: "center", padding: "40px 20px 50px" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <span className="eyebrow-pill" style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: "var(--radius-full)",
            background: "var(--surface-alt)",
            color: "var(--accent-gold)",
            border: "1px solid var(--border)",
            marginBottom: "16px"
          }}>
            Apeak Editorial Journal
          </span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "18px",
            color: "var(--ink)"
          }}>
            Everyday Care, Styling & Living Guides
          </h1>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.65",
            color: "var(--muted)",
            maxWidth: "650px",
            margin: "0 auto"
          }}>
            Thoughtfully researched guides, step-by-step beauty tutorials, material science comparisons, and practical organization tips to help you get the most out of your daily essentials.
          </p>

          {/* Category Filter Pills */}
          <div className="blog-category-filter" style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginTop: "32px"
          }}>
            {categories.map((cat) => {
              const isActive = currentCategory.toLowerCase() === cat.toLowerCase();
              return (
                <Link
                  key={cat}
                  href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "13.5px",
                    fontWeight: "600",
                    transition: "all 0.2s ease",
                    background: isActive ? "var(--ink)" : "var(--surface)",
                    color: isActive ? "var(--paper)" : "var(--ink)",
                    border: isActive ? "1px solid var(--ink)" : "1px solid var(--border)",
                    boxShadow: isActive ? "var(--shadow-sm)" : "none"
                  }}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: "1200px" }}>
        {/* 2. Featured Highlight Card (shown when 'All' is selected) */}
        {currentCategory === "All" && featured && (
          <section style={{ marginBottom: "60px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-md)"
            }}>
              <div style={{ position: "relative", minHeight: "340px", background: "var(--surface-alt)" }}>
                <SafeImage
                  src={featured.featuredImage}
                  alt={featured.title}
                  aspectRatio="16 / 10"
                />
                <span style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "var(--ink)",
                  color: "var(--paper)",
                  padding: "5px 12px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase"
                }}>
                  ★ Featured Editorial
                </span>
              </div>

              <div style={{ padding: "40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                  <span style={{ fontSize: "12px", fontWeight: "700", textTransform: "uppercase", color: "var(--accent-gold)", letterSpacing: "1px" }}>
                    {featured.category}
                  </span>
                  <span style={{ color: "var(--muted-light)" }}>•</span>
                  <span style={{ fontSize: "12.5px", color: "var(--muted)" }}>{featured.readTime}</span>
                </div>

                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 3vw, 30px)",
                  lineHeight: "1.3",
                  marginBottom: "16px",
                  color: "var(--ink)"
                }}>
                  <Link href={`/blog/${featured.slug}`} style={{ color: "inherit" }}>
                    {featured.title}
                  </Link>
                </h2>

                <p style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--ink-soft)",
                  marginBottom: "24px"
                }}>
                  {featured.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span style={{ fontSize: "24px" }}>{featured.author.avatar}</span>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "600", color: "var(--ink)" }}>{featured.author.name}</div>
                      <div style={{ fontSize: "11px", color: "var(--muted)" }}>{featured.author.role}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featured.slug}`}
                    className="btn btn-primary"
                    style={{ padding: "10px 20px", fontSize: "13.5px" }}
                  >
                    Read Guide →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. Articles Grid */}
        <section>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "28px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "700", color: "var(--ink)" }}>
              {currentCategory === "All" ? "All Editorial Guides" : `${currentCategory} Guides`}
              <span style={{ fontSize: "14px", fontWeight: "500", color: "var(--muted)", marginLeft: "10px" }}>
                ({filteredArticles.length} articles)
              </span>
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "28px"
          }}>
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "var(--shadow-sm)"
                }}
              >
                <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 10", background: "var(--surface-alt)" }}>
                  <SafeImage src={article.featuredImage} alt={article.title} aspectRatio="16 / 10" />
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "rgba(255, 255, 255, 0.9)",
                    backdropFilter: "blur(6px)",
                    color: "var(--ink)",
                    padding: "4px 10px",
                    borderRadius: "var(--radius-full)",
                    fontSize: "11px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px"
                  }}>
                    {article.category}
                  </span>
                </div>

                <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "12px", color: "var(--muted)", marginBottom: "10px" }}>
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "19px",
                    lineHeight: "1.35",
                    marginBottom: "12px",
                    color: "var(--ink)"
                  }}>
                    <Link href={`/blog/${article.slug}`} style={{ color: "inherit" }}>
                      {article.title}
                    </Link>
                  </h3>

                  <p style={{
                    fontSize: "14px",
                    lineHeight: "1.6",
                    color: "var(--ink-soft)",
                    marginBottom: "20px",
                    flexGrow: 1
                  }}>
                    {article.excerpt}
                  </p>

                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--border-light)"
                  }}>
                    <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: "500" }}>
                      By {article.author.name}
                    </span>
                    <Link
                      href={`/blog/${article.slug}`}
                      style={{
                        fontSize: "13px",
                        fontWeight: "700",
                        color: "var(--ink)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      Read Guide <span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. Trust / Editorial Standard Box */}
        <section style={{
          marginTop: "70px",
          background: "var(--surface-alt)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "40px",
          textAlign: "center"
        }}>
          <span style={{ fontSize: "32px", display: "block", marginBottom: "12px" }}>🌿</span>
          <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px", color: "var(--ink)" }}>
            Our Editorial Standards & Commitment to Real Value
          </h3>
          <p style={{ maxWidth: "680px", margin: "0 auto 20px", fontSize: "14.5px", lineHeight: "1.65", color: "var(--ink-soft)" }}>
            Every article on Apeak is researched and written to provide genuine, practical utility. We do not use automated filler content. From nail health testing to material safety comparisons, our mission is to empower you to make mindful, healthy choices for your daily routines.
          </p>
          <Link href="/about" className="btn btn-outline" style={{ fontSize: "13px" }}>
            Learn More About Our Standards →
          </Link>
        </section>
      </div>
    </div>
  );
}
