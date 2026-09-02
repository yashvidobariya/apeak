import Script from 'next/script';
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "Apeak™ — Thoughtfully Curated Everyday Products",
  description:
    "Explore Apeak's collection of press-on artificial nails, stylish water bottles, mugs, and home accessories. Curated for people who appreciate small, well-made things.",
  keywords: [
    "press on nails", "press on nails india", "fake nails", "stick on nails", "artificial nails", "nails", "mirror", "heritage mirror", "asthetic mirror", "mirror with comb" , "pocket mirror" , "glass bottle" , "borosile bottle" , "kids bottle" , "kids nails" , "press on nails for kids" , "children nails" , "children mirror" , "kids nail cutter" , "cutter for girls" , "chipper" , "kids chipper" , "kids nail cutter" , "nail cutter for kids" , "chote bacche ke liye nails" , "chote bacche ke liye nails cutter" , "chote bacche ke liye chipper" , "cartoon nails", "shills nails" , "artificial nails" , "fake nails", "cute nails" , "wallpaper" , "candy tray" , "festival tray", "festival bowls" , "bowls", "glass bowls" , "kach bowls" , "fashion bottle" , "kach bottle", "fancy bottle" , "stylish bottle" , "glossy oval nails" , "pink oval nails" , "clear oval nails" , 
    "printed nails" , "shinny nails" , 
    "square nails" , "cate eye nails" , "glowing nails" , "perfect fit nails" , "sticky nails", "press on nails for girls",
    "cute press on nails", "aesthetic press on nails", "press on nails for girls", "reusable press on nails",
    "short press on nails", "long press on nails", "3d press on nails", "floral press on nails","almond press on nails", 
    "stiletto fake nails", "coffin press on nails", "ballerina shape nails", "squoval press on nails", 
    "french tip press on nails", "ombre press on nails", "glitter fake nails", "matte press on nails", 
    "chrome press on nails", "glazed donut nails", "metallic press on nails", "pastel press on nails",
     "nude fake nails", "red press on nails", "wine red nails", "burgundy press on nails", "emerald green nails", 
     "lavender fake nails", "baby pink stick on nails", "peach press on nails", "holographic nails", "marble print press on nails",
      "cow print nails", "swirl press on nails", "y2k press on nails", "goth fake nails", "cottagecore press on nails", 
      "pearl press on nails", "rhinestone fake nails", "bridal press on nails", "wedding nails for bride", 
      "bridesmaid press on nails", "party wear artificial nails", "daily wear fake nails", "college wear nails", "festival press on nails",
       "diwali special nails", "karwa chauth nail art", "eid press on nails", "ready to wear nails", "handmade press on nails",
        "luxury press on nails india", "custom press on nails", "salon style nails at home", "pre glued fake nails", "adhesive tab nails", 
        "extra short press on nails", "medium length press on nails", "xxs press on nails for small nail beds", "petite press on nails", "wide nail bed press on nails", "soft gel press on nails", "instant manicured nails", 
        "reusable fake nails kit", "pop on nails", "glue on nails india", "snap on nails", "quick manicure kit", "temporary fake nails", "artificial nail tips", "full cover nail tips", "nail glue drops", "waterproof nail glue",
         "nail tabs double sided", "nail adhesive stickers", "nail prep kit", "cuticle pusher wooden", "mini nail buffer", "nail dehydrator wipes", "nail glue remover liquid", "warm water nail soak", "damage free press on nails", "peel off fake nails", "nail filing block", "fake nails pack of 24",
          "pack of 100 artificial nails", "nail display stand", "fake nails holder", "nail sizing chart india", "how to size press on nails", "fake nails without damaging real nails", "nail tips online shopping", "cheap fake nails online", "artificial nails meesho", "fake nails under 99", "press on nails under 199", "nakli nakhun", 
          "nakli nakhun lagane ka tarika", "nakli nails kaise chipkaye", "hath ke nakli nakhun", "girls ke nakli nails", "bridal nakli nakhun set", "artificial nails price", "nail art stickers for press on nails", "top coat for press on nails", "nail extension alternative", "press on nails vs gel extensions", "best press on nail brands in india", "press on nails wholesale india", 
          "press on nails bulk supplier", "safe nail clipper for newborn", "electric baby nail trimmer", "baby nail file electric", "infant nail scissors", "toddler nail care set", "anti pinch baby nail cutter", "safe baby chipper", "round tip nail cutter for baby", "cartoon nail clipper for kids", "cute animal nail cutter", "mini nail cutter with magnifier", "chote bacho ka nail cutter", 
          "navjat shishu nail cutter", "baby grooming kit india", "kids safe manicure set", "peel off nail polish for kids", "non toxic kids nail paint", "press on nails for teens", "cute fake nails for 10 year old", "barbie press on nails", "disney theme nails", "unicorn stick on nails", "frozen elsa nail stickers", "sanrio press on nails", "hello kitty fake nails", "glitter nails for kids", 
          "kids birthday return gift nails", "fancy nail cutter for girls", "nail cutter with catcher", "mess free nail clipper", "stainless steel kids chipper", "vintage hand mirror", "antique brass mirror", "carved wooden hand mirror", "royal heritage mirror", "rajasthani compact mirror", "meenakari pocket mirror", "foldable vanity mirror", "led compact pocket mirror", "magnified pocket mirror 2x 5x", "dual sided travel mirror", "purse mirror for women", "cute mini mirror for handbag", "pastel aesthetic mirror", "wavy desk mirror", "cloud shaped aesthetic mirror", "irregular mirror decor", "retro flower hand mirror", "travel makeup mirror with light", "mirror with comb set for girls", "folding hair brush with mirror", "pop up brush with compact mirror", "round pocket mirror bulk", 
          "return gift mirrors for ladies", "pocket mirror under 50", "aesthetic bedroom desk mirror", "tabletop vanity mirror", "gold border hand mirror", "gothic vintage handheld mirror", "korean aesthetic mirror", "pocket mirror online india", "purse me rakhne wala mirror", "chota aaina", "shisha comb set", "borosilicate glass water bottle 1 litre", "aesthetic clear glass tumbler", "glass tumbler with bamboo lid and straw", "glass bottle with silicone sleeve", "leakproof glass water bottle", "wide mouth glass bottle", "infused water glass bottle", "detox fruit infuser bottle", "fridge storage glass bottles", "cold brew glass bottle", "bpa free aesthetic water bottle", "motivating time marker water bottle", "frosted water bottle for gym", "pastel water bottle with straw", "flat memobottle a5", "square glass water bottle", "mini purse water bottle 200ml", "compact water bottle 300ml", "cute cartoon sipper for girls", "kawaii water bottle with strap", "boba sipper bottle", "bear shaped water bottle", "rabbit ears water bottle", "school water sipper for kids", "insulated bottle for office women", "hot and cold water bottle aesthetic", "transparent aesthetic water bottle", "gym water bottle for girls", "kanch ki water bottle", "stylish pani ki botal", "office ke liye glass bottle", "school ke liye cute bottle", "leakproof bottle for bag", "aesthetic desktop drinkware", "rotating spice rack organizer", "lazy susan turntable organizer", "2 tier countertop shelf", "clear acrylic makeup organizer", "cosmetic storage drawer", "aesthetic stationery desk organizer", 
          "skincare shelf organizer", "perfume display tray", "multi grid storage box", "modular kitchen containers set", "pantry label storage jars", "airtight borosilicate glass jars", "wooden lid spice jars", "stackable kitchen storage baskets", "under sink cabinet organizer", "wire basket kitchen organizer", "cutlery holder for dining table", "spoon stand with drainer", "aesthetic bread box", "tea coffee sugar canister set", "fridge organizer bins clear", "egg storage box for fridge", "drawer dividers for kitchen", "countertop corner rack", "dish drying rack aesthetic", "kitchen rack wall mount", "kitchen ka saman rakhne ka stand", "kitchen storage rack plastic", "rasoi organizer items", "home organization hacks products", "3 tier dessert display stand", "rotating candy box with lid", "flower shape snack serving tray", "dry fruit box with compartments", "mukhwas tray set", "diwali sweet serving box", "air tight dry fruit serving platter", "gold rimmed glass bowls", "crystal dessert bowl set", "lotus shaped glass bowl", "decorative brass bowl", "hammered metal serving tray", "mirror vanity tray for perfume", "wooden serving tray with handles", "marble print serving tray", "aesthetic ceramic snack bowls", "dip bowls set of 4", "pudding bowls glass set", "salad bowl with wooden servers", "dry fruit gift tray empty", "diwali return gift items", "festive table centerpieces", "decorative katori set", "mehmaan snack tray", "kanch ke sundar bowl", "designer serving platters india", "korean stationery finds india", "desk setup aesthetic items", "coquette room decor products", "pastel desk accessories", "budget friendly hampers for bestie", "birthday gift for girl best friend", "aesthetic stationery kit", "self care gift box for women", "affordable secret santa gifts", "trending reels products", "viral meesho finds", "trending products under 200", "under 500 aesthetic products", "college bag essentials for girls", "room makeover aesthetic things", "cute stuff for teenage girls", "pinterest inspired room decor", "fairy lights room accessories", "pastel desk mat", "aesthetic phone charms", "cute keychains for girls", "quirky gifts india", "gift hampers for girlfriend", 
          "trending online shopping products india","how to apply press on nails without damaging real nails", "how to make press on nails last 3 weeks", "press on nails vs acrylic nails pros and cons", "how to remove press on nails with warm water and oil", "best reusable glass water bottles for office and gym", "how to clean borosilicate glass bottles properly", "aesthetic desk setup items under 500 india", "budget friendly small kitchen organization ideas", "safe nail trimming tips for newborn babies and toddlers", "top trending aesthetic room decor products online", "unique birthday return gift ideas for kids under 100", "festive table decoration and snack tray arrangement ideas", "buy reusable press on nails online india", "aesthetic stick on nails for wedding and college", "custom handmade press on nails under 299", "cute borosilicate glass water bottle with sleeve", "leakproof glass sipper bottle with straw for school", "vintage brass handheld mirror for bridal trousseau", "portable led pocket vanity mirror with light", "safe electric baby nail trimmer kit india", "anti pinch cute cartoon nail clipper for kids", "countertop rotating dry fruit and snack serving tray", "modular airtight kitchen storage container set", "aesthetic pastel desk accessories and organizers", "aesthetic finds online store india", "viral aesthetic room decor products india", "cute gift hampers for female best friend", "korean style aesthetic stationery and accessories online", "budget cute lifestyle accessories online shopping", "trending reels products to buy in india"
    ,"pink press on nails", "white press on nails", "black press on nails", "alphabet press on nails",
    "square press on nails", "oval press on nails", "press on nails with glue", "press on nails without glue",
    "how to apply press on nails", "how to remove press on nails", "how long do press on nails last",
    "press on nails vs acrylic", "water bottle", "water bottle india", "cute water bottle",
    "cute water bottle for girls", "aesthetic water bottle", "small water bottle", "mini water bottle",
    "glass water bottle", "small glass water bottle", "cute glass water bottle", "glass water bottle with lid",
    "reusable water bottle", "water bottle for school", "water bottle for office", "water bottle for girls",
    "cute water bottle for school", "aesthetic water bottle for girls", "floral water bottle",
    "rabbit water bottle", "cute bottle for travel", "best water bottle for office", "best water bottle for travel",
    "glass vs plastic water bottle", "how to clean glass water bottle", "best reusable water bottle",
    "kitchen organizer", "kitchen storage organizer", "kitchen organizer india", "kitchen storage ideas",
    "countertop organizer", "kitchen counter organizer", "food storage organizer", "snack serving tray",
    "dry fruit serving tray", "dry fruit container", "dry fruit box", "serving tray", "decorative serving tray",
    "kitchen storage containers", "small kitchen organizer", "home organization products",
    "home storage organizer", "table organizer", "countertop storage", "kitchen organization products",
    "best gifts for girls", "cute gifts for girls", "aesthetic gifts for girls", "budget gifts for girls",
    "unique gifts for girls", "trending products for girls", "trending products in india",
    "aesthetic products india", "cute products online india", "unique products online india",
    "amazon finds india", "viral products india", "instagram trending products", "cute things to buy online",
    "aesthetic things to buy", "must have products for girls", "viral products for girls",
    "best aesthetic products", "cute room accessories", "aesthetic room accessories",
    "cute glass water bottle for girls", "small aesthetic water bottle for girls",
    "cute reusable water bottle for school", "aesthetic water bottle for office",
    "cute press on nails for girls", "reusable press on nails india", "3d press on nails india",
    "best press on nails for beginners", "cute kitchen organizers for small kitchen", "kitchen organinzer" , "home decore product",
    "aesthetic home products online india", "printrest product" , "printrest aesthetic product" , "remove pres on nails" , "small nails" , "short nails"
  ],
  openGraph: {
    title: "Apeak™ — Thoughtfully Curated Everyday Products",
    description:
      "Press-on nails, stylish drinkware, and home accessories — thoughtfully chosen for your everyday.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
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
