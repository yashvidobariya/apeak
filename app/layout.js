import Script from 'next/script';
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://apeak.in"),
  title: {
    default: "Apeak™ — Thoughtfully Curated Everyday Products & Lifestyle Guides",
    template: "%s | Apeak™"
  },
  description:
    "Explore Apeak's curated collection of salon-grade press-on nails, aesthetic borosilicate drinkware, and functional home & kitchen accents, paired with expert lifestyle guides.",
  keywords: [
    "press on nails india",
    "reusable artificial nails",
    "borosilicate glass water bottles",
    "aesthetic drinkware",
    "kitchen storage organizers",
    "snack serving trays",
    "lifestyle guides",
    "diy nail care tutorials",
    "apeak store"
  ],
  authors: [{ name: "Apeak Editorial & Curation Team" }],
  creator: "Apeak",
  publisher: "Apeak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Apeak™ — Thoughtfully Curated Everyday Products & Lifestyle Guides",
    description:
      "Press-on nails, stylish drinkware, and home accessories — curated for thoughtful everyday living.",
    url: "https://apeak.in",
    siteName: "Apeak",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apeak™ — Curated Products & Lifestyle Guides",
    description: "Thoughtfully curated everyday essentials and expert lifestyle guides.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://apeak.in/#organization",
      "name": "Apeak",
      "url": "https://apeak.in",
      "logo": "https://apeak.in/favicon.ico",
      "sameAs": [
        "https://www.instagram.com/apeak.in/",
        "https://www.amazon.in/s?k=apeak"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "apeak1901@gmail.com",
        "contactType": "customer service"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://apeak.in/#website",
      "url": "https://apeak.in",
      "name": "Apeak",
      "publisher": {
        "@id": "https://apeak.in/#organization"
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('apeak-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var theme = saved || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6389935784747183"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PLZNPXWVX5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PLZNPXWVX5');
          `}
        </Script>
      </head>
      <body>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
